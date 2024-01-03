<script setup lang="ts">
import GreetingSection from "@/components/sections/GreetingSection.vue";
import ExpertiseSection from "@/components/sections/ExpertiseSection.vue";
import HistorySection from "@/components/sections/HistorySection.vue";
import ContactsSection from "@/components/sections/ContactsSection.vue";
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { ROUTE_NAME } from "@/router";
import { debounce } from "lodash";

let scrollDebouncer: ReturnType<typeof debounce> | null = null;

const router = useRouter();

const greetingSection = ref<InstanceType<typeof GreetingSection> | null>();
const expertiseSection = ref<InstanceType<typeof ExpertiseSection> | null>();
const historySection = ref<InstanceType<typeof ExpertiseSection> | null>();
const contactsSection = ref<InstanceType<typeof ExpertiseSection> | null>();

const routeName = computed(() => router.currentRoute.value.name as ROUTE_NAME);

function getSections() {
  return [
    { routeName: ROUTE_NAME.ABOUT_ME, ref: greetingSection },
    { routeName: ROUTE_NAME.MY_SKILLS, ref: expertiseSection },
    { routeName: ROUTE_NAME.HISTORY, ref: historySection },
    { routeName: ROUTE_NAME.CONTACTS, ref: contactsSection },
  ];
}

function setupWindowPos() {
  const sections = getSections();
  const routeIndex = sections.findIndex(
    (section) => section.routeName === routeName.value
  );

  const element = sections[routeIndex].ref.value?.$el;

  if (routeIndex === 0) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  console.log(element);
  if (element && !isElInViewPort(element)) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

function isElInViewPort(el: HTMLElement) {
  var { top, bottom } = el.getBoundingClientRect();
  return (top >= 0 || bottom >= 0) && top < 100;
}

function handleScroll() {
  const sectionInViewport = getSections().filter((section) =>
    isElInViewPort(section.ref.value?.$el)
  );

  if (sectionInViewport.length > 0) {
    router.replace({
      name: sectionInViewport[sectionInViewport.length - 1].routeName,
    });
  }
}

watch(
  routeName,
  () => {
    setTimeout(setupWindowPos, 0);
  },
  { immediate: true }
);

onMounted(() => {
  scrollDebouncer = debounce(handleScroll, 40);
  window.addEventListener("scroll", scrollDebouncer);
});

onUnmounted(() => {
  if (scrollDebouncer) {
    window.removeEventListener("scroll", scrollDebouncer);
    scrollDebouncer = null;
  }
});
</script>

<template>
  <div class="v-Home">
    <GreetingSection ref="greetingSection" />
    <ExpertiseSection class="py-10" ref="expertiseSection" />
    <HistorySection class="py-10" ref="historySection" />
    <ContactsSection class="py-10" ref="contactsSection" />
  </div>
</template>
