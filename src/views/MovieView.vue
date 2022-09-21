<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import GoBackButton from "../components/GoBackButton.vue";
import { getMovie } from "../services/moviesService";
const route = useRoute();
const movie = ref({});
const loading = ref(true);
const error = ref("");

const fetchMovie = async () => {
  try {
    const result = await getMovie(route.params.id);
    movie.value = result;
  } catch (e) {
    console.log(e);
    error.value = "Can't load movie";
  } finally {
    loading.value = false;
  }
};

onMounted(() => fetchMovie());
</script>

<template>
  <main class="movie container">
    <GoBackButton class="movie__back" />
    <div v-if="!loading && error" class="home__error">Sorry!!! {{ error }}</div>
    <div v-if="loading" class="home__loading">loading...</div>
    <div v-else-if="Object.keys(movie).length" class="">
      <div class="movie__head">
        <div class="movie__img">
          <img :src="movie.image" :alt="movie.name" />
          <button class="movie__buy">Купити квиток</button>
        </div>
        <div class="movie__params">
          <h1 class="movie__title">{{ movie.name }}</h1>
          <div v-html="movie.additional" class="movie__additional"></div>
        </div>
      </div>
      <div v-if="movie.description">
        <h2 class="movie__overview">Overview</h2>
        <p class="movie__description" v-html="movie.description"></p>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables";
.movie {
  position: relative;
  &__back {
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 5;
  }
  &__head {
    position: relative;
    display: flex;
    &::before {
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url("@/assets/img/movie.png") 0 50% no-repeat;
      background-size: cover;
      opacity: 0.3;
    }
  }
  &__img {
    flex: 0 0 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    & img {
      max-width: 100%;
      height: auto;
    }
  }
  &__buy {
    position: absolute;
    width: 80%;
    padding: 5px;
    background: $accent;
    border: none;
    border-radius: 5px;
    bottom: 0;
  }
  &__params {
    width: 50%;
    font-size: 18px;
  }
  &__additional :deep(li) {
    display: grid;
    grid-template-columns: 0.7fr 1.3fr;
    padding-top: 5px;
  }
  &__title {
    font-size: 30px;
    font-weight: 700;
    padding-left: 40px;
    margin-top: 20px;
  }
  &__description {
    font-weight: 500;
    font-size: 24px;
    line-height: 42px;
    // text-indent: 20px;
  }
  &__overview {
    font-weight: 700;
    font-size: 30px;
    margin-top: 24px;
  }
}
</style>
