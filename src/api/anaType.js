import request from '../utils/request'  
import cfg from '@/config/config'

const anaType = {}

anaType.getAnaTypeList = () => {
    return request('post', cfg.apiUrl + 'anaType/getAnaTypeList')
}

export default anaType
 

