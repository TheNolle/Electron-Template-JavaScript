[![Copyright](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=50&duration=3000&pause=2000&color=EB87F7&center=true&vCenter=true&width=1000&height=50&lines=Nolly)](https://thenolle.com/Discord)

# ElectronJS App Template

#### What is ElectronJS

[Electron] is a [framework] for building desktop applications using [JavaScript], [HTML], and [CSS]. By embedding [Chromium] and [Node.js] into its binary, [Electron] allows you to maintain one [JavaScript] codebase and create [cross-platform apps] that work on [Windows], [MacOS], and [Linux] — no native development experience required.

---


### Samples:
1. [NoCpuMonitor]: See your CPU cores' timings in real-time with mutiple measurements.
2. [NoHashing]: Hash any string into many possible algorithms and get informations about each of them easily.
3. [NoFinance]: Get real-time finance data from [stooq].


---


Clone and run this repository for a quick demonstration of Electron with a custom titlebar and few utilites just for you.
This is a minimal Electron application based on the [Quick Start Guide] within the Electron documentation but with some tweaks that you might find quite pleasing.
A basic Electron application needs just these files:
- `package.json` - Points to the app's main file and lists its details and dependencies.
- `index.js` - Starts the app and creates a browser window to render HTML. This is the app's main process.
- `index.html` - A web page to render. This is the app's renderer process.
- preload.js - A content script that runs before the renderer process loads.
You can learn more about each of these components in depth within the official [Tutorial].


---

## Tweaks and utilities
- Custom titlebar
> Adapts directly depending on the OS
- Preloader already created
> - Versions
> > Get Node, Chromium and Electron version using `window.versions.node()`/`window.versions.chrome()`/`window.versions.electron()`
> - Informations
>   - Current OS
>   > Get user's current OS using `window.informations.os()`
>   - Application's Name
>   > Get application's name using `window.informations.appName()`<br>
>       • Configure if you want the name to be formatted in the *.env*
>   - Application's Description
>   > Get application's description using `window.informations.appDescription()`
> - Titlebar
>   - Minimize
>   > Minimize the window when calling `window.titlebar.minimize()`
>   - Maximize
>   > Toggle Maximized state when calling `window.titlebar.fullscreen()`
>   - Close
>   > Closes the app and ends all process when calling `window.titlebar.close()`
>   - Check if window is maximized
>   > Checks if the window size = screen size by calling `window.titlebar.isFullscreen()`
> - Dark Theme
>   - Toggle
>   > Switch between light and dark mode when using `window.theme.toggle()`
>   - Default
>   > Turn to specified theme (dark or light), if theme=**dark** then turns dark, else, turns white by using `window.theme.default(theme)` (theme can be null)
> - Utils
>   - existSync
>   > Checks if file exists at given path in the app directory using `window.utils.existSync(filePath)`
>   - openExternal
>   > Opens link in the default browser using `window.utils.openExternal(url)`


---


### Prerequisites
- Git
> Install [Git] for your system ([Git (Windows)], [Git (MacOS)], [Git (Linux)]).
> Check that git is correctly installed by opening a [Terminal (Windows)]/[Terminal (MacOS)]/[Terminal (Linux)] and doing `git -v`.
- NodeJS
> Install [NodeJS] (I recommend using [Node Version Manager (Linux)] or [Node Version Manager (Windows)], for MacOS i don't have any informations yet).
> Check that [NodeJS] & [npm] are correctly installed by opening a [Terminal] and doing `node -v` and `npm -v`.


---


### How to use

#### 1. Clone the repository
##### Command Line *(Any OS)*
```sh
# Clone the repository
git clone https://github.com/TheNolle/ElectronJS-Template-App
# Enter the cloned repository
cd ElectronJS-Template-App
```
Note: If you're using Linux Bash for Windows, [see this guide] or use `node` from the command prompt.

##### Alternatives
- You have [Github Desktop]
1. ![alternative_github_desktop](https://i.imgur.com/31gG5UK.png)
2. Follow this [Github Desktop Guide]
- You have [Visual Studio]
1. ![alternative_visual_studio](https://i.imgur.com/zViSlnn.png)
2. Follow this [Visual Studio Guide]
- You have none of the other alternatives
1. ![alternative_download_zip](https://i.imgur.com/XoTq7vo.png)
2. Extract zip to a new folder named `"ElectronJS-Template-App"`

#### 2. Install the required depedencies *(Command Line Only)*
1. Open a terminal in the cloned repository
2. Run the command `npm -v` to make sure [NodeJS] works there
3. Open `package.json` located at the root of the newly created folder and replace its content with the following:
```json
{
  "author": "[YOUR USERNAME]",
  "bugs": {
    "url": "[YOUR GITHUB REPO URL IF THERE IS ONE (remove if none)]/issues"
  },
  "dependencies": {
    "dotenv-defaults": "^5.0.2"
  },
  "description": "[YOUR PROJECT DESCRIPTION]",
  "devDependencies": {
    "electron": "^22.0.0"
  },
  "homepage": "[YOUR GITHUB REPO URL IF THERE IS ONE (remove if none)]#readme",
  "license": "[YOUR LICENSE]",
  "main": "index.js",
  "name": "[YOUR PROJECT NAME IN LOWERCASE (no spaces or special characters)]",
  "repository": {
    "type": "git",
    "url": "git+[YOUR GITHUB REPO URL IF THERE IS ONE (remove if none)].git"
  },
  "scripts": {
    "start": "electron ."
  },
  "version": "[YOUR PROJECT VERSION]"
}
```
4. Run `npm install` and let it do its things

### 3. Run the Application with your modifications
In the same terminal run this: `npm run start` and enjoy. 🎉


---


## Resources for Electron
- [Electron Documenttation] - all of Electron's documentation
- [Electron Fiddle] - Electron Fiddle, an app to test small Electron experiments

## License
[MIT]


## Social Media and Websites

Stay connected and follow me on these platforms:
- Website: https://thenolle.com
- Github: https://github.com/thenolle
- Discord: https://discord.com/invite/86yVsMVN9z
- Reddit: https://www.reddit.com/user/thenolle
- Twitter: https://twitter.com/TheNolly_
- Patreon: https://www.patreon.com/nolly__
- Ko-Fi: https://ko-fi.com/nolly__



<!-- Variables -->
  [Electron]: https://www.electronjs.org/
  [framework]: https://www.codecademy.com/resources/blog/what-is-a-framework/
  [JavaScript]: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript
  [HTML]: https://www.hostinger.com/tutorials/what-is-html
  [CSS]: https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS
  [Chromium]: https://www.chromium.org/
  [Node.js]: https://nodejs.org/
  [cross-platform apps]: https://en.wikipedia.org/wiki/Cross-platform_software
  [Windows]: https://www.computerhope.com/jargon/w/windows.htm
  [MacOS]: https://www.techtarget.com/whatis/definition/Mac-OS
  [Linux]: https://www.linux.com/what-is-linux/
  [Quick Start Guide]: https://electronjs.org/docs/latest/tutorial/quick-start
  [Tutorial]: https://www.electronjs.org/docs/latest/tutorial/tutorial-prerequisites
  [Git]: https://git-scm.com/
  [Git (Windows)]: https://git-scm.com/download/win/
  [Git (MacOS)]: https://git-scm.com/download/mac/
  [Git (Linux)]: https://git-scm.com/download/linux/
  [Terminal (Windows)]: https://www.wikihow.com/Open-Terminal-in-Windows
  [Terminal (MacOS)]: https://www.howtogeek.com/682770/how-to-open-the-terminal-on-a-mac/
  [Terminal (Linux)]: https://www.geeksforgeeks.org/how-to-open-terminal-in-linux/
  [Terminal]: /
  [see this guide]: https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/
  [NodeJS]: https://nodejs.org/en/download/current/
  [Node Version Manager (Windows)]: https://github.com/coreybutler/nvm-windows/#installation--upgrades
  [Node Version Manager (Linux)]: https://github.com/nvm-sh/nvm#installing-and-updating
  [npm]: http://npmjs.com/
  [Github Desktop]: (https://desktop.github.com/)
  [Github Desktop Guide]: (https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/adding-and-cloning-repositories/cloning-and-forking-repositories-from-github-desktop)
  [Visual Studio]: (https://visualstudio.microsoft.com/)
  [Visual Studio Guide]: (https://learn.microsoft.com/en-us/visualstudio/version-control/git-clone-repository)
  [Electron Documenttation]: https://electronjs.org/docs/
  [Electron Fiddle]: https://electronjs.org/fiddle
  [MIT]: LICENSE
  [stooq]: https://stooq.com/
  [NoCpuMonitor]: https://github.com/TheNolle/NoCpuMonitor
  [NoHashing]: https://github.com/thenolle/NoHashing
  [NoFinance]: https://github.com/TheNolle/NoFinance
<!-- /Variables -->
