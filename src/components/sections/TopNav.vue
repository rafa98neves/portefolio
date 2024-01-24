<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import { ROUTE_NAME } from "@/router";

const router = useRouter();

const routeName = computed(() => router.currentRoute.value.name as ROUTE_NAME);

function isActive(route: ROUTE_NAME) {
  return routeName.value === route;
}
</script>

<template>
  <div class="s-TopNav">
    <div class="padded-space">
      <ul>
        <li :class="{ active: isActive(ROUTE_NAME.ABOUT_ME) }" class="main">
          <RouterLink to="/">
            <h2>R.</h2>
          </RouterLink>
        </li>
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

  ul {
    max-width: $max-page-width;
    margin: auto;
    height: 100%;
    width: 100%;
    padding: 0;
    display: inline-grid;
    grid-template-columns: 1fr min-content min-content min-content min-content;
    align-items: center;
    li {
      &:not(:last-of-type) {
        margin-right: 2rem;
      }
      text-align: end;

      &.main {
        text-align: start;
        h2 {
          text-shadow: 2px 2px $color-2;
        }
      }

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
</style>
