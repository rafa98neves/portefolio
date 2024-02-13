<script setup lang="ts">
defineProps<{
  title: string;
  text: string;
  file: string;
  width?: string;
}>();
</script>

<template>
  <div :style="{ width }" class="c-ProjectCard">
    <h4 class="mb-4">{{ title }}</h4>
    <div class="c-ProjectCard--text">{{ text }}</div>
    <img :src="`/src/assets/images/${file}`" />
  </div>
</template>

<style lang="scss" scoped>
.c-ProjectCard {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    img {
      opacity: 0.05;
    }

    .c-ProjectCard--text {
      transform: translate(-50%, -50%);
      opacity: 1;
    }
  }

  &--text {
    @extend .text-center;
    transition: 0.3s;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -500%);
    opacity: 0;
    padding: 2rem;
  }

  img {
    transition: 0.15s;
    width: 100%;
  }

  @include lg {
    img {
      opacity: 0.2;
    }
    &--text {
      transform: translate(-50%, -50%);
      opacity: 1;
      padding: 0;
    }
  }
}
</style>
