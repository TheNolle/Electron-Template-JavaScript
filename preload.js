const { contextBridge, ipcRenderer, shell } = require('electron')

// Versions
contextBridge.exposeInMainWorld('versions', {
    node: _ => process.versions.node,
    chrome: _ => process.versions.chrome,
    electron: _ => process.versions.electron
})

// Informations
contextBridge.exposeInMainWorld('informations', {
    os: _ => { return process.platform },
    // App
    appName: _ => ipcRenderer.invoke('informations:app:name'),
    appDescription: _ => ipcRenderer.invoke('informations:app:description')
})

// Titlebar
contextBridge.exposeInMainWorld('titlebar', {
    close: _ => ipcRenderer.invoke('titlebar:close'),
    minimize: _ => ipcRenderer.invoke('titlebar:minimize'),
    fullscreen: _ => ipcRenderer.invoke('titlebar:fullscreen'),
    isFullscreen: _ => ipcRenderer.invoke('titlebar:isFullscreen')
})

// Dark Mode
contextBridge.exposeInMainWorld('theme', {
    toggle: _ => ipcRenderer.invoke('theme:toggle'),
    default: (theme = null) => theme == 'dark' ? ipcRenderer.invoke('theme:dark') : ipcRenderer.invoke('theme:light')
})

// Utils
contextBridge.exposeInMainWorld('utils', {
    existSync: (file) => require('fs').existsSync(require('path').join(__dirname, 'app', file)),
    openExternal: (url) => shell.openExternal(url)
})