(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{378:function(t,s,e){"use strict";e.r(s);var a=e(45),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),e("h2",{attrs:{id:"目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[t._v("#")]),t._v(" 目录")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#目录"}},[t._v("目录")])]),e("li",[e("a",{attrs:{href:"#配置-electron-builder"}},[t._v("配置 Electron Builder")])]),e("li",[e("a",{attrs:{href:"#webpack-配置"}},[t._v("Webpack 配置")])]),e("li",[e("a",{attrs:{href:"#更改输出目录"}},[t._v("更改输出目录")])]),e("li",[e("a",{attrs:{href:"#typescript-选项"}},[t._v("TypeScript 选项")])]),e("li",[e("a",{attrs:{href:"#更改文件加载协议"}},[t._v("更改文件加载协议")])]),e("li",[e("a",{attrs:{href:"#bundling-选项"}},[t._v("Bundling 选项")])]),e("li",[e("a",{attrs:{href:"#electron-的垃圾终端输出"}},[t._v("Electron 的垃圾终端输出")])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"配置-electron-builder"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置-electron-builder"}},[t._v("#")]),t._v(" 配置 Electron Builder")]),t._v(" "),e("p",[t._v("要查看可用的选项，请查看 "),e("a",{attrs:{href:"https://www.electron.build/configuration/configuration",target:"_blank",rel:"noopener noreferrer"}},[t._v("Electron Builder 配置选项"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("它们可以放在 "),e("code",[t._v("vue.config.js")]),t._v(" 中 vue-cli-plugin-electron-builder 的插件选项的 "),e("code",[t._v("builderOptions")]),t._v(" 键下：")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\n\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  pluginOptions"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    electronBuilder"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      builderOptions"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// options placed here will be merged with default configuration and passed to electron-builder")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("传递给 "),e("code",[t._v("electron:build")]),t._v(" 的所有 CLI 参数将转发给 electron-builder 。")])]),t._v(" "),e("h2",{attrs:{id:"webpack-配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-配置"}},[t._v("#")]),t._v(" Webpack 配置")]),t._v(" "),e("p",[t._v("您的常规配置将被扩展，并用于打包渲染器进程(你的 app). 要只将修改的 webpack 配置应用在 Electron 构建时，请使用 "),e("code",[t._v("chainWebpackRendererProcess")]),t._v(" 函数。 要只将修改的 webpack 配置应用在 "),e("a",{attrs:{href:"https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes",target:"_blank",rel:"noopener noreferrer"}},[t._v("Electron 主进程"),e("OutboundLink")],1),t._v(" 中, 请在 "),e("code",[t._v("vue.config.js")]),t._v(" 中 VCP Electron Builder 插件选项中，使用 "),e("code",[t._v("chainWebpackMainProcess")]),t._v(" 函数。要了解更多的 webpack chaining， 请参见 "),e("a",{attrs:{href:"https://github.com/mozilla-neutrino/webpack-chain",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack-chain"),e("OutboundLink")],1),t._v("。 这些函数的工作方式类似于 Vue CLI 提供的 "),e("a",{attrs:{href:"https://cli.vuejs.org/config/#chainwebpack",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("chainWebpack")]),e("OutboundLink")],1),t._v(" 选项.")]),t._v(" "),e("p",[e("strong",[t._v("注意：不要更改主进程的 webpack 输出目录！有关更多信息，请参阅下面的更改输出目录。要更改主进程的入口点，请使用 "),e("code",[t._v("mainProcessFile")]),t._v(" 键, ，不要通过 chaining 修改它。")])]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\n\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  configureWebpack"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Webpack 配置被应用与 web 构建 和 electron 渲染进程")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  pluginOptions"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    electronBuilder"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("chainWebpackMainProcess")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Chain webpack 配置，只作用于 electron 主进程")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("chainWebpackRendererProcess")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Chain webpack 配置，只作用于 electron 渲染进程 （将不作用于 web 构建）")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用它更改 app 主进程的入口点")]),t._v("\n      mainProcessFile"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src/myBackgroundFile.js'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用它更改 app 渲染进程的入口点，默认是 src/[main|index].[js|ts]")]),t._v("\n      rendererProcessFile"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src/myMainRenderFile.js'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 提供一个文件数组，当其中的文件修改了，会重新编译主进程，并重启 Electron 。")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 会默认添加你的主进程文件")]),t._v("\n      mainProcessWatch"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src/myFile1'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src/myFile2'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 提供一个参数列表，当使用 "electron:serve" 启动 Electron 后，')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 主进程 (src/background.js) 可以获取参数")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 注意，当 --debug 标志和 "electron:serve" 一起使用，它将会忽略。')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 你必须自己启动 Electron。")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 命令行参数(不包括 --debug, --dashboard 和 --headless)")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 也会传递给 Electron")]),t._v("\n      mainProcessArgs"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'--arg-name'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'arg-value'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"更改输出目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更改输出目录"}},[t._v("#")]),t._v(" 更改输出目录")]),t._v(" "),e("p",[t._v("如果您不想将文件输出到 dist_electron，您可以在 VCPEB 的插件选项中选择一个自定义文件夹。 您也可以使用参数 "),e("code",[t._v("--dest")]),t._v(" 来更改输出目录。")]),t._v(" "),e("p",[e("strong",[t._v("注意：建议将新目录添加到您的 .gitignore 文件中。")])]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\n\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  pluginOptions"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    electronBuilder"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      outputDir"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'electron-builder-output-dir'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"typescript-选项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#typescript-选项"}},[t._v("#")]),t._v(" TypeScript 选项")]),t._v(" "),e("p",[t._v("Typescript 支持是自动的，不需要配置，只需添加 "),e("code",[t._v("@vue/typescript")]),t._v(" cli 插件。如有必要，有几个选项可用于配置 typescript:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\n\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  pluginOptions"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    electronBuilder"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// option: default // description")]),t._v("\n      disableMainProcessTypescript"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Manually disable typescript plugin for main process. Enable if you want to use regular js for the main process (src/background.js by default).")]),t._v("\n      mainProcessTypeChecking"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Manually enable type checking during webpack bundling for background file.")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Tip 小贴士")]),t._v(" "),e("p",[t._v("如果您决定稍后再添加 "),e("code",[t._v("@vue/typescript")]),t._v(" 插件到您的应用程序，请确保执行 "),e("code",[t._v("vue invoke electron-builder")]),t._v(" ，从而重新调用 VCP-Electron-Builder 的生成器。这将自动将缺少的类型定义插入到您的 "),e("code",[t._v("background.ts")]),t._v(" 文件中。")])]),t._v(" "),e("h2",{attrs:{id:"更改文件加载协议"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更改文件加载协议"}},[t._v("#")]),t._v(" 更改文件加载协议")]),t._v(" "),e("p",[t._v("默认情况下， "),e("code",[t._v("app")]),t._v(" 协议用于加载文件。这允许您使用由 Vue CLI 的 "),e("a",{attrs:{href:"https://cli.vuejs.org/guide/browser-compatibility.html#modern-mode",target:"_blank",rel:"noopener noreferrer"}},[t._v("modern mode"),e("OutboundLink")],1),t._v(" 现代模式创建的 ES6 "),e("code",[t._v('type="module"')]),t._v(" 脚本。如果出于某种原因，您想使用不同的协议，请使用 "),e("code",[t._v("customFileProtocol")]),t._v(" 选项进行设置， 然后在您的 "),e("code",[t._v("background.js")]),t._v(" 文件中进行更改。")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  pluginOptions"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    electronBuilder"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      customFileProtocol"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myCustomProtocol://./'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Make sure to add "./" to the end of the protocol')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If you want to use the file:// protocol, add win.loadURL(`file://${__dirname}/index.html`) to your main process file")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// In place of win.loadURL('app://./index.html'), and set customFileProtocol to './'")]),t._v("\n      customFileProtocol"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// src/background.js")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\nwin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadURL")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myCustomProtocol://./index.html'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Change it here as well")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n")])])]),e("h2",{attrs:{id:"bundling-选项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bundling-选项"}},[t._v("#")]),t._v(" Bundling 选项")]),t._v(" "),e("p",[t._v("默认情况下，应用程序以 "),e("a",{attrs:{href:"https://cli.vuejs.org/guide/browser-compatibility.html#modern-mode",target:"_blank",rel:"noopener noreferrer"}},[t._v("modern mode"),e("OutboundLink")],1),t._v(" 构建。 要禁用此功能，请在 "),e("code",[t._v("electron:build")]),t._v(" 命令中使用 "),e("code",[t._v("--legacy")]),t._v(" 参数. 如果您的应用程序已经打包，并且只需要使用 electron-builder 构建，请传入 "),e("code",[t._v("--skipBundle")]),t._v(" 参数。")]),t._v(" "),e("h2",{attrs:{id:"electron-的垃圾终端输出"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#electron-的垃圾终端输出"}},[t._v("#")]),t._v(" Electron 的垃圾终端输出")]),t._v(" "),e("p",[t._v("Electron 有时会产生一堆垃圾输出，如下所示：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('2018-08-10 22:52:14.068 Electron[90710:4891777] *** WARNING: Textured window <AtomNSWindow: 0x7fd508e75020> is getting an implicitly transparent titlebar. This will break when linking against newer SDKs. Use NSWindow\'s -titlebarAppearsTransparent=YES instead.\n2018-08-10 22:52:37.919 Electron Helper[90714:4892173] Couldn\'t set selectedTextBackgroundColor from default ()\n[90789:0810/225757.360355:ERROR:CONSOLE(0)] "Failed to load https://chrome-devtools-frontend.appspot.com/serve_file/@7accc8730b0f99b5e7c0702ea89d1fa7c17bfe33/product_registry_impl/product_registry_impl_module.js: No \'Access-Control-Allow-Origin\' header is present on the requested resource. Origin \'chrome-devtools://devtools\' is therefore not allowed access. The response had HTTP status code 404.", source: chrome-devtools://devtools/bundled/inspector.html?remoteBase=https://chrome-devtools-frontend.appspot.com/serve_file/@7accc8730b0f99b5e7c0702ea89d1fa7c17bfe33/&can_dock=true&toolbarColor=rgba(223,223,223,1)&textColor=rgba(0,0,0,1)&experiments=true (0)\n[90789:0810/225757.360445:ERROR:CONSOLE(22)] "Empty response arrived for script \'https://chrome-devtools-frontend.appspot.com/serve_file/@7accc8730b0f99b5e7c0702ea89d1fa7c17bfe33/product_registry_impl/product_registry_impl_module.js\'", source: chrome-devtools://devtools/bundled/inspector.js (22)\n[90789:0810/225757.361236:ERROR:CONSOLE(105)] "Uncaught (in promise) Error: Could not instantiate: ProductRegistryImpl.Registry", source: chrome-devtools://devtools/bundled/inspector.js (105)\n[90789:0810/225757.361293:ERROR:CONSOLE(105)] "Uncaught (in promise) Error: Could not instantiate: ProductRegistryImpl.Registry", source: chrome-devtools://devtools/bundled/inspector.js (105)\nApp logging\n[90789:0810/225802.898597:ERROR:CONSOLE(105)] "Uncaught (in promise) Error: Could not instantiate: ProductRegistryImpl.Registry", source: chrome-devtools://devtools/bundled/inspector.js (105)\n[90789:0810/225803.872738:ERROR:CONSOLE(105)] "Uncaught (in promise) Error: Could not instantiate: ProductRegistryImpl.Registry", source: chrome-devtools://devtools/bundled/inspector.js (105)\n[90789:0810/225803.898240:ERROR:CONSOLE(105)] "Uncaught (in promise) Error: Could not instantiate: ProductRegistryImpl.Registry", source: chrome-devtools://devtools/bundled/inspector.js (105)\n[90789:0810/225803.898297:ERROR:CONSOLE(105)] "Uncaught (in promise) Error: Could not instantiate: ProductRegistryImpl.Registry", source: chrome-devtools://devtools/bundled/inspector.js (105)\n...\n')])])]),e("p",[t._v("VCP Electron Builder 将自动为您删除它 (由 "),e("a",{attrs:{href:"https://github.com/sindresorhus/run-electron",target:"_blank",rel:"noopener noreferrer"}},[t._v("run-electron"),e("OutboundLink")],1),t._v(" 提供支持)。 如果您不想删除它，请在插件选项中将 "),e("code",[t._v("removeElectronJunk")]),t._v(" 键设置为 "),e("code",[t._v("false")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\n\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  pluginOptions"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    electronBuilder"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      removeElectronJunk"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);