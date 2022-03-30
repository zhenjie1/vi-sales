<template>
  <a-layout class="h-full">
    <a-layout-header class="h-16 border-gray-100 border-b">
      <!-- <layout-header /> -->
    </a-layout-header>
    <a-layout>
      <a-layout-sider>
        <!-- <layout-left-menu /> -->
      </a-layout-sider>
      <a-layout-content class="p-3 overflow-y-auto">
        <router-view />
      </a-layout-content>
    </a-layout>
    <!-- <a-layout-footer>Footer</a-layout-footer> -->
  </a-layout>
</template>
