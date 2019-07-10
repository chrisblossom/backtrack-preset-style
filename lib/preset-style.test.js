'use strict';

const transformConfig = (...args) =>
	require('@backtrack/core/dist/options-file/transform-config').transformConfig(
		...args,
	);

test('preset returns expected config no options 6+', () => {
	jest.doMock('read-pkg', () => ({
		sync: () => ({ engines: { node: '6.9.0' } }),
	}));

	const backtrackConfig = {
		presets: ['../'],
	};

	const result = transformConfig(backtrackConfig, __dirname);

	expect(result).toMatchSnapshot();
});

test('preset returns expected config no options 8+', () => {
	jest.doMock('read-pkg', () => ({
		sync: () => ({ engines: { node: '8.9.0' } }),
	}));

	const backtrackConfig = {
		presets: ['../'],
	};

	const result = transformConfig(backtrackConfig, __dirname);

	expect(result).toMatchSnapshot();
});

test('option: node = true 6+', () => {
	jest.doMock('read-pkg', () => ({
		sync: () => ({ engines: { node: '6.9.0' } }),
	}));

	const backtrackConfig = {
		presets: [['../', { node: true }]],
	};

	const result = transformConfig(backtrackConfig, __dirname);

	expect(result).toMatchSnapshot();
});

test('option: node = true 8+', () => {
	jest.doMock('read-pkg', () => ({
		sync: () => ({ engines: { node: '8.9.0' } }),
	}));

	const backtrackConfig = {
		presets: [['../', { node: true }]],
	};

	const result = transformConfig(backtrackConfig, __dirname);

	expect(result).toMatchSnapshot();
});

test('option: isApp = true', () => {
	jest.doMock('read-pkg', () => ({
		sync: () => ({ engines: { node: '6.9.0' } }),
	}));

	const backtrackConfig = {
		presets: [['../', { isApp: true }]],
	};

	const result = transformConfig(backtrackConfig, __dirname);

	expect(result).toMatchSnapshot();
});
