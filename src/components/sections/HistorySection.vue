<script lang="ts" setup>
import HistoryCard from "../blocks/HistoryCard.vue";
import Chip from "../atoms/Chip.vue";
import { HISTORY_TEXT } from "@/helpers/text";
</script>
<template>
  <section>
    <div class="s-History">
      <h3 class="text-center mb-10">My Career</h3>
      <HistoryCard
        class="my-10"
        image="/src/assets/images/unbabel.png"
        background-color="rgba(56, 67, 208, 1)"
      >
        <div>
          <div class="mb-4">
            <b> {{ HISTORY_TEXT.UNBABEL.HEADER }}</b>
          </div>

          <div v-for="text in HISTORY_TEXT.UNBABEL.TEXT">
            <span v-html="text" />
          </div>

          <div class="mt-4">
            <Chip
              v-for="chip in HISTORY_TEXT.UNBABEL.CHIPS"
              class="s-History--chipContainer"
              :label="chip"
            />
          </div>
        </div>
      </HistoryCard>
      <HistoryCard
        class="my-10"
        image="/src/assets/images/grama.jpeg"
        background-color="rgba(0, 0, 0, 1)"
        placement="left"
      >
        <div>
          <div class="mb-4">
            <b> {{ HISTORY_TEXT.GRAMA.HEADER }}</b>
          </div>

          <div v-for="text in HISTORY_TEXT.GRAMA.TEXT" class="mb-2">
            <span v-html="text" />
          </div>

          <div class="mt-4">
            <Chip
              v-for="chip in HISTORY_TEXT.GRAMA.CHIPS"
              class="s-History--chipContainer"
              :label="chip"
            />
          </div>
        </div>
      </HistoryCard>
      <HistoryCard
        class="mt-10"
        image="/src/assets/images/plug.png"
        background-color="rgb(92, 105, 230, 1)"
      >
        <div>
          <div class="mb-4">
            <b> {{ HISTORY_TEXT.PLUG.HEADER }}</b>
          </div>

          <div v-for="text in HISTORY_TEXT.PLUG.TEXT">
            <span v-html="text" />
          </div>

          <div class="mt-4">
            <Chip
              v-for="chip in HISTORY_TEXT.PLUG.CHIPS"
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
  @extend .medium-bg;
  background: linear-gradient(180deg, $color-2 0%, $color-8 100%);
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
}
</style>
