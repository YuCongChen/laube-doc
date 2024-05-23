import { defineConfig } from 'vitepress'
import { nav } from './navbar'
import { sidebar } from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BigLaube",
  themeConfig: {
    logo: "/avatar.png",
    nav,
    sidebar,
    outline: {
      level: [2, 6],
      label: '目录'
    }
  }
})
