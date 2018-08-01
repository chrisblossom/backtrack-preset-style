'use strict';

module.exports = {
    format: [
        'prettier **/*.{js,mjs,jsx,ts,tsx,json,scss,less,css,md,yml,yaml} --write',
    ],
    lint: ['eslint .'],
    'lint.fix': ['eslint --fix .'],

    precommit: ['lint-staged'],
    prepush: ['backtrack lint'],
    prepublishOnly: ['backtrack lint'],

    files: [
        { src: 'files/eslint.js', dest: '.eslintrc.js' },
        { src: 'files/ignore', dest: '.eslintignore' },

        { src: 'files/prettier.js', dest: '.prettierrc.js' },
        { src: 'files/ignore', dest: '.prettierignore' },

        { src: 'files/lint-staged.js', dest: '.lintstagedrc.js' },
    ],
};
