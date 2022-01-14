import { acceptHMRUpdate, defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  /**
   * Current named of the user.
   */
  const info = ref({})
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
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
