<script setup>
import { computed, ref } from "vue";

const props = defineProps(["sessions"]);
const emmits = defineEmits(["select-day"]);
const active = ref("");

const days = computed(() =>
  props.sessions.map((el) => {
    return el.showdate;
  })
);

const select = (day) => {
  emmits("select-day", day);
  active.value = day;
};
</script>

<template>
  <div class="days">
    <div
      class="days__day"
      :class="{ active: active === day }"
      v-for="day in days"
      :key="day"
      @click="() => select(day)"
    >
      <p>{{ new Date(day).toDateString().split(" ")[0] }}</p>
      <p>{{ new Date(day).getDate() }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables";
.days {
  margin: 0 auto;
  display: flex;
  gap: 20px;
  align-items: center;
  overflow-x: auto;
  padding-bottom: 5px;
  @media (min-width: $md) {
    justify-content: center;
  }
  &::-webkit-scrollbar {
    width: 2px;
  }
  &::-webkit-scrollbar-thumb {
    background: #fa6218;
  }
  &__day {
    padding: 5px;
    border: 2px solid white;
    border-radius: 8px;
    width: 50px;
    flex-shrink: 0;
    cursor: pointer;
    & p {
      text-align: center;
    }
    &.active {
      color: $accent;
      border-color: $accent;
    }
  }
}
</style>
