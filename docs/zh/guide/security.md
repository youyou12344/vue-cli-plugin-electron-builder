# 安全

[[toc]]

## Node Integration

从 VCPEB 的 v2.0 开始，默认情况下禁用 Electron `nodeIntegration` 。这会阻止所有 node APIs ，例如 `require`. 这降低了 [安全风险](https://electronjs.org/docs/tutorial/security#2-do-not-enable-nodejs-integration-for-remote-content)，并且是 Electron 团队推荐的最佳实践。如果你需要在渲染器进程中使用诸如 `fs` 或 `sqlite` 之类的原生模块，你可以在 `vue.config.js` 中启用 `nodeIntegration`:

```js
module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true
    }
  }
}
```

:::tip IPC Without Node Integration
您仍然可以在不启用 `nodeIntegration` (译者: 也不启用 `contextIsolation` ) 情况下，使用 [IPC](https://www.electronjs.org/docs/api/ipc-renderer)。 只需使用以下代码创建一个[预加载脚本](./guide.html#preload-files):

```js
import { ipcRenderer } from 'electron'
window.ipcRenderer = ipcRenderer
```

现在，您可以在你的 Vue app 中使用 `window.ipcRenderer` 访问 `ipcRenderer`。

如果你想使用 IPC without `nodeIntegration` and with `contextIsolation`, ，请使用以下代码:

```js
import { contextBridge, ipcRenderer } from 'electron'

// 公开受保护的方法，允许渲染器进程在不公开整个对象的情况下使用 ipcRenderer
contextBridge.exposeInMainWorld('ipcRenderer', {
  send: (channel, data) => {
    // whitelist channels 白名单频道
    let validChannels = ['toMain']
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data)
    }
  },
  receive: (channel, func) => {
    let validChannels = ['fromMain']
    if (validChannels.includes(channel)) {
      // Deliberately strip event as it includes `sender`
      // 故意删除 event 参数，因为他包含 `sender` 方法
      ipcRenderer.on(channel, (event, ...args) => func(...args))
    }
  }
})
```

然后，您可以在渲染器进程中使用 `window.ipcRenderer.(send/receive)`。

(来自[this StackOverflow answer](https://stackoverflow.com/questions/55164360/with-contextisolation-true-is-it-possible-to-use-ipcrenderer/59675116#59675116)的解决方案)

:::

## 加载本地图像/资源

如果启用了 WebSecurity ，您将无法从文件系统加载资源，即 `<img src="file:///path/to/some/image.png"/>`。 但是，您仍然可以从 `public` 文件夹加载图像和其他资源，请参阅 [处理静态资源](./guide.html#处理静态资源)。如果您需要从公共文件夹外部加载资源，则必须禁用 WebSecurity 或使用自定义协议。 [强烈建议不要禁用 WebSecurity](https://www.electronjs.org/docs/tutorial/security#5-do-not-disable-websecurity)，因此您应该改为使用以下技术来加载本地资源并保持启用 WebSecurity。

将以下内容添加到您的主进程文件 (默认是`background.(js|ts)`) 中:

```js
app.on('ready', () => {
  registerLocalResourceProtocol()
  ...
})

function registerLocalResourceProtocol() {
  protocol.registerFileProtocol('local-resource', (request, callback) => {
    const url = request.url.replace(/^local-resource:\/\//, '')
    // Decode URL to prevent errors when loading filenames with UTF-8 chars or chars like "#"
    const decodedUrl = decodeURI(url) // Needed in case URL contains spaces
    try {
      return callback(decodedUrl)
    }
    catch (error) {
      console.error('ERROR: registerLocalResourceProtocol: Could not get file path:', error)
    }
  })
}
```

然后，只需在本地图像 url 前加上 `local-resource://`，即 `<img src="local-resource://image.png"/>`
