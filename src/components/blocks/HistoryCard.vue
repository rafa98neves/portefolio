<script setup lang="ts">
import { computed } from "vue";
import { useViewport } from "@/composables/layout";

const props = withDefaults(
  defineProps<{
    image: string;
    backgroundColor: string;
    color?: string;
    placement?: "left" | "right";
    alt?: string;
  }>(),
  {
    placement: "right",
    color: "#fff",
  }
);

const { isMD } = useViewport();

const isRight = computed(() => props.placement === "right" && !isMD.value);

const isLeft = computed(() => props.placement !== "right" && !isMD.value);

const commonBinds = computed(() => ({
  class: ["c-HistoryCard", { right: isRight.value, left: isLeft.value }],
  delay: 350,
}));
</script>

<template>
  <div class="c-HistoryCard--wrapper">
    <div
      v-motion-slide-visible-left
      v-if="placement === 'right'"
      v-bind="commonBinds"
    >
      <img :alt="alt" :src="image" />
      <div class="c-HistoryCard--text">
        <slot />
      </div>
    </div>

    <div v-else v-motion-slide-visible-right v-bind="commonBinds">
      <img :alt="alt" :src="image" />
      <div class="c-HistoryCard--text">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-HistoryCard {
  position: relative;
  display: flex;
  color: $pure--white;
  align-items: center;
  justify-content: space-between;
  width: 120%;

  img {
    width: min(100%, 12rem);
    aspect-ratio: 1 / 1;
    object-fit: scale-down;
    margin: 1rem;
    border-radius: 50%;
  }

  &--text {
    text-align: left;
    width: min(100%, 46rem);
    padding: 2rem;
    margin-right: auto;
  }

  &.left {
    margin-left: 15%;
  }

  &.right {
    margin-left: -33%;

    img {
      order: 2;
    }

    .c-HistoryCard--text {
      margin-left: auto;
      margin-right: 0;
      color: $grey;
    }
  }

  @include maxMD {
    width: 100%;
    border-radius: 0 !important;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    img {
      width: min(100%, 6rem);
      margin: 0;
      order: 0 !important;
    }

    &--text {
      padding: 2 0.5rem;
      text-align: center;
    }
  }
}

::v-deep(h3) {
  @extend .shadowless;
}
</style>
