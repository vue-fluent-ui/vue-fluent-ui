<script lang="ts" setup>
import type {ToggleSwitchProps} from "@/components";
import {useNamespace} from "@/utils/namespace.ts";
import {computed} from "vue";

const props = withDefaults(defineProps<ToggleSwitchProps>(), {
  disabled: false,
  onContent: '',
  offContent: '',
  header: '',
  modelValue: false,
})
const checked = defineModel<boolean>({
  default: false,
})
const ns = useNamespace('toggle-switch')
const toggleSwitchClass = computed(() => {
  return [
    ns.b(),
    ns.is("disabled", props.disabled),
    ns.is("checked", checked.value),
  ]
})
// todo 临时id生成
const switchId = computed(() => {
  return `${ns.b()}-${Math.random().toString(36).slice(2)}`
})
</script>

<template>
  <div>
    <!--Wrapper-->
    <label :for="switchId">
      <!--隐藏的checkbox-->
      <input
          :id="switchId"
          :checked="checked"
          :disabled="props.disabled"
          role="switch"
          type="checkbox"
          @change="checked = ($event.target as HTMLInputElement).checked"
      />
      <!--todo header部分-->
      <!--开关主体-->
      <div>

      </div>
    </label>


  </div>
</template>

<style lang="scss">
</style>
