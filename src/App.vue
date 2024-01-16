<script setup lang="ts">
import { RouterView } from "vue-router";
import TopNav from "@/components/sections/TopNav.vue";
</script>

<template>
  <div class="app">
    <TopNav />
    <RouterView class="view-container" />
  </div>
</template>

<style lang="scss" scoped>
.view-container {
  padding-top: 4rem; // TopNav height
}
</style>
