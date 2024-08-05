<script setup lang="ts">
import { RouterView } from "vue-router";
import TopNav from "@/components/sections/TopNav.vue";
import TopNavSM from "@/components/sections/TopNavSM.vue";
import { useViewport } from "./composables/layout";
import { onMounted } from "vue";
import { event } from "vue-gtag";
import { useHead } from "@vueuse/head";

const { isMD } = useViewport();

useHead({
  // Can be static or computed
  title: "Rafael Neves | Portefolio",
  meta: [
    {
      name: "description",
      content:
        "Explore my portfolio to delve deeper into my journey as a frontend developer and discover the projects that showcase my skills and passion.",
    },
  ],
});

onMounted(() => event("open-app"));
</script>

<template>
  <div class="app">
    <TopNav v-if="!isMD" />
    <TopNavSM v-else />
    <RouterView  class="view-container"/>
  </div>
</template>

<style lang="scss" scoped>
.view-container {
  padding-top: 4rem; // TopNav height
}
</style>
