import {GET_ANALIST,GET_ANA_DETAIL,GET_BOTH_ANA_BYNOWID,GET_BOTH_ANA} from './mutationsType'

export default {

    [GET_ANALIST](state,{anaList}){
        state.anaList = anaList
    },
    [GET_ANA_DETAIL](state,{id}){
        state.anaDetail = state.anaList.find(ana => ana.id == id)
    },
    [GET_BOTH_ANA_BYNOWID](state,{anaList}){
        state.leftAna = anaList[0]
        state.rightAna = anaList[1]
    },
    [GET_BOTH_ANA](state,{nowAna}){
        state.anaDetail = nowAna
        
    }

}
