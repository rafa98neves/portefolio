<script setup lang="ts">
import { RouterView } from "vue-router";
import TopNav from "@/components/sections/TopNav.vue";
import TopNavSM from "@/components/sections/TopNavSM.vue";
import { computed } from "vue";
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize();

const isSM = computed(() => width.value <= 992);
</script>

<template>
  <div class="app">
    <TopNav v-if="!isSM" />
    <TopNavSM v-else />
    <RouterView class="view-container" />
  </div>
</template>

<style lang="scss" scoped>
.view-container {
  padding-top: 4rem; // TopNav height
}
</style>
