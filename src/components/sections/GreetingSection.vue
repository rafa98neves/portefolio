<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";
import GeoFigure from "../atoms/GeoFigure.vue";
import ExperienceChip from "../blocks/ExperienceChip.vue";
import SocialLinks from "../blocks/SocialLinks.vue";
import { computed } from "vue";
import { BREAKPOINTS } from "@/constants/breakpoints";

const { width } = useWindowSize();

const isSM = computed(() => width.value <= BREAKPOINTS.LG);
</script>

<template>
  <section>
    <div class="s-Greeting padded-space">
      <GeoFigure color="dark" />
      <div class="s-Greeting--text">
        <h4>Hey, I am</h4>
        <h1>Rafael Neves</h1>
        <h2 class="mb-8 pb-4">Frontend Developer</h2>
        <div class="text-light">
          Building amazing UI's, writing reliable code and creating awesome
          products.
        </div>
      </div>
      <div class="s-Greeting--image" v-motion-fade-visible>
        <img src="/src/assets/images/me-1.png" />
      </div>
      <SocialLinks v-if="!isSM" />
      <ExperienceChip class="s-Greeting--chip" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  min-height: 38rem;
  height: 38rem;
  @extend .medium-bg;
}

.s-Greeting {
  display: flex;
  position: relative;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  padding-top: 1rem;

  @include maxLG {
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
  }

  &--image {
    margin-bottom: -2rem;
    @include maxLG {
      display: none;
    }
  }
  &--chip {
    position: absolute;
    bottom: -1.8rem;
    left: 50%;
    transform: translateX(-50%);
    @include maxLG {
      bottom: -15%;
    }
  }
  h2,
  h1 {
    text-shadow: 2px 2px $color-3;
  }
  h1 {
    color: $color-4;
  }
  h4,
  p {
    color: $color-7;
  }
}
</style>
