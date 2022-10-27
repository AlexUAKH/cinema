<script setup>
import CloseIcon from "./icons/CloseIcon.vue";
import SearchIcon from "./icons/SearchIcon.vue";
defineProps(["active"]);
</script>

<template>
  <button class="button">
    <CloseIcon v-if="active" size="35" />
    <SearchIcon v-else size="30" />
  </button>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables";
.button {
  display: flex;
  align-items: center;
  transition: 0.3s;
  background: transparent;
  border: 1px solid black;
  background: rgba(196, 196, 196, 0.759);
  border-radius: 5px;
  @media (min-width: $md) {
    &:hover {
      opacity: 0.6;
    }
  }
}
</style>
