# FANTARYON（ファンタリオン）

ottoky studio の横スクロールシューティング（Fantasy × Beyond × Orion）。
Music: ottoky studio feat. Romeo Hijo

## 構成

| パス | 内容 |
|---|---|
| `public/index.html` | ゲーム本体（1ファイル完結。画像・BGMを埋め込み済み） |
| `wrangler.jsonc` | Cloudflare Workers の静的アセット配信設定 |

## 公開（Cloudflare Workers）

- ビルドコマンド：なし
- デプロイコマンド：`npx wrangler deploy`
- 公開URL：`https://fantaryon.<アカウントのサブドメイン>.workers.dev`

## 更新方法

`public/index.html` を差し替えてコミットすると、Cloudflare が自動で再デプロイする。

## 現在の版

mock-0.5：ロゴ → オープニング → タイトル → 出撃前会話 → 1面 → 1面ボス → 会話 → クリア画面
