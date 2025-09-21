<!--提供一些配置-->
<!--目前组件所有的样式相关逻辑都放在这里，方便复用，以后改架构也方便-->
<script lang="ts" setup>
import '../../../styles/index.scss'
import {createStyle, getDefaultLightTheme} from "@/theme";
import {useStyleTag} from "@vueuse/core";
import {onUnmounted} from "vue";
// 暂时写死
const theme = getDefaultLightTheme();
const cssString = createStyle(theme);
const {unload} = useStyleTag(cssString);
onUnmounted(() => {
  unload();
})
</script>

<template>

  <slot></slot>

</template>

<style lang="scss">
</style>