<script setup lang="ts">
defineProps<{ title?: string; icons?: string[] }>();
</script>

<template>
  <div class="c-Card" v-motion-fade-visible :delay="100">
    <font-awesome-icon
      v-for="(icon, index) in icons"
      :icon="icon"
      class="c-Card--icon"
      :class="`icon-${index + 1}`"
    />
    <div class="c-Card--header">
      <slot name="title">
        <h3>{{ title }}</h3>
      </slot>
    </div>

    <div class="c-Card--content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-Card {
  display: grid;
  position: relative;
  grid-template-rows: min-content 1fr;
  border: 1px solid $color-2;
  border-radius: 1rem;
  background-color: $color-1;
  box-shadow: 0px 0px 5px 1px $color-2;
  padding: 1rem 1rem 2rem 1rem;
  h3 {
    text-align: center;
  }

  &--icon {
    position: absolute;
    opacity: 0.05;
    font-size: 5rem;

    &.icon-1 {
      top: 5%;
      left: 10%;
      transform: rotate(25deg);
    }
    &.icon-2 {
      top: 35%;
      right: 10%;
      transform: rotate(35deg) scaleX(-1);
    }
    &.icon-3 {
      bottom: 5%;
      left: 12%;
      transform: rotate(12deg);
    }
  }

  &--header {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &--content {
    margin-top: 1rem;
  }
}
</style>
