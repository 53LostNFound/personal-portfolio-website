# 个人作品集网站

一个使用 React + TypeScript + Vite + Tailwind CSS 开发的现代化个人作品集网站。

![网站截图](https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=600&fit=crop)

## 🌐 在线预览

**网站地址**: [https://53lostnfound.github.io/personal-portfolio-website/](https://53lostnfound.github.io/personal-portfolio-website/)

## ✨ 功能特性

- 🎨 **深色主题** - 现代化的深色配色方案，支持渐变色强调
- 📱 **响应式设计** - 完美适配桌面端、平板和移动设备
- 🎭 **流畅动画** - 使用 Framer Motion 实现优雅的滚动和交互动画
- 🧭 **固定导航** - 顶部固定导航栏，支持平滑滚动跳转
- 🏠 **首页展示** - 大标题、个人简介和头像展示
- 👤 **关于我** - 详细介绍、技能列表和特长展示
- 💼 **项目展示** - 项目卡片列表，包含截图、描述和技术栈
- 📧 **联系方式** - 邮"dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```bash
git clone https://github.com/53LostNFound/personal-portfolio-website.git
cd personal-portfolio-website
```

2. **安装依赖**

```bash
npm install
```

3. **启动开发服务器**

```bash
npm run dev
```

4. **构建生产版本**

```bash
npm run build
```

5. **预览生产构建**

```bash
npm run preview
```

## 📝 自定义内容

### 修改个人信息

编辑以下文件来自定义网站内容：

- `src/components/Hero.tsx` - 首页大标题和简介
- `src/components/About.tsx` - 关于我部分的描述
- `src/data/skills.ts` - 技能列表
- `src/data/projects.ts` - 项目展示数据
- `src/components/Contact.tsx` - 联系方式

### 修改主题颜色

编辑 `tailwind.config.js` 文件中的颜色配置：

```javascript
colors: {
  background: '#0a0a0a',  // 背景色
  foreground: '#ffffff',  // 文字色
}
```

## 🚀 部署

本项目使用 GitHub Actions 自动部署到 GitHub Pages。

### 自动部署

每次推送到 `main` 分支时，GitHub Actions 会自动构建并部署网站。

### 手动触发部署

1. 进入仓库的 **Actions** 标签页
2. 选择 **Deploy to GitHub Pages** 工作流
3. 点击 **Run workflow** 按钮

### 部署状态

查看部署状态：
- 仓库地址: https://github.com/53LostNFound/personal-portfolio-website
- Actions 页面: https://github.com/53LostNFound/personal-portfolio-website/actions

## 📄 许可证

[MIT](LICENSE)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📧 联系方式

- GitHub: [@53LostNFound](https://github.com/53LostNFound)
- 邮箱: developer@example.com

---

使用 ❤️ 和 React 构建
