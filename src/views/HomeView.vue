<script setup lang="ts">
import GreetingSection from "@/components/sections/GreetingSection.vue";
import AcademicSection from "@/components/sections/AcademicSection.vue";
import ExpertiseSection from "@/components/sections/ExpertiseSection.vue";
import HistorySection from "@/components/sections/HistorySection.vue";
import ContactsSection from "@/components/sections/ContactsSection.vue";
import ProjectsSection from "@/components/sections/ProjectsSection.vue";
import { computed, onBeforeMount, onBeforeUnmount, ref, watch } from "vue";
import { useElementVisibility, useIntersectionObserver } from "@vueuse/core";
import { useRoute, useRouter } from "vue-router";
import { ROUTE_NAME } from "@/router";
import { debounce } from "lodash";

let routeChangeDebounce: ReturnType<typeof debounce> | null = null;

const router = useRouter();

const route = useRoute();

const greetingSection = ref<InstanceType<typeof GreetingSection> | null>();
const historySection = ref<InstanceType<typeof ExpertiseSection> | null>();
const academicSection = ref<InstanceType<typeof AcademicSection> | null>();
const projectsSection = ref<InstanceType<typeof ProjectsSection> | null>();

const internalRouteChange = ref(false);

const sections = computed(() => [
  {
    ref: greetingSection,
    routeName: ROUTE_NAME.ABOUT_ME,
    visible: useElementVisibility(greetingSection),
  },
  {
    ref: historySection,
    routeName: ROUTE_NAME.CAREER,
    visible: useElementVisibility(historySection),
  },
  {
    ref: academicSection,
    routeName: ROUTE_NAME.ACADEMIC,
    visible: useElementVisibility(academicSection),
  },
  {
    ref: projectsSection,
    routeName: ROUTE_NAME.PROJECTS,
    visible: useElementVisibility(projectsSection),
  },
]);

watch(
  () => route.name,
  async () => {
    const section = sections.value.find((s) => s.routeName === route.name);
    if (section && !internalRouteChange.value) {
      section.ref.value?.$el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  },
  { immediate: true }
);

watch(
  sections,
  () => {
    if (routeChangeDebounce) routeChangeDebounce();
  },
  { deep: true }
);

onBeforeMount(() => {
  routeChangeDebounce = debounce(() => {
    internalRouteChange.value = true;
    const visibleSections = sections.value.filter((s) => s.visible.value);
    if (visibleSections.length === 1) {
      router.replace({ name: visibleSections[0].routeName });
    } else if (visibleSections.length === 3) {
      router.replace({ name: visibleSections[1].routeName });
    }
    setTimeout(() => (internalRouteChange.value = false));
  }, 100);
});

onBeforeUnmount(() => (routeChangeDebounce = null));

let key = ref(1);

/**
 * preventing v-motion not showing elements on render
 * https://github.com/vueuse/motion/issues/143
 */
setTimeout(() => key.value++);
</script>

<template>
  <div class="v-Home" :key="key">
    <GreetingSection ref="greetingSection" />
    <ExpertiseSection class="py-10" />
    <HistorySection ref="historySection" class="py-10" />
    <AcademicSection ref="academicSection" class="py-10" />
    <ProjectsSection ref="projectsSection" class="py-10" />
    <ContactsSection class="py-10" />
  </div>
</template>
