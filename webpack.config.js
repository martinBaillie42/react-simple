const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js', // point of entry for the app
    mode: 'development', // with this set shouldn't need to use --mode flag on CLI
    module: { // which modules are included and how are they transformed
        rules: [
            {
                test: /\.(js|jsx)$/, // files to match
                exclude: /(node_modules|bower_components)/, // files to exclude
                loader: 'babel-loader', // use babel to transform them. loader for singular, use for multiple
                options: {presets: ['@babel/env']} // not sure if this has to be here, or if preset-react needs to be included?
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {extensions: ['*', '.js', '.jsx']}, // adding extensions here enables user to omit extension when importing
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 3000,
        publicPath: 'http://localhost:3000/dist/',
        hotOnly: true // HMR turned on
    },
    plugins: [new webpack.HotModuleReplacementPlugin()] // enable HMR - updating modules without requiring full rebuild
};

