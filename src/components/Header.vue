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
                <a-col @click="getViewBy(0,'nav')"><span :class="homePage">首页</span></a-col>
                <a-col v-for="(anaType,index) in $store.state.anaTypeList" :key="index" class="before" @click="getViewBy(anaType.id,'nav')">{{anaType.anaTypeName}}</a-col>
            </a-row>
        </div>
        <div class="fixnavbox" style="display:none;">
            <a-row type="flex" align="middle" class="fixnav">
                <a-col :span="5" class="home">
                    <p>网易云热评墙</p>
                </a-col>
                <a-col :span="2" :offset="9" class="navTitle navTitleFirst navTitleNow">
                    <p @click="getViewBy(0,'fixnav')" :class="homePage">首页</p>
                </a-col>
                <a-col v-for="(anaType,index) in $store.state.anaTypeList" :key="index" :span="2" class="navTitle navTitleBefore"  >
                    <p @click="getViewBy(anaType.id,'fixnav')">{{anaType.anaTypeName}}</p>
                </a-col>
            </a-row>
        </div>
        <a-row class="ad">
            <div v-if="$route.path == '/itemDetail'">
                <a-col :span=24>
                    <p>>></p>
                </a-col>
            </div>
            <div v-else>
                <a-col :span=24>
                    <p>可以点一下文章评论区的广告支持我一下~ </p>
                </a-col>
            </div>
        </a-row>
        <router-view/>
        <Footer/>
    </div>

</template>

<script>
import Footer from './Footer'
import $ from 'jquery'

export default {
    data(){
        return{
            homePage:'.navNow'
        }
    },
    mounted(){
        this.$store.dispatch('getAnaTypeList')
    },
    components:{
        Footer
    },
    methods:{
        getViewBy(index,navStr){
            this.$router.push({name:'itemList',params:{condition:index}});
            if(navStr == 'fixnav'){
                scrollTo(0,0)
                // $(function(){
                //     let navList = $('.nav').children()
                //     $(navList[index]).siblings().removeClass('navNow')
                //     $(navList[index]).addClass('navNow')
                // })
            }
        }
    },
    watch:{
        '$route'(to,from){
        }
    }
}
// $(function(){
//     let navList = $('.nav').children()
//     $.each(navList,function(){
//         $(this).click(function(){
//             $(this).siblings().removeClass('navNow')
//             $(this).addClass('navNow')
//         })
//     })

//     let fixnavList = $('.navTitle')
//     $.each(fixnavList,function(){
//         $(this).click(function(){
//             $(this).siblings().removeClass('navTitleNow')
//             $(this).addClass('navTitleNow')
//         })
//     })
// })
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

    /* ---------------------------------------通知栏样式 */
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
