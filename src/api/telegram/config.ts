import { useAxios } from '../fetch'

export const get = () => useAxios<{
  codeKey: string
  graphCode: string
  img: string
}>({
  url: '/data/group/opt?chatId=-1001664368754',
  method: 'get',
  dataPath: 'data.data',
})
