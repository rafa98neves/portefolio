<template>
  <section>
    <div class="s-Contacts padded-space">
      <div class="font-weight-bold text-center">
        Are you prepared to turn your extraordinary
        <span class="font-weight-bold text-warning"> idea </span>
        into an exceptional
        <span class="font-weight-bold text-warning"> product</span>?
      </div>
      <div class="s-Contacts--contactsWrapper my-5">
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
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  min-height: auto;
  height: auto;
  overflow: hidden;

  .s-Contacts {
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &--contactsWrapper {
      display: flex;

      @include maxLG {
        flex-direction: column;
        justify-content: center;
        gap: 2rem;
      }
    }

    .contact {
      display: inline-flex;
      align-items: center;

      &:not(:last-of-type) {
        margin-right: 3rem;
      }

      @include maxLG {
        padding-left: 1rem;
        margin-right: 0 !important;
      }

      b {
        text-align: center;
        display: block;
        color: $highlight;
        margin-bottom: 0.25rem;
        @include maxLG {
          text-align: start;
        }
      }
    }

    .icon {
      margin-right: 1rem;
      color: $highlight;
    }

    &--btnContent {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
