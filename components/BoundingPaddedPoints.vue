<template>
  <g>
    <circle class="circle" :cx="ps.topLeft.x" :cy="ps.topLeft.y" r="4" />
    <circle class="circle" :cx="ps.topRight.x" :cy="ps.topRight.y" r="4" />
    <circle
      class="circle"
      :cx="ps.bottomRight.x"
      :cy="ps.bottomRight.y"
      r="4"
    />
    <circle class="circle" :cx="ps.bottomLeft.x" :cy="ps.bottomLeft.y" r="4" />
  </g>
</template>

<script setup lang="ts">
import {
  IBoundingCoordinates,
  getBoundingPaddedPoints,
} from "~~/utils/coordinates";

const { coords, padding } = defineProps<{
  coords: IBoundingCoordinates;
  padding: number;
}>();

const ps = computed(() => getBoundingPaddedPoints(coords, padding));
</script>

<style scoped>
.circle {
  fill: black;
}
</style>
