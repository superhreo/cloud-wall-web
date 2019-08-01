<template>
    
    <!-- 列表的一条内容 -->
    <div style="max-width:720px;">
        <a-row type="flex" justify="start" class="title">
            <a-col :span="24" @click="toItemDetail">
                {{ana.anaTitle}}
            </a-col>
        </a-row>
        <a-row type="flex" justify="start" class="content">
            <a-col :span="24" v-if="ana.anaContent.length < 100">
                {{ana.anaContent}}
            </a-col>
            <a-col :span="24" v-else>
                {{ana.anaContent.substring(0,100)}}...
            </a-col>
        </a-row>
        <a-row type="flex" justify="start" class="footer">
            <a-col :span="24">
                <span>{{ana.createDate}}</span>
                <span>&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;</span>
                <span>{{ana.commentNum}} 条评论</span>
                <span>&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;</span>
                <span>{{ana.prizeNum}} 人喜欢</span>
            </a-col>
        </a-row>
    </div>

</template>

<script>
export default {
    props:{
        ana:Object
    },
    methods:{
        toItemDetail(){
            //跳到语录详情页，并将当前的语录传过去
            this.$router.push({name:'itemDetail',params:this.ana});
        }
    }
}
</script>

<style scoped>
.title{
    margin: 50px 0px;
    font-size: 22px;
    font-weight: 700;
}
.title:hover{
    cursor: pointer;
    color: cornflowerblue
}
.content{
    margin-bottom: 50px;
    line-height: 32px;
    color: #676F7A;
    font-size: 16px;
}
.footer span{
    color: #BEC4CC;
}
</style>
