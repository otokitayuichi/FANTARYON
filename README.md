# FANTARYON（ファンタリオン）

ottoky studio の横スクロールシューティング（Fantasy × Beyond × Orion）。
- 制作スタジオ：ottoky studio
- ゲーム制作：おとっきー
- シナリオ：おとっきー／Romeo Hijo
- デザイン：おとっきー
- キャラクター：Romeo Hijo
- 音楽：Romeo Hijo（Delusion sound track 01）

## 構成

| パス | 内容 |
|---|---|
| `public/index.html` | ゲーム本体（1ファイル完結。画像・BGMを埋め込み済み） |
| `wrangler.jsonc` | Cloudflare Workers の静的アセット配信設定 |
| `package.json` / `capacitor.config.json` | Android版（Capacitor）の設定 |
| `android-overrides/` | Android版の差し替えファイル（全画面化のMainActivity、固定のデバッグ署名鍵、アプリアイコン） |
| `.github/workflows/android.yml` | APKの自動ビルドとReleasesへの公開 |

## 公開（Cloudflare Workers）

- ビルドコマンド：なし
- デプロイコマンド：`npx wrangler deploy`
- 公開URL：`https://fantaryon.<アカウントのサブドメイン>.workers.dev`

## Android版（APK）

- mainへpushすると GitHub Actions が自動でAPKをビルドし、Releases に公開する
- ダウンロードURL（固定）：https://github.com/otokitayuichi/FANTARYON/releases/download/android-latest/fantaryon.apk
- 手動で作り直す場合：Actions →「Android APK」→「Run workflow」
- 署名はデバッグ鍵（ストア公開用ではない）。Google Playに出す場合は本番用の署名鍵を別途用意する

## 更新方法

`public/index.html` を差し替えてコミットすると、Cloudflare が自動で再デプロイする。

## 現在の版

ver 0.8

- オープニング：夜明けの空母から発進し、雲を抜けて大気圏外へ（ブースター分離）
- 会話：各面の途中の無線とボス直前のやり取りを追加。正体は2面クリア後のシステムログで示す
- 真エンド：自機カメラの照準画面で「LOCK ON → LOCK OFF」を表現
- 通常エンド：ボスへの体当たり後に自爆演出
- ラスボス：溜め撃ちの極太ビーム（1・2周目共通）
- 2ND MISSION：真エンド到達で解放（タイトルで「630」入力でも解放）。色調を変えた鏡像空間（裏宇宙。画面の向きは1周目と同じ）、地形・障害物・弾数増加、最後に「もう一人のLOLLIPOP」
- チュートリアル（初回自動／「あそびかた」から再実行）、サウンドトラック
- ステージセレクト：デバッグ用（2ND MISSIONは含まない）
