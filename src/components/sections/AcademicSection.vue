<script lang="ts" setup>
import HistoryCard from "../blocks/HistoryCard.vue";
import GeoFigure from "../atoms/GeoFigure.vue";
import Chip from "../atoms/Chip.vue";
import { ACADEMIC_TEXT } from "@/constants/text";
</script>
<template>
  <section>
    <div class="s-Academic padded-space">
      <h3 class="text-center mb-10">My Accomplishments</h3>
      <GeoFigure pos="bottom-right" color="dark" />
      <HistoryCard
        class="my-10"
        image="/images/uc.webp"
        background-color="rgba(255, 255, 255, 0.9)"
        placement="left"
        alt="Coimbra's University Logo"
      >
        <div class="s-Academic--text">
          <div
            class="s-Academic--text-header"
            v-html="ACADEMIC_TEXT.UNIVERSITY.HEADER"
          />
          <div
            class="s-Academic--text-subheader mb-4"
            v-html="ACADEMIC_TEXT.UNIVERSITY.SUBHEADER"
          />

          <div v-for="text in ACADEMIC_TEXT.UNIVERSITY.TEXT">
            <span v-html="text" />
          </div>
        </div>
      </HistoryCard>
      <HistoryCard
        class="my-10"
        image="/images/fctuc.png"
        background-color="rgba(255, 255, 255, 0.9)"
        alt="FCTUC Logo"
      >
        <div class="s-Academic--text">
          <div
            class="s-Academic--text-header"
            v-html="ACADEMIC_TEXT.MASTERS.HEADER"
          />
          <div
            class="s-Academic--text-subheader mb-4"
            v-html="ACADEMIC_TEXT.MASTERS.SUBHEADER"
          />

          <div v-for="text in ACADEMIC_TEXT.MASTERS.TEXT">
            <span v-html="text" />
          </div>
        </div>
      </HistoryCard>
      <HistoryCard
        class="mt-10"
        image="/images/music.jpeg"
        background-color="rgba(161,105,54,255)"
        placement="left"
        alt="Me, saxophone, soulful music."
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
    font-weight: 600;
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
