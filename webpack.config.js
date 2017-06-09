var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './src/js/main.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		contentBase: './',
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
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};
