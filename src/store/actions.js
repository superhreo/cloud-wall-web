import {GET_ANALIST,GET_ANA_DETAIL,GET_BOTH_ANA_BYNOWID,GET_BOTH_ANA} from './mutationsType'

export default {
  getAnaList({commit},{condition,pageIndex}){
    //1、发送ajax请求，参数：anaType和pageIndex（ana类型和当前页码），返回值：ana集合
    //2、将数据传到state中
    if(condition == 0){
      commit(GET_ANALIST,{anaList:[
        {anaTitle:'不再见',anaContent:'前人栽树，后人乘凉',anaFrom:'匿名',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:1},
        {anaTitle:'不再见',anaContent:'前人栽树，后人乘凉',anaFrom:'匿名',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:2},
        {anaTitle:'不再见',anaContent:'前人栽树，后人乘凉',anaFrom:'匿名',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:3},
        {anaTitle:'不再见',anaContent:'前人栽树，后人乘凉',anaFrom:'匿名',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:4},
        {anaTitle:'不再见',anaContent:'前人栽树，后人乘凉',anaFrom:'匿名',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:5},
        {anaTitle:'不再见',anaContent:'前人栽树，后人乘凉',anaFrom:'匿名',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:6},
        {anaTitle:'不再见',anaContent:'前人栽树，后人乘凉',anaFrom:'匿名',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:7},
        {anaTitle:'不再见',anaContent:'前人栽树，后人乘凉',anaFrom:'匿名',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:8},
        {anaTitle:'不再见',anaContent:'前人栽树，后人乘凉',anaFrom:'匿名',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:9},
        {anaTitle:'不再见',anaContent:'前人栽树，后人乘凉',anaFrom:'匿名',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:10},
        {anaTitle:'不再见',anaContent:'前人栽树，后人乘凉',anaFrom:'匿名',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:11}
      ]});
    }else{
      commit(GET_ANALIST,{anaList:[
        {anaTitle:'只有学习使我快乐',anaContent:'换一种心境生活才发现生活没以前那么累，有时候想想一个人有什么不好呢？饿不死，也没什么不开心，也没什么顾及。两个人有什么好呢？瞎操心还挨骂，顾虑也多。能得到关怀？得不到。能开心？不能。那为什么不一个人啊。。以前真是傻',anaFrom:'匿名',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:1},
        {anaTitle:'只有学习使我快乐',anaContent:'学习使我睡觉，睡觉使我快乐。则学习使我快乐',anaFrom:'匿名',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:2},
        {anaTitle:'只有学习使我快乐',anaContent:'学习使我睡觉，睡觉使我快乐。则学习使我快乐',anaFrom:'匿名',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:3},
        {anaTitle:'只有学习使我快乐',anaContent:'学习使我睡觉，睡觉使我快乐。则学习使我快乐',anaFrom:'匿名',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:4},
        {anaTitle:'只有学习使我快乐',anaContent:'学习使我睡觉，睡觉使我快乐。则学习使我快乐',anaFrom:'匿名',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:5},
        {anaTitle:'只有学习使我快乐',anaContent:'学习使我睡觉，睡觉使我快乐。则学习使我快乐',anaFrom:'匿名',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:6},
        {anaTitle:'只有学习使我快乐',anaContent:'学习使我睡觉，睡觉使我快乐。则学习使我快乐',anaFrom:'匿名',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:7},
        {anaTitle:'只有学习使我快乐',anaContent:'学习使我睡觉，睡觉使我快乐。则学习使我快乐',anaFrom:'匿名',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:8},
        {anaTitle:'只有学习使我快乐',anaContent:'学习使我睡觉，睡觉使我快乐。则学习使我快乐',anaFrom:'匿名',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:9},
        {anaTitle:'只有学习使我快乐',anaContent:'学习使我睡觉，睡觉使我快乐。则学习使我快乐',anaFrom:'匿名',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:10},
        {anaTitle:'只有学习使我快乐',anaContent:'学习使我睡觉，睡觉使我快乐。则学习使我快乐',anaFrom:'匿名',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:11}
      ]});
    }
  },
  getAnaDetail({commit},id){
    commit(GET_ANA_DETAIL,{id});
  },
  getBothAnaByNowId({commit},id){
    //1、发送ajax请求，参数：当前anaId,返回值：ana集合（包含左右两边的ana对象）
    //2、将数据传到state中
    commit(GET_BOTH_ANA_BYNOWID,{anaList:[
      {anaTitle:'南常',anaContent:'如果可以许一个愿望 成为一个简单 温柔 且有力量的人吧。',anaFrom:'--来自网易云音乐《南常》',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:1},
      {anaTitle:'西洲曲',anaContent:'“南风知我意，吹梦到西洲”',anaFrom:'--《西洲曲》',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:2}
    ]});
  },
  getBothAna({commit},nowAna){
    //1、发送ajax请求，参数：anaId,返回值：ana集合（包含左右两边的ana对象）
    //2、将数据传到state中
    commit(GET_BOTH_ANA,{nowAna})
    getBothAnaByNowId(nowAna.id)
  }
}
