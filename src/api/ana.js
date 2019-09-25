import request from '../utils/request'  
import cfg from '@/config/config'

const ana = {}

//得到分页语录集合
ana.getAnaList = (param) => {
    return request('post', cfg.apiUrl + 'ana/getAnaList',param)
}

export default ana
 

