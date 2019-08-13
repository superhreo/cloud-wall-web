<template>
    
    <div class="body">
        <div class="header">
            <a-row class="title" type="flex" align="middle" justify="space-between">
                <a-col :span="6">
                    <h1>网易云热评墙</h1>
                </a-col>
                <a-col :span="4">
                    <p>
                        <a href="#">注册</a>
                        <a href="#">登录</a>
                    </p>
                </a-col>
            </a-row>
            <a-row class="nav" type="flex" :gutter="12">
                <a-col class="navNow" @click="getViewBy(0,'nav')">首页</a-col>
                <a-col class="before" @click="getViewBy(1,'nav')">热评</a-col>
                <a-col class="before" @click="getViewBy(2,'nav')">短句</a-col>
                <a-col class="before" @click="getViewBy(3,'nav')">段子</a-col>
                <a-col class="before" @click="getViewBy(4,'nav')">关于</a-col>
            </a-row>
        </div>
        <div class="fixnavbox" style="display:none;">
            <a-row type="flex" align="middle" class="fixnav">
                <a-col :span="5" class="home">
                    <p>网易云热评墙</p>
                </a-col>
                <a-col :span="2" :offset="9" class="navTitle navTitleFirst navTitleNow">
                    <p @click="getViewBy(0,'fixnav')">首页</p>
                </a-col>
                <a-col :span="2" class="navTitle navTitleBefore">
                    <p @click="getViewBy(1,'fixnav')">热评</p>
                </a-col>
                <a-col :span="2" class="navTitle navTitleBefore">
                    <p @click="getViewBy(2,'fixnav')">短句</p>
                </a-col>
                <a-col :span="2" class="navTitle navTitleBefore">
                    <p @click="getViewBy(3,'fixnav')">段子</p>
                </a-col>
                <a-col :span="2" class="navTitle navTitleBefore">
                    <p @click="getViewBy(4,'fixnav')">关于</p>
                </a-col>
            </a-row>
        </div>
        <a-row class="ad">
            <a-col :span=24>
                <p>可以点一下文章评论区的广告支持我一下~ </p>
            </a-col>
        </a-row>
        <router-view/>
        <Footer/>
    </div>

</template>

<script>
import { getDateDiff } from '../utils/date'
import ItemList from './ItemList'
import Footer from './Footer'
import $ from 'jquery'

export default {
    mounted(){
        this.$router.push({name:'itemList',params:{condition:0}});
    },
    components:{
        ItemList,
        Footer
    },
    methods:{
        getViewBy(index,navStr){
            this.$router.push({name:'itemList',params:{condition:index}});
            if(navStr == 'fixnav'){
                scrollTo(0,0)
                $(function(){
                    let navList = $('.nav').children()
                    $(navList[index]).siblings().removeClass('navNow')
                    $(navList[index]).addClass('navNow')
                })
            }
        }
    }
}
$(function(){
    let navList = $('.nav').children()
    $.each(navList,function(){
        $(this).click(function(){
            $(this).siblings().removeClass('navNow')
            $(this).addClass('navNow')
        })
    })

    let fixnavList = $('.navTitle')
    $.each(fixnavList,function(){
        $(this).click(function(){
            $(this).siblings().removeClass('navTitleNow')
            $(this).addClass('navTitleNow')
        })
    })
})
</script>

<style scoped>
    .header{
        opacity: 0.8;
        width: 740px;
        margin: 0px auto;
        margin-top: 60px;
    }

    /* ---------------------------------------------头部样式 */
    .title{
        margin: 35px 0px 20px;
        height: 40px;
    }
    .title h1{
        font-size: 24px;
        font-family: 'STHeiti';
        font-weight: bolder;
        letter-spacing: 1px;
    }
    .title p{
        text-align: right;
    }
    .title p a{
        margin-left: 15px;
    }
    .nav{
        font-size: 15px;
        color: black;
    }
    .nav :hover{
        cursor: pointer;
        color: rgb(36, 75, 182);
    }
    .before::before{
        content: '';
        width: 2px;
        height: 2px;
        display: block;
        float: left;
        background-color: #666;
        margin-right: 12px;
        margin-top: 12px;
    }
    .navNow{
        cursor: pointer;
        color: rgb(55, 101, 228);
    }

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
    .navTitleNow{
        cursor: pointer;
        color: rgb(55, 101, 228);
    }
    .navTitle:hover{
        cursor: pointer;
        color: rgb(36, 75, 182);
    }
</style>
