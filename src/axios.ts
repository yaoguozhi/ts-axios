import { AxiosInstance, AxiosRequestConfig } from './types'
import Axios from './core/Axios'
import defaults from './defaults'

import { extend } from './helpers/util'

function createIntance(config: AxiosRequestConfig): AxiosInstance {
  const context = new Axios(config)
  const instance = Axios.prototype.request.bind(context)

  extend(instance, context)

  return instance as AxiosInstance
}

const axios = createIntance(defaults)

export default axios
