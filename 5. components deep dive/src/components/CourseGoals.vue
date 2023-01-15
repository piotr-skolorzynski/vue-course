<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot v-bind:item="goal"></slot>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      goals: ['Finish the course', 'Learn Vue'],
    };
  },
};
</script>
