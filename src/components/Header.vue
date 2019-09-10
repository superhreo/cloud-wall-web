<template>
    
    <div class="body">
        <a-row type="flex" align="middle" justify="center" class="header">
            <a-col :xs="18" :sm="18" :md="18" :lg="12">
                <a-row class="header_title" type="flex" align="middle" justify="space-between">
                    <a-col :xs="24" :sm="18" :md="16" :lg="16" class="header_title_left"> 
                        <h1 v-if="$route.name=='itemList'">网易云热评墙</h1>
                        <h1 v-else>{{$store.state.anaDetailList[1].anaContent}}</h1>
                    </a-col>
                    <a-col :xs="0" :sm="6" :md="8" :lg="8" class="header_title_right">
                        <p>
                            <a href="#">注册</a>
                            <a href="#">登录</a>
                        </p>
                    </a-col>
                </a-row>
                <a-row class="header_navs" type="flex" :gutter="{ xs: 12, sm: 12, md: 12, lg: 12 }">
                    <a-col v-for="(anaType,index) in $store.state.anaTypeList" :key="index" @click="getViewBy(anaType.id,'nav')" :class="index+1==navNowIndex?'navNowFlag header_nav':'header_nav'">
                        <span>{{anaType.anaTypeName}}</span>
                        <span class="dot" v-if="index != $store.state.anaTypeList.length-1">·</span>
                    </a-col>
                </a-row>
            </a-col>
        </a-row>
        <a-row class="fixnav" type="flex" align="middle" justify="center" v-if="fixNavFlag">
            <a-col :xs="18" :sm="18" :md="18" :lg="12">
                <a-row type="flex" class="fixnav_content" >
                    <a-col :xs="24" :sm="14" :md="12" :lg="12" class="fixnav_left">
                        网易云热评墙
                    </a-col>
                    <a-col :xs="0" :sm="0" :md="12" :lg="12">
                        <a-row type="flex" :gutter="{ xs: 12, sm: 12, md: 12, lg: 12 }">
                            <a-col v-for="(anaType,index) in $store.state.anaTypeList" :key="index" @click="getViewBy(anaType.id,'fixnav')" :class="index+1==navNowIndex?'navNowFlag fixnav_title':'fixnav_title'">
                                <span>{{anaType.anaTypeName}}</span>
                                <span class="dot" v-if="index != $store.state.anaTypeList.length-1">·</span>
                            </a-col>
                        </a-row>
                    </a-col>
                </a-row>
            </a-col>
        </a-row>
        <a-row class="notice" type="flex" align="middle" justify="center">
            <a-col :xs="18" :sm="18" :md="18" :lg="12" v-if="$route.name == 'itemDetail'">
                <span style="float:left;">
                    <a-icon type="clock-circle" /> {{getDateDiff($store.state.anaDetailList[1].createDate)}} /
                    <a-icon type="message" /> {{$store.state.anaDetailList[1].commentNum}} 评 /
                    <span class="likeIcon"><a-icon type="like" theme="filled" /> {{$store.state.anaDetailList[1].prizeNum}} 赞</span>
                </span>
                <span class="rollBackIcon">
                    <a-icon type="rollback" /> 返回
                </span>
                <span class="scanIcon">
                    <a-icon type="scan"/> 扫码
                </span>
                
            </a-col>
            <a-col :xs="18" :sm="18" :md="18" :lg="12" v-else>
                可以点一下文章评论区的广告支持我一下~
            </a-col>
        </a-row>
    </div>

</template>

<script>
import { getDateDiff } from '../utils/date'

export default {
    data(){
        return{ 
            //标识固定导航是否显示
            fixNavFlag:false,
            //记录当前导航索引
            navNowIndex:1
        }
    },
    mounted(){
        //初始化导航信息
        this.$store.dispatch('getAnaTypeList')
        //设置滚动监听
        window.addEventListener('scroll',this.handleScroll)
    },
    methods:{
        getDateDiff:getDateDiff,
        //单击导航，跳转页面
        getViewBy(index,navStr){
            //如果单击的不是当前导航，则跳转，否则返回
            if(index != this.$route.params.condition){
                this.$router.push({name:'itemList',params:{condition:index}});
                this.navNowIndex = this.$route.params.condition
                scrollTo(0,0)
                this.$forceUpdate()
            }
        },
        //滚动监听
        handleScroll(){
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop // 滚动条偏移量
            if(scrollTop > 190){
                this.fixNavFlag = true
            }else{
                this.fixNavFlag = false
            }
        }
    },
    watch:{
        '$route'(to,from){
            
        }
    }
}
</script>

<style scoped>

    *{
        padding: 0px;
        margin: 0px;
    }
    .a{
        border:1px solid red;
    }
    .navNowFlag{
        color: #1066d6f3;
    }

    /*----------------------------------------------头部样式 */
    .header{
        margin-top: 50px;
    }
    .header_title{
        margin-bottom: 20px;
    }
    .header_title_left{
        height: 40px;
        line-height: 40px;
    }
    .header_title_left h1{
        font-size: 24px;
        font-family: 'STHeiti';
        font-weight: bolder;
        letter-spacing: 1px;
        color: rgb(61, 60, 60);
    }
    .header_title_right{
        height: 40px;
        line-height: 40px;
        float: right;
    }
    .header_title_right a{
        margin-left: 15%;
        float: right;
    }
    .header_navs{
        font-size: 14px;
    }
    .header_nav span:hover{
        cursor: pointer;
        color: #1066d6f3;
    }
    .header_navs .dot{
        margin-left: 8px;
    }
    .nav_last::after{
        display: none;
    }
    /* ---------------------------------------------固定导航样式 */
    .fixnav{
        width: 100%;
        line-height: 50px;
        position: fixed;
        top: 0px;
        box-shadow: 2px 2px 5px #ccc;
        z-index: 99;
        background: white;
        font-size: 14px;
    }
    .fixnav_content{
        height: 50px;
    }
    .fixnav_left{
        height: 50px;
        font-size: 22px;
        font-family: 'STHeiti';
        font-weight: bolder;
        letter-spacing: 1px;
        color: rgb(61, 60, 60);
    }
    .fixnav_title{
        height: 50px;
    }
    .fixnav_title span:hover{
        cursor: pointer;
        color: #1066d6f3;
    }
    .fixnav_title .dot{
        margin-left: 8px;
    }

    /* ---------------------------------------------通知栏样式 */
    .notice{
        width: 100%;
        margin-top: 60px;
        margin-bottom: 70px;
        height: 45px;
        line-height: 45px;
        opacity: 0.8;
        border: 1px solid rgba(179, 179, 179, 0.63);
    }

    .likeIcon{
        color:coral;
    }
    .rollBackIcon{
        float: right;
        color: coral;
        margin-left: 10px;
    }
    .scanIcon{
        float: right;
        color: green;
    }
</style>
