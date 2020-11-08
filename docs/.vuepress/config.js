const navConfig = require('./config/nav')
const sidebarConfig = require('./config/sidebar')

module.exports = {
  base: '/blog-two/',
  // 网页的 title和左上角 绑定此处的值
  title: '彭先生的个人网站',
  description: '彭先生的个人网站',
  // dest: './dist',//默认在 .vuepress 下
  port: '7777',
  head: [
    // 关键词
    ['meta', { name: 'Keywords', content: '彭先生的主页,彭先生的VuePress' }],
    // 作者
    ['meta', { name: 'author', content: '彭先生' }],
    ['link', { rel: 'icon', href: 'https://cn.vuejs.org/images/logo.png' }],
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: navConfig,
    sidebar: sidebarConfig,
    sidebarDepth: 2,
    displayAllHeaders: true, // 默认值：false 显示所有的侧边栏
    lastUpdated: 'Last Updated',
    //导航栏左上角 logo
    logo: "/images/logo.png",
    searchMaxSuggestoins: 10,
    serviceWorker: {
      updatePopup: {
        message: "有新的内容.",
        buttonText: '更新'
      }
    },
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页 ！'
  }
}
