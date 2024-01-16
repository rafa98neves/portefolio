<script lang="ts" setup>
import { computed, reactive } from "vue";
import EmailIcon from "../icons/EmailIcon.vue";
import PhoneIcon from "../icons/PhoneIcon.vue";
import HouseIcon from "../icons/HouseIcon.vue";
import ChevronIcon from "../icons/ChevronIcon.vue";

const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const formIsValid = computed(() => {
  return Object.values(form).findIndex((v) => v.length === 0) === -1;
});

function send() {
  if (!formIsValid.value) return;
}
</script>

<template>
  <section>
    <div class="s-Contacts padded-space">
      <h3 class="text-center mb-10">Get in touch</h3>
      <div class="s-Contacts--wrapper">
        <div>
          <form class="s-Contacts--formContainer" @submit="send">
            <input class="half" placeholder="Name" v-model="form.name" />
            <input
              class="medium"
              placeholder="Email"
              type="email"
              v-model="form.email"
            />

            <input
              class="medium"
              placeholder="Subject"
              v-model="form.subject"
            />
            <textarea placeholder="Message" v-model="form.message" />
            <button :disabled="!formIsValid" @click="send">
              Send Message <ChevronIcon class="btn-icon" />
            </button>
          </form>
        </div>
        <div class="mb-4 ml-4">
          <div class="s-Contacts--contacts">
            <EmailIcon class="icon mr-4" />
            <div>
              <b> Email </b>
              neves98rafael@gmail.com
            </div>
          </div>
          <div class="s-Contacts--contacts">
            <PhoneIcon class="icon mr-4" />
            <div>
              <b> Phonenumber </b>
              +351 969 884 851
            </div>
          </div>
          <div class="s-Contacts--contacts">
            <HouseIcon class="icon mr-4" />
            <div>
              <b> Location </b>
              Coimbra, Portugal
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  @extend .light-bg;

  button {
    .btn-icon {
      transform: rotate(90deg);
      margin-left: 1rem;
    }
  }
  .s-Contacts {
    &--wrapper {
      display: grid;
      grid-template-columns: 70% auto;
      align-items: center;
    }
    &--contacts {
      margin-bottom: 2rem;
      color: $color-7;
      b {
        display: block;
        color: $color-4;
        margin-bottom: 0.25rem;
      }
      * {
        display: inline-block;
        vertical-align: middle;
      }
      .icon {
        width: 24px;
        height: solid;
      }
    }
    &--formContainer {
      display: flex;
      flex-wrap: wrap;
      flex-grow: 0;
      gap: 1rem;
      padding-right: 2rem;
      .half {
        flex-basis: 50%;
      }
      .medium {
        flex-basis: 60%;
      }
    }
  }
}
</style>
