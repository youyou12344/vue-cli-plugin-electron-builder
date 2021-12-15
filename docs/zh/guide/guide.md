---
sidebarDepth: 2
---

# 指南

## 目录

[[toc]]

## Native 模块

支持 native 模块，并且在[启用 nodeIntegration](./security.md#node-integration)的情况下不需要任何配置即可工作。如果出现错误，你可能需要将 native 依赖项设置为 [webpack external](https://webpack.js.org/configuration/externals/)。它应该会被自动找到，但可能不会。为此，请使用 `externals` 选项：

```javascript
// vue.config.js
module.exports = {
  pluginOptions: {
    electronBuilder: {
      // 如果 native 依赖项不起作用，请在此处列出
      externals: ['my-native-dep'],
      // 如果您使用的是 Yarn 工作区，则可能有多个 node_modules 文件夹
      // 为了让 VCP Electron Builder 能找到它们，请在此处全部列出
      nodeModulesPath: ['../../node_modules', './node_modules']
    }
  }
}
```

### 注释

- 您可以为 `externals` 数组中的项目添加前缀 `!` 以防止它被自动标记为外部。( `!not-external`)

- 如果你没有在你的代码中使用 native 依赖，你可以删除 `package.json` 中 scripts 的 `postinstall` 和 `postuninstall`。 native 模块可能不起作用，但依赖项安装会更快。

- 使用 MySQL 或 MongoDB 等数据库需要额外的配置。 更多信息见 [问题 #76 (comment)](https://github.com/nklayman/vue-cli-plugin-electron-builder/issues/76#issuecomment-420060179)。

## 处理静态资源

静态资源的工作方式和普通的 web app 一样。阅读 [Vue CLI 的文档](https://cli.vuejs.org/guide/html-and-static-assets.html#static-assets-handling) 了解更多信息。

<!-- prettier-ignore -->
:::tip __static
仅在 Electron 中可用，全局变量 `__static` 被添加到主进程和渲染进程中。
它被设置为磁盘上公用文件夹的路径。如果您需要对文件使用 Node APIs ，比如 `fs.readFileSync` 或 `child_process.spawn`，那么这是非常有用的。
请注意，公用文件夹中的文件在生产中是只读的，因为它们被打包到 `.asar` 存档(archive) 中。如果需要文件可写，可以使用 [electron-builder's extraResources 配置](https://www.electron.build/configuration/contents#extraresources)。
:::

:::tip Videos 视频
默认情况下，视频将无法从公共文件夹加载。 如果您正在使用 Electron 11 + ，只需添加 `stream: true` 到主进程文件(默认是 `background.(js|ts)`) 的第 10 行的 privileges 键配置中，具体修改为: `{ scheme: 'app', privileges: { secure: true, standard: true, stream: true } }`。 如果您不想使用 Electron 11+，则必须配置和使用 `local-resource` 协议， 请参阅[这些文档](./security.html#loading-local-images-resources)了解相关说明，更多信息见[这个 GitHub 问题](https://github.com/nklayman/vue-cli-plugin-electron-builder/issues/872).
:::

### 例子:

```vue
<!-- 加载图片，将由 webpack 处理 -->
<img src="./assets/logo.png">
<!-- webpack 不会处理从 `public` 文件夹中加载的图片，仅复制 -->
<!-- imgPath 应该等于 `path.join(process.env.BASE_URL, 'logo.png')` -->
<img :src="imgPath">
<script>
// 希望 myText.txt 被放置在公用文件夹中，
// 只在 electron serve/build 中生效，
// 不会在渲染进程中生效，除非你启用 nodeIntegration 。

const fs = require('fs')
const path = require('path')

const fileLocation = path.join(__static, 'myText.txt')
const fileContents = fs.readFileSync(fileLocation, 'utf8')

console.log(fileContents)
</script>
```

## 预加载文件

预加载文件允许您在 Vue App 的上下文中执行带有 [Node integration](/guide/configuration.html#node-integration) 的 JS (共享 `window` 变量)。创建一个预加载文件并按如下方式更新 `vue.config.js` :

```js
module.exports = {
  pluginOptions: {
    electronBuilder: {
      preload: 'src/preload.js',
      // 或者，多个预加载文件:
      preload: { preload: 'src/preload.js', otherPreload: 'src/preload2.js' }
    }
  }
}
```

然后，更新主进程文件 (默认是`src/background.(js|ts)`) 中的 `new BrowserWindow` 调用，增加 preload 选项:

```diff
const win = new BrowserWindow({
  width: 800,
  height: 600,
  webPreferences: {
    // Use pluginOptions.nodeIntegration, leave this alone
    // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/configuration.html#node-integration for more info
    nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
+   preload: path.join(__dirname, 'preload.js')
  }
})
```

你需要重新运行 `electron:serve` 以使更改生效。

## 文件夹结构

```shell
├── dist_electron/
│ ├── bundled/..  # webpack 输出的已编译文件
│ ├── [target platform]-unpacked/..  # 未打包的Electron应用 (main app and supporting files)
│ ├── [application name] setup [version].[target binary (exe|dmg|rpm...)]  # Electron应用的安装程序
│ ├── index.js  # 编译好的 background 文件，用于 electron:serve
│ └── ...
├── public/  # 可以使用 __static or process.env.BASE_URL 访问的文件
├── src/
│ ├── background.[js|ts]  # electron 的入口文件 (作为 Electron 的主进程)
│ ├── [main|index].[js|ts]  # app 的入口文件 (作为 Electron 的渲染进程)
│ └── ...
├── package.json  # app 的 package.json 文件
├── ...
```

## 环境变量

阅读 [Vue ClI 文档](https://cli.vuejs.org/guide/mode-and-env.html) 了解如何在 app 中使用环境变量。 所有以 `VUE_APP_` 作为前缀的环境变量，都将在主进程和渲染器进程中可用。

## Web Workers

[Worker-plugin](https://github.com/GoogleChromeLabs/worker-plugin) 在 Electron 和 web 中可以开箱即用。安装它，然后将以下内容添加到您的 `vue.config.js`:

```js
const WorkerPlugin = require('worker-plugin')

module.exports = {
  configureWebpack: {
    plugins: [new WorkerPlugin()]
  }
}
```

现在，像这样创建一个 worker:

```js
new Worker('./worker.js', { type: 'module' })
```
## Using Yarn Workspaces

If you are using [Yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) you need to set `nodeModulesPath` to include both the package node_modules, and the workspace node_modules.

You should also move your eslint config to the workspace root or you'll get lots of weird messages.

This is becuase yarn workspaces 'hoists' shared dependencies to the top level and this plugin needs to be able to scan your node_modules to check for native dependencies to externalize.

For example, with this directory structure:
```
package.json (in workspace root)
packages/
  app/
  components/
```
Inside `packages/app/vue.config.js` add the following line to the plugin config:

```
module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeModulesPath: ['./node_modules', '../../node_modules'],
      ...
    }
  }
}
```


## 它是如何工作的

### 构建命令

build 构建命令包含 3 个主要阶段：渲染构建、 main 主构建和 electron-builder 构建：

1.  **渲染构建**: 这个阶段调用 `vue-cli-service build` 构建，使用一些自定义配置， 这样它就可以正常地与 electron 一起工作。 (渲染过程是你的 standard app.)
2.  **主构建**: 这个阶段是 VCP-Electron-Builder 为主进程 (`src/background.js`) 打包 background 文件。
3.  **Electron-builder 构建**: 此阶段使用 [electron-builder](https://www.electron.build) 将您的 Web 应用程序代码转换为由 [Electron](https://electronjs.org) 提供支持的桌面应用程序。

### 服务命令

serve 服务命令也包括 3 个主要阶段： 主要构建、开发服务器启动和 electron 启动:

1.  **开发服务器启动**：此阶段启动内置开发服务器，并进行一些修改，这样它就可以正常地与 electron 一起工作。
2.  **主构建**：这个阶段，就像在构建命令中一样，打包应用程序的主进程，但处于开发模式。
3.  **Electron launch启动**：此阶段启动电子并告诉它加载上述开发服务器的 url 。

## 这个插件可在生产环境中使用吗？

该插件已准备好在生产环境中使用。它具有完整的 e2e 和单元测试覆盖率，并已在许多大大小小的应用程序中使用。 但是，任何代码都不能避免错误，如果您确实发现了错误，请报告以进行修复。
