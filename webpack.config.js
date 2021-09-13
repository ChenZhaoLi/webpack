const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.js'),
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        clean: true
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
      },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                type:'asset/resource'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
              },
            // {
            //     test:/\.vue$/,
            //     loader:'vue-loader'
            // }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'Vue 开发环境'
        }),
        // new VueLoaderPlugin()
    ]
}