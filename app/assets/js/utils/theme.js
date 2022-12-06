const themeToggler = document.querySelector('span[themeToggler]')

themeToggler.addEventListener('click', _ => themeToggle())

async function themeToggle() {
    const theme = await window.theme.toggle()
    if (theme) {
        localStorage.setItem('theme', 'dark')
        themeToggler.innerHTML = '<i class="fa-solid fa-moon"></i>'
        themeToggler.setAttribute('title', 'Current Theme: Dark\nClick to change to: Light')
    } else {
        localStorage.setItem('theme', 'light')
        themeToggler.innerHTML = '<i class="fa-solid fa-sun"></i>'
        themeToggler.setAttribute('title', 'Current Theme: Light\nClick to change to: Dark')
    }
}

export async function _themeDefault() {
    const theme = localStorage.getItem('theme')

    if (!theme || theme == 'dark') {
        localStorage.setItem('theme', 'dark')
        themeToggler.innerHTML = '<i class="fa-solid fa-moon"></i>'
        themeToggler.setAttribute('title', 'Current Theme: Dark\nClick to change to: Light')
    } else {
        localStorage.setItem('theme', 'light')
        themeToggler.innerHTML = '<i class="fa-solid fa-sun"></i>'
        themeToggler.setAttribute('title', 'Current Theme: Light\nClick to change to: Dark')
    }

    await window.theme.default(theme ? theme : 'dark')
}