<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
  <button @click="saveData">Save Data</button>
</template>

<script setup>
import { defineProps, computed, inject } from 'vue';

const props = defineProps(['firstName', 'lastName']);

const age = inject('userAge');

const userName = computed(() => {
  return props.firstName + ' ' + props.lastName;
});
</script>
