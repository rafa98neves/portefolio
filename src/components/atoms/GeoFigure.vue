<script setup lang="ts">
withDefaults(
  defineProps<{
    pos?: "top-right" | "top-left" | "bottom-left" | "bottom-right";
    color?: "dark" | "light";
  }>(),
  {
    pos: "top-right",
    color: "light",
  }
);
</script>

<template>
  <div class="c-GeoFigure" :class="[color, pos]" />
</template>

<style lang="scss" scoped>
$width-sm: 25rem;
$half-width-sm: 12.5rem;

$width: 50rem;
$half-width: 25rem;
.c-GeoFigure {
  position: absolute;
  border-radius: 50%;
  z-index: 0;
  width: $width;
  height: $width;
  @include maxLG {
    width: $width-sm;
    height: $width-sm;
  }

  &.top-right {
    top: -$half-width;
    right: -$half-width;
    @include maxLG {
      top: -$half-width-sm;
      right: -$half-width-sm;
    }
  }
  &.top-left {
    top: -$half-width;
    left: -$half-width;
    @include maxLG {
      top: -$half-width-sm;
      left: -$half-width-sm;
    }
  }
  &.bottom-right {
    bottom: -$half-width;
    right: -$half-width;
    @include maxLG {
      bottom: -$half-width-sm;
      right: -$half-width-sm;
    }
  }
  &.bottom-left {
    bottom: -$half-width;
    left: -$half-width;
    @include maxLG {
      bottom: -$half-width-sm;
      left: -$half-width-sm;
    }
  }

  &.dark {
    background-color: $color-4;
    border-color: $color-4;
  }

  &.light {
    background-color: $color-2;
    border-color: $color-2;
  }
}
</style>
