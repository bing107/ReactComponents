var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        "app" : "./app/index.jsx"
    },
    output: {
        path: path.resolve( process.cwd(), 'public/' ),
        filename: "js/app.js"
    },
    resolve: {
        modules: [
            path.resolve('./app/components'),
            path.resolve('./node_modules/'),
        ]
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: ["css-loader"],
                        publicPath: "/"
                    })
                },
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    loader: 'file-loader',
                    query: {
                        name: 'img/[name].[ext]'
                    }
                }
            ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new ExtractTextPlugin({
            filename: "css/app.css",
            disable: false,
            allChunks: true
        })
    ],
    devServer: {
        noInfo: false,
        compress: true
    }

};