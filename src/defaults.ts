import { AxiosRequestConfig } from './types'

const defaults: AxiosRequestConfig = {
  method: 'get',
  timeout: 0,
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*'
    }
  }
}

const methodsNoData = ['delete', 'get', 'head', 'options']

methodsNoData.forEach(item => {
  defaults.headers[item] = {}
})

const methodsWithData = ['post', 'put', 'patch']

methodsWithData.forEach(item => {
  defaults.headers[item] = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

export default defaults
