<script lang="ts" setup>
import type {ButtonProps} from "@/components";
import {useNamespace} from "@/utils/namespace.ts";
import {computed} from "vue";
import './Button.style.scss'

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
