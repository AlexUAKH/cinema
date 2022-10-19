<script setup>
import { computed, onMounted, reactive, ref, watch } from "vue";
import { useRoute } from "vue-router";
import TheBookingResultModal1 from "../components/TheBookingResultModal.vue";
import TicketsDayPicker from "../components/TicketsDayPicker.vue";
import TicketsSeatsSelect from "../components/TicketsSeatsSelect.vue";
import TicketsTimePicker from "../components/TicketsTimePicker.vue";
import TicketsTotal from "../components/TicketsTotal.vue";
import {
  bookSeat,
  getMovieSessions,
  getSeats,
} from "../services/ticketService";
const route = useRoute();
const sessions = reactive([]);
const loading = ref(false);
const error = ref("");
const selectedDay = ref(null);
const selectedTime = ref(null);
const selectedSeat = ref(null);
const seats = reactive([]);
const isResultsModalOpen = ref(false);
const results = ref({});

const id = computed(() => route.query.id);

const movieSessions = async (id) => {
  try {
    loading.value = true;
    const result = await getMovieSessions(id);
    sessions.length = 0;
    sessions.push(...result);
  } catch (e) {
    console.log(e);
    error.value = "Can't load sessions";
  } finally {
    loading.value = false;
  }
};

const seatsAviable = async (options) => {
  try {
    loading.value = true;
    const result = await getSeats(options);
    seats.length = 0;
    seats.push(...result);
  } catch (e) {
    console.log(e);
    error.value = "Can't load seats";
  } finally {
    loading.value = false;
  }
};

onMounted(() => movieSessions(id.value));

const selectDayHandler = (day) => {
  selectedDay.value = day;
  selectedTime.value = null;
};

const book = async () => {
  const request = {
    movie_id: id.value,
    row: selectedSeat.value.row,
    seat: selectedSeat.value.seat,
    showdate: selectedDay.value,
    daytime: selectedTime.value,
  };
  try {
    error.value = "";
    loading.value = true;
    results.value = await bookSeat(request);
  } catch (e) {
    console.log(e);
    error.value = "Can't load seats";
    alert("Не вдалося зарезервувати квиток");
  } finally {
    loading.value = false;
    selectedSeat.value = null;
    isResultsModalOpen.value = true;
    seatsAviable({
      id: id.value,
      time: selectedTime.value,
      day: selectedDay.value,
    });
  }
};

watch(
  () => selectedDay.value,
  () => {
    selectedTime.value = null;
    selectedSeat.value = null;
    seats.length = 0;
  }
);

watch(
  () => selectedTime.value,
  (time) => {
    if (time) {
      selectedSeat.value = null;
      seatsAviable({
        id: id.value,
        time: selectedTime.value,
        day: selectedDay.value,
      });
    }
  }
);
</script>

<template>
  <main class="tickets container">
    <h1 class="tickets__title">{{ route.query.title }}</h1>
    <TicketsDayPicker
      :sessions="sessions"
      @select-day="selectDayHandler"
      class="tickets__days"
    />
    <TicketsTimePicker
      v-if="selectedDay"
      :selectedDay="selectedDay"
      :sessions="sessions"
      @select-time="selectedTime = $event"
      class="tickets__times"
    />
    <TicketsSeatsSelect
      v-if="seats.length"
      :seats="seats"
      :selectedSeat="selectedSeat"
      @select-seat="selectedSeat = $event"
      class="tickets__seats"
    />
    <TicketsTotal
      :selectedSeat="selectedSeat"
      :selectedDay="selectedDay"
      :selectedTime="selectedTime"
      @book="book"
      class="tickets__total"
    />
    <teleport to="body">
      <TheBookingResultModal1
        v-if="isResultsModalOpen"
        :results="results"
        :errors="error"
        @close="isResultsModalOpen = false"
      />
    </teleport>
  </main>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables";
.tickets {
  &__title {
    text-align: center;
    font-weight: 700;
    font-size: 2.5rem;
  }
  &__days {
    margin-top: 20px;
  }
  &__times {
    margin-top: 15px;
  }
  &__seats {
    margin-top: 20px;
  }
  &__total {
    margin-top: 20px;
  }
}
</style>
