<template>
  <div class="leftMenu">
    <ul>
      <li v-for="(item, index) in leftMenu" :key="index" class="item">
        <router-link :to="item.path" class="routerLink leading-10 block hover:bg-gray-100 px-3">
          <i class="iconfont inline-block text-center leading-5 text-[16px] w-5" :class="[item.icon]" />
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>

const leftMenu = reactive([
  { title: '我的账户', icon: 'icon-account', path: '/user' },
  { title: '用户列表', icon: 'icon-userList', path: '/userList' },
  { title: '订单记录', icon: 'icon-order', path: '/orderRecord' },
])
</script>

<style lang="scss" scoped>
.leftMenu {
  .item{
    .routerLink{
      .iconfont{
        color: var(--gray);
      }
    }
  }
  .routerLink.router-link-active{background-color: var(--mainTrans);color: var(--main);border-right: 3px solid var(--main);
    .iconfont{color: var(--main);}
  }
}
</style>
