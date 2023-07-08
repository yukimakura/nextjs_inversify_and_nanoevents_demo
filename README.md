# nextjsにてinversifyとnanoeventsを組み合わせてDIコンテナ経由でのイベントデモ

[解説はこちら(ブログ)](https://yukimakura.github.io/blog/Nextjs%E3%81%A7DI%E3%82%B3%E3%83%B3%E3%83%86%E3%83%8A%E7%B5%8C%E7%94%B1%E3%81%A7%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%82%92%E7%99%BA%E7%81%AB%E3%81%97%E3%81%A6%E3%81%BF%E3%82%8B[typescript]/)
## 開発環境(Github Codespace)
`devcontainer.json`を設定してあるので、
自動セットアップが終わるまで待った後、
```
yarn run dev
```
すればおｋ

## 開発環境(ローカル)
```
docker pull node:18-bullseye
```
↑node:18-bullseye上で動作確認

コンテナ内で
```
yarn install
```
のち、
```
yarn run dev
```
すると動くはず。
