/**
 * This file is managed by backtrack
 *
 * source: @backtrack/preset-style
 * namespace: husky
 *
 * Configure via backtrack.config.husky
 *
 * DO NOT MODIFY
 */

'use strict';

const Backtrack = require('@backtrack/core');

const { configManager } = new Backtrack();

const husky = {
    hooks: {},
};

module.exports = configManager({
    namespace: 'husky',
    config: husky,
});
