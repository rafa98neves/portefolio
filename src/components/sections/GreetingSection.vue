<script setup lang="ts">
import ExperienceChip from "../blocks/ExperienceChip.vue";
import SocialLinks from "../blocks/SocialLinks.vue";
import { useViewport } from "@/composables/layout";

const { isMD } = useViewport();
</script>

<template>
  <section>
    <div class="s-Greeting padded-space">
      <div class="s-Greeting--text">
        <h1>Rafael Neves</h1>
        <h2 class="s-Greeting--subtitle">Frontend Developer</h2>
        <div class="text-light">
          Building amazing UI's, writing reliable code <br />
          and creating awesome products.
        </div>
      </div>
      <div class="s-Greeting--image" v-motion-fade-visible>
        <img alt="Rafael Neves" src="/images/me-1.png" />
      </div>
      <SocialLinks v-if="!isMD" />
      <ExperienceChip class="s-Greeting--chip" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  min-height: 38rem;
  height: 38rem;
}

.s-Greeting {
  justify-content: space-between;
  align-items: center;
  display: flex;
  height: 100%;


  @include minLG {
    h1 {
      font-size: 4rem;
    }

    &--text {
      margin-left: 10%;
    }
  }

  &--subtitle {
    margin-bottom: 4rem;
  }

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
    bottom: -2.5rem;
    left: 50%;
    transform: translateX(-50%);
    @include maxLG {
      bottom: -15%;
    }
  }
}
</style>
