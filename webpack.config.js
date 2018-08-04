const path = require('path');
const webpack = require('webpack');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

var template = path.join(__dirname, 'template');
var indexHtml = path.resolve(template, 'index.html');
var build = path.resolve(__dirname, './build');
var src = path.resolve(__dirname, './src');

var developmentPlugins = [
  new cleanWebpackPlugin([build]),
  new htmlWebpackPlugin({
    title: 'ReactPhaser',
    template: indexHtml
  }), new copyWebpackPlugin([
    { from: './assets' }
  ]), new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor'
  }), new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest'
  }),
  new webpack.DefinePlugin({
    'CANVAS_RENDERER': JSON.stringify(true),
    'WEBGL_RENDERER': JSON.stringify(true)
  })
]

var productionPlugins = [
  new cleanWebpackPlugin([build]),
  new htmlWebpackPlugin({
    title: 'ReactPhaser',
    template: 'template/index.html',
  }), new copyWebpackPlugin([
    { from: './assets' }
  ]), new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor'
  }), new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest'
  }),
  new uglifyjsWebpackPlugin(),
  new webpack.DefinePlugin({
    'CANVAS_RENDERER': JSON.stringify(true),
    'WEBGL_RENDERER': JSON.stringify(true)
  })
]

module.exports = function (env) {
  return {
    entry: {
      frontend: './src/index.tsx',
    },
    devtool: env.prod ? false : 'cheap-module-eval-source-map',
    module: {
      rules: [
        {
          test: /\.ts$/,
          enforce: 'pre',
          loader: 'tslint-loader',
          options: {
            tsConfigFile: './tsconfig.json',
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/
        },
      ]
    },
    resolve: {
      modules: [path.join(__dirname, '/src/'), template, 'node_modules'],
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        'src': src,
      }
    },
    plugins: env === 'prod' ? productionPlugins : developmentPlugins,
    output: {
      filename: '[name].[chunkhash].js',
      path: build,
    },
    devServer: {
      contentBase: [path.join(__dirname, 'build'), path.join(__dirname, 'assets')],
      port: 8080,
      host: '0.0.0.0',
      historyApiFallback: true,
    }
  }
};
