var webpack = require('webpack'),
    postcss = require('./postcss.config'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        './src/index.js',
        './src/styles/styles.css'
    ],
    module: {
        loaders: [{
                     test: /\.js$/,
                     exclude: /node_modules/,
                     loader: 'react-hot!babel'
                 },{
                     test: /\.css?$/,
                     exclude: /node_modules/,
                     loader: ExtractTextPlugin.extract('style', 'css!postcss'),
                     include: [__dirname + '/src/styles/']
                 }]
    },
    output: {
        path: __dirname + '/dist/assets',
        publicPath: '/assets/',
        filename: 'client.bundle.js'
    },
    plugins: [
        new ExtractTextPlugin("client.styles.css"),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ],
    postcss: function (wp) {
        return postcss(wp).build
    }
}