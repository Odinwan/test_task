const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

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
        { from: './src/styles/main.css', to: './src/styles/main.css' },
        { from: './assets', to: './assets' },
        { from: './index.html', to: 'index.html' },
        { from: './node_modules/swiper/swiper-bundle.min.css', to: './src/styles/swiper-bundle.min.css' }
      ]
    })
  ]
};
