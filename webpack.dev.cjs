const {merge} = require('webpack-merge');
const common = require('./webpack.common.cjs');
const path = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'src/js/[name].js'
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        drop_console: true, // Удаляет console.log в продакшен сборке
                    },
                },
            })
        ],
    },
    watch: true
});