## 導入

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

## 記事を書く

1. `src/index.pug` に `include pug/[title]/index.pug` を追記

2. `src/pug/[title]/` ディレクトリを作る

3. `src/pug/[title]/index.pug` に「カテゴリ情報」「タイトル」「著者名」を書く

4. `src/assets/icons/[著者名].png` でアイコンを置く

5. `src/pug/[title]/` 内に Pug で書いていく。節ごとにファイル分けて `index.pug` でまとめて `include` するとべんり
