<template>
  <section>FILTER</section>
  <section>
    <BaseCard>
      <div class="controls">
        <BaseButton mode="outline">Refresh</BaseButton>
        <BaseButton link to="/register">Register as a Coach</BaseButton>
      </div>
      <ul v-if="hasCoaches">
        <CoachItem
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :firstName="coach.firstName"
          :lastName="coach.lastName"
          :rate="coach.hourlyRate"
          :areas="coach.areas"
        />
      </ul>
      <h3 v-else>No couches found.</h3>
    </BaseCard>
  </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';

export default {
  computed: {
    filteredCoaches() {
      return this.$store.getters['coaches/coaches'];
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
  },
  components: { CoachItem, BaseCard, BaseButton },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
