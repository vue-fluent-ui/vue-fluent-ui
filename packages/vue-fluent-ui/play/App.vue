<template>
  <div id="app">
    <h1>Vue Fluent UI Playground</h1>
    <VfHelloWorld msg="Welcome to the Playground!" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { VfHelloWorld } from '../src'

export default defineComponent({
  name: 'App',
  components: { VfHelloWorld }
})
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 20px;
}
</style>
