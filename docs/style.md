'''# BEM 样式系统最佳实践

本文档旨在为 `vue-fluent-ui` 项目沉淀一套清晰、可维护且可扩展的 BEM 样式架构规范。所有组件的样式开发都应遵循本文档所描述的最佳实践。

## 设计哲学：实用的 BEM

我们采用“实用主义”的 BEM 方法论。与“原教旨主义”的 BEM 不同，我们不追求绝对的样式解耦，而是在“纯粹性”和“工程效率”之间取得平衡。

核心思想是：**将一个组件（Block + Elements）视为一个有机的整体**
。允许一个父级元素（无论是块或元素）的状态（State）或修饰符（Modifier）去影响其后代元素的样式。

这种“上下文样式”的实践，通过牺牲微不足道的理论纯粹性，换来了巨大的工程便利性，包括更简洁的 HTML
结构、更简单的组件逻辑和更高的代码可维护性。这是现代组件库开发的事实标准。

## 两大核心场景与实践

根据组件的复杂度，我们将其分为两种类型，并采用不同的实践策略。

### 场景一：原子组件（Simple Components）

- **定义**：指那些不可再分的、单一的组件实体，如 `Button`、`Badge` 等。它们通常只包含一个主要的 HTML 元素。

- **实践规则**：**将状态（State）和修饰符（Modifier）直接应用在块（Block）元素自身上。**

- **示例 (`VfButton`)**：

  ```html
  <button class="vf-button vf-button--accent is-disabled"></button>
  ```

  ```scss
  // Button.vue
  @use "@/styles/mixins/mixins" as *;

  @include b(button) {
    // ... 基础样式 ...

    // 直接使用 m 定义变体
    @include m(accent) {
      background-color: token('fill-accent-default');

      //可以直接使用伪类
      &:disabled {
        background-color: token('fill-accent-disabled');
      }
    }

    // 直接使用 when 定义状态
    @include when(disabled) {
      cursor: default;
    }
  }
  ```

### 场景二：复合组件（Composite Components）

- **定义**：指由多个子元素（Element）共同构成一个完整功能的复杂组件，如 `ToggleSwitch`、`Card`、`Modal` 等。

- **实践规则**：**将状态（State）、修饰符（Modifier）或伪类应用在某个父级选择器上，并应用类到组件根元素，从而影响其后代元素的样式。
  **

- **示例 (`VfToggleSwitch`)**：

  ```html
  <div class="vf-toggle-switch is-on">
    <span class="vf-toggle-switch__track">
      <span class="vf-toggle-switch__knob"></span>
    </span>
  </div>
  ```

  ```scss
  // ToggleSwitch.vue
  @use "@/styles/mixins/mixins" as *;

  @include b(toggle-switch) {
    @include e(track) { /* ...默认样式... */ }
    @include e(knob) { /* ...默认样式... */ }

    // 使用 when 创建状态样式，影响子元素
    @include when(on) {
      .vf-toggle-switch__track {
        background-color: token('fill-accent-default');
      }
      .vf-toggle-switch__knob {
        transform: translateX(20px);
      }
    }
  }
  ```

## Mixin 使用指南

- `@include b($name)`: **（通用）** 用于定义一个组件块。
- `@include e($name)`: **（通用）** 用于定义一个子元素。应在 `b` 内部使用。
- `@include m($name)`: **（原子组件）** 用于定义组件或元素的修饰符。
- `@include when($name)`: **（通用）** 用于定义组件或元素的状态（如 disabled, active 等）。

## 总结

遵循以上两大场景的实践规范，可以确保我们项目的样式代码高度一致、可读且易于维护。它兼顾了 BEM
的核心思想与现代组件开发的工程效率，是一套强大而优雅的架构。'''