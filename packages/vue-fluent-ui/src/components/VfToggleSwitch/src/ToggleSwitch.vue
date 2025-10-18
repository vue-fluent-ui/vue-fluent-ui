<script lang="ts" setup>
import type {ToggleSwitchProps} from "@/components";
import {useNamespace} from "@/utils/namespace.ts";
import {computed, useId} from "vue";
import "./ToggleSwitch.style.scss"

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

