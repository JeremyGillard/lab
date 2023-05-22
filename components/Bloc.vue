<template>
  <div class="bloc">
    <h2>{{ title }}</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
      consectetur sapiente optio quibusdam nulla nostrum voluptate quisquam
      harum iusto animi libero, asperiores, expedita voluptas esse? Omnis
      deleniti quis alias magnam.
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<style scoped></style>
