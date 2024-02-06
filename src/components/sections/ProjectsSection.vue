<script lang="ts" setup></script>
<template>
  <section>
    <div class="s-Projects padded-space">
      <h3 class="text-center mb-10">Projects</h3>
      <div class="s-Projects--wrapper">
        <div class="s-Projects--imageWrapper">
          <p>This is a text</p>
          <img src="/src/assets/images/salaz.jpeg" />
        </div>

        <div class="s-Projects--imageWrapper">
          <p>This is a text</p>
          <img src="/src/assets/images/plug-events.png" />
        </div>

        <div class="s-Projects--imageWrapper">
          <p>This is a text</p>
          <img src="/src/assets/images/alt21.webp" />
        </div>

        <div class="s-Projects--imageWrapper">
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
        transition: 0.3s;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -500%);
        opacity: 0;
      }
      img {
        transition: 0.15s;
        height: 45vh;
      }
      &:hover {
        img {
          opacity: 0.2;
        }
        p {
          transform: translate(-50%, -50%);
          opacity: 1;
        }
      }
    }
  }
}
</style>
