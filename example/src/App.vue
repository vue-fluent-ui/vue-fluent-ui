<template>
  <div class="content">
    <h1>Vue Fluent UI - Button 测试</h1>
    
    <div class="section">
      <h2>按钮变体</h2>
      <div class="demo-row">
        <VFButton>默认按钮</VFButton>
        <VFButton variant="primary">主要按钮</VFButton>
        <VFButton variant="secondary">次要按钮</VFButton>
        <VFButton variant="tertiary">三级按钮</VFButton>
        <VFButton variant="danger">危险按钮</VFButton>
      </div>
    </div>
    
    <div class="section">
      <h2>按钮尺寸</h2>
      <div class="demo-row">
        <VFButton size="small">小按钮</VFButton>
        <VFButton size="medium">中按钮</VFButton>
        <VFButton size="large">大按钮</VFButton>
      </div>
    </div>
    
    <div class="section">
      <h2>禁用状态</h2>
      <div class="demo-row">
        <VFButton disabled>禁用按钮</VFButton>
        <VFButton variant="secondary" disabled>禁用次要按钮</VFButton>
        <VFButton variant="tertiary" disabled>禁用三级按钮</VFButton>
      </div>
    </div>
    
    <div class="section">
      <h2>块级按钮</h2>
      <div class="demo-block">
        <VFButton block>块级按钮</VFButton>
      </div>
    </div>
    
    <div class="section">
      <h2>按钮事件</h2>
      <div class="demo-row">
        <VFButton @click="handleClick">点击我</VFButton>
        <p v-if="clickCount > 0">按钮被点击了 {{ clickCount }} 次</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VFButton } from 'vue-fluent-ui';
import { ref } from 'vue';

const clickCount = ref(0);

const handleClick = () => {
  clickCount.value++;
};
</script>

<style scoped>
.content {
  display: flex;
  min-height: 100vh;
  line-height: 1.4;
  text-align: center;
  flex-direction: column;
  padding: 2rem;
}

.content h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
}

.content h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: left;
}

.section {
  margin-bottom: 2rem;
  width: 100%;
  max-width: 800px;
  align-self: center;
}

.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1rem;
}

.demo-block {
  width: 100%;
  margin-bottom: 1rem;
}

p {
  font-size: 1rem;
  margin-left: 1rem;
}
</style>
