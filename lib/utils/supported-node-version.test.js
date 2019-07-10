'use strict';

describe('supportedNodeVersion', () => {
	test('handles no engines', () => {
		jest.doMock('read-pkg', () => ({
			sync: () => ({}),
		}));

		const supportedNodeVersion = require('./supported-node-version');

		expect(supportedNodeVersion).toEqual('6.0.0');
	});

	test('handles no node', () => {
		jest.doMock('read-pkg', () => ({
			sync: () => ({ engines: { npm: '>=3.10.10' } }),
		}));

		const supportedNodeVersion = require('./supported-node-version');

		expect(supportedNodeVersion).toEqual('6.0.0');
	});

	test('handle unsupported node', () => {
		jest.doMock('read-pkg', () => ({
			sync: () => ({ engines: { node: '>=4.10.10' } }),
		}));

		const supportedNodeVersion = require('./supported-node-version');

		expect(supportedNodeVersion).toEqual('4.10.10');
	});

	test('node 6 only', () => {
		jest.doMock('read-pkg', () => ({
			sync: () => ({
				engines: {
					node: '6.9.0',
				},
			}),
		}));

		const supportedNodeVersion = require('./supported-node-version');

		expect(supportedNodeVersion).toEqual('6.9.0');
	});

	test('node 6 and greater', () => {
		jest.doMock('read-pkg', () => ({
			sync: () => ({
				engines: {
					node: '>=6.9.0',
				},
			}),
		}));

		const supportedNodeVersion = require('./supported-node-version');

		expect(supportedNodeVersion).toEqual('6.9.0');
	});

	test('node 8 only', () => {
		jest.doMock('read-pkg', () => ({
			sync: () => ({
				engines: {
					node: '=8',
				},
			}),
		}));

		const supportedNodeVersion = require('./supported-node-version');

		expect(supportedNodeVersion).toEqual('8.0.0');
	});

	test('node 8 and greater', () => {
		jest.doMock('read-pkg', () => ({
			sync: () => ({
				engines: {
					node: '>=8.9.0',
				},
			}),
		}));

		const supportedNodeVersion = require('./supported-node-version');

		expect(supportedNodeVersion).toEqual('8.9.0');
	});

	test('node 10 only', () => {
		jest.doMock('read-pkg', () => ({
			sync: () => ({
				engines: {
					node: '10',
				},
			}),
		}));

		const supportedNodeVersion = require('./supported-node-version');

		expect(supportedNodeVersion).toEqual('10.0.0');
	});

	test('node 10 and greater', () => {
		jest.doMock('read-pkg', () => ({
			sync: () => ({
				engines: {
					node: '>=10.9.0',
				},
			}),
		}));

		const supportedNodeVersion = require('./supported-node-version');

		expect(supportedNodeVersion).toEqual('10.9.0');
	});
});
