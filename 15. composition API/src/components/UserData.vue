<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps(['firstName', 'lastName', 'age']);

const userName = computed(() => {
  return props.firstName + ' ' + props.lastName;
});
</script>
