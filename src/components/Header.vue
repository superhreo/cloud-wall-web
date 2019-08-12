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
                <a-col class="navNow" @click="getViewBy(0)">首页</a-col>
                <a-col class="before" @click="getViewBy(1)">热评</a-col>
                <a-col class="before" @click="getViewBy(2)">短句</a-col>
                <a-col class="before" @click="getViewBy(3)">段子</a-col>
                <a-col class="before" @click="getViewBy(4)">关于</a-col>
            </a-row>
        </div>
        <div class="fixnavbox" style="display:none;">
            <a-row type="flex" align="middle" class="fixnav">
                <a-col :span="5" class="home">
                    <p>网易云热评墙</p>
                </a-col>
                <a-col :span="2" :offset="9" class="navTitle navTitleFirst">
                    <p class="navTitleNow">首页</p>
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
    components:{
        ItemList,
        Footer
    },
    methods:{
        getViewBy(index){
            this.$router.push({name:'itemList',params:{condition:index}});
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
    .fixnav :hover{
        cursor: pointer;
        color: rgb(36, 75, 182);
    }
</style>
