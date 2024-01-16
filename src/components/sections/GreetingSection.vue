<script setup lang="ts">
import ExperienceChip from "../blocks/ExperienceChip.vue";
import SocialLinks from "../blocks/SocialLinks.vue";
</script>

<template>
  <section>
    <div class="s-Greeting padded-space">
      <div class="s-Greeting--text">
        <h4>Hello, I am</h4>
        <h1>Rafael Neves</h1>
        <h2 class="mb-8 pb-4">Frontend Developer</h2>
        <p>
          Building amazing UI's, writing reliable code and creating awesome
          products
        </p>
      </div>
      <div class="s-Greeting--image" v-motion-fade-visible :delay="100">
        <img src="/me-1.png" />
      </div>
      <SocialLinks />
      <ExperienceChip class="s-Greeting--chip" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  @extend .medium-bg;
}

.s-Greeting {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  height: 80vh;
  &--image {
    margin-bottom: -2rem;
    margin-right: -1.5rem;
  }
  &--chip {
    position: absolute;
    bottom: -2.7rem;
    left: 50%;
    transform: translateX(-50%);
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
