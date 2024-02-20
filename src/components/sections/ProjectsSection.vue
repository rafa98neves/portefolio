<script lang="ts" setup>
import ProjectCard from "../blocks/ProjectCard.vue";
import { PROJECTS } from "@/constants/text";
</script>
<template>
  <section>
    <div class="s-Projects padded-space">
      <h3 class="text-center mb-10">I worked on</h3>
      <div class="s-Projects--wrapper">
        <ProjectCard
          v-for="{ title, description, file, width, redirectTo } in PROJECTS"
          :width="width"
          :title="title"
          :text="description"
          :file="file"
          :redirect="redirectTo"
          :alt="title"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  @extend .dark-bg;
  background: linear-gradient(
    180deg,
    $color-4 0%,
    $color-4 50%,
    $color-11 100%
  );

  .s-Projects {
    &--wrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      justify-content: space-around;
      align-items: center;
    }
  }
}
</style>
