<script setup lang="ts">
import { computed } from "vue";

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

const style = computed(() => {
  let background;
  if (props.placement === "left") {
    background = `linear-gradient(90deg, ${props.backgroundColor} 0%, ${props.backgroundColor} 25%, rgba(255, 255, 255, 0) 95%)`;
  } else {
    background = `linear-gradient(90deg, rgba(255, 255, 255, 0) 0%,  ${props.backgroundColor} 80%)`;
  }
  return {
    color: props.color,
    background,
  };
});

const commonBinds = computed(() => ({
  class: [
    "c-HistoryCard",
    { right: props.placement === "right", left: props.placement !== "right" },
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
  display: flex;
  color: $color-1;
  align-items: center;
  justify-content: space-between;
  min-height: 20rem;
  width: 80vw;

  img {
    width: 13rem;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    margin: 1rem;
    border-radius: 50%;
  }

  &--text {
    text-align: left;
    width: 40rem;
    margin: 2rem;
    margin-right: auto;
  }

  &.left {
    margin-left: auto;
    border-top-left-radius: 8rem;
    border-bottom-left-radius: 8rem;
  }

  &.right {
    margin-right: auto;
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
}
</style>
