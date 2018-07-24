# @backtrack/preset-style

[![npm](https://img.shields.io/npm/v/@backtrack/preset-style.svg?label=npm%20version)](https://www.npmjs.com/package/@backtrack/preset-style)
[![Linux Build Status](https://img.shields.io/circleci/project/github/chrisblossom/backtrack-preset-style/master.svg?label=linux%20build)](https://circleci.com/gh/chrisblossom/backtrack-preset-style/tree/master)
[![Windows Build Status](https://img.shields.io/appveyor/ci/chrisblossom/backtrack-preset-style/master.svg?label=windows%20build)](https://ci.appveyor.com/project/chrisblossom/backtrack-preset-style/branch/master)
[![Code Coverage](https://img.shields.io/codecov/c/github/chrisblossom/backtrack-preset-style/master.svg)](https://codecov.io/gh/chrisblossom/backtrack-preset-style/branch/master)

## About

[`backtrack`](https://github.com/chrisblossom/backtrack) preset that adds linting and formatting to your project.

## Features

-   Add [`prettier`](https://prettier.io/) with [customized options](./lib/files/prettier.js)
-   Add [`eslint`](https://eslint.org/) with [customized options](./lib/files/eslint.js)
-   Add [`husky`](https://github.com/typicode/husky/) / [lint-staged](https://github.com/okonet/lint-staged)
-   Add `precommit`, `prepush` and `prepublishOnly` linting git hooks

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
