<script setup lang="ts">
import { RouterView } from "vue-router";
import TopNav from "@/components/sections/TopNav.vue";
import TopNavSM from "@/components/sections/TopNavSM.vue";
import { useViewport } from "./composables/layout";
import { onMounted } from "vue";
import { event } from "vue-gtag";

const { isMD } = useViewport();

onMounted(() => event("open-app"));
</script>

<template>
  <div class="app">
    <TopNav v-if="!isMD" />
    <TopNavSM v-else />
    <RouterView class="view-container" />
  </div>
</template>

<style lang="scss" scoped>
.view-container {
  padding-top: 4rem; // TopNav height
}
</style>
