<template lang="pug">
div(class="userOut text-$main")

  carbon-user-avatar-filled(class="text-lg")
  span.ml-1 admin

  span(class="out ml-4 text-$red cursor-pointer")
    <carbon-logout class="text-lg" />
    span.ml-1 退出
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.userOut{
    *{vertical-align: middle;}
  .out{
  }
}
</style>
