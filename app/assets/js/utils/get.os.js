export async function getOS() {
    const os = await window.informations.os()
    const osList = { 'aix': 'Aix', 'android': 'Android', 'darwin': 'MacOS', 'freebsd': 'FreeBSD', 'linux': 'Linux', 'openbsd': 'OpenBSD', 'sunos': 'SunOS', 'win32': 'Windows' }
    const currentOs = osList[os]
    return currentOs
}