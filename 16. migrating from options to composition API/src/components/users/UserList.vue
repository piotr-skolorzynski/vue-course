<template>
  <base-container>
    <h2>Active Users</h2>
    <BaseSearch :search-term="enteredSearchTerm" @search="updateSearch" />
    <div>
      <button :class="{ selected: sorting === 'asc' }" @click="sort('asc')">
        Sort Ascending
      </button>
      <button :class="{ selected: sorting === 'desc' }" @click="sort('desc')">
        Sort Descending
      </button>
    </div>
    <ul>
      <UserItem
        v-for="user in displayedUsers"
        :key="user.id"
        :id="user.id"
        :user-name="user.fullName"
        @list-projects="listProjects"
      />
    </ul>
  </base-container>
</template>

<script setup>
import { defineProps, ref, computed, watch, defineEmits } from 'vue';
import UserItem from './UserItem.vue';

const props = defineProps(['users']);
const emits = defineEmits(['listProjects']);

const listProjects = (event) => {
  emits('listProjects', event);
};

const enteredSearchTerm = ref('');
const activeSearchTerm = ref('');

const availableUsers = computed(() => {
  let users = [];
  if (activeSearchTerm.value) {
    users = props.users.filter((usr) =>
      usr.fullName.includes(activeSearchTerm.value)
    );
  } else if (props.users) {
    users = props.users;
  }
  return users;
});

watch(enteredSearchTerm, (val) => {
  setTimeout(() => {
    if (val === enteredSearchTerm.value) {
      activeSearchTerm.value = val;
    }
  }, 300);
});

const updateSearch = (val) => {
  enteredSearchTerm.value = val;
};

const sorting = ref(null);

const displayedUsers = computed(() => {
  if (!sorting.value) {
    return availableUsers.value;
  }

  return availableUsers.value.slice().sort((u1, u2) => {
    if (sorting.value === 'asc' && u1.fullName > u2.fullName) {
      return 1;
    } else if (sorting.value === 'asc') {
      return -1;
    } else if (sorting.value === 'desc' && u1.fullName > u2.fullName) {
      return -1;
    } else {
      return 1;
    }
  });
});

const sort = (mode) => {
  sorting.value = mode;
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
