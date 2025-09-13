<!--请在这里测试组件-->
<script setup lang="ts">
import {VfButton, VfProvider} from "vue-fluent-ui";

function test() {
  console.log("test")
}
</script>

<template>
  <vf-provider>
    <vf-button @click="test()">hello world 2</vf-button>
  </vf-provider>
</template>

<style scoped>

</style>
