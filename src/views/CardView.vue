<script setup lang="ts">
import Card from "../components/Card.vue";
</script>

<template>
  <main>
    <div class="mb-12 grid justify-center">
      <label
        for="first_name"
        class="block mb-2 text-lg text-center font-medium text-gray-900 dark:text-gray-300"
        >Pokemon name</label
      >
      <input
        type="text"
        id="first_name"
        class="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        placeholder="ex. Zapdos"
        required
        
      />
    </div>
    <Card />
  </main>
</template>
