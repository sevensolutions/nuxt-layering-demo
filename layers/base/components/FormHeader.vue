<template>
  <header class="text-3xl">
    {{ props.title }}
  </header>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();
</script>
