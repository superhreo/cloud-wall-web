
import {ADD_USER, HANDLE_DELETE, UPD_USER} from './mutationsType'

export default {
  handleDelete({commit},index){
    return new Promise((resolve,reject) => {
      if(Math.round(Math.random())){
        commit(HANDLE_DELETE, {index})
        resolve({data:'success',msg:'删除成功！'})

      }else{
        reject({data:'fail',msg:'删除失败！'})
      }
    })
  },
  getUserBy({commit,state},index){
    return new Promise((resolve,reject) => {
      resolve({user:state.tableData[index]})
    })
  },
  updUser({commit},user,index){
    commit(UPD_USER,{user,index})
  },
  addUser({commit},user){
    commit(ADD_USER,{user})
  }
}
