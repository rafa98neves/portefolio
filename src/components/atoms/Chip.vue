<script setup lang="ts">
withDefaults(defineProps<{ label: string; dark?: boolean }>(), { dark: true });
</script>

<template>
  <div class="c-Chip" :class="{ dark }">
    {{ label }}
  </div>
</template>

<style lang="scss" scoped>
.c-Chip {
  z-index: 4;
  font-size: 12px;
  display: table-cell;
  white-space: nowrap;
  border-radius: 14px;
  text-align: center;
  padding: 0.25rem 0.75rem;
  color: $grey;
  box-shadow: 0px 0px 6px 1px $pure--dark;
  background-color: $secondary--bg;
  border: 1px solid $highlight;

  &.dark {
    color: $grey;
  }
}
</style>
