<script setup lang="ts">
withDefaults(
  defineProps<{
    pos?:
      | "top-right"
      | "top-left"
      | "bottom-left"
      | "bottom-right"
      | "bottom-center"
      | "top-center";
    color?: "dark" | "light";
    size?: "sm" | "md" | "lg";
  }>(),
  {
    pos: "top-right",
    color: "light",
    size: "lg",
  }
);
</script>

<template>
  <div class="c-GeoFigure" :class="[color, pos, size]" />
</template>

<style lang="scss" scoped>
.c-GeoFigure {
  position: absolute;
  border-radius: 50%;
  z-index: 0;

  &.lg {
    width: 50vw;
    height: 50vh;
  }

  &.md {
    width: 40vw;
    height: 40vh;
  }

  &.sm {
    width: 20vw;
    height: 20vh;
  }

  &.dark {
    background-color: $color-4;
    border-color: $color-4;
  }

  &.light {
    background-color: $color-2;
    border-color: $color-2;
  }

  &.top-right {
    top: -50%;
    right: -40%;
  }

  &.top-left {
    top: -50%;
    left: -40%;
  }

  &.top-center {
    top: -50%;
    left: 50%;
    transform: translateX(-50%);
  }
  &.bottom-right {
    bottom: -50%;
    right: -40%;
  }

  &.bottom-left {
    bottom: -50%;
    left: -30%;
  }

  &.bottom-center {
    bottom: -100%;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
