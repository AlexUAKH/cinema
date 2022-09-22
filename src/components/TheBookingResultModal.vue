<script setup>
import BaseModal from "./base/BaseModal.vue";
const p = defineProps(["errors", "results"]);
</script>

<template>
  <BaseModal class="results" @close="$emit('close')">
    <pre v-if="results">{{ results }}</pre>
    <pre v-if="errors">{{ errors }}</pre>
    <template #footer="{ close }">
      <button @click="close" class="results__btn">Ok</button>
    </template>
  </BaseModal>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
.results {
  max-width: 600px;
  &__btn {
    margin-left: auto;
    padding: 5px 30px;
    border-radius: 5px;
    // border: none;
    background: $accent;
  }
}
</style>
