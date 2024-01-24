<script lang="ts" setup>
function goToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<template>
  <section>
    <div class="s-Contacts padded-space">
      <div class="font-weight-bold text-center">
        Are you ready to transform an incredible
        <span class="font-weight-bold text-warning"> idea </span> <br />
        into an awesome
        <span class="font-weight-bold text-warning"> product</span>?
      </div>
      <div class="s-Contacts--contactsWrapper my-10">
        <div class="contact">
          <font-awesome-icon :icon="['fas', 'envelope']" class="icon" />
          <div>
            <b> Email </b>
            neves98rafael@gmail.com
          </div>
        </div>
        <div class="contact">
          <font-awesome-icon :icon="['fas', 'phone']" class="icon" />
          <div>
            <b> Phonenumber </b>
            +351 969 884 851
          </div>
        </div>
        <div class="contact">
          <font-awesome-icon :icon="['fas', 'house']" class="icon" />
          <div>
            <b> Location </b>
            Coimbra, Portugal
          </div>
        </div>
      </div>
      <button class="btn-warning" @click="goToTop">
        <div class="s-Contacts--btnContent">
          Go to top
          <font-awesome-icon class="ml-2" icon="arrow-up" />
        </div>
      </button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  @extend .dark-bg;
  min-height: auto;
  height: auto;
  overflow: hidden;
  padding: 2rem 1rem;

  .s-Contacts {
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &--contactsWrapper {
      display: flex;
    }

    .contact {
      display: inline-flex;
      align-items: center;
      &:not(:last-of-type) {
        margin-right: 3rem;
      }

      b {
        text-align: center;
        display: block;
        color: $color-2;
        margin-bottom: 0.25rem;
      }
    }

    .icon {
      margin-right: 1rem;
      color: $color-2;
    }

    &--btnContent {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
