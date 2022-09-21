<script setup>
const props = defineProps(["movie"]);
</script>

<template>
  <div class="card">
    <div class="card__img">
      <img :src="movie.image" :alt="movie.name" />
    </div>
    <h2 class="card__title" v-html="movie.name"></h2>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables";
.card {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  background: $card-bg-color;
  border-radius: 6px;
  overflow: hidden;
  &__img {
    width: 100%;
    padding-top: 148%;
    position: relative;
    & img {
      position: absolute;
      top: 0;
      width: 100%;
    }
  }
  &__title {
    padding: 5px 16px;
  }
  transition: 0.4s;
  cursor: pointer;
  @media (min-width: $md) {
    &:hover {
      opacity: 0.6;
    }
  }
}
</style>
