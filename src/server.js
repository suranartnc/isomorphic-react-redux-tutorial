import express from 'express';

import serverRendering from './serverRendering';

const app = express();
app.use(express.static('public'));

// start a webpack-dev-server
var webpack = require('webpack');
var webpackConfig = require('../webpack.config.js');
var compiler = webpack(webpackConfig);
app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, 
    publicPath: webpackConfig.output.publicPath
}));
app.use(require("webpack-hot-middleware")(compiler));

app.use(serverRendering);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log('Server listening on', PORT);
});