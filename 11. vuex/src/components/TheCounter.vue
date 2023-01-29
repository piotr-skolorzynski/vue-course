<template>
  <!-- <h3>counter: {{ counter }}</h3> -->
  <h3>counter: {{ finalCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // counter() {
    //   return this.$store.getters.finalCounter;
    // },
    ...mapGetters(['finalCounter']),
  },
};
</script>
