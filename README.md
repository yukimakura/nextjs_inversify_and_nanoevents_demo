# nextjsにてinversifyとnanoeventsを組み合わせてDIコンテナ経由でのイベントデモ
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
