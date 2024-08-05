<script setup lang="ts">
import Card from "@/components/atoms/Card.vue";

defineProps<{
  title: string;
  text: string;
  file: string;

  code?: string;
  redirect?: string;
  full?: boolean;
  imgStyle?: string;
}>();

const emits = defineEmits(["project-click"]);

function redirectUser(redirect?: string) {
  if (redirect) {
    emits("project-click", { to: redirect });
    window.open(redirect, "_blank");
  }
}
</script>

<template>
  <Card
    class="c-ProjectCard"
    :clickable="!!redirect"
    @click="redirectUser(redirect)"
  >
    <div class="c-ProjectCard--text-wrapper">
      <h4 class="text-uppercase shadowless">{{ title }}</h4>
      <div class="c-ProjectCard--text text-light my-4">
        {{ text }}
        <button class="mt-4" @click.stop.prevent="redirectUser(code)" v-if="code">
          Check out the code
        </button>
      </div>
    </div>

    <div class="c-ProjectCard--image" :class="{ full }">
      <img :src="`/images/${file}`" :style="imgStyle" />
    </div>
  </Card>
</template>

<style lang="scss" scoped>
.c-ProjectCard {
  transition: all 300ms;
  height: min-content;
  position: relative;
  cursor: pointer;

  .c-ProjectCard--text-wrapper {
    grid-template-rows: min-content 1fr;
    @extend .text-center;
    position: relative;
    display: grid;
  }

  &:hover {
    transform: scale(1.06) !important;
    z-index: 3;
  }

  &--image {
    justify-content: center;
    align-items: center;
    margin-top: auto;
    display: flex;

    img {
      border-radius: 2rem;
      max-height: 16rem;
      max-width: 100%;
    }

    &.full {
      margin-bottom: -2rem;

      img {
        border-bottom-right-radius: 1rem;
        border-bottom-left-radius: 1rem;
        border-top-right-radius: 0;
        border-top-left-radius: 0;
        max-height: 16rem;
      }
    }
  }

  &--text {
    flex-direction: column;
    @extend .text-center;
    align-items: center;
    padding: 0 2rem;
    display: flex;
    z-index: 3;
  }
}

.c-ProjectCard {
  padding: 0 !important;
}
</style>
