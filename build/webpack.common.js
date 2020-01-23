const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            // 加载图片
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name]_[hash].[ext]',
                            outputPath: 'imgs/',
                            limit: 2048
                        }
                    }
                ]
            },
            // 加载css
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader', 
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./index.html',
            title: 'it is a title'
        }),
        new CleanWebpackPlugin(),
    ]
}