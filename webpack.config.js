/**
 * Created by texpe on 10/02/2017.
 */

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var helpers = require('./helpers');

var isProduction = (process.env.NODE_ENV !== 'development');

var plugins = [
	new webpack.optimize.CommonsChunkPlugin({
		name: ['app', 'vendor', 'polyfills']
	}),
	new webpack.DefinePlugin({
		PRODUCTION: JSON.stringify(isProduction)
	}),
	new HtmlWebpackPlugin({
		title: 'APPLICATION_TITLE',
		filename: 'index.html',
		template: 'src/index.html'
	})
];

if(isProduction)
	plugins.push(new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }));

module.exports = {
	entry: {
		'polyfills': './src/polyfills.ts',
		'vendor': './src/vendor.ts',
		'app': './src/main.ts'
	},
	output: {
		path: 'public',
		filename: 'js/[name].js'
	},
	resolve: {
		extensions: ['.ts', '.js']
	},
	module: {
		loaders: [
			{
				test: /\.ts$/,
				loaders: ['ts-loader', 'angular2-template-loader']
			},
			{
				test: /\.html$/,
				loader: 'raw-loader'
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loaders: ['raw-loader', 'sass-loader'] // sass-loader not scss-loader
			}
		]
	},
	plugins: plugins
};