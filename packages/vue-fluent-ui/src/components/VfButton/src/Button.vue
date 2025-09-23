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
  cursor: default;
  @include m(standard) {
    padding: 5px 11px 6px 11px;
    color: token('text-primary');
    border: 1px solid token('border-control-elevation');
    background-color: token('fill-control-default');

  }
  @include m(rounded) {
    border-radius: 4px;
  }


}
</style>
