// 'production' か 'development' を指定
const MODE = 'development';

// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = MODE === 'development';

import { HotModuleReplacementPlugin } from 'webpack';
import { join } from 'path';

export const mode = MODE;
export const entry = './src/main.tsx';
export const output = {
  path: join(__dirname, 'dist'),
  filename: 'main.js',
};
export const module = {
  rules: [
    {
      // 拡張子.ts もしくは .tsx の場合
      test: /\.tsx?$/,
      // TypeScript をコンパイルする
      use: 'ts-loader',
    },
    // Sassファイルの読み込みとコンパイル
    {
      test: /\.scss/,
      use: [
        // linkタグに出力する機能
        'style-loader',
        // CSSをバンドルするための機能
        {
          loader: 'css-loader',
          options: {
            // オプションでCSS内のurl()メソッドの取り込みを禁止する
            url: false,
            // ソースマップの利用有無
            sourceMap: enabledSourceMap,

            // 0 => no loaders (default);
            // 1 => postcss-loader;
            // 2 => postcss-loader, sass-loader
            importLoaders: 2,
          },
        },
        {
          loader: 'sass-loader',
          options: {
            // ソースマップの利用有無
            sourceMap: enabledSourceMap,
          },
        },
      ],
    },
  ],
};
export const resolve = {
  extensions: ['.ts', '.tsx', '.js', '.json'],
};
export const target = 'web';
export const devServer = {
  contentBase: join(__dirname, 'dist'),
  hot: true,
  open: true,
};
export const plugins = [new HotModuleReplacementPlugin()];
export const cache = true;
