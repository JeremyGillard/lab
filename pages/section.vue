<template>
  <main>
    <svg :key="compKey" class="svg">
      <BoundingRect :coords="coords" />
      <BoundingPoints :coords="coords" />
      <BoundingPaddedRect :coords="coords" :padding="padding" />
      <BoundingPaddedPoints :coords="coords" :padding="padding" />
      <BoundingBevelledPoints
        :coords="coords"
        :padding="pbevel"
        :bevel="bevel"
      />
    </svg>
    <AppSection ref="appsection" />
    <input
      type="number"
      id="bevel"
      name="bevel"
      min="10"
      max="1000"
      v-model.number="bevel"
    />
    <input
      type="number"
      id="padding"
      name="padding"
      min="10"
      max="1000"
      v-model.number="padding"
    />
  </main>
</template>

<script setup lang="ts">
const padding = ref<number>(50);
const bevel = ref<number>(40);
const pbevel = computed(() => padding.value + 50);

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

const compKey = ref(0);
const forceRerender = () => {
  compKey.value += 1;
};

watch(padding, () => forceRerender());
watch(bevel, () => forceRerender());

watchEffect(() => {
  if (appsection.value) {
    // @ts-ignore: Unreachable code error
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
