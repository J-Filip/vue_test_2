<template>
     <section class="section py-5">
  <h2 class="title is-size-3 mb-0"> {{title}}</h2>
</section>
</template>

<script>
export default {
    name: 'PageHeader',
    props: {
        title: String
    }
}
</script>

// scoped means only for this component
<style scoped>

</style>