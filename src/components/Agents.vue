<template>
  <tbody v-bind:key="agent.id" v-for="agent in agents">
    <Agent v-bind:agent="agent" />
  </tbody>
</template>

<script>
import Agent from './Agent';

export default {
  name: 'Agents',
  props: {
    agents: Array,
  },
  components: {
    Agent,
  },
};
</script>
