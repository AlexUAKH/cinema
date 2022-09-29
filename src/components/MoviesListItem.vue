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
  grid-template-rows: auto 1fr;
  background: $card-bg-color;
  border-radius: 6px;
  overflow: hidden;
  align-items: center;
  &__img {
    width: 100%;
    padding: 0 0 148% 0;
    position: relative;
    overflow: hidden;
    & img {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      max-width: 100%;
      object-fit: cover;
      object-position: center;
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
