import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "文档演示",
  description: "vuepress-theme-hope 的文档演示",

  theme,
  
  plugins: [
    searchProPlugin (
      {
        indexContent: true,
        autoSuggestions: true,
        queryHistoryCount: 0,
        resultHistoryCount: -1
      }
    ),
  ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
