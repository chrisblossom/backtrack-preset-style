'use strict';

const transformConfig = (...args) =>
	require('@backtrack/core/dist/options-file/transform-config').transformConfig(
		...args,
	);

test('preset returns expected config no options', () => {
	const backtrackConfig = {
		presets: ['../'],
	};

	const result = transformConfig(backtrackConfig, __dirname);

	expect(result).toMatchSnapshot();
});

test('option: node = true', () => {
	const backtrackConfig = {
		presets: [['../', { node: true }]],
	};

	const result = transformConfig(backtrackConfig, __dirname);

	expect(result).toMatchSnapshot();
});

test('option: isApp = true', () => {
	const backtrackConfig = {
		presets: [['../', { isApp: true }]],
	};

	const result = transformConfig(backtrackConfig, __dirname);

	expect(result).toMatchSnapshot();
});
