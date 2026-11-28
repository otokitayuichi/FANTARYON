// ================================================================
// 仕様コメント
// 名称 : FANTARYON Windows版（Tauri）
// 制作 : ROMEOTTO（ゲーム おとっきー × 音楽 Romeo Hijo）
// 概要 : public/ をexeに埋め込み、WebView2で起動する
// 仕様 :
//  - 起動時は全画面（tauri.conf.json の fullscreen）
//  - F11 / Alt+Enter の全画面切り替えはゲーム側（index.html）で行う
//  - 終了は Alt+F4
//  - 実行時にコンソール窓は出さない
// ================================================================
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
    tauri::Builder::default()
        .run(tauri::generate_context!())
        .expect("FANTARYONの起動に失敗しました");
}
