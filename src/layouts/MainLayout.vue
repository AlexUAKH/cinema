<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";
import TheFooter from "./mainLayout/TheFooter.vue";
import TheHeader from "./mainLayout/TheHeader.vue";
const searchQuery = ref("");
</script>

<template>
  <div class="layout">
    <TheHeader class="layout__header" v-model="searchQuery" />
    <RouterView class="layout__main" :searchQuery="searchQuery" />
    <TheFooter class="layout__footer" />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  &__header {
  }
  &__main {
    flex: 1 1 auto;
    margin-top: $header-mobile-height;
    margin-bottom: 16px;
    @media (min-width: $md) {
      margin-top: $header-height;
      margin-bottom: 30px;
    }
  }
  &__footer {
  }
}
</style>
