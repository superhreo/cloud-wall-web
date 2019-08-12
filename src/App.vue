<template>
  <div class="main">
    <Header/>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  components:{
    Header
  },
  mounted() {
    // 解决IE加 '#'号不跳链接
    if (!!window.ActiveXObject || "ActiveXObject" in window) {
      window.addEventListener(
        "hashchange",
        () => {
          let currentPath = window.location.hash.slice(1);
          if (this.$route.path !== currentPath) {
            this.$router.push(currentPath);
          }
        },
        false
      );
    }
  }
};
</script>

<style>
  .main{
    width: 100%;
  }
</style>
