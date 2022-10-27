<script setup>
import { nextTick, ref } from "vue";
import CloseIcon from "./icons/CloseIcon.vue";
import TheSearchButton from "./TheSearchButton.vue";
const props = defineProps(["modelValue"]);
const emits = defineEmits(["update:modelValue"]);
const active = ref(false);
const searchInput = ref(null);
const query = ref(props.modelValue);

const changeHandler = (e) => {
  e.preventDefault();
  emits("update:modelValue", query.value);
};
const clearHandler = () => {
  console.log("clr");
  query.value = "";
  emits("update:modelValue", "");
};
const searchOpen = () => {
  active.value = !active.value;
  if (active.value) nextTick(() => searchInput.value.focus());
};
</script>

<template>
  <div class="search" :class="{ active }">
    <template v-if="active">
      <input
        ref="searchInput"
        v-bind="$attrs"
        v-model="query"
        type="text"
        class="search__input"
        tabindex="-1"
        @change="changeHandler"
      />
      <CloseIcon
        v-if="query"
        size="25"
        class="search__clear"
        @click="clearHandler"
        @mousedown="(e) => e.preventDefault()"
      />
    </template>
    <TheSearchButton
      class="search__icon"
      :active="active"
      @click="searchOpen"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables";
.search {
  display: flex;
  align-items: center;
  border-radius: 8px;
  height: 50px;
  padding: 5px 10px;
  background: rgba(196, 196, 196, 0.3);

  &__input {
    position: relative;
    padding: 5px 30px 5px 16px;
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
  &__clear {
    position: absolute;
    top: 50%;
    right: 60px;
    transform: translate(-50%, -50%);
    cursor: pointer;
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
