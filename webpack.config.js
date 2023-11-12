const path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                    test: /\.txt$/,
                    loader: 'raw-loader'
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]    
    },
    plugins: [
        new HtmlWebpackPlugin(
                {
                    template: './src/index.html',
                    filename: 'main.html'
            }
        ),
        new MiniCssExtractPlugin()
    ]
}