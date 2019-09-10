import * as mutationsType from './mutationsType'

export default {
  //查询摘录类型集合
  getAnaTypeList({commit}){
    //1、发送ajax请求，参数：无，返回值：anaType集合
    //2、将数据传到state中
    commit(mutationsType.GET_ANA_TYPE_LIST,{anaTypeList:
    [
      {id:'1',anaTypeName:'首页'},
      {id:'2',anaTypeName:'热评'},
      {id:'3',anaTypeName:'短句'},
      {id:'4',anaTypeName:'段子'},
      {id:'5',anaTypeName:'关于'}
    ]})
  },

  //分页查询摘录集合
  getAnaList({commit},{condition,pageIndex}){
    //1、发送ajax请求，参数：anaType和pageIndex（ana类型和当前页码），返回值：ana集合
    //2、将数据传到state中
    if(condition == 1){
      commit(mutationsType.GET_ANALIST,{anaList:[
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
      commit(mutationsType.GET_ANALIST,{anaList:[
        {anaTitle:'缱绻星光下',anaContent:'世上不如意事十居八九，既已如此，也是勉强不来了。  我偏要勉强。',anaFrom:'匿名',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:1},
        {anaTitle:'缱绻星光下',anaContent:'“世上不如意事十居八九，既已如此，也是勉强不来了。”  “我偏要勉强。”',anaFrom:'匿名',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:2},
        {anaTitle:'缱绻星光下',anaContent:'“世上不如意事十居八九，既已如此，也是勉强不来了。”  “我偏要勉强。”',anaFrom:'匿名',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:3},
        {anaTitle:'缱绻星光下',anaContent:'“世上不如意事十居八九，既已如此，也是勉强不来了。”  “我偏要勉强。”',anaFrom:'匿名',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:4},
        {anaTitle:'缱绻星光下',anaContent:'“世上不如意事十居八九，既已如此，也是勉强不来了。”  “我偏要勉强。”',anaFrom:'匿名',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:5},
        {anaTitle:'缱绻星光下',anaContent:'“世上不如意事十居八九，既已如此，也是勉强不来了。”  “我偏要勉强。”',anaFrom:'匿名',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:6},
        {anaTitle:'缱绻星光下',anaContent:'“世上不如意事十居八九，既已如此，也是勉强不来了。”  “我偏要勉强。”',anaFrom:'匿名',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:7},
        {anaTitle:'缱绻星光下',anaContent:'“世上不如意事十居八九，既已如此，也是勉强不来了。”  “我偏要勉强。”',anaFrom:'匿名',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:8},
        {anaTitle:'缱绻星光下',anaContent:'“世上不如意事十居八九，既已如此，也是勉强不来了。”  “我偏要勉强。”',anaFrom:'匿名',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:9},
        {anaTitle:'缱绻星光下',anaContent:'“世上不如意事十居八九，既已如此，也是勉强不来了。”  “我偏要勉强。”',anaFrom:'匿名',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:10},
        {anaTitle:'缱绻星光下',anaContent:'“世上不如意事十居八九，既已如此，也是勉强不来了。”  “我偏要勉强。”',anaFrom:'匿名',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:11}
      ]});
    }
  },

  //根据id查询以id为中心的三条ana数据
  getAnaDetailListById({commit},id){
    //1、发送ajax请求，参数：anaId,返回值：anaList（3条）
    //2、将数据传到state中
    commit(mutationsType.GET_ANADETAILLIST_BYID,{anaDetailList:[
      {anaTitle:'南常',anaContent:'如果可以许一个愿望 成为一个简单 温柔 且有力量的人吧。',anaFrom:'--来自网易云音乐《南常》',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:11},
      {anaTitle:'不再见',anaContent:'前人栽树，后人乘凉',anaFrom:'匿名',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:1},
      {anaTitle:'西洲曲',anaContent:'“南风知我意，吹梦到西洲”',anaFrom:'--《西洲曲》',commentNum:66,prizeNum:88,createDate:'2019-08-12',id:12}
    ]})
  }

}
