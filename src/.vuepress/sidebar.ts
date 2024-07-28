import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    "portfolio",
    {
      text: "基本指南",
      icon: "pen-nib",
      prefix: "basic",
      link: "basic/",
      children: "structure"
    },
  ],
});
