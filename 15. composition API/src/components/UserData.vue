<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
  <button @click="saveData">Save Data</button>
</template>

<script setup>
import { defineProps, computed, defineEmits } from 'vue';

const props = defineProps(['firstName', 'lastName', 'age']);

const userName = computed(() => {
  return props.firstName + ' ' + props.lastName;
});

const saveData = defineEmits([('save', { userName, age })]);
</script>
