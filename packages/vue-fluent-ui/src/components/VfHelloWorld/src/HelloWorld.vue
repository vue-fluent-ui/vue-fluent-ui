<!--这里放组件-->
<!--注意不要用scoped-->
<script setup lang="ts">
import type {HelloWorldProps} from "./HelloWorld.ts";

const props = defineProps<HelloWorldProps>()
</script>

<template>
  <p id="vf-hello-world">This is a HelloWorld Component</p>
  <p>{{ props }}</p>
</template>

<style lang="scss">
#vf-hello-world {
  color: #00e3ff;
  font-size: 20px;
}

</style>