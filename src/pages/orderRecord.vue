<template>
  <page-template :table-data="tableData">
    <template #table>
      <a-table-column title="编号" />
      <a-table-column title="日期" />
      <a-table-column title="群/bot" />
      <a-table-column title="订单" />
      <a-table-column title="状态" />
    </template>
  </page-template>
</template>

<script lang="ts" setup>
const tableData = reactive({
  data: [
  ],
})
</script>

<route lang="yaml">
meta:
  layout: page
</route>
