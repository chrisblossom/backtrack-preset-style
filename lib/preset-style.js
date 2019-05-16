'use strict';

const presetStyle = ({ options }) => {
    const { node = false, isApp = false } = options;

    const preset = {
        presets: ['@backtrack/preset-git-hooks'],
        format: [
            'prettier "**/*.{js,mjs,jsx,ts,tsx,json,scss,less,css,md,yml,yaml}" --write',
        ],
        lint: ['eslint --ext .js,.jsx,.mjs,.ts,.tsx .'],
        'lint.fix': ['eslint --ext .js,.jsx,.mjs,.ts,.tsx --fix .'],

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

        preset.files.push({
            src: 'files/prettier.js',
            dest: '.prettierrc.js',
        });
    }

    if (node === false) {
        preset.files.push(
            { src: 'files/eslint.js', dest: '.eslintrc.js' },
            { src: 'files/prettier.js', dest: '.prettierrc.js' },
        );
    }

    if (isApp === false) {
        preset.prepublishOnly = ['backtrack lint'];
    }

    return preset;
};

module.exports = presetStyle;
