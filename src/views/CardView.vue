<script setup lang="ts">
import Card from "../components/Card.vue";
import { ref } from "vue";

let pokename = ref<any | null>("zapdos")

function search_pokemon(event: Event) {
  pokename = (event.target as HTMLInputElement).value;
  console.log("kocsog", pokename);
}

</script>

<template>
  <main>
    <div class="mb-12 grid justify-center">
      <label
        for="first_name"
        class="block mb-2 text-lg text-center font-medium text-gray-900 dark:text-gray-300"
        >Search a Pokemon</label
      >
      <input
        type="text"
        id="first_name"
        class="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        placeholder="ex. Zapdos"
        required
        @change="search_pokemon"
      />
    </div>
    <Card :pokemon_name="pokename"/>
  </main>
</template>
