<template>
    <a-row type="flex" align="middle" justify="center" class="anaDetail">
        <a-col :xs="18" :sm="18" :md="18" :lg="12">
            <a-row class="anaDetail_detail">
                <a-col>
                    {{$store.state.anaDetailList[1].anaContent}}
                </a-col>
            </a-row>
            <a-row class="anaDetail_from">
                <a-col>
                   --- {{$store.state.anaDetailList[1].anaFrom}}
                </a-col>
            </a-row>
            <a-row class="anaDetail_nav">
                <a-col class="anaDetail_nav_left" v-if="$store.state.anaDetailList[0].anaTitle">
                    <span @click="getBothAna($store.state.anaDetailList[0].id)">{{$store.state.anaDetailList[0].anaTitle}}</span>
                </a-col>
                <a-col class="anaDetail_nav_right" v-if="$store.state.anaDetailList[2].anaTitle">
                    <span @click="getBothAna($store.state.anaDetailList[2].id)">{{$store.state.anaDetailList[2].anaTitle}}</span>
                </a-col>
            </a-row>
            
            <!-- <a-list class="comment_list" :header="`${data.length} replies`" itemLayout="horizontal" :dataSource="data">
                <a-list-item slot="renderItem" slot-scope="item, index">
                    <a-comment :author="item.author" :avatar="item.avatar">
                        <template slot="actions">
                            <span v-for="action in item.actions">{{action}}</span>
                        </template>
                        <p slot="content">{{item.content}}</p>
                        <a-tooltip slot="datetime" :title="item.datetime.format('YYYY-MM-DD HH:mm:ss')">
                            <span>{{item.datetime.fromNow()}}</span>
                        </a-tooltip>
                    </a-comment>
                </a-list-item>
            </a-list> -->

            <a-row class="comment">
                <a-col class="comment_title">发表评论</a-col>
            </a-row>
            <a-row class="comment_subheading">
                <a-col>评论</a-col>
            </a-row>
            <a-row>
                <a-col>
                    <textarea class="comment_input"></textarea>
                </a-col>
            </a-row>
            <a-row>
                <a-col class="comment_btn">
                    发表评论
                </a-col>
            </a-row>
        </a-col>
    </a-row>
</template>

<script>
import moment from 'moment'
export default {
    data () {
        return {
            data: [
                {
                    actions: ['Reply to'],
                    author: 'Han Solo',
                    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                    datetime: moment().subtract(1, 'days'),
                },
                {
                    actions: ['Reply to'],
                    author: 'Han Solo',
                    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                    datetime: moment().subtract(2, 'days'),
                },
            ],
            moment,
        }
    },
    mounted(){
        //初始化anaDetailList
        this.$store.dispatch('getAnaDetailListById',this.$route.params.anaId)
    },
    methods:{
        //点击左右导航，跳转路由
        getBothAna(id){
            this.$router.push({name:'itemDetail',params:{anaId:id}})
        }
    },
    watch: {
        // 对路由变化作出响应...
        '$route' (to, from) {
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

    /*----------------------------------------------详情样式 */
    .anaDetail_detail{
        font-size: 16px;
        letter-spacing: 1px;
        line-height: 35px;
    }
    .anaDetail_from{
        margin-top: 40px;
        margin-bottom: 65px;
        text-align: right;
        font-size: 17px;
        font-weight: 700;
        color: #676f7a;
    }
    .anaDetail_nav{
        border-top: 1px solid rgba(114, 111, 111, 0.192);
        border-bottom: 1px solid rgba(114, 111, 111, 0.192);
        width: 100%;
        height: 50px;
        line-height: 50px;
    }
    .anaDetail_nav_left{
        float: left;
    }
    .anaDetail_nav_left:hover{
        cursor: pointer;
        color:#1066d6f3;
    }
    .anaDetail_nav_right{
        float:right;
    }
    .anaDetail_nav_right:hover{
        cursor: pointer;
        color:#1066d6f3;
    }
    .anaDetail_nav_left::before{
        content: "« ";
    }
    .anaDetail_nav_right::after{
        content: " »";
    }

    /*----------------------------------------------评论样式 */
    .comment{
        margin-top: 30px;
        height: 30px;
        line-height: 30px;
    }
    .comment_title{
        font-size: 20px;
        font-family: 'STHeiti';
        font-weight: bolder;
        letter-spacing: 1px;
    }
    .comment_subheading{
        line-height: 20px;
        margin-top: 15px;
        margin-bottom: 10px;
    }
    .comment_input{
        width: 100%;
        height: 120px;
        border: 1px solid gainsboro;
        padding: 5px;
    }
    .comment_btn{
        width: 100%;
        height: 30px;
        line-height: 30px;
        border:1px solid gainsboro;
        margin-top: 10px;
        text-align: center;
    }
    .comment_btn:hover{
        cursor: pointer;
        border:1px solid rgb(35, 166, 241);
    }
    .comment_list{
        margin-top: 30px;
    }
</style>
