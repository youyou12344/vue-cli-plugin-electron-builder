---
sidebarDepth: 2
---

# 测试和调试

## 调试

### Visual Studio Code

有关在 [Visual Studio Code](https://code.visualstudio.com/) 中调试主进程和渲染器进程的信息，请参阅 [VSCode 调试方法](./recipes.md#debugging-with-vscode) 。


### 渲染器进程 (Main App)

您可以使用 [Vue Devtools 调试渲染器进程](https://github.com/vuejs/vue-devtools) 。会为你自动安装 Vue Devtools（由[electron-devtools-installer](https://github.com/MarshallOfSound/electron-devtools-installer) 提供支持）。你还可以使用[Chrome 调试器](https://developers.google.com/web/tools/chrome-devtools/javascript/)。


### 主进程 (Background File)

首先，阅读 [Electron 使用说明](https://electronjs.org/docs/tutorial/debugging-main-process) 中关于调试主进程的信息。在通过调试器启动 Electron 之前，在调试模式下执行 `electron:serve` 并带上 `--debug` 参数。这将阻止 Electron 自动启动并启用 source map 支持。通过将其作为参传递，让 Electron 定位您的输出目录（默认是 `dist_electron`）（即 `electron --inspect=5858 dist_electron`）。



::: tip 提示
如果您使用 [Spectron](https://electronjs.org/spectron) 进行测试，确保设置 `process.env.IS_TEST` 为 `true` 。这将防止加载开发工具而导致错误。
:::

## 测试

:::tip 提示
如果你不想使用 Spectron ，你仍然可以使用这个功能，只需设置 `noSpectron` 为 `true`
:::

在继续之前，请阅读有关 [Spectron](https://github.com/electron/spectron) 的信息。 本指南假定您具备使用 Spectron 的基本知识。

vue-cli-plugin-electron-builder 导出一个 `testWithSpectron` 函数。这个函数将运行 `electron:serve` ，但不是启动 electron ，而是一个新的 Spectron 应用程序将被创建并附加到开发服务器。这可用于使用 Spectron 运行 e2e 测试。



```javascript
// This example uses Jest, but any testing framework will work as well
// Jest tests MUST run in the node environment, add this to the top of each electron test:
/**
 * @jest-environment node
 */
const spectron = require('spectron')
const { testWithSpectron } = require('vue-cli-plugin-electron-builder')
jest.setTimeout(50000)

test('a window is created', async () => {
  // Only v2.0+ require you to pass spectron as an arg
  const { stdout, url, stopServe, app } = await testWithSpectron(spectron)
  // stdout is the log of electron:serve
  console.log(`electron:serve returned: ${stdout}`)
  // url is the url for the dev server created with electron:serve
  console.log(`the dev server url is: ${url}`)
  // app is a spectron instance. It is attached to the dev server, launched, and waited for to load.
  expect(await app.client.getWindowCount()).toBe(1)
  // Before your tests end, make sure to stop the dev server and spectron
  await stopServe()
})
```

完整的示例可用于 [jest](https://github.com/nklayman/vue-cli-plugin-electron-builder/blob/master/generator/templates/tests-jest/tests/unit/electron.spec.js) 和 [mocha](https://github.com/nklayman/vue-cli-plugin-electron-builder/blob/master/generator/templates/tests-mocha/tests/unit/electron.spec.js) 。如果您的项目中已经安装了 jest 或 mocha，它们将随此插件自动添加。

`testWithSpectron` 接受一个配置参数。该配置参数具有定义的属性：

```javascript
const spectron = require('spectron')
const { testWithSpectron } = require('vue-cli-plugin-electron-builder')

testWithSpectron(
  // Import of spectron, only required for v2.0+
  spectron,
  {
  noSpectron: false, // Disables launching of Spectron. Enable this if you want to launch spectron yourself.
  noStart: false, // Do not start Spectron app or wait for it to load. You will have to call app.start() and app.client.waitUntilWindowLoaded() before running any tests.
  forceDev: false, // Run dev server in development mode. By default it is run in production (serve --mode production).
  mode: 'test', // Set custom Vue env mode.
  spectronOptions: {} // Custom options to be passed to Spectron. Defaults are already set, only use this if you need something customized.
})
```

:::warning 警告
确保 spectron 与 electron 一起更新。查看 [spectron 版本 map](https://github.com/electron-userland/spectron#version-map) 来确定您应该使用什么版本的 spectron 。
:::

### 使用 Electron 版本的 Node 进行常规单元测试


如果您有 native 依赖项（如 Better-sqlite3），您可能在运行 `jest` 时会遇到问题，并出现 native 依赖项 node 版本冲突错误。

要解决此问题，请使用 electron 版本的 node 运行 Jest 测试。这有点 hacky，但这很有效
To resolve this, run your Jest tests in the same version of node that electron uses. It's a bit hacky, but this works well:

```
TEST_MODE=1 ELECTRON_RUN_AS_NODE=1 ./node_modules/electron/dist/electron ./node_modules/jest/bin/jest.js
```
您可以 `test:unit` 在 package.json 中将其设置为默认使用它而不是默认命令。这是 [Beekeeper Studio](https://github.com/beekeeper-studio/beekeeper-studio) 使用的。
