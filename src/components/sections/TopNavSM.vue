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

onClickOutside(nav, toggle);

function toggle() {
  menuOpen.value = !menuOpen.value;
}

function isActive(route: ROUTE_NAME) {
  return routeName.value === route;
}
</script>

<template>
  <div class="s-TopNav" ref="nav">
    <div class="padded-space">
      <div class="menu-wrapper">
        <RouterLink to="/">
          <h2>R.</h2>
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
            :class="{ active: isActive(ROUTE_NAME.MY_SKILLS) }"
            to="/skills"
          >
            Skills
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :class="{ active: isActive(ROUTE_NAME.HISTORY) }"
            to="/history"
          >
            History
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :class="{ active: isActive(ROUTE_NAME.ACADEMIC) }"
            to="/academic"
          >
            Accomplishments
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :class="{ active: isActive(ROUTE_NAME.CONTACTS) }"
            to="/contacts"
          >
            Contacts
          </RouterLink>
        </li>
      </ul>
      <SocialLinks horizontal static />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.s-TopNav {
  @extend .dark-bg;
  z-index: 6;
  position: fixed;
  inset: 0;
  height: 4rem;

  .menu-wrapper {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      color: $color-1;
      text-shadow: 2px 2px $color-2;
    }

    .menu-activator {
      font-size: 1.5rem;
      cursor: pointer;
    }
  }

  .menu {
    @extend .dark-bg;
    width: 100%;
    ul {
      margin-top: -1rem;
      height: 100%;
      li {
        padding: 2rem 1rem;
        text-align: center;
        a {
          color: $color-1;
          font-weight: 400;
          &.active {
            color: $color-2;
            font-weight: 700;
          }
        }
      }
    }
  }
}
</style>
