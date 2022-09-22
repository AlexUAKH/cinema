<script setup>
const props = defineProps(["seats", "selectedSeat"]);
const emits = defineEmits(["select-seat"]);

const select = (row, seat) => {
  if (seat.is_free) emits("select-seat", { row, seat: seat.seat });
};
</script>

<template>
  <div class="cinema">
    <div class="cinema__screen"></div>
    <div class="cinema__seats">
      <div
        class="cinema__row"
        v-for="([{ row }, col], ind) in seats"
        :key="ind"
      >
        <div
          class="cinema__seat"
          :class="{
            reserved: !seat.is_free,
            available: seat.is_free,
            selected:
              selectedSeat?.row === row && selectedSeat?.seat === seat.seat,
          }"
          v-for="seat in col"
          :key="seat"
          @click="() => select(row, seat)"
        >
          <!-- {{ seat.seat }} -->
        </div>
      </div>
    </div>
    <div class="cinema__map">
      <div class="cinema__map_reserved">reserved</div>
      <div class="cinema__map_available">available</div>
      <div class="cinema__map_selected">selected</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables";
.cinema {
  // width: 90%;
  margin: 0 auto;
  padding-top: 100px;
  position: relative;
  @media (min-width: $lg) {
    width: 90%;
  }
  &__screen {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100px;
    background: url("@/assets/img/screen.png") 0 0 no-repeat;
    background-size: cover;
  }
  &__seats {
    overflow-x: auto;
    margin-top: 40px;
    padding-bottom: 20px;
    // m-width: 90%;
    // min-width: 800px;
  }
  &__row {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    gap: 5px;
    padding: 0 5px;
  }
  &__seat {
    width: 25px;
    min-width: 20px;
    height: 25px;
    font-size: 10px;
    font-weight: 900;
    border: 1px solid white;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &.reserved {
      background: $reserved-seats;
      color: $bg-color;
      cursor: not-allowed;
    }
    &.available {
      background: $available-seats;
    }
    &.selected {
      background: $selected-seats;
    }
  }
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #fa6218;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  &__map {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    &_reserved,
    &_available,
    &_selected {
      padding-left: 25px;
      position: relative;
      &::before {
        position: absolute;
        content: "";
        top: 3px;
        left: 0;
        width: 20px;
        height: 20px;
        border-radius: 100%;
      }
    }
    &_reserved::before {
      background: $reserved-seats;
    }
    &_available::before {
      background: $available-seats;
    }
    &_selected::before {
      background: $selected-seats;
    }
  }
}
</style>
