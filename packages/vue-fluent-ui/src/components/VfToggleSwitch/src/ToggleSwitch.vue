<script lang="ts" setup>
import type {ToggleSwitchProps} from "@/components";
import {useNamespace} from "@/utils/namespace.ts";
import {computed} from "vue";

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
const switchId =
    `${ns.b()}-${Math.random().toString(36).slice(2)}`


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
      <!--todo header部分-->

      <!--开关主体-->
      <span :class="ns.e('container')">
        <span :class="ns.e('track')">
          <span :class="ns.e('knob')"></span>
        </span>
        <span :class="ns.e('content')"></span>

      </span>
    </label>
  </div>
</template>

<style lang="scss">
</style>
