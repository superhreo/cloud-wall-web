<template>
  <div>
    <span @click="routerClick">Admin...</span>
  </div>
</template>

<script>
export default {
  mounted(){
    console.log(this.$route.params.name);
  },
  methods:{
    routerClick(){
      this.$router.push({ name: 'home', params: { name: 'home' }})
    }
  }
}
</script>

<style>

</style>
