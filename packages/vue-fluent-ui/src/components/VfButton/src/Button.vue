<script lang="ts" setup>
import type {ButtonProps} from "./Button.ts";
import {useNamespace} from "@/utils/namespace.ts";
import {computed} from "vue";

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'standard',
  shape: 'rounded',
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
  justify-content: center;
  cursor: default;
  user-select: none;
  border: none;
  outline: none;
  // 聚焦颜色
  &:focus-visible {
    box-shadow: 0 0 0 1px token('stroke-focus-inner'),
    0 0 0 3px token('stroke-focus-outer');
  }
  // variant
  @include m(standard) {
    padding: 5px 11px 6px 11px;
    color: token('text-primary');
    border: 1px solid;
    // border-control-elevation是不支持速记的
    border-color: token('border-control-elevation');
    background-color: token('fill-control-default');
    &:hover {
      background-color: token('fill-control-secondary');
    }
    &:active {
      color: token('text-secondary');
      border-color: token("stroke-control-default");
      background-color: token('fill-control-tertiary');
    }
    &:disabled {
      color: token('text-disabled');
      border-color: token('stroke-control-default');
      background-color: token('fill-control-disabled');
    }
  }
  // shape
  @include m(rounded) {
    border-radius: token('radius-control-corner');
  }
  @include m(circular) {
    border-radius: token('radius-circular');
  }
  @include m(square) {
    border-radius: 0;
  }
  // 状态
  @include when(disabled) {
    cursor: not-allowed;
  }

}
</style>
