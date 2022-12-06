const { app, BrowserWindow, ipcMain, nativeTheme, Menu } = require('electron')
const informations = require('./package.json')
const { join } = require('path')
require('dotenv-defaults/config')

function createWindow() {
    const window = new BrowserWindow({
        center: true,
        darkTheme: true,
        transparent: true,
        width: 1024,
        height: 576,
        minWidth: 1024,
        minHeight: 576,
        icon: 'app/assets/media/icon.ico',
        title: getAppName(),
        titleBarStyle: 'hidden',
        webPreferences: {
            nodeIntegration: true,
            preload: join(__dirname, 'preload.js')
        }
    })

    _menu(window)
    _informations()
    _titlebar(window)
    _theme()

    window.loadFile(join(__dirname, 'app/index.html'))
}

app.disableHardwareAcceleration()
app.addListener('ready', _ => {
    createWindow()
    app.addListener('activate', _ => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})
app.addListener('window-all-closed', _ => {
    if (process.platform !== 'darwin') app.quit()
})


// Menu
/**
 * @param {BrowserWindow} window 
 */
function _menu(window) {
    const menu = [
        {
            label: 'tools',
            submenu: [
                { label: 'reload', accelerator: 'CmdOrCtrl+R', click() { window.webContents.reload() } },
                { label: 'reload and clear cache', accelerator: 'CmdOrCtrl+Shift+R', click() { window.webContents.reloadIgnoringCache() } },
                {
                    label: 'developer tools', accelerator: 'CmdOrCtrl+Shift+I', click() {
                        window.webContents.isDevToolsOpened() || window.webContents.isDevToolsFocused() ? window.webContents.closeDevTools() : window.webContents.openDevTools()
                    }
                },
                { label: 'fullscreen', accelerator: 'F11', click() { window.isFullScreen() ? window.setFullScreen(false) : window.setFullScreen(true) } }
            ]
        }
    ]
    Menu.setApplicationMenu(Menu.buildFromTemplate(menu))
}

// Informations
function _informations() {
    // App
    ipcMain.handle('informations:app:name', _ => getAppName())
    ipcMain.handle('informations:app:description', _ => { return informations.description })
}
function getAppName() {
    if (process.env.formatName) {
        let name = informations.name.split('-')
        for (let index = 0; index < name.length; index++) name[index] = name[index][0].toUpperCase() + name[index].toLowerCase().substring(1)
        return name
    }
    return informations.name
}

// Titlebar
/**
 * @param {BrowserWindow} window 
 */
function _titlebar(window) {
    ipcMain.handle('titlebar:close', _ => window.close())
    ipcMain.handle('titlebar:minimize', _ => window.minimize())
    ipcMain.handle('titlebar:fullscreen', _ => window.isMaximized() ? window.unmaximize() : window.maximize())
    ipcMain.handle('titlebar:isFullscreen', _ => { return window.isMaximized() })
}

// Theme
function _theme() {
    ipcMain.handle('theme:toggle', _ => {
        if (nativeTheme.shouldUseDarkColors) nativeTheme.themeSource = 'light'
        else nativeTheme.themeSource = 'dark'
        return nativeTheme.shouldUseDarkColors
    })
    ipcMain.handle('theme:light', _ => nativeTheme.themeSource = 'light')
    ipcMain.handle('theme:dark', _ => nativeTheme.themeSource = 'dark')
}