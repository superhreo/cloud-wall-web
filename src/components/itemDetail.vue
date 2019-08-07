<template>
    
    <!-- 内容的详情 -->
    <div>
        
    </div>

</template>

<script>
export default {
    data(){
        return{
            ana:{}
        }
    },
    mounted(){
        //将传过来的语录对象赋值给 ana属性
        let ana = this.$route.params;
        if(ana == null || ana == ''){
            this.$router.push({name:'home'});
        }else{
            this.ana = this.$route.params;
        }
    },
    methods:{

    }
}
</script>

<style scoped>
</style>
