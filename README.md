# FANTARYON（ファンタリオン）

ottoky studio の横スクロールシューティング（Fantasy × Beyond × Orion）。
- ゲーム制作：ottoky studio
- 音楽：Romeo Hijo（Delusion sound track 01）

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

ver 0.6：全3面（地球周回軌道／月軌道／外宇宙）＋ボス3体、通常・真エンディング、スタッフロール

- ライフ制：1機ごとにライフ2、残機3
- 真エンディング条件：一度もコンティニューせずにラスボスのコアへ突入する
- ステージセレクト：デバッグ用として全ステージ・全ボス・両エンディングを選択可能
