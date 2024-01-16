<script setup lang="ts">
import GreetingSection from "@/components/sections/GreetingSection.vue";
import AcademicSection from "@/components/sections/AcademicSection.vue";
import ExpertiseSection from "@/components/sections/ExpertiseSection.vue";
import HistorySection from "@/components/sections/HistorySection.vue";
import ContactsSection from "@/components/sections/ContactsSection.vue";
import { computed, ref, watch } from "vue";
import { useElementVisibility } from "@vueuse/core";
import { useRoute, useRouter } from "vue-router";
import { ROUTE_NAME } from "@/router";

const router = useRouter();

const route = useRoute();

const greetingSection = ref<InstanceType<typeof GreetingSection> | null>();
const expertiseSection = ref<InstanceType<typeof ExpertiseSection> | null>();
const historySection = ref<InstanceType<typeof ExpertiseSection> | null>();
const academicSection = ref<InstanceType<typeof AcademicSection> | null>();
const contactsSection = ref<InstanceType<typeof ExpertiseSection> | null>();

const sections = computed(() => [
  {
    ref: greetingSection,
    routeName: ROUTE_NAME.ABOUT_ME,
    visible: useElementVisibility(greetingSection),
  },
  {
    ref: expertiseSection,
    routeName: ROUTE_NAME.MY_SKILLS,
    visible: useElementVisibility(expertiseSection),
  },
  {
    ref: historySection,
    routeName: ROUTE_NAME.HISTORY,
    visible: useElementVisibility(historySection),
  },
  {
    ref: academicSection,
    routeName: ROUTE_NAME.ABOUT_ME,
    visible: useElementVisibility(greetingSection),
  },
  {
    ref: contactsSection,
    routeName: ROUTE_NAME.CONTACTS,
    visible: useElementVisibility(contactsSection),
  },
]);

watch(
  () => route.name,
  () => {
    const section = sections.value.find((s) => s.routeName === route.name);
    if (section && !section.visible.value) {
      section.ref.value?.$el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  },
  { immediate: true }
);

watch(
  () => sections.value,
  () => {
    let currentRoute = ROUTE_NAME.ABOUT_ME;
    sections.value.forEach((s) => {
      if (s.visible.value) currentRoute = s.routeName;
    });
    router.replace({ name: currentRoute });
  },
  { immediate: true, deep: true }
);
</script>

<template>
  <div class="v-Home">
    <GreetingSection ref="greetingSection" />
    <ExpertiseSection ref="expertiseSection" class="py-10" />
    <HistorySection ref="historySection" class="py-10" />
    <AcademicSection ref="academicSection" class="py-10" />
    <ContactsSection ref="contactsSection" class="py-10" />
  </div>
</template>
