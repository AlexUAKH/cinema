<script setup>
defineProps(["genre"]);
</script>

<template>
  <div class="genre">
    {{ genre.title }}
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables";
.genre {
  border: 1px solid white;
  border-radius: 10px;
  padding: 0px 15px;
  transition: 0.3s;
  &.active {
    border-color: $accent;
    color: $accent;
  }
  @media (min-width: $md) {
    &:not(.active):hover {
      cursor: pointer;
      opacity: 0.6;
    }
  }
}
</style>
