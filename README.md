# @backtrack/preset-style

[![npm](https://img.shields.io/npm/v/@backtrack/preset-style.svg?label=npm%20version)](https://www.npmjs.com/package/@backtrack/preset-style)

## About

[`backtrack`](https://github.com/chrisblossom/backtrack) preset that adds linting and formatting to your project.

## Features

*   Add [`prettier`](https://prettier.io/) with [customized options](./files/prettier.js)
*   Add [`eslint`](https://eslint.org/) with [customized options](./files/eslint.js)
*   Add [`husky`](https://github.com/typicode/husky/) / [lint-staged](https://github.com/okonet/lint-staged) precommit formatting hook

## Installation

`npm install --save-dev @backtrack/preset-style`

## Usage

```js
// backtrack.config.js

'use strict';

module.exports = {
    presets: ['@backtrack/style'],
};
```
