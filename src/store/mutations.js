import {GET_ANALIST} from './mutationsType'

export default {

    [GET_ANALIST](state,{anaList}){
        state.anaList = anaList
    }
  
}
