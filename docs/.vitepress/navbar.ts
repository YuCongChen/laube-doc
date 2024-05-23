import { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
  {
    text: "首页",
    link: "/",
  },
  {
    text: "通识",
    items: [
      {
        text: "Git操作",
        link: "/column/Common/001_git",
      },
    ],
  },
  {
    text: "前端",
    items: [
      {
        text: "React使用指南",
        link: "/column/React/001_jsx",
      },
      {
        text: "TypeScript厨房",
        link: "/column/TypeScript/001_type",
      },
    ],
  },
  {
    text: "Rust",
    items: [
      {
        text: "看看Rust到底有多难",
        link: "/rust/learn",
      },
    ],
  },
];
