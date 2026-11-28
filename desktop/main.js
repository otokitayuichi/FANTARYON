/*
================================================================
 仕様コメント
 名称   : FANTARYON Windows版（Electron）メインプロセス
 制作   : ROMEOTTO（ゲーム おとっきー × 音楽 Romeo Hijo）
 概要   : Web版（public/）をそのままデスクトップアプリとして起動する。
 仕様   :
  - ゲーム本体は app/（ビルド時に public/ をコピー）を独自スキーム app:// で配信する
    （file:// ではBGMの fetch が失敗するため）
  - app/ の外のファイルは返さない（パス逆戻りを拒否）
  - 外部リンクは既定のブラウザで開き、アプリ内では app:// 以外へ移動させない
  - Node連携は無効（contextIsolation有効・nodeIntegration無効・sandbox有効）
  - ウィンドウ 1280×720、メニューバーなし、F11 または Alt+Enter で全画面切り替え
  - BGMは操作前でも再生できるようにする（autoplay-policy）
  - セーブ（localStorage）は app://fantaryon のオリジンに保存され、更新後も引き継がれる
================================================================
*/
const { app, BrowserWindow, protocol, net, Menu, shell } = require('electron');
const path = require('path');
const { pathToFileURL } = require('url');

protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { standard: true, secure: true, supportFetchAPI: true, stream: true } }
]);
app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');

if (!app.requestSingleInstanceLock()) { app.quit(); }

let win = null;

function createWindow() {
  win = new BrowserWindow({
    width: 1280,
    height: 720,
    minWidth: 480,
    minHeight: 270,
    backgroundColor: '#0b1236',
    title: 'FANTARYON',
    icon: path.join(__dirname, 'build', 'icon.png'),
    autoHideMenuBar: true,
    webPreferences: { contextIsolation: true, nodeIntegration: false, sandbox: true }
  });
  win.webContents.on('before-input-event', (e, i) => {
    if (i.type === 'keyDown' && (i.key === 'F11' || (i.key === 'Enter' && i.alt))) {
      win.setFullScreen(!win.isFullScreen());
      e.preventDefault();
    }
  });
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (/^https:\/\//.test(url)) shell.openExternal(url);
    return { action: 'deny' };
  });
  win.webContents.on('will-navigate', (e, url) => {
    if (!url.startsWith('app://fantaryon/')) {
      e.preventDefault();
      if (/^https:\/\//.test(url)) shell.openExternal(url);
    }
  });
  win.loadURL('app://fantaryon/index.html');
}

app.on('second-instance', () => {
  if (win) { if (win.isMinimized()) win.restore(); win.focus(); }
});

app.whenReady().then(() => {
  const root = path.join(__dirname, 'app');
  protocol.handle('app', (req) => {
    const u = new URL(req.url);
    let p = decodeURIComponent(u.pathname);
    if (p === '/' || p === '') p = '/index.html';
    const f = path.normalize(path.join(root, p));
    if (f !== root && !f.startsWith(root + path.sep)) return new Response('forbidden', { status: 403 });
    return net.fetch(pathToFileURL(f).toString());
  });
  Menu.setApplicationMenu(null);
  createWindow();
});

app.on('window-all-closed', () => app.quit());
