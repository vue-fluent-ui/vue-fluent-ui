<template>
  <VfProvider>
    <div id="app">
      <h1>Vue Fluent UI Playground</h1>
      <VfHelloWorld msg="Welcome to the Playground!" />
    </div>
  </VfProvider>
</template>

<script lang="ts" setup>
import {VfHelloWorld, VfProvider} from '../src'
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

  margin: 20px;
}
</style>
