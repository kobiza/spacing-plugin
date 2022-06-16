var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
// var APP_DIR = path.resolve(__dirname, 'src');


var config = {
    mode: 'development',
    entry: {
        editor: './src/editor.js',
        managerPanel: './src/managerPanel.js'
    },
    output: {
        path: BUILD_DIR,
        publicPath: '/dist',
        filename: '[name].js',
        libraryTarget: 'umd',
    }
};

module.exports = config;
