<template>
  <BaseCard>
    <BaseButton
      @click="setSelectedTab('StoredResources')"
      :mode="storedResButtonMode"
      >Stored Resources</BaseButton
    >
    <BaseButton @click="setSelectedTab('AddResource')" :mode="addResButtonMode"
      >Add Resource</BaseButton
    >
  </BaseCard>
  <KeepAlive>
    <component :is="selectedTab"></component>
  </KeepAlive>
</template>

<script>
import AddResource from './AddResource.vue';
import StoredResources from './StoredResources.vue';

export default {
  data() {
    return {
      selectedTab: 'StoredResources',
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
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'StoredResources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'AddResource' ? null : 'flat';
    },
  },
  components: { AddResource, StoredResources },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, link) {
      this.storedResources = this.storedResources.unshift({
        id: crypto.randomUUID(),
        title,
        description,
        link,
      });
      this.selectedTab = 'StoredResources';
    },
  },
};
</script>
