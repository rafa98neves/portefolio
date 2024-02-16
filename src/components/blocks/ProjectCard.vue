<script setup lang="ts">
import { useViewport } from "@/composables/layout";
import { computed } from "vue";
import { event } from "vue-gtag";

const props = defineProps<{
  title: string;
  text: string;
  file: string;

  redirect?: string;
  width?: string;
}>();

const { isMD } = useViewport();

const styledWidth = computed(() => (isMD.value ? "100%" : props.width));

function redirect() {
  event("redirect", { to: props.redirect });
  window.open(props.redirect, "_blank");
}
</script>

<template>
  <div :style="{ width: styledWidth }" class="c-ProjectCard">
    <div class="c-ProjectCard--text">
      <h4 class="mb-4">{{ title }}</h4>
      {{ text }}
      <button
        class="btn-light mt-6"
        v-if="redirect"
        @click.prevent.stop="redirect"
      >
        See it for yourself!
      </button>
    </div>
    <div class="c-ProjectCard--image">
      <img :src="`/images/${file}`" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-ProjectCard {
  position: relative;
  cursor: pointer;

  &--image {
    img {
      width: 100%;
    }
  }

  &--text {
    display: flex;
    align-items: center;
    flex-direction: column;
    @extend .text-center;
    transition: 0.3s;
    z-index: 3;
  }

  img {
    transition: 0.15s;
  }

  @include minLG {
    &--text {
      position: absolute;
      top: 50%;
      left: 50%;
      width: min(40rem, 100%);
      opacity: 0;
      transform: translate(-50%, -100%);
    }

    &:hover {
      img {
        opacity: 0.05;
      }

      .c-ProjectCard--text {
        transform: translate(-50%, -50%);
        opacity: 1;
      }
    }
  }

  @include maxLG {
    img {
      display: none;
    }
    &--text {
      margin: 3rem;
    }
  }
}
</style>
