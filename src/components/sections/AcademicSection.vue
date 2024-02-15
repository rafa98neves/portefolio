<script lang="ts" setup>
import HistoryCard from "../blocks/HistoryCard.vue";
import Chip from "../atoms/Chip.vue";
import { ACADEMIC_TEXT } from "@/constants/text";
</script>
<template>
  <section>
    <div class="s-Academic padded-space">
      <h3 class="text-center mb-10">My Accomplishments</h3>
      <HistoryCard
        class="my-10"
        image="/images/uc.webp"
        background-color="rgba(255, 255, 255, 1)"
        placement="left"
      >
        <div class="s-Academic--text">
          <div
            class="s-Academic--text-header mb-4"
            v-html="ACADEMIC_TEXT.MASTERS.HEADER"
          />

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
              class="s-Academic--chipContainer"
              :label="chip"
            />
          </div>
        </div>
      </HistoryCard>
      <HistoryCard
        class="mt-10"
        image="/images/music.jpeg"
        background-color="rgba(161,105,54,255)"
      >
        <div class="s-Academic--text">
          <div class="s-Academic--text-header">
            <b> {{ ACADEMIC_TEXT.MUSIC.HEADER }}</b>
          </div>
          <div class="s-Academic--text-subheader mb-4">
            {{ ACADEMIC_TEXT.MUSIC.SUBHEADER }}
          </div>

          <div v-for="text in ACADEMIC_TEXT.MUSIC.TEXT">
            <span v-html="text" />
          </div>

          <div class="mt-4">
            <Chip
              v-for="chip in ACADEMIC_TEXT.MUSIC.CHIPS"
              class="s-Academic--chipContainer"
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
  min-height: 25rem;

  :deep(a) {
    color: $color-1;
    font-weight: 600;
  }

  .s-Academic--chipContainer {
    display: inline-block;
    margin-right: 0.5rem;
    margin-top: 0.5rem;
  }
  .s-Academic--text {
    color: $color-5;
    :deep(a) {
      color: $color-5 !important;
    }
    &-header {
      display: inline-flex;
    }
  }
}
</style>
