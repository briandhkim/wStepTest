const path = require('path');
const webpack = require('webpack');
const PORT = process.env.PORT || 3000;

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
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
				test: /\.(png|svg|gif|jpe?g)$/,
				use: {
					loader: 'file-loader',
					options: {
						outputPath: 'images/'
					}
				}
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
    }
};
