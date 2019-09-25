<template>
  <div class="main" style="overflow-x:hidden;overflow:-Scroll;">
    <Header/>
    <router-view class="appear" :key="$route.fullPath" />
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  components:{
    Header,
    Footer
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
  .appear{
    animation: appear 0.7s;
    animation-delay: 0.5s;
  }
  @keyframes appear{
    0%   {opacity: 0;transform:translateY(30px);}
    100% {opacity: 1;transform:translateY(0px);}
  }
</style>
