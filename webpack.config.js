module.exports = {
	entry: './src/js/main.js',
	output: {
		filename: 'bundle.js',
		path: './dist/'
	},
	devServer: {
		contentBase: './src/',
		inline: true,
		port: 8080
	},
	module: {
		rules: [
			{
				exclude: /node_modules/,
				test: /\.js$/,
				loader: 'babel-loader',
				options: {
					presets: ['es2015']
				}
			},
			{
				test: /\.(sass|scss)$/,
				loader: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			}
		]
	}
};
