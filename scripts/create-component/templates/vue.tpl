<script lang="ts" setup>
import { useNamespace } from "@/utils/namespace.ts";
import './__COMPONENT_NAME_PASCAL__.style.scss'

const ns = useNamespace('__COMPONENT_NAME_KEBAB__');
</script>

<template>
  <slot></slot>
</template>

<style lang="scss">
</style>
