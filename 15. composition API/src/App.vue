<template>
  <section class="container">
    <UserData :firstName="firstName" :lastName="lastName" />
    <button @click="setNewData">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch, provide } from 'vue';
import UserData from './components/UserData.vue';

const firstName = ref('');
const lastName = ref('');
const lastNameInput = ref(null);

const uName = computed(() => {
  return firstName.value + ' ' + lastName.value;
});

const uAge = ref(31);

provide('userAge', uAge);

watch([uAge, uName], (newValues, oldValues) => {
  console.log('Old age: ', oldValues[0]);
  console.log('Old name: ', oldValues[1]);
  console.log('New age: ', newValues[0]);
  console.log('New name: ', newValues[1]);
});

const setNewData = () => (uAge.value += 1);

const setLastName = () => {
  lastName.value = lastNameInput.value.value;
};
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
