<script setup></script>

<template>
  <div class="logo">
    <p>C</p>
    <img class="logo__img" src="@/assets/img/logo.png" alt="lcinema" />
    <p>nema</p>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.logo {
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 900;
  text-transform: uppercase;
  &__img {
    width: 20px;
    height: 20px;
  }
  @media (min-width: $md) {
    font-size: 40px;
    font-weight: 700;
    &__img {
      width: 40px;
      height: 40px;
    }
  }
}
</style>
