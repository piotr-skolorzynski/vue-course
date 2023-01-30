<template>
  <button v-if="!isAuth" @click="login">Login</button>
  <button v-if="isAuth" @click="logout">Logout</button>
</template>

<script>
export default {
  methods: {
    login() {
      this.$store.dispatch('auth/login');
    },
    logout() {
      this.$store.dispatch('auth/logout');
    },
  },
  computed: {
    isAuth() {
      return this.$store.getters['auth/isUserAuth'];
    },
  },
};
</script>
