<template>
    
    <!-- 内容的详情 -->
    <div class="anaDetail">
        <a-row class="ana">
            <a-col>
                {{$store.state.anaDetail.anaContent}}
            </a-col>
        </a-row>
        <a-row class="anaFrom">
            <a-col>
                {{$store.state.anaDetail.anaFrom}}
            </a-col>
        </a-row>
        <a-row class="anaNav">
            <a-col class="anaNavLeft" v-if="$store.state.leftAna.anaTitle">
                <span @click="getBothAna($store.state.leftAna)">{{$store.state.leftAna.anaTitle}}</span>
            </a-col>
            <a-col class="anaNavRight" v-if="$store.state.rightAna.anaTitle">
                <span @click="getBothAna($store.state.rightAna)">{{$store.state.rightAna.anaTitle}}</span>
            </a-col>
        </a-row>
    </div>

</template>

<script>
export default {
    mounted(){
        this.$store.dispatch('getBothAnaByNowId',this.$store.state.anaDetail.id)
    },
    methods:{
      getBothAna(nowAna){
          this.$store.dispatch('getBothAna',nowAna)
      }  
    },
    watch: {
        // 对路由变化作出响应...
        '$route' (to, from) {
            alert(1)
        }
    }
}
</script>

<style scoped>
    .anaDetail{
        width: 740px;
        margin: 50px auto;
    }

    .ana{
        font-size: 16px;
        letter-spacing: 1px;
        line-height: 35px;
    }
    .anaFrom{
        margin-top: 40px;
        margin-bottom: 65px;
        text-align: right;
    }
    .anaNav{
        border-top: 1px solid rgba(114, 111, 111, 0.192);
        border-bottom: 1px solid rgba(114, 111, 111, 0.192);
        width: 100%;
        height: 50px;
        line-height: 50px;
    }
    .anaNavLeft{
        float: left;
    }
    .anaNavRight{
        float:right;
    }
    .anaNavLeft::before{
        content: "«";
    }
    .anaNavRight::after{
        content: "»";
    }
</style>
