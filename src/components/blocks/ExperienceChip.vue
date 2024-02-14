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
  border: 1px solid $color-1;
  border-radius: 25px;
  background-color: $color-1;
  box-shadow: 0px 0px 5px 1px $color-2;

  @include maxLG {
    flex-wrap: wrap;
    padding: 0 1rem;
  }

  div {
    min-width: 13rem;
    padding: 0.3rem 2rem;
    margin: 1rem 0;
    text-align: center;
    color: $color-3;
    @include maxLG {
      width: 100%;
    }
    b {
      font-size: 1.2rem;
      font-weight: 700;
      color: $color-4;
      display: block;
    }
    &:not(:last-child) {
      border-right: 1px solid $color-2;
      @include maxLG {
        border: none;
      }
    }
  }
}
</style>
