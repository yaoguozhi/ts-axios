import { AxiosRequestConfig } from './types'
import { transformRequest, transformResponse } from './helpers/data'
import { processHeaders } from './helpers/headers'

const defaults: AxiosRequestConfig = {
  method: 'get',
  timeout: 0,
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*'
    }
  },

  transformRequest: [
    function(data: any, headers: any): any {
      processHeaders(headers, data)
      return transformRequest(data)
    }
  ],
  transformResponse: [
    function(data: any): any {
      return transformResponse(data)
    }
  ]
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
