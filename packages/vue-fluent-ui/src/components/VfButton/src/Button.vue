<script lang="ts" setup>
import type {ButtonProps} from "./Button.ts";

const props = withDefaults(defineProps<ButtonProps>(), {
  disabled: false,
})
</script>

<template>
  <button
      :disabled="props.disabled"
      class>
    <slot></slot>
  </button>
</template>

<style lang="scss">
</style>
