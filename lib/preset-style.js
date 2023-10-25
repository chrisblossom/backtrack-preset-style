'use strict';

const prettierCommand = 'prettier "**/*" --ignore-unknown';
const prettierWrite = `${prettierCommand} --write`;
const prettierCheck = `${prettierCommand} --check`;

const eslintExtensions = `.js,.jsx,.mjs,.cjs,.ts,.tsx,.mts,.cts`;

const presetStyle = ({ options }) => {
	const { node = false, isApp = false } = options;

	const preset = {
		presets: ['@backtrack/preset-git-hooks'],
		format: [prettierWrite],
		lint: [`eslint --ext ${eslintExtensions} .`],
		'lint.fix': [
			`eslint --ext ${eslintExtensions} --fix .`,
			prettierWrite,
		],

		'check.all': [
			'backtrack lint',
			prettierCheck,
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
			prettierCheck,
		],
	};

	if (node === true) {
		preset.files.push({
			src: 'files/eslint-node.cjs',
			dest: '.eslintrc.cjs',
		});

		preset.files.push({
			src: 'files/prettier.cjs',
			dest: '.prettierrc.cjs',
		});
	}

	if (node === false) {
		preset.files.push(
			{ src: 'files/eslint.cjs', dest: '.eslintrc.cjs' },
			{ src: 'files/prettier.cjs', dest: '.prettierrc.cjs' },
		);
	}

	if (isApp === false) {
		preset.prepublishOnly = [
			'backtrack lint',
			prettierCheck,
		];
	}

	return preset;
};

module.exports = presetStyle;
