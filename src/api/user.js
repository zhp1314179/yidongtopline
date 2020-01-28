import request from '@/utils/request'
/**
 * 用户登录
 */
export const Login = (data) => {
  request({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data
  })
}
