<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
  <button @click="saveData">Save Data</button>
</template>

<script setup>
import {
  defineProps,
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue';

const props = defineProps(['firstName', 'lastName']);

const age = inject('userAge');

const userName = computed(() => {
  return props.firstName + ' ' + props.lastName;
});

onBeforeMount(() => {
  console.log('onBeforeMount');
});

onMounted(() => {
  console.log('onMounted');
});

onBeforeUpdate(() => {
  console.log('onBeforeUpdate');
});

onUpdated(() => {
  console.log('onUpted');
});

onBeforeUnmount(() => {
  console.log('onBeforeUnmount');
});

onUnmounted(() => {
  console.log('onUnmounted');
});
</script>
