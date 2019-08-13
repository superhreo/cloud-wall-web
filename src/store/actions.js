import {GET_ANALIST} from './mutationsType'
import {GET_ANA_DETAIL} from './mutationsType'

export default {
  getAnaList({commit},{condition,pageIndex}){
    //发送ajax请求得到anaList
    //将查询到的数据传给mutations
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
        {anaTitle:'只有学习使我快乐',anaContent:'学习使我睡觉，睡觉使我快乐。 则学习使我快乐',anaFrom:'匿名',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:1},
        {anaTitle:'只有学习使我快乐',anaContent:'学习使我睡觉，睡觉使我快乐。 则学习使我快乐',anaFrom:'匿名',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:2},
        {anaTitle:'只有学习使我快乐',anaContent:'学习使我睡觉，睡觉使我快乐。 则学习使我快乐',anaFrom:'匿名',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:3},
        {anaTitle:'只有学习使我快乐',anaContent:'学习使我睡觉，睡觉使我快乐。 则学习使我快乐',anaFrom:'匿名',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:4},
        {anaTitle:'只有学习使我快乐',anaContent:'学习使我睡觉，睡觉使我快乐。 则学习使我快乐',anaFrom:'匿名',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:5},
        {anaTitle:'只有学习使我快乐',anaContent:'学习使我睡觉，睡觉使我快乐。 则学习使我快乐',anaFrom:'匿名',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:6},
        {anaTitle:'只有学习使我快乐',anaContent:'学习使我睡觉，睡觉使我快乐。 则学习使我快乐',anaFrom:'匿名',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:7},
        {anaTitle:'只有学习使我快乐',anaContent:'学习使我睡觉，睡觉使我快乐。 则学习使我快乐',anaFrom:'匿名',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:8},
        {anaTitle:'只有学习使我快乐',anaContent:'学习使我睡觉，睡觉使我快乐。 则学习使我快乐',anaFrom:'匿名',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:9},
        {anaTitle:'只有学习使我快乐',anaContent:'学习使我睡觉，睡觉使我快乐。 则学习使我快乐',anaFrom:'匿名',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:10},
        {anaTitle:'只有学习使我快乐',anaContent:'学习使我睡觉，睡觉使我快乐。 则学习使我快乐',anaFrom:'匿名',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:11}
      ]});
    }
  },
  getAnaDetail({commit},{id,lastAna,nextAna}){
    commit(GET_ANA_DETAIL,{id,lastAna,nextAna});
  }
}
