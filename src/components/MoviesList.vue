<script setup>
import { useRouter } from "vue-router";
import MoviesListItem from "./MoviesListItem.vue";

const router = useRouter();
const props = defineProps(["movies"]);
</script>

<template>
  <section class="list">
    <MoviesListItem
      class="list__item"
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
      @click="router.push(`/${movie.id}`)"
    />
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables";

.list {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-items: center;
  row-gap: 30px;

  @media (min-width: $sm) {
    grid-template-columns: repeat(2, 1fe);
    column-gap: 20px;
  }
  @media (min-width: $md) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: $lg) {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
