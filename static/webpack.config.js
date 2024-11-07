
const path = require('path');
const { VueLoaderPlugin, default: loader } = require('vue-loader');

const CopyWebpackPlugin = require('copy-webpack-plugin');

const webpack = require('webpack');

module.exports = {
    
    entry: '/main.js',
    devServer: {

        host: '127.0.0.1',
        port: 8080,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
        }
        
        // proxy: [
        //     {
        //         context: ['/static/'],
        //         target: 'http://127.0.0.1:8000'
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
                type: 'asset/resource',
            },

            {
                test: /\.(gltf|bin)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name][ext][query]'
                }
            }

        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        
        new webpack.ProvidePlugin({

            $: 'jquery',
            jQuery: 'jquery'
        
        }),
        
        new CopyWebpackPlugin({

            patterns: [

                { from: 'assets', to: 'assets' }

            ]

        })

    ],
};