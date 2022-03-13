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

// 登录 telegrem
export const loginTelegram = () => useAxios<{
  User: Date
  token: string
}>({
  url: '/account/webLogin',
  data: {
    id: 5013574595,
    first_name: 'A Campbell',
    last_name: 'Jeremy',
    username: 'Jeremy_A_Campbell',
    photo_url: 'https://t.me/i/userpic/320/OCmSaiB8nkXtPXqDGVX4DLnEQbH_fWB3YSH4C1NMvrkCBWNyYJcIsTHjToyBS-Se.jpg',
    auth_date: 1640135641,
    hash: '1d38578ed247ae4f7caddb002a03c41042be5b6c8c7e055ff404d2946562e16c',
    device_id: 'bcd78aea-1913-4309-aa95-0799995e4028',
  },
})
