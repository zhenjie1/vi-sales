<template lang="pug">
div(class="flex")
  table(class="w-[300px] mr-5 h-full")
    tr
      td(colspan="2" class="!text-center bg-$bgHover") 账户统计
    tr
      td 用户名
      td 123321
    tr
      td 密码
      td
        a-button(type="primary") 修改
    tr
      td 安全码
      td
        a-button(type="primary") 设置

  table(class="w-[300px] h-full")
    tr
      td(colspan="2" class="!text-center bg-$bgHover") 数据统计
    tr
      td 到期时间
      td 2020-12-30 12:33
    tr
      td 剩余天数
      td 12
    tr
      td 已购设备数
      td 1060
    tr
      td 已用设备数
      td 520
    tr
      td 空闲设备数
      td 480
    tr
      td 已累计消费
      td 10600
</template>

<script lang="ts" setup>

</script>

<route lang="yaml">
meta:
  layout: page
</route>

<style lang="scss" scoped>
table{
  tr{
    td{text-align: right;border:1px solid var(--border);height: 50px;padding: 0 10px;box-sizing: border-box;}
  }
}
</style>
