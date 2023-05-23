<template>
  <div ref="section" class="section">
    <h2>Section</h2>
    <div class="section-coords">
      <pre>{{ elementBounding }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useElementBounding } from "@vueuse/core";

const section = ref<HTMLElement | null>(null);
const elementBounding = useElementBounding(section);

defineExpose({
  elementBounding,
});
</script>

<style scoped>
.section {
  width: 540px;
  resize: both;
  overflow: hidden;
}

h2 {
  margin: 1rem 2.4rem;
  text-align: center;
}

p {
  text-align: justify;
}

.section-coords {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
