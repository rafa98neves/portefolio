<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { ROUTE_NAME } from "@/router";
import SocialLinks from "@/components/blocks/SocialLinks.vue";
import { onClickOutside } from "@vueuse/core";

const router = useRouter();

const menuOpen = ref(false);

const nav = ref(null);

const routeName = computed(() => router.currentRoute.value.name as ROUTE_NAME);

onClickOutside(nav, close);

function close() {
  menuOpen.value = false;
}

function toggle() {
  menuOpen.value = !menuOpen.value;
}

function isActive(route: ROUTE_NAME) {
  return routeName.value === route;
}
</script>

<template>
  <div class="s-TopNav" :class="{ open: menuOpen }" ref="nav">
    <div class="padded-space">
      <div class="menu-wrapper">
        <RouterLink to="/" @click="close">
          <h2 class="shadowless">R.</h2>
        </RouterLink>
        <div class="menu-activator" @click="toggle">
          <font-awesome-icon :icon="['fas', 'bars']" />
        </div>
      </div>
    </div>
    <div class="menu" v-motion-slide-top v-if="menuOpen">
      <ul>
        <li>
          <RouterLink
            :class="{ active: isActive(ROUTE_NAME.CAREER) }"
            to="/career"
            @click="close"
          >
            Career
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :class="{ active: isActive(ROUTE_NAME.ACADEMIC) }"
            to="/academic"
            @click="close"
          >
            Accomplishments
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :class="{ active: isActive(ROUTE_NAME.PROJECTS) }"
            to="/projects"
            @click="close"
          >
            Projects
          </RouterLink>
        </li>
      </ul>
      <SocialLinks horizontal static />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.s-TopNav {
  z-index: 6;
  position: fixed;
  inset: 0;
  height: 4rem;
  background-color: #141b29a7;
  transition: background-color 300ms ease;

  &.open {
    background-color: $secondary--bg;
  }

  .menu-wrapper {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      color: $pure--white;
    }

    .menu-activator {
      font-size: 1.5rem;
      cursor: pointer;
    }
  }

  .menu {
    width: 100%;
    background-color: $secondary--bg;

    ul {
      margin-top: -1rem;
      height: 100%;
      li {
        padding: 2rem 1rem;
        text-align: center;
        a {
          color: $pure--white;
          font-weight: 400;

          &.active {
            color: $highlight;
            font-weight: 700;
          }
        }
      }
    }
  }
}
</style>
