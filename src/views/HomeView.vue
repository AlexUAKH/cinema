<script setup>
import { genres } from "@/genres";

import { getAll } from "@/services/moviesService";
import { computed, onMounted, reactive, ref, watch } from "vue";
import MoviesList from "../components/MoviesList.vue";
import TheGenres from "../components/TheGenres.vue";
const movies = reactive([]);
const loading = ref(true);
const error = ref("");
const activeGenreId = ref(genres[0].id);
const props = defineProps(["searchQuery"]);

const fetchMovies = async (query = {}) => {
  try {
    const result = await getAll(query);
    movies.length = 0;
    movies.push(...result);
  } catch (e) {
    console.log(e);
    error.value = "Can't load movies";
  } finally {
    loading.value = false;
  }
};

onMounted(() => fetchMovies());

const genresSearchParam = computed(() => {
  const id = activeGenreId.value;
  // if (id === 1) return fetchMovies({});
  return genres.find((el) => el.id === id).searchParam;
});
const nameSearchParam = computed(() => {
  console.log("ser: ", props.searchQuery);
  return props.searchQuery;
});

watch(activeGenreId, () => {
  return fetchMovies({
    genres: genresSearchParam.value,
    name: nameSearchParam.value,
  });
});

watch(nameSearchParam, () => {
  return fetchMovies({
    name: nameSearchParam.value,
    genres: genresSearchParam.value,
  });
});
</script>

<template>
  <main class="container home">
    <div v-if="loading" class="home__loading">loading...</div>
    <div v-else-if="error" class="home__error">Sorry!!! {{ error }}</div>
    <div v-else class="">
      <TheGenres :genres="genres" v-model="activeGenreId" />
      <h1 class="home__title">Фільми:</h1>
      <div v-if="!movies.length">Нічого не знайшлося (((</div>
      <MoviesList v-else :movies="movies" />
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
.home {
  padding-top: 16px;
}
</style>
