import { useAxios } from './fetch'

export const getCode = () => useAxios<{
  codeKey: string
  graphCode: string
  img: string
}>({
  url: '/secret.graph.code',
  method: 'get',
  dataPath: 'data.data',
})

export const login = () => useAxios({
  url: '/userLogin',
})
