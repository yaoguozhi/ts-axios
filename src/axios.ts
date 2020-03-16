import { AxiosRequestConfig, AxiosStatic } from './types'
import Axios from './core/Axios'
import defaults from './defaults'

import { extend } from './helpers/util'
import mergeConfig from './core/mergeConfig'

function createIntance(config: AxiosRequestConfig): AxiosStatic {
  const context = new Axios(config)
  const instance = Axios.prototype.request.bind(context)

  extend(instance, context)

  return instance as AxiosStatic
}

const axios = createIntance(defaults)

axios.create = function(config) {
  return createIntance(mergeConfig(defaults, config))
}

export default axios
