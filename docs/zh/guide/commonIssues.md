---
sidebarDepth: 2
---

# 常见问题

## 构建时出现空白屏幕，但在服务上运行良好

这个问题很可能是 Vue Router 在 `history` mode 下运行时引起的。 在 Electron 中， 它只在hash模式下工作。要解决此问题，请编辑您的 `src/router.(js|ts)`:

如果使用 Vue 2:

```diff
export default new Router({
- mode: 'history',
+ mode: process.env.IS_ELECTRON ? 'hash' : 'history',
})
```

如果使用 Vue 3:

```diff
const router = createRouter({
- history: createWebHistory(),
  // (you will need to import these functions from 'vue-router')
+ history: process.env.IS_ELECTRON ? createWebHashHistory() : createWebHistory(),
})
```

这将使 router 在 Electron 构建中以哈希模式运行，但不会影响 Web 构建。

## `electron:serve` 卡在 `Launching Electron...`

通常这个问题是由于 Vue Devtools 安装失败引起的。如果您所在的位置（例如：中国）无法访问 Vue Devtools，则可能会发生这种情况。要解决此问题，您可能必须通过从 src/background.(js|ts)` 文件中删除以下面的代码，实现禁用 Vue Devtools ：

```javascript
if (isDevelopment && !process.env.IS_TEST) {
  // Install Vue Devtools
  await installExtension(VUEJS_DEVTOOLS)
}
```

## `async` 函数中的异常未记录到 console

可以通过在 Vue App `src/main.js` 的入口点添加以下代码来修复这个 bug:

```javascript
process.on('unhandledRejection', (error) => {
  console.error(error)
})
```

更多细节参阅 [#118](https://github.com/nklayman/vue-cli-plugin-electron-builder/issues/118)。感谢[dspangenberg](https://github.com/dspangenberg) 修复它。

## 其他问题

很多问题可以通过重新调用 Vue CLI Plugin Electron Builder 的生成器来解决。这允许它向您的项目文件添加更新的代码。您可能需要在升级插件后执行此操作。

```bash
# 在项目根目录下
vue invoke electron-builder
```
