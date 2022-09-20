<script setup>
import { ref } from "vue";
import TheSearchButton from "./TheSearchButton.vue";
const active = ref(false);
</script>

<template>
  <div class="search">
    <input type="text" class="search__input" :class="{ active }" />
    <TheSearchButton class="search__icon" @click="active = !active" />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables";
.search {
  display: flex;
  align-items: center;
  background: rgba(196, 196, 196, 0.3);
  border-radius: 8px;
  height: 50px;
  padding: 5px 10px;
  &__input {
    padding: 5px 16px;
    border-radius: 8px;
    height: 35px;
    font-size: 1.2rem;
    border: none;
    width: 0;
    display: none;
    // transform: translate(100%, 0);
    margin-right: 10px;
    transition: 1s ease-in-out;
    &.active {
      display: block;
      width: 200px;
    }
  }
  @media (max-width: $sm) {
    position: absolute;
    z-index: 101;
    width: 100%;
  }
}
</style>
