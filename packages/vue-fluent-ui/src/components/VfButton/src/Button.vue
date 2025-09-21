<script lang="ts" setup>
import type {ButtonProps} from "./Button.ts";
import {useNamespace} from "@/utils/namespace.ts";
import {computed} from "vue";

const props = withDefaults(defineProps<ButtonProps>(), {
  disabled: false,
})
const ns = useNamespace('button');
const buttonClass = computed(() => {
  return [
    ns.b(),
  ]
})
</script>

<template>
  <button
      :disabled="props.disabled"
      :class="buttonClass"
  >
    <slot></slot>
  </button>
</template>

<style lang="scss">
@use "@/styles/mixins/mixins" as *;

@include b(button) {
  color: red;
  @include e(icon) {
    color: red;
  }
}
</style>
