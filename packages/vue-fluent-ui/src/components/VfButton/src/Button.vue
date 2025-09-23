<script lang="ts" setup>
import type {ButtonProps} from "./Button.ts";
import {useNamespace} from "@/utils/namespace.ts";
import {computed} from "vue";

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'standard',
  shape: 'rounded',
  size: 'medium',
  disabled: false,
})
const ns = useNamespace('button');
const buttonClass = computed(() => {
  return [
    ns.b(),
    ns.is("disabled", props.disabled),
    ns.m(props.variant),
    ns.m(props.shape),
    ns.m(props.size),
  ]
})
</script>

<template>
  <button
      :disabled="props.disabled"
      :aria-disabled="props.disabled"
      :class="buttonClass"
  >
    <slot></slot>
  </button>
</template>

<style lang="scss">
@use "@/styles/mixins/mixins" as *;

@include b(button) {
  position: relative;
  display: inline-flex;
  align-items: center;
  color: token('text-primary');

  border-radius: 4px;
  background-color: token('fill-control-default');

}
</style>
