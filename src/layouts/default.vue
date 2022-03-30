<!-- <template>
  <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <router-view />
    <Footer />
    <div class="mt-5 mx-auto text-center opacity-25 text-sm">
      [Default Layout]
    </div>
  </main>
</template> -->
<template>
  <a-layout class="h-full">
    <a-layout-header class="h-16 border-gray-100 border-b">
      <layout-header />
    </a-layout-header>
    <a-layout>
      <a-layout-sider>
        <layout-left-menu />
      </a-layout-sider>
      <a-layout-content class="p-3 overflow-y-auto bg-$bgBc">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
