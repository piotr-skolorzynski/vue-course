<template>
  <BaseContainer title="Vuex" v-if="isLoggedIn">
    <TheCounter />
    <FavoriteValue />
    <button @click="addTen">Add 10</button>
    <ChangeCounter />
  </BaseContainer>
  <BaseContainer title="Auth">
    <UserAuth />
  </BaseContainer>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
  },
  methods: {
    addTen() {
      // this.$store.dispatch('increase', { value: 10 });
      //alternative
      this.$store.dispatch({
        type: 'increase',
        value: 10,
      });
    },
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isUserAuth;
    },
  },
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
</style>
