// 'production' か 'development' を指定
const MODE = "development";

// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = MODE === "development";

const webpack = require('webpack');
var path = require('path');

module.exports = {
    // productionモードで、最適化された状態に
    // developmentモードで、ソースマップ有効でJSファイルが出力される
    mode: MODE,
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
            },
            {
                test: /\.css/,
                use: [
                "style-loader",
                {
                    loader: "css-loader",
                    options: {
                        url: false, // CSS内のurl()メソッドの取り込みを禁止する
                        sourceMap: enabledSourceMap,
                    }
                }
                ]
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