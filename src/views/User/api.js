import axios from '@/axios/'

export default {
  /** 门列表查询 */
  async queryDoor() {
    return await axios.get('/ACSAP/queryDoor')
  },

  /** 报警通知 */
  async notifyAlarm() {
    return await axios.post('/ACSAP/notifyAlarm')
  },

  /** 刷卡开门通知 */
  async notifySwipeCard() {
    return await axios.post('/ACSAP/notifySwipeCard')
  }
}
