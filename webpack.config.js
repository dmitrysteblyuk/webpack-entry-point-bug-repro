const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: false,
  entry: require.resolve('./main-entry.js'),
  output: {
    path: path.join(__dirname, './dist'),
    library: 'MainLib'
  },
  devServer: {
    writeToDisk: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: require.resolve('./index.html')
    })
  ]
};
