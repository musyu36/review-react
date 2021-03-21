const webpack = require('webpack');
var path = require('path');

module.exports = {
    // productionモードで、最適化された状態に
    // developmentモードで、ソースマップ有効でJSファイルが出力される
    mode: "development",
    // メインとなるJavaScriptファイル(エントリーポイント)
    entry: "./src/main.tsx",
    // ファイルの出力設定
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "main.js"
    },
    module: {
        rules: [
            {
                // 拡張子.ts もしくは .tsx の場合
                test: /\.tsx?$/,
                // TypeScript をコンパイルする
                use: "ts-loader",
            }
        ]
    },
    // import 文で .ts や .tsx ファイルを解決するため
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    // ES5向けの指定
    target: "web",
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
        open: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    cache: true
};