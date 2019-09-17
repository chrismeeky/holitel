const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: 'index.html'
  },
  devServer: { contentBase: './build' },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: path.resolve('./index.html') })]
};
