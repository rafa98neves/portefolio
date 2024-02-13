<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";
import { computed } from "vue";
import { BREAKPOINTS } from "@/constants/breakpoints";

const props = withDefaults(
  defineProps<{
    image: string;
    backgroundColor: string;
    color?: string;
    placement?: "left" | "right";
  }>(),
  {
    placement: "right",
    color: "#fff",
  }
);

const { width } = useWindowSize();

const isSM = computed(() => width.value <= BREAKPOINTS.LG);

const style = computed(() => {
  let background;
  let color = props.color;

  if (isSM.value) {
    background = "transparent";
    color = "#070707";
  } else if (props.placement === "left") {
    background = `linear-gradient(90deg, ${props.backgroundColor} 0%, ${props.backgroundColor} 25%, rgba(255, 255, 255, 0) 95%)`;
  } else {
    background = `linear-gradient(90deg, rgba(255, 255, 255, 0) 0%,  ${props.backgroundColor} 80%)`;
  }
  return {
    color,
    background,
  };
});

const isRight = computed(() => props.placement === 'right' && !isSM.value)

const isLeft = computed(() => props.placement !== 'right' && !isSM.value)

const commonBinds = computed(() => ({
    class: [
      "c-HistoryCard",
      { right: isRight.value, left: isLeft.value },
    ],
    delay: 200,
    style: style.value,
  }));
</script>

<template>
  <div class="c-HistoryCard--wrapper">
    <div
      v-motion-slide-visible-left
      v-if="placement === 'right'"
      v-bind="commonBinds"
    >
      <img :src="image" />
      <div class="c-HistoryCard--text">
        <slot />
      </div>
    </div>

    <div v-else v-motion-slide-visible-right v-bind="commonBinds">
      <img :src="image" />
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
  color: $color-1;
  align-items: center;
  justify-content: space-between;
  min-height: 20rem;
  width: 120%;
  img {
    width: min(100%, 13rem);
    aspect-ratio: 1 / 1;
    object-fit: cover;
    margin: 1rem;
    border-radius: 50%;
  }

  &--text {
    text-align: left;
    width: min(100%, 40rem);
    padding: 2rem;
    margin-right: auto;
  }

  &.left {
    margin-right: -20%;
    border-top-left-radius: 8rem;
    border-bottom-left-radius: 8rem;
  }

  &.right {
    margin-left: -20%;
    border-top-right-radius: 8rem;
    border-bottom-right-radius: 8rem;
    img {
      order: 2;
    }
    .c-HistoryCard--text {
      margin-left: auto;
      margin-right: 0;
      color: $color-8;
    }
  }

  @include md {
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
      color: $color-5 !important;
      padding: 2 0.5rem;
      text-align: center;
    }
  }
}
</style>
