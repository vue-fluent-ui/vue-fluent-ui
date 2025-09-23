# Agents.md

## 提示
你可以自由读取任何文件
如果你有不确定的知识，请积极上网搜索
## 核心目标

本组件库的核心目标是精确复刻 Microsoft WinUI 3 的视觉风格与交互体验，为 Vue.js 应用带来原生的 Fluent Design 感受。

## 主题样式

设计令牌位置: `packages/vue-fluent-ui/src/theme/theme.type.ts`
请在设计样式的时候使用@include b、e、m等工具mixin，在使用设计令牌的时候使用@token
具体的工具，请参考`packages/vue-fluent-ui/src/styles/mixins/mixins.scss`