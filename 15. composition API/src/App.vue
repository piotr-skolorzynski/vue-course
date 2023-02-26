<template>
  <section class="container">
    <h2>{{ uName }}</h2>
    <h3>{{ uAge }}</h3>
    <button @click="setNewData">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" v-model="lastName" />
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const firstName = ref('');
const lastName = ref('');

const uName = computed(() => {
  return firstName.value + ' ' + lastName.value;
});

const uAge = ref(31);

const setNewData = () => (uAge.value += 1);
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
