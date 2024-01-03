<script setup lang="ts">
import { ROUTE_NAME } from "@/router";
import { computed, reactive, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const state = reactive({
  show: false,
});

const props = withDefaults(
  defineProps<{
    image: string;
    backgroundColor: string;
    color?: string;
    placement?: "left" | "right";
  }>(),
  {
    placement: "left",
    color: "#fff",
  }
);

const routeName = computed(() => router.currentRoute.value.name);

const style = computed(() => {
  let background;
  if (props.placement === "left") {
    background = `linear-gradient(90deg, ${props.backgroundColor} 0%, ${props.backgroundColor} 25%, rgba(78, 205, 196, 1) 100%)`;
  } else {
    background = `linear-gradient(90deg, rgba(78, 205, 196, 1) 0%, ${props.backgroundColor} 80%)`;
  }
  return {
    color: props.color,
    background,
  };
});

watch(
  routeName,
  () => {
    if (routeName.value === ROUTE_NAME.HISTORY) {
      state.show = true;
    }
  },
  { immediate: true }
);
</script>

<template>
  <Transition appear>
    <div
      v-if="state.show"
      class="c-HistoryCard"
      :class="{ right: placement === 'right' }"
      :style="style"
    >
      <img :src="image" />
      <div class="c-HistoryCard--text">
        <slot />
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.c-HistoryCard {
  display: flex;
  border: 1px solid inherit;
  color: $color-1;
  align-items: center;
  justify-content: space-between;
  min-height: 19rem;

  img {
    width: 20%;
    margin: 1rem;
    border-radius: 50%;
  }

  &--text {
    text-align: left;
    width: 40%;
    margin: 2rem;
    margin-right: auto;
  }

  &:not(.right) {
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
  }
  &.right {
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    img {
      order: 2;
    }
    .c-HistoryCard--text {
      margin-left: auto;
      margin-right: 0;
      color: $color-8;
    }
  }
}
</style>
