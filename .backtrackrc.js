'use strict';

module.exports = {
	presets: ['@backtrack/preset'],

	// use local eslint config
	config: {
		eslint: () => ({
			extends: '@chrisblossom/eslint-config/node',
		}),
	},
};
