<script setup>
import { RouterView } from "vue-router";
import TheFooter from "./mainLayout/TheFooter.vue";
import TheHeader from "./mainLayout/TheHeader.vue";
</script>

<template>
  <div class="layout">
    <TheHeader class="layout__header" />
    <RouterView class="layout__main" />
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
    @media (min-width: $md) {
      margin-top: $header-height;
    }
  }
  &__footer {
  }
}
</style>
