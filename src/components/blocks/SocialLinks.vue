<script setup lang="ts">
import LinkedinIcon from "@/components/icons/LinkedinIcon.vue";
import GithubIcon from "@/components/icons/GithubIcon.vue";
import EmailIcon from "@/components/icons/EmailIcon.vue";

function open(link: string) {
  window.open(link);
}
</script>

<template>
  <div class="c-SocialLinks">
    <LinkedinIcon
      class="c-SocialLinks--icon"
      @click="open('https://www.linkedin.com/in/neves98rafael/')"
    />
    <GithubIcon
      class="c-SocialLinks--icon"
      @click="open('https://github.com/rafa98neves')"
    />
    <EmailIcon
      class="c-SocialLinks--icon"
      @click="open('mailto:neves98rafael@gmail.com')"
    />
  </div>
</template>

<style lang="scss" scoped>
.c-SocialLinks {
  position: fixed;
  right: 2.5rem;
  top: 50%;
  transform: translateY(-50%);
  &--icon {
    margin-bottom: 2rem;
    display: block;
    cursor: pointer;
  }
}
</style>
