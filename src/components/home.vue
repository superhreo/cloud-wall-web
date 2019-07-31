<template>
  <div>
    <span @click="routerClick">Home...</span>
  </div>
</template>

<script>
export default {
  mounted(){
    console.log(this.$route.params.name);
  },
  methods:{
    routerClick(){
      this.$router.push({ name:'admin',params:{name:'admin'} });
    }
  }
}
</script>

<style>

</style>
