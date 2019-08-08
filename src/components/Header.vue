<template>
    
    <div class="body">
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
            <a-col>首页</a-col>
            <a-col class="before">热评</a-col>
            <a-col class="before">短句</a-col>
            <a-col class="before">段子</a-col>
            <a-col class="before">关于</a-col>
        </a-row>
    </div>

</template>

<script>
import { getDateDiff } from '../utils/date'
export default {
}
</script>

<style scoped>
    .body{
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
        opacity: 0.8;
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
</style>
