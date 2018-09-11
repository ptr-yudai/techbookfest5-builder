# 記事を書く

1. `src/index.pug` に `include pug/[タイトル]/index.pug` を追記

2. `src/pug/[タイトル]/` ディレクトリを作る

3. `src/pug/[タイトル]/index.pug` に「カテゴリ情報」「タイトル」「著者名」を書く

4. `src/assets/icons/[著者名].png` にアイコンを置く

5. `src/pug/[タイトル]/` 内に Pug で書いていく。節ごとにファイル分けて `index.pug` でまとめて `include` するとべんり

# PDF出力

## 環境構築したくない人向け（GoogleDriveにPDFを出力）

「記事を書く」をやってから master ブランチに向けて Pull Request を出す。CI が通ったら、別途紹介する kosen14s の GoogleDrive にアクセスして出力を確認する。失敗したら同じブランチ内で何回でも push し直して大丈夫。

## 環境構築したい人向け（手元でPDFを出力）

```
# Install packages

$ npm install

# or

$ yarn
```

```
# Preview on browser (auto reload)

$ npm run watch

# or

$ yarn run watch
```

```
# Save as PDF

$ npm run save

# or

$ yarn run save
```
