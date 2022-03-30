<script setup lang="ts">
import { api } from '~/api'

const data = reactive({
  a1: 'va1',
  b1: 'vb1',
  c1: null,
  d1: '',
})

// console.log(api.login.login())
// const { isLoading, data: data1 } = api.login.login()
// console.log(data1)
</script>

<template>
  <div>
    <pre>{{ data }}</pre>
  </div>
</template>

<route lang="yaml">
meta:
  layout: page
</route>
