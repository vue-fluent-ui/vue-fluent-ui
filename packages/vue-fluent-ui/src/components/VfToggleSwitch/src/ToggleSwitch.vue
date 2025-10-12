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


// todo 临时id生成
const switchId = useId()
</script>

<template>
  <div :class="ns.b()">
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
          :aria-label="header || 'Toggle Switch'"
          :class="ns.e('input')"
          @change="handleChange"
      />
      <!--header部分-->
      <span v-if="header" :class="ns.e('header')">
        {{ header }}
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
  // todo focusvisualmargin
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
  @include e(wrapper) {
    display: inline-flex;
    align-items: center;
    color: token('text-primary');
    font-size: 14px;
    border-radius: token('radius-control-corner');
  }
}
</style>
