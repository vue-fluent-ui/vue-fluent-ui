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

      <vf-button @click="test()">Standard Button</vf-button>
      <vf-button shape="circular">Square Button</vf-button>
      <vf-button shape="square">Square Button</vf-button>
      <vf-button disabled @click="test()">Standard Button</vf-button>
      <vf-button disabled shape="circular">Square Button</vf-button>
      <vf-button disabled shape="square">Square Button</vf-button>

    </vf-provider>
  </div>
</template>

<style scoped>
.playground-container {
  box-sizing: border-box;
  min-height: 100vh;
  padding: 2rem;
  background-color: rgb(243, 243, 243);
}

</style>
