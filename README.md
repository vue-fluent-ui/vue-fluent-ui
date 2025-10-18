# Vue Fluent UI

[![license](https://img.shields.io/npm/l/vue-fluent-ui)](https://github.com/your-username/vue-fluent-ui/blob/main/LICENSE)
[![npm version](https://img.shields.io/npm/v/vue-fluent-ui.svg)](https://www.npmjs.com/package/vue-fluent-ui)

一个致力于在 Vue.js 中精确复刻 Microsoft WinUI 3 视觉风格与交互体验的组件库，为 Web 应用带来媲美原生 Windows 应用的
Fluent Design 感受。

---

**🚧 注意：本项目正处于非常早期的开发阶段，核心功能尚在开发中，特性并未完全实现，API 可能会随时变更，不建议用于生产环境。**

欢迎有兴趣的开发者关注或参与贡献。

## ✨ 特性

- **忠于设计**: 严格遵循 Microsoft Fluent Design System (WinUI 3) 的设计规范。
- **Vue 3 & Composition API**: 为现代 Vue 应用量身打造。
- **TypeScript 支持**: 提供完整的类型定义。
- **可定制主题**: 深度集成的设计令牌系统，轻松实现亮色/暗色模式切换和个性化。

## 📦 安装

```bash
pnpm add vue-fluent-ui
```

## 🚀 快速上手

首先，在你的根组件 (例如 `App.vue`) 中使用 `VfProvider` 包裹你的整个应用。`VfProvider` 会自动注入主题和全局样式。

```vue

<template>
  <VfProvider>
    <!-- Your App Content -->
    <VfButton appearance="primary">Click Me</VfButton>
    <VfToggleSwitch label="Toggle me" />
  </VfProvider>
</template>

<script setup lang="ts">
  // VfProvider 和其他需要的组件需要被显式导入
  import {VfProvider, VfButton, VfToggleSwitch} from 'vue-fluent-ui'
</script>
```

> [!IMPORTANT]
> `VfProvider` 是必须的，所有 `vue-fluent-ui` 组件都应该被包裹在 `VfProvider` 内部才能正常显示。

## ✅ 组件状态

- [x] Provider
- [x] Button
- [x] ToggleSwitch
- [ ] ... 更多组件正在路上

## 🤝 贡献

欢迎各种形式的贡献！你可以：

1. Fork并Clone本仓库。
2. 执行 `pnpm install` 安装依赖。
3. 执行 `pnpm dev` 启动 Playground 进行开发和调试。
4. 向我们提交Pull Request

## 📄 许可证

采用 [MIT](./LICENSE) 许可证。