<template>
  <h3>counter: {{ finalCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('numbers', ['finalCounter']),
  },
};
</script>
