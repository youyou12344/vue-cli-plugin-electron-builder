module.exports = {
    title: 'Vue CLI Plugin Electron Builder',
    description: 'Easily Build Your Vue.js App For Desktop With Electron',
    base: '/vue-cli-plugin-electron-builder/',
    plugins: [
      [
        '@vuepress/google-analytics',
        {
          'ga': 'UA-134189455-2'
        }
      ]
    ],
    head: [
      ['link', {
        rel: 'shortcut icon',
        href: '/favicon.ico'
      }],
      ['script', {
        src: '/scripts/scrollToHash.js'
      }],
      // Google search property verification
      [
        'meta',
        {
          name: 'google-site-verification',
          content: 'It9QDm7l8m-gYoVuBFVzERjx0MapaegfY1AMru9wFCc'
        }
      ]
    ],
    locales: {
      // 键名是该语言所属的子路径
      // 作为特例，默认语言可以使用 '/' 作为其路径。
      '/': {
        lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
        title: 'Vue CLI Plugin Electron Builder',
        description: 'Easily Build Your Vue.js App For Desktop With Electron',
      },
      '/zh/': {
        lang: 'zh-CN',
        title: 'Vue CLI Plugin Electron Builder',
        description: '轻松将您的 Vue.js 应用程序构建为 Electron 桌面应用程序。'
      }
    },
    themeConfig: {
      locales: {
        '/': {
          selectText: 'Languages',
          label: 'English',
          ariaLabel: 'Languages',
          nav: [{
              text: 'Home',
              link: '/'
            },
            {
              text: 'Guide',
              link: '/guide/'
            },
            {
              text: 'v1.x',
              link: 'https://github.com/nklayman/vue-cli-plugin-electron-builder/tree/v1'
            },
            {
              text: 'Changelog',
              link: 'https://github.com/nklayman/vue-cli-plugin-electron-builder/releases'
            },
            {
              text: 'Sponsor',
              link: 'https://github.com/sponsors/nklayman'
            }
          ],
          sidebar: {
            '/guide/': [
              '',
              'guide',
              'configuration',
              'recipes',
              'security',
              'testingAndDebugging',
              'commonIssues'
            ]
          },
          repo: 'nklayman/vue-cli-plugin-electron-builder',
          docsDir: 'docs',
          editLinks: true,
          editLinkText: 'Is something wrong or missing? Edit this page on github!'
        },
        '/zh/': {
          // 多语言下拉菜单的标题
          selectText: '选择语言',
          // 该语言在下拉菜单中的标签
          label: '简体中文',
          nav: [{
              text: '主页',
              link: '/zh/'
            },
            {
              text: '指南',
              link: '/zh/guide/'
            },
            {
              text: 'v1.x',
              link: 'https://github.com/nklayman/vue-cli-plugin-electron-builder/tree/v1'
            },
            {
              text: '变更日志',
              link: 'https://github.com/nklayman/vue-cli-plugin-electron-builder/releases'
            },
            {
              text: '赞助',
              link: 'https://github.com/sponsors/nklayman'
            }
          ],
          sidebar: {
            '/zh/guide/': [
              '',
              'guide',
              'configuration',
              'recipes',
              'security',
              'testingAndDebugging',
              'commonIssues'
            ]
          },
          repo: 'nklayman/vue-cli-plugin-electron-builder',
          docsDir: 'docs',
          editLinks: true,
          // 编辑链接文字
          editLinkText: '有什么不对劲还是遗漏了？ 在 GitHub 上编辑此页！',
          // Service Worker 的配置
          serviceWorker: {
            updatePopup: {
              message: "发现新内容可用.",
              buttonText: "刷新"
            }
          },
        },
      },
    }
}
