module.exports = {
  // 多个文件合并打包
  entry: [
    './src/index.js'
  ],
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_modules)/,
        loader: 'babel'
      }
    ]
  },
  resolve: {
    // 现在你require文件的时候可以直接使用require('file')，不用使用require('file.coffee')
    extensions: ['', 'js', 'json']
  }
};
