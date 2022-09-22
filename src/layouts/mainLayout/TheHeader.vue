<script setup>
import TheLogo from "@/components/TheLogo.vue";
import TheSearch from "@/components/TheSearch.vue";
import { useRoute, useRouter } from "vue-router";
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
const router = useRouter();
const route = useRoute();
</script>

<template>
  <header class="header container">
    <TheLogo @click="router.push('/')" />
    <TheSearch
      v-if="route.name === 'home'"
      :model-value="modelValue"
      @update:model-value="$emit('update:modelValue', $event)"
    />
  </header>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
.header {
  position: fixed;
  top: 0;
  z-index: 10;
  right: 0;
  left: 0;
  height: $header-mobile-height;
  background: $header-bg-color;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: $md) {
    height: $header-height;
  }
}
</style>
