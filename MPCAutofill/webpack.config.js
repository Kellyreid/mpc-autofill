const path = require('path');
const webpack = require('webpack');  // to access built-in plugins
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'production',
  entry: {
    index: './cardpicker/frontend/js/index.js',
    review: './cardpicker/frontend/js/review.js',
    guide: './cardpicker/frontend/js/guide.js',
    new: './cardpicker/frontend/js/new.js',
    contributions: './cardpicker/frontend/js/contributions.js',
    legal: './cardpicker/frontend/js/legal.js',
  },
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, './cardpicker/static'),
    library: ['Library', '[name]'],
  },
  module: {
    rules: [
      {
        test: /\.(s?css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [
                  require('autoprefixer')
                ]
              }
            }
          },
          'sass-loader'
        ]
      }

    ],
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery'}),
    new MiniCssExtractPlugin({filename: 'css/[name].bundle.css'})
  ],
};
