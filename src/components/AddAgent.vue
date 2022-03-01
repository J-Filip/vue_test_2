<template>
<!-- with v-bind for background color -->
  <!-- <button v-bind:style="{background: color}" class="button">{{ text }}</button> -->

  <button v-on:click="onClick()" class="button">{{ text }}</button>
</template>

<script>
export default {
  name: 'AddAgent',
  props: {
    text: String,
    color: String
  },
  methods:{
      onClick(){
          console.log('button click');
      }
  }
};




</script>

// scoped means only for this component
<style scoped>
</style>
