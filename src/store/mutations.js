import {ADD_USER, HANDLE_DELETE, UPD_USER} from './mutationsType'

export default {

  [HANDLE_DELETE](state,{index}){
    state.tableData.splice(index,1)
  },
  [UPD_USER](state,{user,index}){
    state.tableData[index] = user
  },
  [ADD_USER](state,{user}){
    state.tableData.unshift(user)
    console.log(state.tableData.length)
  }
}
