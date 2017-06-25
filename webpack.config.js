const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
});

const DashboardPluginConfig = new DashboardPlugin();

module.exports = (env = {}) => {
  return {
    entry: './client/index.jsx',
    output: {
      path: path.resolve('dist'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          enforce: "pre",
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "eslint-loader",
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        {
          test: /\.scss$/,
          use: [{
            loader: "style-loader",
          }, {
            loader: "css-loader",
          }, {
            loader: "sass-loader",
          }]
        },
      ],
    },
    plugins: [
      HtmlWebpackPluginConfig,
      DashboardPluginConfig,
    ],
    resolve: {
      alias: {
        NodeModulesPath: path.resolve(__dirname, './node_modules'),
        ReducersPath: path.resolve(__dirname, './client/reducers'),
        ComponentsPath: path.resolve(__dirname, './client/components'),
      },
      extensions: ['.js', '.jsx', '.scss'],
    },
    devtool: env.production ? false : 'source-map',
  };
};