<!--请在这里测试组件-->
<script setup lang="ts">
import {VfButton, VfProvider, VfToggleSwitch} from "vue-fluent-ui";
import {ref} from "vue";

// 用于演示的响应式数据
const switch1 = ref(false);
const switch2 = ref(true);
const switch3 = ref(false);
</script>

<template>
  <VfProvider>
    <div class="playground-container">
      <h1>VfButton 组件测试</h1>

      <!-- Standard Buttons -->
      <section class="showcase-section">
        <h2>Standard Buttons</h2>
        <div class="group">
          <h3>Normal</h3>
          <div class="button-row">
            <VfButton shape="rounded" variant="standard">Rounded</VfButton>
            <VfButton shape="circular" variant="standard">Circular</VfButton>
            <VfButton shape="square" variant="standard">Square</VfButton>
          </div>
        </div>
        <div class="group">
          <h3>Disabled</h3>
          <div class="button-row">
            <VfButton disabled shape="rounded" variant="standard">Rounded</VfButton>
            <VfButton disabled shape="circular" variant="standard">Circular</VfButton>
            <VfButton disabled shape="square" variant="standard">Square</VfButton>
          </div>
        </div>
      </section>

      <!-- Accent Buttons -->
      <section class="showcase-section">
        <h2>Accent Buttons</h2>
        <div class="group">
          <h3>Normal</h3>
          <div class="button-row">
            <VfButton shape="rounded" variant="accent">Rounded</VfButton>
            <VfButton shape="circular" variant="accent">Circular</VfButton>
            <VfButton shape="square" variant="accent">Square</VfButton>
          </div>
        </div>
        <div class="group">
          <h3>Disabled</h3>
          <div class="button-row">
            <VfButton disabled shape="rounded" variant="accent">Rounded</VfButton>
            <VfButton disabled shape="circular" variant="accent">Circular</VfButton>
            <VfButton disabled shape="square" variant="accent">Square</VfButton>
          </div>
        </div>
      </section>

      <!-- ToggleSwitch 演示 -->
      <section class="showcase-section">
        <h2>ToggleSwitch 组件测试</h2>

        <div class="group">
          <h3>基础开关</h3>
          <div class="button-row">
            <VfToggleSwitch v-model="switch1" />
            <p>当前状态: {{ switch1 ? '开启' : '关闭' }}</p>
          </div>
        </div>

        <div class="group">
          <h3>默认开启的开关</h3>
          <div class="button-row">
            <VfToggleSwitch v-model="switch2" />
            <p>当前状态: {{ switch2 ? '开启' : '关闭' }}</p>
          </div>
        </div>

        <div class="group">
          <h3>禁用的开关</h3>
          <div class="button-row">
            <VfToggleSwitch v-model="switch3" :disabled="true" />
            <p>当前状态: {{ switch3 ? '开启' : '关闭' }} (禁用)</p>
          </div>
        </div>

        <div class="group">
          <h3>带有文本内容的开关</h3>
          <div class="button-row">
            <VfToggleSwitch v-model="switch1" off-content="关闭" on-content="开启" />
            <p>当前状态: {{ switch1 ? '开启' : '关闭' }}</p>
          </div>
        </div>

        <div class="group">
          <h3>禁用且带文本的开关</h3>
          <div class="button-row">
            <VfToggleSwitch v-model="switch2" :disabled="true" off-content="关闭" on-content="开启" />
            <p>当前状态: {{ switch2 ? '开启' : '关闭' }} (禁用)</p>
          </div>
        </div>

        <div class="group">
          <h3>带标题的开关</h3>
          <div class="button-row">
            <VfToggleSwitch v-model="switch1" header="启用夜间模式" />
            <p>当前状态: {{ switch1 ? '开启' : '关闭' }}</p>
          </div>
        </div>

        <div class="group">
          <h3>带标题和文本的开关</h3>
          <div class="button-row">
            <VfToggleSwitch v-model="switch3" header="自动更新" off-content="关闭" on-content="开启" />
            <p>当前状态: {{ switch3 ? '开启' : '关闭' }}</p>
          </div>
        </div>
      </section>
    </div>
  </VfProvider>
</template>

<style>
body {
  margin: 0;
}

.playground-container {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-height: 100vh;
  padding: 2rem;
  gap: 2rem;
}

.showcase-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.button-row {
  display: flex;
  align-items: center;
  gap: 1rem;
}

h1, h2, h3 {
  font-weight: 600;
  margin: 0;
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.5rem;
  padding-bottom: 0.5rem;
}

h3 {
  font-size: 1.2rem;
}
</style>