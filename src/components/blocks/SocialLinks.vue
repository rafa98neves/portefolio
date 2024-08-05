<script setup lang="ts">
import { event } from "vue-gtag";

const props = withDefaults(
  defineProps<{
    horizontal?: boolean;
    static?: boolean;
  }>(),
  { horizontal: false, static: false }
);

function open(link: string) {
  event("social-link-click", { to: link });
  window.open(link);
}

const commonAnimationBind = (delay = 100) => {
  if (props.static) return {};
  return {
    initial: { transform: "translateY(0)" },
    enter: {
      transform: "translateY(2px)",
      transition: {
        delay,
        repeat: Infinity,
        repeatDelay: 250,
        repeatType: "reverse",
        ease: "easeIn",
        duration: 500,
      },
    },
  };
};
</script>

<template>
  <div class="c-SocialLinks" :class="{ horizontal: props.horizontal }">
    <font-awesome-icon
      class="c-SocialLinks--icon"
      @click="open('https://www.linkedin.com/in/neves98rafael/')"
      v-motion
      v-bind="commonAnimationBind(200)"
      style="top: 42%"
      :icon="['fab', 'linkedin']"
    />

    <font-awesome-icon
      class="c-SocialLinks--icon"
      @click="open('https://github.com/rafa98neves')"
      v-motio
      v-bind="commonAnimationBind(550)"
      style="top: 50%"
      :icon="['fab', 'github']"
    />

    <font-awesome-icon
      class="c-SocialLinks--icon"
      @click="open('mailto:neves98rafael@gmail.com')"
      v-motion
      v-bind="commonAnimationBind(0)"
      style="top: 58%"
      :icon="['fas', 'envelope']"
    />
  </div>
</template>

<style lang="scss" scoped>
.c-SocialLinks {
  z-index: 4;

  &--icon {
    display: block;
    cursor: pointer;
    font-size: 1.8rem;
    color: $pure--white;
    box-shadow: 0px 0px 10rem $highlight;
  }

  &:not(.horizontal) {
    position: fixed;
    right: 2.5rem;
    height: 30vh;
    display: grid;

    &:hover {
      right: 2.2rem;
      font-size: 2rem;
      :deep(path) {
        fill: black;
      }
    }
  }

  &.horizontal {
    padding: 2rem 0;
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;

    .c-SocialLinks--icon {
      display: inline-flex;
      color: $highlight;
      position: relative;

      &:hover {
        right: 0;
        font-size: 1.8rem;
        :deep(path) {
          fill: black;
        }
      }
    }
  }
}
</style>
