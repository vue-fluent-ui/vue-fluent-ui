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

@include b(button) using($self) {
  @include set-var($self, 'accent-background', token('text-primary'));
  background-color: get-var($self, 'accent-background');

}
</style>
