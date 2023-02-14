const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const basePath = __dirname;
const distPath = 'dist';

module.exports ={
    resolve:{
        extensions:[".js", ".ts"],
    },
    entry: {
        app: './src/main.ts'
    },
    output:{
        path: path.join(basePath,distPath),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.ts$/i,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader",
                }
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "./index.html",
        }),
    ]
}