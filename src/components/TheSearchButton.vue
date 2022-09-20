<script setup>
import SearchIcon from "./icons/SearchIcon.vue";
</script>

<template>
  <button class="button">
    <SearchIcon size="30" />
  </button>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables";
.button {
  display: flex;
  align-items: center;
  transition: 0.3s;
  background: transparent;
  border: none;
  @media (min-width: $md) {
    &:hover {
      opacity: 0.6;
    }
  }
}
</style>
