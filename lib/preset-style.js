'use strict';

module.exports = {
    format: ['prettier **/*.{js,md,json} --write'],
    lint: ['eslint .'],
    'lint.fix': ['eslint --fix .'],

    packageJson: {
        'lint-staged': {
            '*.{js,md,json}': ['prettier --write', 'git add'],
        },
    },

    precommit: ['lint-staged'],
    prepush: ['backtrack lint'],
    prepublishOnly: ['backtrack lint'],

    files: [
        /**
         * Eslint
         */
        {
            src: 'files/eslint.js',
            dest: '.eslintrc.js',
        },

        {
            src: 'files/ignore',
            dest: '.eslintignore',
        },

        /**
         * Prettier
         */
        {
            src: 'files/prettier.js',
            dest: '.prettierrc.js',
        },
        {
            src: 'files/ignore',
            dest: '.prettierignore',
        },
    ],
};
