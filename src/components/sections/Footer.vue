<script setup lang="ts"></script>

<template>
  <div class="s-Footer">
    <div class="s-Footer--wrapper padded-space">
      <div>Stuff</div>
      <div>Stuff</div>
      <div>@Rafael Neves 2024</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.s-Footer {
  height: 5rem;
  @extend .dark-bg;

  &--wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
