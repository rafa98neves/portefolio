<script setup lang="ts">
function open(link: string) {
  window.open(link);
}

const commonAnimationBind = (delay = 100) => ({
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
});
</script>

<template>
  <div class="c-SocialLinks">
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
      v-motion
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
    position: fixed;
    right: 2.5rem;
    display: block;
    cursor: pointer;
    width: 1.5rem;
    height: auto;
    color: $color-10;

    &:hover {
      right: 2.2rem;
      width: 2rem;
      :deep(path) {
        fill: black;
      }
    }
  }
}
</style>
