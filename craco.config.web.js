module.exports = {
	webpack: {
		configure: {
			target: 'web',
		},
	},
	babel: {
		plugins: ['@babel/plugin-proposal-export-namespace-from'],
	},
};
