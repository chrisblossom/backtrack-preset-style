'use strict';

const semver = require('semver');
const readPkg = require('read-pkg');

let supportedNodeVersion = null;
function getSupportedVersion() {
    const pkg = readPkg.sync({ normalize: false });
    const engines = pkg.engines || {};

    const node = engines.node || '6.0.0';

    supportedNodeVersion = semver.coerce(node).raw;
}

if (supportedNodeVersion === null) {
    getSupportedVersion();
}

module.exports = supportedNodeVersion;
