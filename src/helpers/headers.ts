import { isPlainObject } from './util'

function normallizedHeaderName(headers: any, normallizedHeaderName: string): void {
  if (!headers) return
  Object.keys(headers).forEach(name => {
    if (
      name !== normallizedHeaderName &&
      name.toUpperCase() === normallizedHeaderName.toUpperCase()
    ) {
      headers[normallizedHeaderName] = headers[name]
      delete headers[name]
    }
  })
}

export function processHeaders(headers: any, data: any): any {
  normallizedHeaderName(headers, 'Content-Type')

  if (isPlainObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;chrset=utf-8'
    }
  }

  return headers
}
