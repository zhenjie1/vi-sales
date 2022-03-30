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
    {{ renderMenu }}
  </div>
</template>

<script lang="ts" setup>

type Menu = {
  title: string
  path: string
  icon?: string
  children?: Menu[]
}
const leftMenu = reactive<Menu[]>([
  {
    title: '我的群',
    icon: 'icon-account',
    path: '/myGroup',
    children: [
      { title: '总计', path: 'total', icon: 'icon-account' },
      { title: '数据统计', path: 'statistics', icon: 'icon-account' },
      { title: '消息', path: 'message', icon: 'icon-account' },
      { title: '成员管理', path: 'member', icon: 'icon-account' },
      { title: '新人培育', path: 'cultivation', icon: 'icon-account' },
      { title: '打卡机', path: 'PunchInMachine', icon: 'icon-account' },
      { title: '智能应答', path: 'answer', icon: 'icon-account' },
      { title: '定时公告', path: 'timeNotice', icon: 'icon-account' },
      { title: '安全防护', path: 'safetyProtection', icon: 'icon-account' },
      { title: '禁言模式', path: 'noWords', icon: 'icon-account' },
      { title: '添加我管理的群', path: 'noWords', icon: 'icon-account' },
    ],
  },
  {
    title: '我的机器人',
    icon: 'icon-userList',
    path: '/myBot',
    children: [
      { title: '总览', path: 'total', icon: 'icon-account' },
      { title: '欢迎语', path: 'welcome', icon: 'icon-account' },
      { title: '智能应答', path: 'answer', icon: 'icon-account' },
    ],
  },
  { title: '任务队列', icon: 'icon-order', path: '/task' },
  { title: '订单', icon: 'icon-order', path: '/orderRecord' },
  { title: '呼叫客服', icon: 'icon-order', path: '/customer' },
  { title: '中文简体', icon: 'icon-order', path: '/lang' },
])

const renderMenu = computed(() => {
  const route = useRoute()
  console.log('route', route)
  return ''
})
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
