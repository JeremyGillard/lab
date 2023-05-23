<template>
  <main>
    <svg class="svg">
      <BoundingRect :coords="coords" />
      <BoundingPoints :coords="coords" />
      <BoundingPaddedRect :coords="coords" :padding="50" />
      <BoundingPaddedPoints :coords="coords" :padding="50" />
    </svg>
    <AppSection ref="appsection" />
  </main>
</template>

<script setup lang="ts">
interface ISectionCoordinates {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

const appsection = ref(null);
const coords = ref<ISectionCoordinates>({
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
});

watchEffect(() => {
  if (appsection.value) {
    const { top, right, bottom, left } = appsection.value.elementBounding;
    coords.value.top = top.value;
    coords.value.right = right.value;
    coords.value.bottom = bottom.value;
    coords.value.left = left.value;
  }
});
</script>

<style scoped>
main {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
}
</style>
