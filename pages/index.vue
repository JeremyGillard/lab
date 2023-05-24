<template>
  <main ref="main" class="home">
    <TheLine>
      <div class="grid-container">
        <Block
          :size="squaresSize"
          v-for="(block, index) in blocks"
          :key="index"
          class="square"
        />
      </div>
    </TheLine>
    <!-- <pre>{{ mainBounding }}</pre> -->
  </main>
</template>

<script setup lang="ts">
import { useElementBounding } from "@vueuse/core";

const squaresSize = ref<number>(120);
const squaresSizeCSS = computed(() => `${squaresSize.value}px`);

const main = ref<HTMLElement | null>(null);
const mainBounding = useElementBounding(main);
const nWidth = computed(() =>
  Math.floor(mainBounding.width.value / squaresSize.value)
);
const nHeight = computed(() =>
  Math.floor(mainBounding.height.value / squaresSize.value)
);
const blocks = computed(() => {
  return nWidth.value * nHeight.value;
});
</script>

<style scoped>
.home {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(v-bind(nWidth), v-bind(squaresSizeCSS));
  justify-content: center;
  align-items: start;
}
</style>
