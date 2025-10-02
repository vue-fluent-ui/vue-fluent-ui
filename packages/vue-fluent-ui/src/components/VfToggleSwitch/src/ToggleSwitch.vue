<script lang="ts" setup>
import type {ToggleSwitchProps} from "@/components";

const props = withDefaults(defineProps<ToggleSwitchProps>(), {
  disabled: false
})
const checked = defineModel<boolean>({
  default: false,
})
</script>

<template>
</template>

<style lang="scss">
</style>
