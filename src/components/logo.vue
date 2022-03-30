<template>
  <div class="logo flex h-full items-center px-2">
    <icon-wechat class="mr-2 text-3xl !text-$main" />
    <p class="text-lg text-$main">
      logo
    </p>
  </div>
</template>

<script lang="ts" setup>
import { IconWechat } from '@arco-design/web-vue/es/icon'
const props = defineProps({
  icon: {
    type: Boolean,
    default: true,
  },
})
</script>
