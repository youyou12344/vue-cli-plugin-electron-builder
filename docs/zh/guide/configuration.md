---
sidebarDepth: 2
---

# 配置

## 目录

[[toc]]

## 配置 Electron Builder

要查看可用的选项，请查看 [Electron Builder 配置选项](https://www.electron.build/configuration/configuration)

它们可以放在 `vue.config.js` 中 vue-cli-plugin-electron-builder 的插件选项的 `builderOptions` 键下：

```javascript
// vue.config.js

module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        // options placed here will be merged with default configuration and passed to electron-builder
      }
    }
  }
}
```

:::tip提示
传递给 `electron:build` 的所有 CLI 参数将转发给 electron-builder 。
:::

## Webpack 配置

您的常规配置将被扩展，并用于打包渲染器进程(你的 app). 要只将修改的 webpack 配置应用在 Electron 构建时，请使用 `chainWebpackRendererProcess` 函数。 要只将修改的 webpack 配置应用在 [Electron 主进程](https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes) 中, 请在 `vue.config.js` 中 VCP Electron Builder 插件选项中，使用 `chainWebpackMainProcess` 函数。要了解更多的 webpack chaining， 请参见 [webpack-chain](https://github.com/mozilla-neutrino/webpack-chain)。 这些函数的工作方式类似于 Vue CLI 提供的 [`chainWebpack`](https://cli.vuejs.org/config/#chainwebpack) 选项.

**注意：不要更改主进程的 webpack 输出目录！有关更多信息，请参阅下面的更改输出目录。要更改主进程的入口点，请使用 `mainProcessFile` 键, ，不要通过 chaining 修改它。**

```javascript
// vue.config.js

module.exports = {
  configureWebpack: {
    // Webpack 配置被应用与 web 构建 和 electron 渲染进程
  },
  pluginOptions: {
    electronBuilder: {
      chainWebpackMainProcess: (config) => {
        // Chain webpack 配置，只作用于 electron 主进程
      },
      chainWebpackRendererProcess: (config) => {
        // Chain webpack 配置，只作用于 electron 渲染进程 （将不作用于 web 构建）
      },
      // 使用它更改 app 主进程的入口点
      mainProcessFile: 'src/myBackgroundFile.js',
      // 使用它更改 app 渲染进程的入口点，默认是 src/[main|index].[js|ts]
      rendererProcessFile: 'src/myMainRenderFile.js',
      // 提供一个文件数组，当其中的文件修改了，会重新编译主进程，并重启 Electron 。
      // 会默认添加你的主进程文件
      mainProcessWatch: ['src/myFile1', 'src/myFile2'],
      // 提供一个参数列表，当使用 "electron:serve" 启动 Electron 后，
      // 主进程 (src/background.js) 可以获取参数
      // 注意，当 --debug 标志和 "electron:serve" 一起使用，它将会忽略。
      // 你必须自己启动 Electron。
      // 命令行参数(不包括 --debug, --dashboard 和 --headless)
      // 也会传递给 Electron
      mainProcessArgs: ['--arg-name', 'arg-value']
    }
  }
}
```

## 更改输出目录

如果您不想将文件输出到 dist_electron，您可以在 VCPEB 的插件选项中选择一个自定义文件夹。 您也可以使用参数 `--dest` 来更改输出目录。

**注意：建议将新目录添加到您的 .gitignore 文件中。**

```javascript
// vue.config.js

module.exports = {
  pluginOptions: {
    electronBuilder: {
      outputDir: 'electron-builder-output-dir'
    }
  }
}
```

## TypeScript 选项

Typescript 支持是自动的，不需要配置，只需添加 `@vue/typescript` cli 插件。如有必要，有几个选项可用于配置 typescript:

```javascript
// vue.config.js

module.exports = {
  pluginOptions: {
    electronBuilder: {
      // option: default // description
      disableMainProcessTypescript: false, // Manually disable typescript plugin for main process. Enable if you want to use regular js for the main process (src/background.js by default).
      mainProcessTypeChecking: false // Manually enable type checking during webpack bundling for background file.
    }
  }
}
```

:::tip Tip 小贴士
如果您决定稍后再添加 `@vue/typescript` 插件到您的应用程序，请确保执行 `vue invoke electron-builder` ，从而重新调用 VCP-Electron-Builder 的生成器。这将自动将缺少的类型定义插入到您的 `background.ts` 文件中。
:::

## 更改文件加载协议

默认情况下， `app` 协议用于加载文件。这允许您使用由 Vue CLI 的 [modern mode](https://cli.vuejs.org/guide/browser-compatibility.html#modern-mode) 现代模式创建的 ES6 `type="module"` 脚本。如果出于某种原因，您想使用不同的协议，请使用 `customFileProtocol` 选项进行设置， 然后在您的 `background.js` 文件中进行更改。

```javascript
// vue.config.js
module.exports = {
  pluginOptions: {
    electronBuilder: {
      customFileProtocol: 'myCustomProtocol://./' // Make sure to add "./" to the end of the protocol
      // If you want to use the file:// protocol, add win.loadURL(`file://${__dirname}/index.html`) to your main process file
      // In place of win.loadURL('app://./index.html'), and set customFileProtocol to './'
      customFileProtocol: './'
    }
  }
}

// src/background.js
// ...
win.loadURL('myCustomProtocol://./index.html') // Change it here as well
// ...
```

## Bundling 选项

默认情况下，应用程序以 [modern mode](https://cli.vuejs.org/guide/browser-compatibility.html#modern-mode) 构建。 要禁用此功能，请在 `electron:build` 命令中使用 `--legacy` 参数. 如果您的应用程序已经打包，并且只需要使用 electron-builder 构建，请传入 `--skipBundle` 参数。

## Electron 的垃圾终端输出

Electron 有时会产生一堆垃圾输出，如下所示：

```
2018-08-10 22:52:14.068 Electron[90710:4891777] *** WARNING: Textured window <AtomNSWindow: 0x7fd508e75020> is getting an implicitly transparent titlebar. This will break when linking against newer SDKs. Use NSWindow's -titlebarAppearsTransparent=YES instead.
2018-08-10 22:52:37.919 Electron Helper[90714:4892173] Couldn't set selectedTextBackgroundColor from default ()
[90789:0810/225757.360355:ERROR:CONSOLE(0)] "Failed to load https://chrome-devtools-frontend.appspot.com/serve_file/@7accc8730b0f99b5e7c0702ea89d1fa7c17bfe33/product_registry_impl/product_registry_impl_module.js: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'chrome-devtools://devtools' is therefore not allowed access. The response had HTTP status code 404.", source: chrome-devtools://devtools/bundled/inspector.html?remoteBase=https://chrome-devtools-frontend.appspot.com/serve_file/@7accc8730b0f99b5e7c0702ea89d1fa7c17bfe33/&can_dock=true&toolbarColor=rgba(223,223,223,1)&textColor=rgba(0,0,0,1)&experiments=true (0)
[90789:0810/225757.360445:ERROR:CONSOLE(22)] "Empty response arrived for script 'https://chrome-devtools-frontend.appspot.com/serve_file/@7accc8730b0f99b5e7c0702ea89d1fa7c17bfe33/product_registry_impl/product_registry_impl_module.js'", source: chrome-devtools://devtools/bundled/inspector.js (22)
[90789:0810/225757.361236:ERROR:CONSOLE(105)] "Uncaught (in promise) Error: Could not instantiate: ProductRegistryImpl.Registry", source: chrome-devtools://devtools/bundled/inspector.js (105)
[90789:0810/225757.361293:ERROR:CONSOLE(105)] "Uncaught (in promise) Error: Could not instantiate: ProductRegistryImpl.Registry", source: chrome-devtools://devtools/bundled/inspector.js (105)
App logging
[90789:0810/225802.898597:ERROR:CONSOLE(105)] "Uncaught (in promise) Error: Could not instantiate: ProductRegistryImpl.Registry", source: chrome-devtools://devtools/bundled/inspector.js (105)
[90789:0810/225803.872738:ERROR:CONSOLE(105)] "Uncaught (in promise) Error: Could not instantiate: ProductRegistryImpl.Registry", source: chrome-devtools://devtools/bundled/inspector.js (105)
[90789:0810/225803.898240:ERROR:CONSOLE(105)] "Uncaught (in promise) Error: Could not instantiate: ProductRegistryImpl.Registry", source: chrome-devtools://devtools/bundled/inspector.js (105)
[90789:0810/225803.898297:ERROR:CONSOLE(105)] "Uncaught (in promise) Error: Could not instantiate: ProductRegistryImpl.Registry", source: chrome-devtools://devtools/bundled/inspector.js (105)
...
```

VCP Electron Builder 将自动为您删除它 (由 [run-electron](https://github.com/sindresorhus/run-electron) 提供支持)。 如果您不想删除它，请在插件选项中将 `removeElectronJunk` 键设置为 `false`:

```javascript
// vue.config.js

module.exports = {
  pluginOptions: {
    electronBuilder: {
      removeElectronJunk: false
    }
  }
}
```
