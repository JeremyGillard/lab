<template>
  <div @click="toggleSection" class="square">
    <div v-show="isThereSection" class="section"></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  size: number;
}>();

const isThereSection = ref<boolean>(false);
function toggleSection() {
  isThereSection.value = !isThereSection.value;
}

const squaresSizeCSS = computed(() => `${props.size}px`);
</script>

<style scoped>
.square {
  width: v-bind(squaresSizeCSS);
  height: v-bind(squaresSizeCSS);
  border: solid 1px rgb(199, 199, 199);
  cursor: pointer;
}
.square:hover {
  background: #83d5db9d;
}
.section {
  width: 100%;
  height: 100%;
  background: #52c4cc;
}
</style>
