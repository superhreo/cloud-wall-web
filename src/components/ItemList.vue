<template>
    
    <!-- 列表的一条内容 -->
    <div>
        <a-row type="flex" align="middle" justify="center">
            <a-col :xs="18" :sm="18" :md="18" :lg="12" class="anaList">
                <a-row v-for="(ana,index) in $store.state.anaList.slice(0,10)" :key="index" :class="index<9?'anaList_ana_after anaList_ana anaList_move':'anaList_ana anaList_move'">
                        <a-row class="anaList_ana_title" >
                            <a-col @click="getAnaDetail(ana.id)">
                                <span>{{ana.anaTitle}}</span>
                            </a-col>
                        </a-row>
                        <a-row class="anaList_ana_content">
                            <a-col :span="24" v-if="ana.anaContent.length < 100">
                                {{ana.anaContent}}
                            </a-col>
                            <a-col :span="24" v-else>
                                {{ana.anaContent.substring(0,100)}}...
                            </a-col>
                        </a-row>
                        <a-row class="anaList_ana_other" type="flex" :gutter="12">
                            <a-col>{{getDateDiff(ana.createDate)}}</a-col>
                            <a-col class="before">{{ana.commentNum}}条评论</a-col>
                            <a-col class="before">{{ana.prizeNum}}人喜欢</a-col>
                        </a-row>
                </a-row>
                <a-row type="flex" justify="center" >
                    <a-col>
                        <a-pagination showQuickJumper :defaultCurrent="1" :total="500" />
                    </a-col>
                </a-row>
            </a-col>
        </a-row>
    </div>

</template>

<script>
import { getDateDiff } from '../utils/date'
export default {
    mounted(){
        //初始化热评列表
        this.$store.dispatch('getAnaList',{condition:this.$route.params.condition,pageIndex:1})
    },
    methods:{
        //根据id查询热评详情
        getAnaDetail(id){
            this.$router.push({name:'itemDetail',params:{anaId:id}})
        },
        //个性化时间显示
        getDateDiff:getDateDiff,
    },
    watch: {
        // 对路由变化作出响应，根据条件查询anaList
        '$route' (to, from) {
            this.$store.dispatch('getAnaList',{condition:this.$route.params.condition,pageIndex:1})
        }
    }
}
</script>

<style scoped>
    *{
        padding: 0px;
        margin: 0px;
    }

    /* ---------------------------------热评列表 */

    .anaList_ana{
        margin-bottom: 50px;
    }
    .anaList_ana_after::after{
        content: '';
        width: 80px;
        height: 2px;
        background-color: black;
        margin-top: 80px;
        margin-left: -30px;
    }
    .anaList_ana_title{
        font-size: 22px;
        font-family: 'STHeiti';
        font-weight: bolder;
        letter-spacing: 1px;
        color: black;
        opacity: 0.7;
        margin-bottom: 35px;
    }
    .anaList_ana_title span:hover{
        cursor: pointer;
        color: rgb(2, 38, 158);
    }
    .anaList_ana_content{
        font-size: 16px;
        opacity: 0.8;
        line-height: 35px;
    }
    .anaList_ana_other{
        margin-top: 35px;
        opacity: 0.55;
        font-size: 14px;
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
</style>
