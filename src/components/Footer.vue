<template>
    <a-row type="flex" align="middle" justify="center" class="footer">
        <a-col :xs="18" :sm="18" :md="18" :lg="12">
            <a-row class="footer_top" type="flex" align="center" :gutter="12">
                <a-col>登录</a-col>
                <a-col class="footer_top_before">注册</a-col>
                <a-col class="footer_top_before">友链</a-col>
                <a-col class="footer_top_before">归档</a-col>
                <a-col class="footer_top_before">关于</a-col>
            </a-row>
            <a-row class="footer_bottom" type="flex" justify="space-around">
                <a-col>© 2019 网易云热评墙</a-col>
                <a-col>The me by Adams</a-col>
            </a-row>
        </a-col>
    </a-row>
</template>

<script>

export default {}
</script>

<style scoped>

    *{
        padding: 0px;
        margin: 0px;
    }

    /*----------------------------------------------底部样式 */
    .footer{
        width: 100%;
        margin-top: 80px;
        border-top: 1px solid rgb(233, 230, 230);
    }
    .footer_top{
        height: 50px;
        line-height: 50px;
    }
    .footer_top_before::before{
        content: '';
        width: 2px;
        height: 2px;
        display: block;
        float: left;
        background-color: #666;
        margin-right: 15px;
        margin-top: 25px;
    }
    .footer_bottom{
        border-top: 1px solid rgb(233, 230, 230);
        line-height: 45px;
    }
</style>
