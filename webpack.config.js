var path = require('path');
var webpack = require('webpack');

module.exports = {

    entry: path.join(__dirname, 'src/client.js'),

    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/assets/'
    },

    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    }
};