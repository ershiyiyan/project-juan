
import  {axios}  from "../utils/request"

// export function img (param) {
//   return axios({
//       url: '/api/img',
//       method: 'get',
//       data: param,
//   })
// }

export default {
  img (param) {
    return axios({
        url: '/api/img',
        method: 'get',
        data: param,
    })
  }
}