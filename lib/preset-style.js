'use strict';

const presetStyle = ({ options }) => {
    const { node = false } = options;

    const preset = {
        presets: ['@backtrack/preset-git-hooks'],
        format: [
            'prettier **/*.{js,mjs,jsx,ts,tsx,json,scss,less,css,md,yml,yaml} --write',
        ],
        lint: ['eslint --ext .js,.jsx,.mjs,.ts,.tsx .'],
        'lint.fix': ['eslint --ext .js,.jsx,.mjs,.ts,.tsx --fix .'],

        prepublishOnly: ['backtrack lint'],

        files: [
            { src: 'files/ignore', dest: '.eslintignore' },

            // TODO: detect node engines
            { src: 'files/prettier-es5.js', dest: '.prettierrc.js' },
            { src: 'files/ignore', dest: '.prettierignore' },

            { src: 'files/lint-staged.js', dest: '.lintstagedrc.js' },
        ],

        'git-pre-commit': ['lint-staged'],
        'git-pre-push': ['backtrack lint'],
    };

    if (node === true) {
        preset.files.push({
            src: 'files/eslint-node.js',
            dest: '.eslintrc.js',
        });
    }

    if (node === false) {
        preset.files.push({ src: 'files/eslint.js', dest: '.eslintrc.js' });
    }

    return preset;
};

module.exports = presetStyle;
