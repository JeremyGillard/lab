<template>
  <g>
    <circle class="circle" :cx="ps.top.left.x" :cy="ps.top.left.y" r="4" />
    <circle class="circle" :cx="ps.top.right.x" :cy="ps.top.right.y" r="4" />
    <circle class="circle" :cx="ps.right.top.x" :cy="ps.right.top.y" r="4" />
    <circle
      class="circle"
      :cx="ps.right.bottom.x"
      :cy="ps.right.bottom.y"
      r="4"
    />
    <circle
      class="circle"
      :cx="ps.bottom.right.x"
      :cy="ps.bottom.right.y"
      r="4"
    />
    <circle
      class="circle"
      :cx="ps.bottom.left.x"
      :cy="ps.bottom.left.y"
      r="4"
    />
    <circle
      class="circle"
      :cx="ps.left.bottom.x"
      :cy="ps.left.bottom.y"
      r="4"
    />
    <circle class="circle" :cx="ps.left.top.x" :cy="ps.left.top.y" r="4" />
    <text x="65" y="55">bevel: {{ bevel }}</text>
    <text x="65" y="75">padding: {{ padding }}</text>
  </g>
</template>

<script setup lang="ts">
import {
  IBoundingCoordinates,
  getBoundingBevelledPoints,
} from "~~/utils/coordinates";

const { coords, padding, bevel } = defineProps<{
  coords: IBoundingCoordinates;
  padding: number;
  bevel: number;
}>();

const ps = computed(() => getBoundingBevelledPoints(coords, padding, bevel));
</script>

<style scoped>
.circle {
  fill: black;
}
</style>
