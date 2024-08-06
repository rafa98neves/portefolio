<script setup lang="ts">
import Card from "@/components/atoms/Card.vue";

defineProps<{
  title: string;
  text: string;
  file: string;

  code?: string;
  small?: boolean;
  redirect?: string;
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
      <h5 class="text-uppercase shadowless">{{ title }}</h5>
      <div class="c-ProjectCard--text text-light my-2">
        {{ text }}
        <button class="mt-8" @click.stop.prevent="redirectUser(code)" v-if="code">
          Check out the code
        </button>
      </div>
    </div>

    <div class="c-ProjectCard--image" :class="{ full: !small }">
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

    h5 {
      letter-spacing: 6px;
    }
  }

  &:hover {
    transform: scale(1.1) !important;
    z-index: 3;

    .c-ProjectCard--text {
      color: $pure--white;
    }
  }

  &--image {
    justify-content: center;
    align-items: center;
    margin-top: auto;
    display: flex;

    img {
      border-radius: 2rem;
      max-height: 16rem;
      max-width: 70%;
      margin-bottom: 2rem;
    }

    &.full {
      margin-bottom: -2rem;

      img {
        border-bottom-right-radius: 1rem;
        border-bottom-left-radius: 1rem;
        border-top-right-radius: 0;
        border-top-left-radius: 0;
        width: 100%;
        max-width: 100%;
        border: 1px solid $grey;
        border-top: none;
      }
    }
  }

  &--text {
    font-weight: 300;
    flex-direction: column;
    @extend .text-center;
    align-items: center;
    padding: 2rem 4rem;
    display: flex;
    z-index: 3;
  }
}

.c-ProjectCard {
  padding: 0 !important;
}
</style>
