var webpack = require('webpack'),
    postcss = require('./postcss.config');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.js',
        './src/styles/styles.css'
    ],
    devtool: 'cheap-module-source-map',
    module: {
        loaders: [{
                     test: /\.js$/,
                     exclude: /node_modules/,
                     loader: 'react-hot!babel'
                 },{
                     test: /\.css?$/,
                     exclude: /node_modules/,
                     loaders: ['style', 'css', 'postcss'],
                 }]
    },
    output: {
        publicPath: '/assets/',
        filename: 'client.bundle.js'
    },
    devServer: {
        contentBase: './dist',
        publicPath: '/assets/',
        hot: true,
        historyApiFallback: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    postcss: function (wp) {
        return postcss(wp).defaults
    }
}
