<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div>
    404 页面的内容
    {{ t('not-found') }}
  </div>
</template>

<route lang="yaml">
meta:
  layout: 404
</route>
