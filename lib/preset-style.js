'use strict';

const semver = require('semver');
const supportedNodeVersion = require('./utils/supported-node-version');

/**
 * Although Node 6 support has been removed, keep support for es5 for legacy files.
 */
const node8AndGreater = semver.satisfies(supportedNodeVersion, '>=8.0.0');
const prettierExtensions =
	'**/*.{js,mjs,jsx,ts,tsx,json,scss,less,css,md,yml,yaml}';

const presetStyle = ({ options }) => {
	const { node = false, isApp = false } = options;

	const prettierCmd = `prettier "${prettierExtensions}" --write`;
	const preset = {
		presets: ['@backtrack/preset-git-hooks'],
		format: [prettierCmd],
		lint: ['eslint --ext .js,.jsx,.mjs,.ts,.tsx .'],
		'lint.fix': [
			'eslint --ext .js,.jsx,.mjs,.ts,.tsx --fix .',
			prettierCmd,
		],

		'check.all': [
			'backtrack lint',
			`prettier "${prettierExtensions}" --check`,
		],

		files: [
			{ src: 'files/ignore', dest: '.eslintignore' },
			{ src: 'files/ignore', dest: '.prettierignore' },
			{ src: 'files/editorconfig', dest: '.editorconfig' },
			{ src: 'files/lint-staged.cjs', dest: '.lintstagedrc.cjs' },
		],

		'git-pre-commit': ['lint-staged'],
		'git-pre-push': [
			'backtrack lint',
			`prettier "${prettierExtensions}" --check`,
		],

		config: {},
	};

	if (node === true) {
		preset.files.push({
			src: 'files/eslint-node.js',
			dest: '.eslintrc.js',
		});

		if (node8AndGreater === true) {
			preset.files.push({
				src: 'files/prettier.js',
				dest: '.prettierrc.js',
			});
		}

		if (node8AndGreater === false) {
			preset.files.push({
				src: 'files/prettier-es5.js',
				dest: '.prettierrc.js',
			});
		}
	}

	if (node === false) {
		preset.files.push(
			{ src: 'files/eslint.js', dest: '.eslintrc.js' },
			{ src: 'files/prettier.js', dest: '.prettierrc.js' },
		);

		if (node8AndGreater === false) {
			preset.config.prettier = {
				overrides: [
					{
						files: ['*.js', '.*.js'],
						excludeFiles: ['*/**', '*/.**'],
						options: {
							trailingComma: 'es5',
						},
					},
					{
						files: [
							'lib/**/*.js',
							'lib/**/.*.js',
							'app/**/*.js',
							'app/**/.*.js',
							'**/__sandbox__/**/*.js',
							'**/__sandbox__/**/.*.js',
						],
						options: {
							trailingComma: 'es5',
						},
					},
				],
			};
		}
	}

	if (isApp === false) {
		preset.prepublishOnly = [
			'backtrack lint',
			`prettier "${prettierExtensions}" --check`,
		];
	}

	return preset;
};

module.exports = presetStyle;
