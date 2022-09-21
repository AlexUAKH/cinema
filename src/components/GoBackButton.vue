<script setup>
import { useRouter } from "vue-router";
import TurnBackIcon from "./icons/TurnBackIcon.vue";
const router = useRouter();
</script>

<template>
  <button class="back" @click="router.go(-1)">
    <TurnBackIcon size="20" color="white" />
  </button>
</template>

<style lang="scss" scoped>
.back {
  padding: 0 5px;
  background: transparent;
  border: 1px solid white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
