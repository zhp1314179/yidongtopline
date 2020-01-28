import Vue from 'vue'

//  ValidationProvider组件是包装您的输入并使用作用域插槽提供验证状态的组件。作用域道具
// 该ValidationObserver是你的包装形式和使用它在嵌套的所有字段提供汇总的验证状态的组件范围的插槽。
// extend添加新规则

import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'

// 加载内部的全部规则

import * as rules from 'vee-validate/dist/rules'

// 加载中文语言包
import { messages } from 'vee-validate/dist/locale/zh_CN.json'

// 注册全局组件

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

// 配置验证规则和中文提示

Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule],
    message: messages[rule]
  })
})

// 添加手机号验证

extend('mobile', {
  validate: value => {
    return /^1(3|5|6|7|8|9)\d{9}$/.test(value)
  },
  message: '手机号格式错误'
})
extend('code', {
  validate: value => {
    return /^\d{6}$/.test(value)
  },
  message: '验证码错误'
})
