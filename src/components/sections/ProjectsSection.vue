<script lang="ts" setup>
import { ref } from "vue";
import ProjectCard from "../blocks/ProjectCard.vue";
import { PROJECTS } from "@/constants/text";
</script>

<template>
  <section>
    <div class="s-Projects padded-space">
      <h3 class="text-center my-10 pb-10">Check out my work</h3>
      <div class="s-Projects--wrapper">
        <ProjectCard class="s-Projects--card" v-for="project in PROJECTS" v-bind="project" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  min-height: 0;

  .s-Projects {

    &--wrapper {
      column-count: 3;
      break-before: column;
      column-gap: 1rem;

      .s-Projects--card {
        break-inside: avoid;
        margin-bottom: 3rem;
      }

      @include maxLG {
        column-count: 2;
      }

      @include maxMD {
        column-count: 1;
      }
    } 
  }
}
</style>
