// const path = require('path');
const { resolve } = require('path');
const webpack = require('webpack');
const PORT = process.env.PORT || 3000;

module.exports = {
    entry: [
        'babel-polyfill',
        'webpack-dev-server/client?http://localhost:' + PORT,
        './index.js'
    ],
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist')
    },
    context: resolve(__dirname, 'src'),
    devtool: 'inline-source-map',
    module: {
        rules:[
			{
				test: /\.js|.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [ 'file-loader?hash=sha512&digest=hex&name=assets/images/[hash].[ext]',
                    'image-webpack-loader?bypassOnDebug' ]
            },
			{
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'assets/fonts/'
                    }
                }
            }
		]
    },
    plugins: [
        new webpack.NamedModulesPlugin()
    ]
};
