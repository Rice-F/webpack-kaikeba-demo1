// node.js原生模块path
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

// 引用这个插件必须要使用对象结构
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// 使用热更新模块 HotModuleReplacementPlugin(webpack自带模块) 需要手动引入webpack
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    // 指定打包入口
    entry: './index.js',
    // 指定打包后的文件配置
    output: {
        // 公共路径
        // publicPath: '',
        filename: 'index.js',
        // path: path.resolve(__dirname, 'build')
        path: path.resolve(__dirname, './dist')
    },
    devtool: "cheap-module-source-map",
    // 当webpack遇到非js模块无法打包时，需要loader依赖支持
    module: {
        rules: [
            // 加载图片
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // name属性可以配置文件自定义文件名模板
                            // [name]是打包前的文件名，[ext]是打包前的文件格式
                            // name: '[name].[ext]'
                            name: '[name]_[hash].[ext]',
                            // 指定将打包后生成的图片放入一个文件夹下
                            outputPath: 'imgs/',
                            // 图片限制尺寸，超过2kb，存储为图片格式，小于2kb存储为base64格式
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
                // 当使用 MiniCssExtractPlugin 时就不需要使用'style-loader'了
                // use: [
                //     MiniCssExtractPlugin.loader,
                //     'css-loader',
                //     'postcss-loader'
                // ]
            },
            // 加载scss
            // loader是有执行顺序的，从后往前执行
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
                // 排除node_mpdules中的js模块
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader', 
                        // options: {
                            // presets: [
                            //     [
                            //         "@babel/preset-env",
                            //         {
                            //             // 按需加载
                            //             useBuiltIns: 'usage'
                            //         }
                            //     ]
                            // ],
                            // plugins: [
                            //     ["@babel/plugin-transform-runtime"],
                            //     {
                            //         absoluteRuntime: false,
                            //         corejs: 2,
                            //         helpers: true,
                            //         regenerator: true,
                            //         useESModules: false,
                            //     }
                            // ]
                        // },
                    }
                ]
            }
        ]
    },
    plugins: [
        // 在我们执行打包后，在我们的打包目录里创建一个index.html模板，并将打包后的模块注入模板中
        new HtmlWebpackPlugin({
            template:'./index.html',
            title: 'it is a title',
            // filename: 'app.html'
        }),
        // 在每次打包执行之前，删除生成目录
        new CleanWebpackPlugin(),
        // new MiniCssExtractPlugin({
        //     filename: '[name].css'
        // }),
        // 热更新
        // new webpack.HotModuleReplacementPlugin()
    ]
}