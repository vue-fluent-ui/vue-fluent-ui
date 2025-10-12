<script lang="ts" setup>
import type {ToggleSwitchProps} from "@/components";
import {useNamespace} from "@/utils/namespace.ts";
import {computed} from "vue";

const props = withDefaults(defineProps<ToggleSwitchProps>(), {
  disabled: false,
  onContent: '',
  offContent: ''
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
</script>

<template>
<div></div>
</template>

<style lang="scss">
</style>
