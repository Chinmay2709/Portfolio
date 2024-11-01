
const path = require('path');
const { VueLoaderPlugin, default: loader } = require('vue-loader');
const webpack = require('webpack');

module.exports = {
    entry: '/main.js',
    devServer: {
        host: '127.0.0.1',
        port: 8080,
        // proxy: [
        //     {
        //         context: ['/ping_api'],
        //         target: 'http://127.0.0.1:80'
        //     }
        // ]
        
    },
    output: {
        path: path.join(__dirname,'/dist'),
        filename: 'bundle.js',
        publicPath: "http://127.0.0.1:8080/public/",
        assetModuleFilename: 'images/[hash][ext][query]',
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader'
            },

            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                ],
            },

            {
                test: /\.(png)$/,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
};