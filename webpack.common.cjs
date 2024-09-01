const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const { resolve } = require('path');

module.exports = {
  entry: {
    main: './src/main.ts'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      } ,
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer(),
                  cssnano({ preset: 'default' })
                ]
              }
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.*', '.ts', '.tsx', '.js']
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: './src/styles/main.css', to: './src/css/main.css' },
        { from: './assets', to: './assets' },
        { from: './index.html', to: 'index.html' },
        {
          from: resolve(__dirname, 'node_modules/swiper/swiper-bundle.min.css'),
          to: resolve(__dirname, 'dist/src/css')
        },
        {
          from: resolve(__dirname, 'node_modules/bootstrap/dist/css/bootstrap.min.css'),
          to: resolve(__dirname, 'dist/src/css')
        },
        {
          from: resolve(__dirname, 'node_modules/imask/dist/imask.js'),
          to: resolve(__dirname, 'dist/src/js')
        },
        {
          from: resolve(__dirname, 'node_modules/validate.js/validate.min.js'),
          to: resolve(__dirname, 'dist/src/js')
        },
        {
          from: resolve(__dirname, 'node_modules/swiper/swiper-bundle.min.js'),
          to: resolve(__dirname, 'dist/src/js')
        },
        {
          from: resolve(__dirname, 'node_modules/bootstrap/dist/js/bootstrap.min.js'),
          to: resolve(__dirname, 'dist/src/js')
        },
      ]
    })
  ]
};
