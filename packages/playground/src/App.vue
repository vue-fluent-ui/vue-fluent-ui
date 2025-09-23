<!--请在这里测试组件-->
<script setup lang="ts">
import {VfButton, VfProvider} from "vue-fluent-ui";

function test() {
  console.log("test")
}
</script>

<template>
  <div class="playground-container">
    <vf-provider>
      <vf-button @click="test()">hello world Button</vf-button>
    </vf-provider>
  </div>
</template>

<style scoped>
.playground-container {
  box-sizing: border-box;
  min-height: 100vh;
  padding: 2rem;
  background-color: #f0f2f5; /* 一个柔和的淡灰色 */
}
</style>
