<template>
  <section>
    <base-card>
      <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      <p>{{ infoText }}</p>
    </base-card>
  </section>
</template>

<script>
import BaseCard from './BaseCard.vue';
export default {
  components: { BaseCard },
  props: ['fullName', 'infoText', 'role'],
};
</script>

<style scoped></style>
