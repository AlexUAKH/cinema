<script setup>
import { ref } from "vue";
import TheSearchButton from "./TheSearchButton.vue";
defineProps(["modelValue"]);
const emits = defineEmits(["update:modelValue"]);
const active = ref(false);
const changeHandler = (e) => {
  emits("update:modelValue", e.target.value);
  active.value = false;
};
</script>

<template>
  <div class="search" :class="{ active }">
    <input
      v-bind="$attrs"
      :value="modelValue"
      @change="changeHandler"
      type="text"
      class="search__input"
    />
    <TheSearchButton
      class="search__icon"
      :active="active"
      @click="active = !active"
    />
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
    transition: 0.6s ease-in-out;
  }
  &.active {
    .search__input {
      display: block;
      width: 200px;
    }
    @media (max-width: $sm) {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 101;
      justify-content: center;
      background: rgba(196, 196, 196);
      border-radius: 0;
      .search__input {
        flex: 1 1 auto;
      }
    }
  }
}
</style>
