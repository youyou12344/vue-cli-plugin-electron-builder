(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{369:function(e,s,t){"use strict";t.r(s);var n=t(45),a=Object(n.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"common-issues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#common-issues"}},[e._v("#")]),e._v(" Common Issues")]),e._v(" "),t("h2",{attrs:{id:"blank-screen-on-builds-but-works-fine-on-serve"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#blank-screen-on-builds-but-works-fine-on-serve"}},[e._v("#")]),e._v(" Blank screen on builds, but works fine on serve")]),e._v(" "),t("p",[e._v("This issue is likely caused when Vue Router is operating in "),t("code",[e._v("history")]),e._v(" mode. In Electron, it only works in "),t("code",[e._v("hash")]),e._v(" mode. To fix this, edit your "),t("code",[e._v("src/router.(js|ts)")]),e._v(":")]),e._v(" "),t("p",[e._v("If using Vue 2:")]),e._v(" "),t("div",{staticClass:"language-diff extra-class"},[t("pre",{pre:!0,attrs:{class:"language-diff"}},[t("code",[e._v("export default new Router({\n"),t("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[t("span",{pre:!0,attrs:{class:"token prefix deleted"}},[e._v("-")]),t("span",{pre:!0,attrs:{class:"token line"}},[e._v(" mode: 'history',\n")])]),t("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t("span",{pre:!0,attrs:{class:"token prefix inserted"}},[e._v("+")]),t("span",{pre:!0,attrs:{class:"token line"}},[e._v(" mode: process.env.IS_ELECTRON ? 'hash' : 'history',\n")])]),e._v("})\n")])])]),t("p",[e._v("If using Vue 3:")]),e._v(" "),t("div",{staticClass:"language-diff extra-class"},[t("pre",{pre:!0,attrs:{class:"language-diff"}},[t("code",[e._v("const router = createRouter({\n"),t("span",{pre:!0,attrs:{class:"token deleted-sign deleted"}},[t("span",{pre:!0,attrs:{class:"token prefix deleted"}},[e._v("-")]),t("span",{pre:!0,attrs:{class:"token line"}},[e._v(" history: createWebHistory(),\n")])]),t("span",{pre:!0,attrs:{class:"token unchanged"}},[t("span",{pre:!0,attrs:{class:"token prefix unchanged"}},[e._v(" ")]),t("span",{pre:!0,attrs:{class:"token line"}},[e._v(" // (you will need to import these functions from 'vue-router')\n")])]),t("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t("span",{pre:!0,attrs:{class:"token prefix inserted"}},[e._v("+")]),t("span",{pre:!0,attrs:{class:"token line"}},[e._v(" history: process.env.IS_ELECTRON ? createWebHashHistory() : createWebHistory(),\n")])]),e._v("})\n")])])]),t("p",[e._v("This will have the router operate in hash mode in Electron builds, but won't affect web builds.")]),e._v(" "),t("h2",{attrs:{id:"electron-serve-freezes-on-launching-electron"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#electron-serve-freezes-on-launching-electron"}},[e._v("#")]),e._v(" "),t("code",[e._v("electron:serve")]),e._v(" freezes on "),t("code",[e._v("Launching Electron...")])]),e._v(" "),t("p",[e._v("Often this issue is caused when Vue Devtools fails to install. This may happen if Vue Devtools cannot be accessed in your location (eg. China). To fix this, you may have to disable Vue Devtools by removing the following lines from your "),t("code",[e._v("src/background.(js|ts)")]),e._v(" file:")]),e._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("isDevelopment "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("process"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("env"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[e._v("IS_TEST")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Install Vue Devtools")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("installExtension")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token constant"}},[e._v("VUEJS_DEVTOOLS")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("h2",{attrs:{id:"exceptions-in-async-functions-not-getting-logged-to-console"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#exceptions-in-async-functions-not-getting-logged-to-console"}},[e._v("#")]),e._v(" Exceptions in "),t("code",[e._v("async")]),e._v(" functions not getting logged to console")]),e._v(" "),t("p",[e._v("This bug can be fixed by adding the following code to the entrypoint of your Vue App "),t("code",[e._v("src/main.js")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[e._v("process"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'unhandledRejection'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("error")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("error")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("error"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),t("p",[e._v("See "),t("a",{attrs:{href:"https://github.com/nklayman/vue-cli-plugin-electron-builder/issues/118",target:"_blank",rel:"noopener noreferrer"}},[e._v("#118"),t("OutboundLink")],1),e._v(" for more details. Thanks to "),t("a",{attrs:{href:"https://github.com/dspangenberg",target:"_blank",rel:"noopener noreferrer"}},[e._v("dspangenberg"),t("OutboundLink")],1),e._v(" for the fix.")]),e._v(" "),t("h2",{attrs:{id:"other-issues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#other-issues"}},[e._v("#")]),e._v(" Other issues")]),e._v(" "),t("p",[e._v("Many issues can be solved by re-invoking the generator of Vue CLI Plugin Electron Builder. This allows it to add newer code to your project files. You may need to do this after upgrading the plugin.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# In the root dir of your project")]),e._v("\nvue invoke electron-builder\n")])])])])}),[],!1,null,null,null);s.default=a.exports}}]);