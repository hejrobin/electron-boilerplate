module.exports = {
	webpack: {
		configure: {
			target: 'electron-renderer',
		},
	},
	babel: {
		plugins: ['@babel/plugin-proposal-export-namespace-from'],
	},
};
