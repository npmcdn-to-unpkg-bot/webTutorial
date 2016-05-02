import path from 'path';

const config = {
  devtool: 'eval-source-map', // 开发工具，生成 source-map 可以还原源代码用于调试
  entry: path.join(__dirname, 'app/main.js'),
  output: {
    path: path.join(__dirname, '/dist/'), // 输出到指定文件夹
    filename: '[name].js', // 原名输出
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel' // babel-loader babel ES6 加载器
    }]
  }
};

export default config;
