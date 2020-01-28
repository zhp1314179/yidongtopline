/**
 * 频道
 */
import request from '@/utils/request'
export const getUserChannel = () => {
  return request({
    method: 'GET',
    url: '/app/v1_0/user/channels'
  })
}
