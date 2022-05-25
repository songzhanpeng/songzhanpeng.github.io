import { defineUserConfig, defaultTheme } from "vuepress";
// import googleAnalyticsPlugin from '@vuepress/plugin-google-analytics'

export default defineUserConfig({
  lang: "zh-CN",
  title: "你好， Scratch-Gui ！",
  description: "这是我的第一个 VuePress 站点",
  base:'/',
  theme: defaultTheme({
    logo: '/images/hero.webp',
    navbar: [
      // NavbarItem
      {
        text: "首页",
        link: "/",
      },
      // NavbarGroup
      { 
        text: "目录",
        children: ['/bar/README.md']
      },
      {
        text: "宋子羡的csdn主页",
        link: "https://blog.csdn.net/m0_60009963",
      },
      // 字符串 - 页面文件路径
      // "/bar/README.md",
    ],
    backToHome:'返回首页'
  }),
});
