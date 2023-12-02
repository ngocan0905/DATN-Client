<script setup></script>

<template>
  <main class="flex justify-end">
    <button
      class="px-4 py-2 bg-gray-600 text-white hover:bg-gray-950 duration-300 hover:scale-105 m-4"
      @click="generalStore.isLoginFormOpen = true"
    >
      login
    </button>
  </main>
</template>
<script setup>
import { useGeneralStore } from '../stores/counter.js'
const generalStore = useGeneralStore()
</script>
