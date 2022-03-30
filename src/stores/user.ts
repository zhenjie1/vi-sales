import { acceptHMRUpdate, defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  /**
   * 用户信息
   */
  const info = ref({})
  /**
   * token
   */
  const token = ref('')

  /**
   * 设置用户信息
   */
  function setInfo(data: Data) {
    info.value = data
  }

  /**
   * 设置token
   */
  function setToken(newToken: string) {
    token.value = newToken
  }

  return {
    info,
    token,
    setInfo,
    setToken,
    persist: {
      key: 'storekey',
      storage: window.sessionStorage,
      paths: ['nested.data'],
      overwrite: true,
    },
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
