<script setup>
import TheGenresItem from "./TheGenresItem.vue";
defineProps(["genres", "modelValue"]);
</script>

<template>
  <nav class="genres">
    <TheGenresItem
      v-for="genre in genres"
      :key="genre.id"
      :genre="genre"
      :class="{ active: modelValue === genre.id }"
      @click="$emit('update:modelValue', genre.id)"
    />
  </nav>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables";
.genres {
  display: flex;
  gap: 20px;
  // flex-wrap: wrap;
  overflow-x: auto;
}
</style>
