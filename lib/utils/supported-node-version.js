'use strict';

const semver = require('semver');
const readPkg = require('read-pkg');

const pkg = readPkg.sync({ normalize: false });
const engines = pkg.engines || {};
const node = engines.node || '6.0.0';
const supportedNodeVersion = semver.coerce(node).raw;

module.exports = supportedNodeVersion;
