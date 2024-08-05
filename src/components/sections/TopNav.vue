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
            :class="{ active: isActive(ROUTE_NAME.CAREER) }"
            to="/career"
          >
            Career
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
            :class="{ active: isActive(ROUTE_NAME.PROJECTS) }"
            to="/projects"
          >
            Projects
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.s-TopNav {
  z-index: 6;
  position: fixed;
  inset: 0;
  height: 4rem;
  background-color: $secondary--bg;
  box-shadow: 0px 0px 2rem $pure--dark;

  ul {
    max-width: $max-page-width;
    margin: auto;
    height: 100%;
    width: 100%;
    padding: 0;
    display: inline-grid;
    grid-template-columns: 1fr min-content min-content min-content;
    align-items: center;
    li {
      &:not(:last-of-type) {
        margin-right: 2rem;
      }
      text-align: end;

      &.main {
        text-align: start;
        h2 {
          text-main--bg: 2px 2px $highlight;
        }
      }

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
</style>
