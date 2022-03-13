<script setup lang="ts">
import { api } from './api'
import { loginTelegram } from './api/login'
import { useUserStore } from './stores/user'

// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Vitesse',
  meta: [
    { name: 'description', content: 'Opinionated Vite Starter Template' },
  ],
})

const user = useUserStore()
loginTelegram().start().promise.then((res) => {
  user.setToken(res.token)
  user.setInfo(res.User)
  api.telegram.get().start()
})
</script>

<template>
  <router-view />
</template>

<style>
*{outline: none;}
</style>
