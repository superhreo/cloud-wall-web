<template>
  <div class="main">
    <Header/>
    <ItemList/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import ItemList from './components/ItemList'
import Footer from './components/Footer'
export default {
  created(){
    //初始化热评列表
    this.$store.dispatch('getAnaList',{condition:1,pageIndex:1});
  },
  data() {
    return {
      
    }
  },
  components:{
    Header,
    ItemList,
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
</style>
