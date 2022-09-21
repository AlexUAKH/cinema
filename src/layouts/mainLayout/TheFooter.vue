<script setup></script>

<template>
  <footer class="footer container">
    <div>@{{ new Date().getFullYear() }}</div>
    <div>-</div>
    <strong>
      <a
        href="https://github.com/AlexUAKH/cinema"
        target="_blank"
        rel="noreferrer"
      >
        AlexKHUA
      </a>
    </strong>
  </footer>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables";

.footer {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    width: 90%;
    height: 1px;
    background: $accent;
  }
}
</style>
