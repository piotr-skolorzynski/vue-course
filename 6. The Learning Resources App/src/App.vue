<template>
  <ul>
    <learning-resources
      v-for="resource in storedResources"
      :key="resource.id"
      :title="resource.title"
      :description="resource.description"
      :link="resource.link"
    ></learning-resources>
  </ul>
</template>

<script>
import LearningResource from './components/learning-resources/LearningResource.vue';

export default {
  data() {
    return {
      components: { LearningResource },
      storedResources: [
        {
          id: crypto.randomUUID(),
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org',
        },
        {
          id: crypto.randomUUID(),
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.org',
        },
      ],
    };
  },
};
</script>
