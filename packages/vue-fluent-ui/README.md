# vue-fluent-ui

Vue Fluent UI 是一个致力于在 Vue.js 中复刻 Microsoft WinUI 3 视觉风格与交互体验的组件库。

有关项目的详细信息、贡献指南和发展路线图，请访问我们的 [主仓库](https://github.com/your-username/vue-fluent-ui)。

## 📦 安装

```bash
pnpm add vue-fluent-ui
```

## 🚀 使用

在你的根组件 (例如 `App.vue`) 中使用 `VfProvider` 包裹你的整个应用。`VfProvider` 会自动注入主题和全局样式。

```vue

<template>
  <VfProvider>
    <!-- Your App Content -->
    <VfButton appearance="primary">Click Me</VfButton>
  </VfProvider>
</template>

<script setup lang="ts">
  // VfProvider 和其他需要的组件需要被显式导入
  import {VfProvider, VfButton} from 'vue-fluent-ui'
</script>
```

> [!IMPORTANT]
> `VfProvider` 是必须的，所有 `vue-fluent-ui` 组件都应该被包裹在 `VfProvider` 内部才能正常显示。

## 📄 许可证

[MIT](./LICENSE)