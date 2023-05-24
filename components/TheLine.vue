<template>
  <div class="the-line">
    <div ref="area">
      <slot></slot>
    </div>
    <pre class="marker">{{ areaBounding }}</pre>
    <div class="draw-area">
      <svg class="svg">
        <path class="path" :d="d" />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useElementBounding } from "@vueuse/core";

const area = ref<HTMLElement | null>(null);
const areaBounding = useElementBounding(area);

const midArea = computed(() => {
  const width = areaBounding.width.value;
  const left = areaBounding.left.value;
  return width / 2 + left;
});

const d = computed(() => {
  return `M${midArea.value} ${areaBounding.top.value} V${areaBounding.height.value}`;
});
</script>

<style scoped>
.the-line {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
.marker {
  position: absolute;
  top: 0;
  left: 0;
}
.draw-area {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
}
.svg {
  width: 100%;
  height: 100vh;
}
.path {
  stroke: black;
  stroke-width: 2px;
  stroke-linecap: round;
}
</style>
