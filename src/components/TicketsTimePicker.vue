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
    <div class="times__wrapper">
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
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables";
.times {
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 2px;
  }
  &::-webkit-scrollbar-thumb {
    background: #fa6218;
  }
  &__wrapper {
    display: flex;
    gap: 10px;
    padding-bottom: 5px;
    align-items: center;
    @media (min-width: $md) {
      justify-content: center;
      gap: 20px;
    }
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
