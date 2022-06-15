var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
// var APP_DIR = path.resolve(__dirname, 'src');


var config = {
    mode: 'development',
    entry: [
        './src/index.js'
    ],
    output: {
        path: BUILD_DIR,
        publicPath: '/dist',
        filename: 'bundle.js',
        libraryTarget: 'umd',
    }
};

module.exports = config;
