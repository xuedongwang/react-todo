const path = require('path');
const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const buildWebpackConfig = (env) => {
  const config = {
    mode: 'production',
    entry: {
      app: './src/main.js'
    },
    output: {
      publicPath: '.',
      path: path.join(__dirname, '..', 'dist'),
      filename: '[name].[chunkhash:6].js',
      chunkFilename: '[name].[chunkhash:6].js' // 代码拆分后的文件名
    },
    resolve: {
      alias: {
        '@': path.join(__dirname, '..', 'src')
      },
      extensions: ['.js', '.jsx', '.json', '.scss']
    },
    optimization: {
      runtimeChunk: true,
      splitChunks: {
        chunks: 'all'
      }
    },
    devtool: "eval-source-map",
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          },
          include: [
            path.join(__dirname, '../src')
          ],
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: 'css-loader'
            },
            {
              loader: 'postcss-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: 'css-loader'
            },
            {
              loader: 'postcss-loader'
            }
          ]
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'img/[name].[hash:7].[ext]'
          }
        },
        {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'media/[name].[hash:7].[ext]'
          }
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'fonts/[name].[hash:7].[ext]'
          }
        }
      ]
    },
    plugins: [
      new CleanPlugin(['./../dist/*'], { allowExternal: true }),
      new HTMLPlugin({
        template: './index.html'
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[name].[hash].css',
      }),
      new webpack.DefinePlugin({
        ENV: env.NODE_ENV
      })
    ]
  };
  if (env && env.NODE_ENV === 'analyze') {
    config.plugins.push(new BundleAnalyzerPlugin())
  }
  return config;
};


module.exports = buildWebpackConfig;