<template>
    
    <!-- 列表的一条内容 -->
    <div>
        <div class="fixnavbox">
            <a-row type="flex" align="middle" class="fixnav">
                <a-col :span="5" class="home">
                    <p>网易云热评墙</p>
                </a-col>
                <a-col :span="2" :offset="9" class="navTitle navTitleFirst">
                    <p>首页</p>
                </a-col>
                <a-col :span="2" class="navTitle navTitleBefore">
                    <p>热评</p>
                </a-col>
                <a-col :span="2" class="navTitle navTitleBefore">
                    <p>短句</p>
                </a-col>
                <a-col :span="2" class="navTitle navTitleBefore">
                    <p>段子</p>
                </a-col>
                <a-col :span="2" class="navTitle navTitleBefore">
                    <p>关于</p>
                </a-col>
            </a-row>
        </div>
        
        <a-row class="ad">
            <a-col :span=24>
                <p>可以点一下文章评论区的广告支持我一下~ </p>
            </a-col>
        </a-row>

        <div class="anaList" v-for="(ana,index) in $store.state.anaList" :key="index">
            <a-row class="anaTitle">
                <a-col>
                   不再见
                </a-col>
            </a-row>
            <a-row class="anaContent">
                <a-col :span="24" v-if="ana.anaContent.length < 100">
                    {{ana.anaContent}}
                </a-col>
                <a-col :span="24" v-else>
                    {{ana.anaContent.substring(0,100)}}...
                </a-col>
            </a-row>
            <a-row class="anaOther anaOtherBefore" type="flex" :gutter="25" v-if="index < 9">
                <a-col>{{ana.createDate}} 发布</a-col>
                <a-col class="before">{{ana.commentNum}}条评论</a-col>
                <a-col class="before">{{ana.prizeNum}}人喜欢</a-col>
            </a-row>
            <a-row class="anaOther" type="flex" :gutter="25" v-else>
                <a-col>{{ana.createDate}} 发布</a-col>
                <a-col class="before">{{ana.commentNum}}条评论</a-col>
                <a-col class="before">{{ana.prizeNum}}人喜欢</a-col>
            </a-row>
        </div>
        
        <a-row class="page" type="flex" justify="space-around">
            <a-col>
                <a-pagination showQuickJumper :defaultCurrent="2" :total="500" @change="onChange" />
            </a-col>
        </a-row>

    </div>

</template>

<script>
import { getDateDiff } from '../utils/date'
import $ from 'jquery'
export default {
    methods:{
        //这里主要是我们在h5里面直接调方法，默认是调用该vue的，所以在这里声明一个变量，再将我们引用的放到这里面
        dateDiff:getDateDiff,
        toItemDetail(){
            //跳到语录详情页，并将当前的语录传过去
            this.$router.push({name:'itemDetail',params:this.ana});
        },
        onChange(pageNumber) {
        }
    }
}
window.onscroll= function(){
    var t = document.documentElement.scrollTop||document.body.scrollTop;
    if(t>=200){
        $('.fixnavbox').css('display','block');
    }else{
        $('.fixnavbox').css('display','none');
    }
    
}
</script>

<style scoped>
    .ad{
        border:1px solid rgb(218, 210, 210);
        margin-top: 60px;
        width: 100%;
        height: 45px;
        line-height: 45px;
        opacity: 0.5;
    }
    .ad p{
        width: 740px;
        margin: 0px auto;
    }

    /* ---------------------------------热评列表 */
    .anaList{
        width: 740px;
        margin: 0px auto;
        margin-top: 50px;
    }
    .anaTitle{
        font-size: 22px;
        font-family: 'STHeiti';
        font-weight: bolder;
        letter-spacing: 1px;
        color: black;
        opacity: 0.7;
        margin-bottom: 35px;
    }
    .anaContent{
        font-size: 16px;
        opacity: 0.8;
        line-height: 35px;
    }
    .anaOther{
        margin-top: 35px;
        opacity: 0.55;
        font-size: 14px;
    }
    .anaOtherBefore::after{
        content: '';
        width: 80px;
        height: 2px;
        background-color: black;
        margin-top: 80px;
        margin-left: -360px;
    }
    .before::before{
        content: '';
        width: 2px;
        height: 2px;
        display: block;
        float: left;
        background-color: #666;
        margin-right: 20px;
        margin-top: 12px;
    }

    /* ---------------------------------------固定导航样式 */
    .fixnavbox{
        width: 100%;
        height: 50px;
        /* display: none; */
        position: fixed;
        top: 0px;
        background-color: white;
        box-shadow: 2px 2px 2px rgb(226, 225, 225);
        z-index: 99;
    }
    .fixnav{
        width: 740px;
        margin: 0px auto;
    }
    .navTitle{
        height: 20px;
        opacity: 0.6;
    }
    .navTitleBefore::before{
        content: '';
        width: 2px;
        height: 2px;
        display: block;
        float: left;
        background-color: #666;
        margin-right: 15px;
        margin-top: 12px;
    }
    .navTitleFirst::before{
        content: '';
        width: 2px;
        height: 2px;
        display: block;
        float: left;
        margin-right: 15px;
        margin-top: 12px;
    }
    .home{
        height: 50px;
        font-size: 20px;
        font-family: 'STHeiti';
        font-weight: bolder;
        letter-spacing: 1px;
        line-height: 50px;
    }
    .page{
        width: 740px;
        margin:0px auto;
        margin-top: 90px;
    }
</style>
