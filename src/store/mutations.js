import * as mutationsType from './mutationsType'

export default {

    [mutationsType.GET_ANA_TYPE_LIST](state,{anaTypeList}){
        state.anaTypeList = anaTypeList
    },
    [mutationsType.GET_ANALIST](state,{anaList}){
        state.anaList = anaList
    },
    [mutationsType.GET_ANA_DETAIL](state,{id}){
        state.anaDetail = state.anaList.find(ana => ana.id == id)
    },
    [mutationsType.GET_BOTH_ANA_BYNOWID](state,{anaList}){
        state.leftAna = anaList[0]
        state.rightAna = anaList[1]
    },
    [mutationsType.GET_BOTH_ANA](state,{nowAna}){
        state.anaDetail = nowAna
    }

}
