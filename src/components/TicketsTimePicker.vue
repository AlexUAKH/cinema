<script setup>
import { computed, ref, watch } from "vue";

const props = defineProps(["sessions", "selectedDay"]);
const emmits = defineEmits(["select-time"]);
const active = ref(null);

const times = computed(() => {
  const session = props.sessions.find(
    (el) => el.showdate === props.selectedDay
  );
  const daytime = session.daytime;
  return daytime.split(";");
});

const select = (time) => {
  emmits("select-time", time);
  active.value = time;
};
watch(
  () => props.selectedDay,
  () => select(null)
);
</script>

<template>
  <div class="times">
    <div
      class="times__time"
      :class="{ active: active === time }"
      v-for="time in times"
      :key="time"
      @click="() => select(time)"
    >
      {{ time }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables";
.times {
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  overflow-x: auto;
  @media (min-width: $md) {
    gap: 20px;
  }
  &__time {
    padding: 5px;
    border: 2px solid white;
    border-radius: 8px;
    text-align: center;
    cursor: pointer;
    &.active {
      color: $accent;
      border-color: $accent;
    }
  }
}
</style>
