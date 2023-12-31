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
    <ul>
      <li>
        <RouterLink :class="{ active: isActive(ROUTE_NAME.ABOUT_ME) }" to="/">
          <h2>R</h2>
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
          :class="{ active: isActive(ROUTE_NAME.CONTACTS) }"
          to="/contacts"
        >
          Contacts
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.s-TopNav {
  @extend .light-bg;
  @extend .container-x;
  border-bottom: 1px solid $color-2;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  position: fixed;
  inset: 0;
  height: 4rem;

  ul {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: inline-grid;
    grid-template-columns: 1fr min-content min-content min-content;
    align-items: center;
    li {
      :not(:first-child) {
        text-align: end;
      }
      margin-right: 1.5rem;
    }
  }
}
</style>
