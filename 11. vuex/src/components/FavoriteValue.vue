<template>
  <h3>Favorite Value: {{ counter }}</h3>
  <p>We do more ...</p>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters['numbers/normalizedCounter'];
    },
  },
};
</script>
