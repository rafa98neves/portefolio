<script setup lang="ts">
defineProps<{ label: string }>();
</script>

<template>
  <div class="c-Chip">
    {{ label }}
  </div>
</template>

<style lang="scss" scoped>
.c-Chip {
  z-index: 4;
  font-size: 12px;
  display: table-cell;
  white-space: nowrap;
  color: $color-8;
  background-color: $color-5;
  border: 1px solid $color-5;
  box-shadow: 0px 0px 6px 1px $color-10;
  border-radius: 14px;
  text-align: center;
  padding: 0.25rem 0.75rem;
}
</style>
