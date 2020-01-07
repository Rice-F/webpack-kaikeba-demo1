// node.js原生模块path
const path = require('path');

module.exports = {
    // 指定打包入口
    entry: './index.js',
    // 指定打包后的文件配置
    output: {
        // 公共路径
        // publicPath: '',
        filename: 'index.js',
        path: path.resolve(__dirname, 'build')
    },
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
            }
        ]
    }
}