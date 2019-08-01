<template>
  <div>

    <span @click="routerClick">Home...</span>
    
    <item-list v-for="(ana,index) in anaData" :ana="ana" :key="index" class="apper"/>

  </div>
</template>

<script>
import itemList from './itemList.vue';

export default {
  components:{
    itemList
  },
  data(){
    return{
      anaData:[
        {id:'1',userId:'1',typeId:'1',anaType:'热评',anaTitle:'人生总有那么一段大片大片空白的时光',anaContent:'人生总有那么一段大片大片空白的时光。你在等待，你在坚忍，你在静默。你在等一场春华秋实，你在等新一轮的春暖花开，你在等从未有过的雷霆万钧。这静默的日子有些长，有些闷，但是我也会等下去。我相信人的青春不止有一次，有时候，时光会给你额外的惊喜',anaFrom:'--来自网易云音乐《爱的故事.上集》',commentNum:20,prizeNum:120,createDate:'2018-03-24'},
        {id:'2',userId:'1',typeId:'2',anaType:'短句',anaTitle:'心动的开始',anaContent:'心动的开始 都是因为 一些非常小的细节 而结束 往往也是',anaFrom:'——匿名',commentNum:66,prizeNum:388,createDate:'2019-06-18'}
      ]
    }
  },
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

// 不加 scoped 代表是公共的（每个模块都可以引用）
<style>
  .apper{
    animation: apper 0.75s;
    margin: 100px ;
  }
  @keyframes apper{
    0%   {opacity: 0;transform:translateY(10px);}
    100% {opacity: 1;transform:translateY(0px);}
  }
</style>

// 私有的css
<style scoped>


</style>
