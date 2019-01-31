'use strict';

const semver = require('semver');
const supportedNodeVersion = require('./utils/supported-node-version');

const node8AndGreater = semver.satisfies(supportedNodeVersion, '>=8.0.0');

const presetStyle = ({ options }) => {
    const { node = false } = options;

    const preset = {
        presets: ['@backtrack/preset-git-hooks'],
        format: [
            'prettier "**/*.{js,mjs,jsx,ts,tsx,json,scss,less,css,md,yml,yaml}" --write',
        ],
        lint: ['eslint --ext .js,.jsx,.mjs,.ts,.tsx .'],
        'lint.fix': ['eslint --ext .js,.jsx,.mjs,.ts,.tsx --fix .'],

        prepublishOnly: ['backtrack lint'],

        files: [
            { src: 'files/ignore', dest: '.eslintignore' },
            { src: 'files/ignore', dest: '.prettierignore' },
            { src: 'files/lint-staged.js', dest: '.lintstagedrc.js' },
        ],

        'git-pre-commit': ['lint-staged'],
        'git-pre-push': ['backtrack lint'],

        config: {},
    };

    if (node === true) {
        preset.files.push({
            src: 'files/eslint-node.js',
            dest: '.eslintrc.js',
        });

        if (node8AndGreater === true) {
            preset.files.push({
                src: 'files/prettier.js',
                dest: '.prettierrc.js',
            });
        }

        if (node8AndGreater === false) {
            preset.files.push({
                src: 'files/prettier-es5.js',
                dest: '.prettierrc.js',
            });
        }
    }

    if (node === false) {
        preset.files.push(
            { src: 'files/eslint.js', dest: '.eslintrc.js' },
            { src: 'files/prettier.js', dest: '.prettierrc.js' }
        );

        if (node8AndGreater === false) {
            preset.config.prettier = {
                overrides: [
                    {
                        files: ['*.js', '.*.js'],
                        excludeFiles: ['*/**', '*/.**'],
                        options: {
                            trailingComma: 'es5',
                        },
                    },
                    {
                        files: [
                            'lib/**/*.js',
                            'lib/**/.*.js',
                            'app/**/*.js',
                            'app/**/.*.js',
                            '**/__sandbox__/**/*.js',
                            '**/__sandbox__/**/.*.js',
                        ],
                        options: {
                            trailingComma: 'es5',
                        },
                    },
                ],
            };
        }
    }

    return preset;
};

module.exports = presetStyle;
