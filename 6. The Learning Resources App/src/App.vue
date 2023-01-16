<template>
  <stored-resources :resources="storedResources" />
</template>

<script>
import StoredResources from './components/learning-resources/StoredResources.vue';

export default {
  data() {
    return {
      components: { StoredResources },
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
