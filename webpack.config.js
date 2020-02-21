const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public"),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, "node_modules"),
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/react"]
                    }
                }
            },
            {
                test: /\.css$/,
                loader: [ "style-loader", "css-loader" ],
                exclude: path.resolve(__dirname, "node_modules")
            },
            {
                test: /\.(png|svg|jpg|jpeg|mp4)$/,
                loader: "file-loader",
                exclude: path.resolve(__dirname, "node_modules")
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.html",
            favicon: "src/media/imgs/favicon.ico"
        })
    ]
};
