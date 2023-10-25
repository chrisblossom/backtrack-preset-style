'use strict';

const path = require('path');

module.exports = {
	presets: ['@backtrack/preset'],

	packageJson: {
		module: 'commonjs',
		engines: {
			node: '>=18.12.0',
		},
	},

	config: {
		// use local eslint config
		eslint: () => ({
			extends: '@chrisblossom/eslint-config/node',
		}),
		// use local prettier config
		prettier: (config) => {
			config.plugins = config.plugins.map((plugin) =>
				plugin
					.split(path.sep)
					.find((name) => name.includes('prettier-plugin-')),
			);

			return config;
		},
	},

	files: [
		{ src: 'lib/files/prettier.cjs', dest: '.prettierrc.cjs' },
		{
			skip: ['.prettierrc.js'],
			allowChanges: [
				'.prettierignore',
			],
		},
	],
};
