import { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Sidebar = {
  "/column/Common/": [
    {
      text: "通识",
      items: [
        {
          text: "Git操作",
          link: "/column/Common/001_git",
        },
      ],
    },
  ],
  "/column/React/": [
    {
      text: "React基础语法",
      items: [
        {
          text: "JSX",
          link: "/column/React/001_jsx",
        },
        {
          text: "Hooks",
          link: "/column/React/002_hooks",
        },
      ],
    },
  ],
  "/column/TypeScript/": [
    {
      text: "TypeScript厨房",
      items: [
        {
          text: "基础类型",
          link: "/column/TypeScript/001_type",
        },
      ],
    },
  ],
};
