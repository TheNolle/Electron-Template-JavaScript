import { getOS } from './get.os.js'

const titlebar_el = document.querySelector('nav[titlebar]')

const buttons = titlebar_el.querySelector('div[buttons]> div')
const close = buttons.querySelectorAll('button')[0]
const minimize = buttons.querySelectorAll('button')[1]
const fullscreen = buttons.querySelectorAll('button')[2]

const pageName = titlebar_el.querySelector('span[pageName]')

export async function _titlebar() {
    titlebar_el.setAttribute('os', await getOS())
    eventHandlers()
    await updateMaximize()
    _titlebarUpdate()
}

async function updateMaximize() {
    if (await window.titlebar.isFullscreen()) {
        fullscreen.setAttribute('title', 'unmaximize')
        fullscreen.removeAttribute('fullscreen')
        fullscreen.setAttribute('maximize', '')
        titlebar_el.removeAttribute('draggable')
    } else {
        fullscreen.setAttribute('title', 'maximize')
        fullscreen.removeAttribute('maximize')
        fullscreen.setAttribute('fullscreen', '')
        titlebar_el.setAttribute('draggable', '')
    }
}

function eventHandlers() {
    // Buttons
    close.addEventListener('click', async _ => await window.titlebar.close())
    minimize.addEventListener('click', async _ => await window.titlebar.minimize())
    fullscreen.addEventListener('click', async _ => await window.titlebar.fullscreen())
    // Resize
    window.addEventListener('resize', async _ => await updateMaximize())
    // Double Click
    titlebar_el.addEventListener('dblclick', _ => fullscreen.click())
}

export async function _titlebarUpdate(name = null) {
    if (name) pageName.textContent = name
    else {
        if (document.title == '') document.title = await window.informations.appName()
        pageName.textContent = document.title
    }
}