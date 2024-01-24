<script lang="ts" setup></script>
<template>
  <section>
    <div class="s-Projects padded-space">
      <h3 class="text-center mb-10">Projects</h3>
      <div class="s-Projects--wrapper">
        <div v-motion-slide-visible-left class="s-Projects--imageWrapper">
          <p>This is a text</p>
          <img src="/src/assets/images/salaz.jpeg" />
        </div>

        <div v-motion-slide-visible-left class="s-Projects--imageWrapper">
          <p>This is a text</p>
          <img src="/src/assets/images/plug-events.png" />
        </div>

        <div v-motion-slide-visible-left class="s-Projects--imageWrapper">
          <p>This is a text</p>
          <img src="/src/assets/images/alt21.webp" />
        </div>

        <div v-motion-slide-visible-left class="s-Projects--imageWrapper">
          <p>This is a text</p>
          <img src="/src/assets/images/Portefolio.png" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  @extend .dark-bg;

  .s-Projects {
    &--wrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 5rem;
      flex-grow: 1;
      justify-content: space-between;
    }
    &--imageWrapper {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      p {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: none;
      }
      img {
        height: 45vh;
      }
      &:hover {
        img {
          opacity: 0.2;
        }
        p {
          display: block;
        }
      }
    }
  }
}
</style>
