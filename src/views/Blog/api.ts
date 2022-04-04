import axios from '../../axios/index'
import Result from '../../utils/result'

export default {
  /** 查询所有博客 */
  async getarticlelist(): Promise<Result> {
    return await axios.get('/getarticlelist')
  },
}
