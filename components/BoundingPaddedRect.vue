<template>
  <g>
    <path class="path" :d="d" />
  </g>
</template>

<script setup lang="ts">
import {
  IBoundingCoordinates,
  IBoundingPoints,
  getBoundingPaddedPoints,
} from "~~/utils/coordinates";

const { coords, padding } = defineProps<{
  coords: IBoundingCoordinates;
  padding: number;
}>();

function getDrawnCoordinates({
  topLeft,
  topRight,
  bottomRight,
  bottomLeft,
}: IBoundingPoints) {
  return `M${topLeft.x} ${topLeft.y} L${topRight.x} ${topLeft.y} L${bottomRight.x} ${bottomRight.y} L${bottomLeft.x} ${bottomLeft.y} L${topLeft.x} ${topLeft.y}`;
}

const d = computed(() =>
  getDrawnCoordinates(getBoundingPaddedPoints(coords, padding))
);
</script>

<style scoped>
.path {
  fill: none;
  stroke: black;
  stroke-width: 2px;
}
</style>
