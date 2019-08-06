<template>
    
    <!-- 列表的一条内容 -->
    <div class="footer">
        <a-row class="">

        </a-row>
    </div>

</template>

<script>
import { getDateDiff } from '../utils/date'
export default {
    methods:{
        //这里主要是我们在h5里面直接调方法，默认是调用该vue的，所以在这里声明一个变量，再将我们引用的放到这里面
        dateDiff:getDateDiff,
        toItemDetail(){
            //跳到语录详情页，并将当前的语录传过去
            this.$router.push({name:'itemDetail',params:this.ana});
        }
    }
}
</script>

<style scoped>
    .footer{
        width: 100%;
        height: 100px;
        border: 1px solid red;
        margin-top: 80px;
        border-top: 1px solid rgb(233, 230, 230);
    }
</style>
