const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const rootDir = path.join(__dirname, ".")
const webpackEnv = process.env.NODE_ENV || "development"

module.exports = {
    mode: webpackEnv,
    entry: {
        app: path.join(rootDir, "./src/index.tsx"),
    },
    output: {
        path: path.resolve(rootDir, "dist"),
        filename: "app-[fullhash].bundle.js",
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(tsx|ts|jsx|js|mjs)$/,
                exclude: /node_modules/,
                loader: "ts-loader",
            },
            {
                test: /\.(png|jpe?g|gif|svg|csv)$/,
                options: {
                    name: "static/media/[name].[ext]",
                    scalings: { "@2x": 2, "@3x": 3 },
                },
                loader: "file-loader",
            },
            {
                test: /\.(mov|mp4)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: { name: "[name].[ext]" },
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "./public/index.html"),
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js"],
        alias: Object.assign({
            "~": path.resolve(__dirname, "./src"),
        }),
    },
    devServer: {
        historyApiFallback: true,
    },
}
