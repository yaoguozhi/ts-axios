import axios, { AxiosError } from "../../src/index";

axios({
  url: '/error/post',
  method: 'post',
  data: {
    a: 1
  },
  timeout: 1000
}).then(res => {
  console.log(res)
})
  .catch((e: AxiosError) => {
    console.log(e.message)
    console.log(e.config)
    console.log(e.code)
    console.log(e.request)
  })
