module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'app.js'
	},
	mode: 'development',
	devServer: {
		contentBase: './dist'
	}
}