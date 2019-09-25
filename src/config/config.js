const devUrl = 'http://192.168.7.111:9090/';
const proUrl = 'http://114.116.190.45/cloud-wall/';
export default {
  apiUrl: process.env.NODE_ENV === 'production' ? proUrl : devUrl
}
