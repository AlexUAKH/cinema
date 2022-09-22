<script setup>
defineProps(["selectedSeat", "selectedDay", "selectedTime"]);
defineEmits(["book"]);
</script>

<template>
  <section
    v-if="selectedSeat && Object.keys(selectedSeat).length"
    class="tickets__total total"
  >
    <div class="total__row">
      <div class="total__key">Число</div>
      <div class="total__value">
        {{ new Date(selectedDay).toDateString() }}
      </div>
    </div>
    <div class="total__row">
      <div class="total__key">Час</div>
      <div class="total__value">{{ selectedTime }}</div>
    </div>
    <div class="total__row">
      <div class="total__key">Ряд</div>
      <div class="total__value">{{ selectedSeat.row }}</div>
    </div>
    <div class="total__row">
      <div class="total__key">Місце</div>
      <div class="total__value">{{ selectedSeat.seat }}</div>
    </div>
    <button class="total__btn" @click="$emit('book')">Забронювати</button>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables";
.total {
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 350px;
  margin-left: 100px;
  &__row {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  &__key {
    font-weight: 700;
  }
  &__btn {
    align-self: flex-end;
    margin-top: 10px;
    font-size: 16px;
    padding: 5px 15px;
    border: none;
    border-radius: 10px;
    background: $accent;
    cursor: pointer;
    transition: 0.4s;
    position: relative;
    &:disabled {
      background: $search-bg-color;
      color: black;
    }
    &:active {
      top: 2px;
      left: 2px;
    }
    @media (min-width: $md) {
      &:hover {
        opacity: 0.6;
      }
    }
  }
}
</style>
