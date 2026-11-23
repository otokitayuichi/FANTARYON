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
| `public/index.html` | ゲーム本体（プログラム） |
| `public/assets/` | 画像（png/jpg）・BGM（mp3） |
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

ver 0.9

- オープニング：月の裏から来訪体 → スクランブル → 甲板のカタパルト発進 → 空母から飛び立つ → 大気圏外 → タイトル
- 2ND MISSION（ANOTHER）：逃げ延びたマザーベリーを追い、時空の裂け目から別時空の宇宙へ。突入ミニOP（無線つき）
- ポーズメニュー：「ゲームを再開」「タイトルへ戻る」
- 会話：各面の無線・ボス直前のやり取り、2面クリア後のシステムログ
- 真エンド：自機カメラの照準演出／通常エンド：自爆演出
- ラスボス：溜め撃ちの極太ビーム（1・2周目共通）
- チュートリアル（初回自動／「あそびかた」）、サウンドトラック
- 隠しデバッグメニュー：タイトルで「630」入力／ロゴ7回タップ／パッドLB＋RB＋BACK（2ND MISSION解放・初期化・無敵最強・倍速・ステージ選択）
