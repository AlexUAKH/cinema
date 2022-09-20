<script setup>
import { computed } from "vue";
import icons from "../../icons";
const props = defineProps(["name", "size"]);
const iconSize = computed(() => (props.size && props.size + "px") || "16px");

const path = computed(() => icons[props.name]);
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
    :style="{ width: iconSize, height: iconSize, cursor: 'pointer' }"
    v-html="path"
  ></svg>
</template>
