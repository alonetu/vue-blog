import axios from '../../axios/index'

export default {
  /** 查询所有博客 */
  async getarticlelist(): Promise<any> {
    return await axios.get('/getarticlelist')
  },
}
