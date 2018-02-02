const express = require('express');
const {resolve} = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const PORT = process.env.PORT || 3000;
const app = express();
const config = require('./webpack.config');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
	contentBase: resolve(__dirname, 'dist'),
	publicPath: '/',
	historyApplyFallback: true
}));

app.get('*', function(req,res){
	res.sendFile(resolve(__dirname,'dist','index.html'));
});

app.listen(PORT, function(){
	console.log('dev server running at localhost:' + PORT);
});

// const { resolve } = require('path');
// const webpack = require('webpack');
// const WebpackDevServer = require('webpack-dev-server');
// const config = require('./webpack.config');
// const npm_config = require('./package.json');
// const PORT = process.env.PORT || 3000;

// new WebpackDevServer(webpack(config), {
//     contentBase: resolve(__dirname, 'dist'),
//     publicPath: '/',
//     hot: false,
//     historyApiFallback: true,
//     quiet: false,
//     noInfo: false,
//     proxy: npm_config.proxy,
//     stats: {
//         assets: false,
//         colors: true,
//         version: false,
//         hash: false,
//         timings: true,
//         children: false,
//         modules: false,
//         chunks: false,
//         chunkModules: false
//     }
// }).listen(PORT, 'localhost', function(err){
//     if(err){
//         console.log(err);
//     }

//     console.log('\x1b[36m%s\x1b[33m%s\x1b[0m', 'Dev server running at ', 'localhost:' + PORT);
//     console.log('\x1b[32m%s\x1b[0m', '\nWebpack compiling...');
// });
