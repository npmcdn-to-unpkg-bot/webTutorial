import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import config from './webpack.config.js';


const app = express();
const complier = webpack(config);

app.use(express.static(__dirname + '/dist'));
app.use(webpackMiddleware(complier, {

    // public path should be the same with webpack config
    publicPath: config.output.publicPath,
    noInfo: true,
    stats: {
        colors: true
      }
    }));

app.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(3000);
