<script setup lang="ts">
import { computed } from "vue";

const experienceYears = computed(() => new Date().getFullYear() - 2020);
</script>

<template>
  <div class="c-ExperienceChip">
    <div>
      <b> {{ experienceYears }} </b>
      years of experience
    </div>
    <div>
      <b> Vue </b>
      most used framework
    </div>
    <div>
      <b> TypeScript </b>
      proficiency
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-ExperienceChip {
  z-index: 4;
  display: flex;
  border-radius: 25px;
  background-color: $secondary--bg;
  box-shadow: 0px 0px 1rem $pure--dark;

  @include maxLG {
    flex-wrap: wrap;
    padding: 0 1rem;
  }

  div {
    min-width: 13rem;
    padding: 0.3rem 2rem;
    margin: 1rem 0;
    text-align: center;

    @include maxLG {
      margin: 0.5rem 0;
      width: 100%;
    }

    b {
      font-size: 1.2rem;
      font-weight: 700;
      display: block;
    }

    &:not(:last-child) {
      border-right: 1px solid $highlight;
      @include maxLG {
        border: none;
      }
    }
  }
}
</style>
