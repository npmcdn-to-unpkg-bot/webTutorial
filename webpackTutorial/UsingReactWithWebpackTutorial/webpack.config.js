console.log(__dirname);
import path from 'path';
console.log(__dirname);
const config = {
  devtool: 'eval-source-map',
  entry: path.join(__dirname, 'app/main.js'),
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  }
};

export default config;
