<script setup>
import { getAll } from "@/services/moviesService";
import { onMounted, reactive, ref } from "vue";
const movies = reactive([]);
const loading = ref(true);
const error = ref("");

onMounted(async () => {
  try {
    const result = await getAll();
    console.log("res: ", result);
    movies.push(result);
  } catch (e) {
    console.log(e);
    error.value = "Can't load movies";
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <main class="container">
    <div v-if="loading" class="">loading...</div>
    <div v-if="!loading && error" class="">{{ error }}</div>
  </main>
</template>
