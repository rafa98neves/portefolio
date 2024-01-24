<script lang="ts" setup>
import HistoryCard from "../blocks/HistoryCard.vue";
import Chip from "../atoms/Chip.vue";
import { ACADEMIC_TEXT } from "@/helpers/text";
</script>
<template>
  <section>
    <div class="s-History padded-space">
      <h3 class="text-center mb-10">My Accomplishments</h3>
      <HistoryCard
        class="my-10"
        image="/src/assets/images/uc.webp"
        background-color="rgba(255, 255, 255, 1)"
      >
        <div class="s-History--text">
          <div class="mb-4">
            <b> {{ ACADEMIC_TEXT.MASTERS.HEADER }}</b>
          </div>

          <div v-for="text in ACADEMIC_TEXT.MASTERS.TEXT">
            <span v-html="text" />
          </div>

          <div class="mt-6 mb-4">
            <b> {{ ACADEMIC_TEXT.UNIVERSITY.HEADER }}</b>
          </div>

          <div v-for="text in ACADEMIC_TEXT.UNIVERSITY.TEXT">
            <span v-html="text" />
          </div>

          <div class="mt-4">
            <Chip
              v-for="chip in [
                ...ACADEMIC_TEXT.MASTERS.CHIPS,
                ...ACADEMIC_TEXT.UNIVERSITY.CHIPS,
              ]"
              class="s-History--chipContainer"
              :label="chip"
            />
          </div>
        </div>
      </HistoryCard>
      <HistoryCard
        class="my-10"
        image="/src/assets/images/music.jpeg"
        background-color="rgba(161,105,54,255)"
        placement="left"
      >
        <div class="s-History--text">
          <div class="mb-4">
            <b> {{ ACADEMIC_TEXT.MUSIC.HEADER }}</b>
          </div>

          <div v-for="text in ACADEMIC_TEXT.MUSIC.TEXT">
            <span v-html="text" />
          </div>

          <div class="mt-4">
            <Chip
              v-for="chip in ACADEMIC_TEXT.MUSIC.CHIPS"
              class="s-History--chipContainer"
              :label="chip"
            />
          </div>
        </div>
      </HistoryCard>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  @extend .light-bg;
  min-height: 20rem;

  :deep(a) {
    color: $color-1;
    font-weight: 600;
  }

  .s-History--chipContainer {
    display: inline-block;
    margin-right: 0.5rem;
    margin-top: 0.5rem;
  }
  .s-History--text {
    color: $color-5;
    :deep(a) {
      color: $color-5 !important;
    }
  }
}
</style>
