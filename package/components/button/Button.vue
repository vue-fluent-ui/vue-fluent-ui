<template>
  <button
    :class="[
      'f-button',
      `f-button--${variant}`,
      `f-button--${size}`,
      { 'f-button--disabled': disabled },
      { 'f-button--block': block }
    ]"
    :disabled="disabled"
    :type="htmlType"
    @click="handleClick"
  >
    <slot name="icon-before" />
    <span v-if="$slots.default" class="f-button__text">
      <slot />
    </span>
    <slot name="icon-after" />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { ButtonProps, ButtonEmits } from './types';

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'medium',
  disabled: false,
  block: false,
  htmlType: 'button'
});

const emit = defineEmits<ButtonEmits>();

const handleClick = (event: MouseEvent) => {
  if (props.disabled) return;
  emit('click', event);
};
</script>

<style>
.f-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  outline: none;
}

.f-button--primary {
  background-color: #0078d4;
  color: #ffffff;
}

.f-button--primary:hover:not(.f-button--disabled) {
  background-color: #106ebe;
}

.f-button--secondary {
  background-color: #f3f2f1;
  color: #323130;
}

.f-button--secondary:hover:not(.f-button--disabled) {
  background-color: #edebe9;
}

.f-button--tertiary {
  background-color: transparent;
  color: #0078d4;
  border: 1px solid #0078d4;
}

.f-button--tertiary:hover:not(.f-button--disabled) {
  background-color: rgba(0, 120, 212, 0.1);
}

.f-button--danger {
  background-color: #d13438;
  color: #ffffff;
}

.f-button--danger:hover:not(.f-button--disabled) {
  background-color: #be3a3d;
}

.f-button--small {
  padding: 0 8px;
  height: 24px;
  font-size: 12px;
}

.f-button--medium {
  padding: 0 16px;
  height: 32px;
  font-size: 14px;
}

.f-button--large {
  padding: 0 20px;
  height: 40px;
  font-size: 16px;
}

.f-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.f-button--block {
  display: flex;
  width: 100%;
}

.f-button__text {
  margin: 0 4px;
}
</style>
