<template>
  <div class="app-container">
    <div class="flex flex-col items-center justify-center gap-4 h-screen">
      <h1 class="font-bold text-2xl">
        Nuxt UI v3 - Vue Playground
      </h1>

      <div class="flex items-center gap-2">
        <ZButton
          label="Documentation"
          to="https://ui3.nuxt.dev/getting-started/installation/vue"
          target="_blank"
        />

        <ZButton
          label="GitHub"
          color="neutral"
          variant="outline"
          to="https://github.com/nuxt/ui"
          target="_blank"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ZButton from './components/ZButton.vue'
</script>

<style>
.app-container {
  width: 100%;
  min-height: 100vh;
  background-color: #f9fafb;
}
</style>
