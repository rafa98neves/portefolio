<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<template>
  <div class="c-Card">
    <div class="c-Card--header">
      <h3>{{ title }}</h3>
      <hr />
    </div>
    <div class="c-Card--content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-Card {
  display: grid;
  grid-template-rows: min-content 1fr;
  border: 1px solid $color-2;
  border-radius: 1rem;
  background-color: $color-1;
  box-shadow: 0px 0px 5px 1px $color-2;
  padding: 1rem;
  h3 {
    text-align: center;
  }
  hr {
    border-color: $color-3;
    border-radius: 50%;
    border-width: 1px;
    margin: 0.5rem 2rem;
  }
}
</style>
