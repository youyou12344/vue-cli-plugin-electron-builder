# Recipes 使用技巧

## 目录

[[toc]]

## 自动更新

> 使用 [electron-builder 自动更新](https://www.electron.build/auto-update) 配置应用程序更新

[示例仓库](https://github.com/nklayman/electron-auto-update-example)

### 安装所需的依赖

首先，安装 [electron-updater](https://www.npmjs.com/package/electron-updater):

使用 Yarn:

`yarn add electron-updater`

或使用 NPM:

`npm install electron-updater`

### 启用发布到 GitHub

在 `vue.config.js` 的 Electron Builder 插件配置中，添加 `publish: ['github']`:

```js
module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        publish: ['github']
      }
    }
  }
}
```

FIXME ? 为什么关系到 github ？ 用 gitlab 怎么办？

### 检查更新 `background.(js|ts)`

将以下内容添加到您的主流程文件(默认是`background.(js|ts)`)中:

```diff
...
+  import { autoUpdater } from "electron-updater"
...

if (process.env.WEBPACK_DEV_SERVER_URL) {
    // 如果处于开发模式，加载开发服务器的 url
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // 处于非开发模式，加载 index.html
    win.loadURL('app://./index.html')
+   autoUpdater.checkForUpdatesAndNotify()
  }
...
```

### GitHub Personal Access Token

**注意：** 此步骤需要一个 GitHub personal access token 。要获得一个，请访问 [https://github.com/settings/tokens](https://github.com/settings/tokens) 并单击 `Generate new token`。

为了让 Electron Builder 将版本上传到 GitHub，您需要通过将 `GH_TOKEN` 环境变量设置为你的 token:

在 Linux/MacOS 上:

`export GH_TOKEN=TOKEN-GOES-HERE`

在 Windows 上:

`set GH_TOKEN=TOKEN-GOES-HERE`

### 上传发布到 GitHub

现在你已经配置好了一切，告诉 electron-builder 通过运行带有 `-p always` 参数的 `electron:build` 上传应用程序到 GitHub :

使用 Yarn:

`yarn electron:build -p always`

或使用 NPM:

`npm run electron:build -- -p always`

### 发布版本

在 GitHub 中打开您的存储库，然后单击发布 releases 选项卡。您应该会看到包含所有二进制文件的新版本的草稿。发布此版本，以便用户能够更新到它。

### 检查更新

安装您的应用程序，然后运行它。您还不会收到更新通知，因为这是最新版本。您必须通过增加 `package.json` 中的 `version` 字段来发布新版本，然后重复前面的 3 个步骤。现在，您的旧应用程序应该会给您一个更新通知。

## 图标

> 自定义应用程序的启动器和托盘图标

只需将 `icons/icon.png` 文件添加到[构建资源目录中](https://www.electron.build/configuration/configuration#configuration)，然后 electron-builder 将在所有平台上使用它。 除非您手动配置了构建资源目录，否则图标应该是 `build/icons/icon.png`，相对于应用程序的根目录。

## 多页

> 为每个 [page](https://cli.vuejs.org/config/#pages) 创建多个 Electron 窗口

[示例仓库](https://github.com/nklayman/electron-multipage-example)

### 添加您的页面

按照 [Vue CLI 操作指南](https://cli.vuejs.org/config/#pages) 添加页面到您的应用程序。

### 为 Windows 创建变量

在你的 background 文件 (默认是`src/background.(js|ts)`) 中添加变量 `win` 和 `secondWin`，且位于 `createWindow` 函数上方:

```js
let win
let secondWin
```

### 在 `createWindow` 函数中接受页面参数

在您的后台文件中， 更新 `createWindow` 函数以获取有关页面的参数:

用下面的代码：

```js
function createWindow() {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION
    }
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }
  
  win.on('closed', () => { win = null })
}
```

代替原本的代码：

```js
function createWindow(devPath, prodPath) {
  // Create the browser window.
  let window = new BrowserWindow({ width: 800, height: 600 })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    window.loadURL(process.env.WEBPACK_DEV_SERVER_URL + devPath)
    if (!process.env.IS_TEST) window.webContents.openDevTools()
  } else {
    // Load the index.html when not in development
    window.loadURL(`app://./${prodPath}`)
  }

  window.on('closed', () => { window = null })
  return window
}
```

### 在 App 启动时创建两个窗口

在后台文件中的 `app.on('ready')` 回调函数中创建两个窗口:

```js
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  // Replace
  createWindow()
  // With
  if (!process.env.WEBPACK_DEV_SERVER_URL) {
    createProtocol('app')
  }
  win = createWindow('', 'index.html')
  secondWin = createWindow('subpage', 'subpage.html')
})
```

### 单击 Dock 图标时重新创建两个 Windows

在后台文件中的 `app.on('activate')` 回调函数中创建两个窗口:

```js
app.on('activate', () => {
// On macOS it's common to re-create a window in the app when the
// dock icon is clicked and there are no other windows open.

// Replace
if (BrowserWindow.getAllWindows().length === 0) createWindow()
// With
if (win === null) {
  win = createWindow('', 'index.html')
}
if (secondWin === null) {
  secondWin = createWindow('subpage', 'subpage.html')
}
```

## 使用 VSCode 进行调试

> 使用 [Visual Studio Code](https://code.visualstudio.com/) 调试 Main 和 Renderer 进程 

[示例仓库](https://github.com/nklayman/electron-vscode-debug-example)

在遵循本指南之前，请阅读 [有关调试的 Visual Studio Code 文档](https://code.visualstudio.com/docs/editor/debugging)。

### 启用 Sourcemaps

在你的 `vue.config.js` 中启用 sourcemaps :

```js
module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  }
}
```

### 添加调试任务

Add the `electron-debug` task to `.vscode/tasks.json`, which will start the Electron dev server in debug mode:

```json
{
  // See https://go.microsoft.com/fwlink/?LinkId=733558
  // for the documentation about the tasks.json format
  "version": "2.0.0",
  "tasks": [
    {
      "label": "electron-debug",
      "type": "process",
      "command": "./node_modules/.bin/vue-cli-service",
      "windows": {
        "command": "./node_modules/.bin/vue-cli-service.cmd"
      },
      "isBackground": true,
      "args": ["electron:serve", "--debug"],
      "problemMatcher": {
        "owner": "custom",
        "pattern": {
          "regexp": ""
        },
        "background": {
          "beginsPattern": "Starting development server\\.\\.\\.",
          "endsPattern": "Not launching electron as debug argument was passed\\."
        }
      }
    }
  ]
}
```

### 添加调试配置

Add `Electron: Main`, `Electron: Renderer`, and `Electron: All` debug configurations to `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Electron: Main",
      "type": "node",
      "request": "launch",
      "protocol": "inspector",
      "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/electron",
      "windows": {
        "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/electron.cmd"
      },
      "preLaunchTask": "electron-debug",
      "args": ["--remote-debugging-port=9223", "./dist_electron"],
      "outFiles": ["${workspaceFolder}/dist_electron/**/*.js"]
    },
    {
      "name": "Electron: Renderer",
      "type": "chrome",
      "request": "attach",
      "port": 9223,
      "urlFilter": "http://localhost:*",
      "timeout": 30000,
      "webRoot": "${workspaceFolder}/src",
      "sourceMapPathOverrides": {
        "webpack:///./src/*": "${webRoot}/*"
      }
    }
  ],
  "compounds": [
    {
      "name": "Electron: All",
      "configurations": ["Electron: Main", "Electron: Renderer"]
    }
  ]
}
```

译者: 要 `"type": "chrome"` 生效，需要安装 VS Code 扩展程序 `[Deprecated] Debugger for Chrome` (并重启 VS Code)


### 添加断点

Add "red dot" [breakpoints](https://code.visualstudio.com/docs/editor/debugging#_breakpoints) by clicking VSCode's gutter in your Vue app or background file.

### 启动调试模式

Run the `Electron: All` launch configuration. Execution should stop upon reaching one of your breakpoints, and VSCode will allow you to debug your code.

:::warning
Breakpoints will not be detected in your Vue app during the initial launch of Electron. Reload the window to stop on these breakpoints.
:::

## (跨)多平台构建 [须知]

> 为开发时使用的系统以外的系统平台，构建应用程序

默认情况下，electron-builder为当前平台和架构构建。 但是，您可以使用 electron-builder CLI 为其他平台创建构建 ([更多信息在这里](https://www.electron.build/multi-platform-build)).

传给 `electron:build` 命令的所有参数都将转发给 electron-builder。可用参数在 [这里](https://www.electron.build/cli)。要设置其构建的平台，请将它们作为 CLI 参数添加到 `electron:build` 命令，后面可以跟随要为该平台构建的安装程序。

#### 例子

要为 Linux 构建 .deb 安装程序，为 Windows 构建 NSIS 安装程序：

使用 npm：

`npm run electron:build -- --linux deb --win nsis` (不要删除多余的双破折号)

使用 yarn:

`yarn electron:build --linux deb --win nsis`
