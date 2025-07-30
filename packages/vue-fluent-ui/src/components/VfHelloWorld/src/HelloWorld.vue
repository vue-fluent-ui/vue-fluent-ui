<!--这里放组件-->
<!--注意不要用scoped-->
<script lang="ts" setup>
import type {HelloWorldProps} from "./HelloWorld.ts";

const props = defineProps<HelloWorldProps>()
</script>

<template>
  <p id="vf-hello-world">This is a HelloWorld Component</p>
  <p>{{ props }}</p>
</template>

<style lang="scss">
#vf-hello-world {
  font-size: 20px;
  color: #00e3ff;
}

</style>