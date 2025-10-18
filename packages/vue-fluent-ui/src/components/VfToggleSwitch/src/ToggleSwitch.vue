<script lang="ts" setup>
import type {ToggleSwitchProps} from "@/components";
import {useNamespace} from "@/utils/namespace.ts";
import {computed, useId} from "vue";

const ns = useNamespace('toggle-switch')

const props = withDefaults(defineProps<ToggleSwitchProps>(), {
  disabled: false,
  onContent: '',
  offContent: '',
  header: '',
  modelValue: false,
})
const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  change: [value: boolean]
}>()
const checked = computed(() => props.modelValue)
const handleChange = (event: Event) => {
  const newValue = (event.target as HTMLInputElement).checked;
  emit('update:modelValue', newValue);
  emit('change', newValue);
}
const toggleSwitchClass = computed(() => {
  console.log(ns.is('on', checked.value))
  return [
    ns.b(),
    ns.is('on', checked.value),
    ns.is('disabled', props.disabled),
  ]
})

// todo 临时id生成
const switchId = useId()
</script>

<template>
  <div :class="toggleSwitchClass">
    <!--Wrapper-->
    <label :class="ns.e('wrapper')" :for="switchId">
      <!--隐藏的checkbox-->
      <input
          :id="switchId"
          :checked="checked"
          :disabled="props.disabled"
          :aria-checked="checked"
          role="switch"
          type="checkbox"
          :aria-disabled="props.disabled"
          :aria-label="props.header || 'Toggle Switch'"
          :class="ns.e('input')"
          @change="handleChange"
      />
      <!--header部分-->
      <span v-if="props.header" :class="ns.e('header')">
        {{ props.header }}
      </span>

      <span :class="ns.e('container')">
        <!--开关主体-->
        <span :class="ns.e('track')">
          <span :class="ns.e('knob')"></span>
        </span>
        <!--内容部分-->
        <span :class="ns.e('content')">
          <span v-if="checked" :class="ns.e('on-content')">
            {{ props.onContent }}
          </span>
          <span v-else :class="ns.e('off-content')">
              {{ props.offContent }}
          </span>
        </span>

      </span>
    </label>
  </div>
</template>

<style lang="scss">
@use "@/styles/mixins/mixins" as *;

@include b(toggle-switch) {
  display: inline-block;
  min-width: 154px;
  // todo focus visual margin

  // 隐藏input
  @include e(input) {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    white-space: nowrap;
  }

  // Off
  @include e(wrapper) {
    display: inline-flex;
    align-items: center;
    color: token('text-primary');
    font-size: 14px;
    border-radius: token('radius-control-corner');
    cursor: pointer;
  }
  @include e(container) {
    display: inline-flex;
    align-items: center;
    gap: 12px;
  }
  @include e(track) {
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    width: 40px;
    height: 20px;
    border-radius: 10px; // winui3这里是写死的
    background-color: token('fill-control-alt-secondary');
    border: 1px solid token('stroke-control-strong-default');
    flex-shrink: 0;
  }
  @include e(knob) {
    position: absolute;
    top: 50%;
    left: 3px;
    width: 12px;
    height: 12px;
    transform: translateY(-50%);
    border-radius: 50%;
    background-color: token('text-secondary');
  }

  // On
  @include when(on) {
    @include e(track) {
      border-color: token('fill-accent-default');
      // 避免引起布局抖动
      background-color: token('fill-accent-default');
    }
    @include e(knob) {
      transform: translateY(-50%) translateX(20px);
      background-color: token('text-on-accent-fill-color-primary');
    }

  }

  @include when-not(disabled) {
    &:hover {
      // Off
      @include e(knob) {
        width: 14px;
        height: 14px;
      }
      @include e(track) {
        background-color: token('fill-control-alt-tertiary');
      }
      // On
      @include when(on) {
        @include e(track) {
          border-color: token('fill-accent-secondary');
          background-color: token('fill-accent-secondary');
        }
      }
    }
    &:active {
      // Off
      @include e(knob) {
        width: 17px;
        height: 14px;
      }
      @include e(track) {
        background-color: token('fill-control-alt-quarternary');
      }
      // On
      @include when(on) {
        @include e(track) {
          border-color: token('fill-accent-tertiary');
          background-color: token('fill-accent-tertiary');
        }
      }
    }
  }

  // 禁用
  @include when(disabled) {
    @include e(wrapper) {
      cursor: default;
      color: token('text-disabled');
    }
    // Off
    @include e(track) {
      border-color: token('stroke-control-strong-disabled');
      background-color: token('fill-control-alt-disabled');
    }
    @include e(knob) {
      background-color: token('text-disabled');
    }
    // On
    @include when(on) {
      @include e(track) {
        border-color: token('fill-accent-disabled');
        background-color: token('fill-accent-disabled');
      }
      @include e(knob) {
        background-color: token('text-on-accent-fill-color-disabled');
      }
    }
  }

}
</style>
