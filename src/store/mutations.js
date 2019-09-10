import * as mutationsType from './mutationsType'

export default {

    [mutationsType.GET_ANA_TYPE_LIST](state,{anaTypeList}){
        state.anaTypeList = anaTypeList
    },
    [mutationsType.GET_ANALIST](state,{anaList}){
        state.anaList = anaList
    },
    [mutationsType.GET_ANADETAILLIST_BYID](state,{anaDetailList}){
        state.anaDetailList = anaDetailList
    }
}
