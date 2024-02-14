import { BREAKPOINTS } from "@/constants/breakpoints";
import { useWindowSize } from "@vueuse/core";
import { ref, watch } from "vue";

export function useViewport() {
  const { width } = useWindowSize();

  const isSM = ref(false);
  const isMD = ref(false);
  const isLG = ref(false);
  const isXL = ref(false);

  const reavaliateViewport = () => {
    isSM.value = width.value <= BREAKPOINTS.MD;
    isMD.value = width.value <= BREAKPOINTS.LG;
    isLG.value = width.value <= BREAKPOINTS.XL;
    isXL.value = width.value > BREAKPOINTS.LG;
  };

  watch(width, reavaliateViewport, { immediate: true });

  return { isSM, isMD, isLG, isXL };
}
