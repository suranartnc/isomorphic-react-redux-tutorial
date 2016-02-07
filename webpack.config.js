var path = require('path');
var webpack = require('webpack');

module.exports = {

    entry: path.join(__dirname, 'app.js'),

    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel',
                exclude: 'node_modules'
            }
        ]
    }
};