import { BREAKPOINTS } from "@/constants/breakpoints";
import { useWindowSize } from "@vueuse/core";
import { computed, ref, watch } from "vue";

export function useViewport() {
  const { width } = useWindowSize();

  const sm = ref(false);
  const md = ref(false);
  const lg = ref(false);
  const xl = ref(false);

  const reavaliateViewport = () => {
    sm.value = width.value <= BREAKPOINTS.MD;
    md.value = width.value <= BREAKPOINTS.LG;
    lg.value = width.value <= BREAKPOINTS.XL;
    xl.value = width.value >= BREAKPOINTS.XL;
  };

  const isSM = computed(() => sm.value);
  const isMD = computed(() => md.value);
  const isLG = computed(() => lg.value);
  const isXL = computed(() => xl.value);  

  watch(width, reavaliateViewport, { immediate: true });

  return { isSM, isMD, isLG, isXL };
}
