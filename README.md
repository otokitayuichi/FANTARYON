# FANTARYON（ファンタリオン）

ROMEOTTO の横スクロールシューティング（Fantasy × Beyond × Orion）。
- 制作：ROMEOTTO（ゲーム おとっきー × 音楽 Romeo Hijo）
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
| `src-tauri/` | Windows版（Tauri）の設定・起動処理・アイコン |
| `.github/workflows/windows.yml` | exeの自動ビルドとReleasesへの公開 |

## 公開（Cloudflare Workers）

- ビルドコマンド：なし
- デプロイコマンド：`npx wrangler deploy`
- 公開URL：`https://fantaryon.<アカウントのサブドメイン>.workers.dev`

## Android版（APK）

- mainへpushすると GitHub Actions が自動でAPKをビルドし、Releases に公開する
- ダウンロードURL（固定）：https://github.com/otokitayuichi/FANTARYON/releases/download/android-latest/fantaryon.apk
- 手動で作り直す場合：Actions →「Android APK」→「Run workflow」
- 署名はデバッグ鍵（ストア公開用ではない）。Google Playに出す場合は本番用の署名鍵を別途用意する

## Windows版（exe）

- Tauriで作成。ゲーム本体をexeに埋め込み、Windows標準のWebView2で動かす（1ファイル・約10MB・インストール不要）
- mainへpushすると GitHub Actions が自動でexeをビルドし、Releases に公開する
- ダウンロードURL（固定）：https://github.com/otokitayuichi/FANTARYON/releases/download/windows-latest/fantaryon.exe
- itch用zip（固定）：https://github.com/otokitayuichi/FANTARYON/releases/download/windows-latest/fantaryon_windows.zip
- 手動で作り直す場合：Actions →「Windows EXE」→「Run workflow」
- 起動時はウィンドウ（1280×720）。F11 または Alt+Enter で全画面に切り替え
- コード署名なしのため、初回起動時にSmartScreenの警告が出る（「詳細情報」→「実行」で起動）

## 更新方法

`public/index.html` を差し替えてコミットすると、Cloudflare が自動で再デプロイする。

## 現在の版

ver 1.0.1（正式版）

- 日本語・英語に対応（自動判定／?lang=en／タイトルのLANGUAGEで切替）
- Web・Android（APK）・Windows（exe）で配布

- オープニング：月の裏から来訪体 → スクランブル → 甲板のカタパルト発進 → 空母から飛び立つ → 大気圏外 → タイトル
- 2ND MISSION（ANOTHER）：逃げ延びたマザーベリーを追い、時空の裂け目から別時空の宇宙へ。突入ミニOP（無線つき）
- ポーズメニュー：「ゲームを再開」「タイトルへ戻る」
- 会話：各面の無線・ボス直前のやり取り、2面クリア後のシステムログ
- 真エンド：自機カメラの照準演出／通常エンド：自爆演出
- ラスボス：溜め撃ちの極太ビーム（1・2周目共通）
- チュートリアル（初回自動／「あそびかた」）、サウンドトラック
- 隠しデバッグメニュー：タイトルで「630」入力／ロゴ7回タップ／パッドLB＋RB＋BACK（2ND MISSION解放・初期化・無敵最強・倍速・ステージ選択）
