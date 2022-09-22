<script setup>
import { onMounted, ref } from "vue";
import BaseModalOverlay1 from "./BaseModalOverlay.vue";
const emits = defineEmits(["close"]);
const isOpen = ref(true);
const el = ref(null);

onMounted(() => {
  el.value.focus();
});

const close = () => {
  isOpen.value = false;
  setTimeout(() => emits("close"), 100);
};
</script>

<template>
  <div class="modal" ref="el" tabindex="-1" @keydown.esc="close" role="dialog">
    <!-- <transition
      appear
      enter-active-class="ease-out duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="ease-in duration-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    > -->
    <BaseModalOverlay1 v-if="isOpen" @click="close" />
    <!-- </transition> -->

    <div v-if="isOpen" class="modal__body">
      <div class="modal__content">
        <slot />
      </div>
      <div v-if="$slots.footer" class="modal__footer">
        <slot name="footer" :close="close" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  // right: 0;
  // bottom: 0;
  z-index: 20;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  &:focus {
    outline: none;
  }
  &__body {
    // position: relative;
    background: white;
    width: 100%;
    min-width: 300px;
    display: flex;
    border-radius: 10px;
    flex-direction: column;
    transform: translate(-50%, -50%);
    color: black;
  }
  &__content {
    padding: 20px;
    overflow: auto;
  }
  &__footer {
    display: flex;
    border-top: 1px solid rgba(0, 0, 0, 0.6);
    padding: 5px 16px;
  }
}
</style>
