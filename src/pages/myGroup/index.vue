<template>
  <div class="myGroup">
    <page-template :table-data="tableData">
      <template #title>
        <div class="text-lg flex-shrink-0">
          我的群
        </div>
        <a-input v-model="form.name" class="!w-80" placeholder="搜索" />
      </template>
      <template #table>
        <a-table-column>
          <template #cell="{record}">
            <div class="flex">
              <a-avatar :size="56" class="flex-shrink-0">
                A
              </a-avatar>
              <div class="ml-4">
                <p class="leading-snug">
                  编号：{{ record.code }}
                </p>
                <p class="text-$main leading-snug" hover="cursor-pointer underline">
                  mzjBot(@mzjbot_bot)
                </p>
                <p class="leading-snug">
                  Token: {{ record.token }}
                </p>
              </div>
            </div>
          </template>
        </a-table-column>
        <a-table-column title="服务版本">
          <template #cell="{record}">
            <span>免费版</span>
            <a-button class="ml-2">
              升级
            </a-button>
          </template>
        </a-table-column>
        <a-table-column title="Bot 的健康">
          <template #cell="{record}">
            <span>顺畅</span>
            <a-button type="primary" class="ml-2">
              检查BOT健康
            </a-button>
          </template>
        </a-table-column>
        <a-table-column>
          <template #cell>
            <a-dropdown trigger="hover">
              <a-button>
                <template #icon>
                  <icon-more />
                </template>
              </a-button>
              <template #content>
                <a-doption>Option 1</a-doption>
                <a-doption>Option 2</a-doption>
                <a-doption>Option 3</a-doption>
              </template>
            </a-dropdown>
          </template>
        </a-table-column>
      </template>
    </page-template>
  </div>
</template>

<script lang="ts" setup>
import { IconMore } from '@arco-design/web-vue/es/icon'

const form = reactive({
  name: '',
})
const tableData = reactive({
  data: [
    {
      code: '1123321312321',
      token: 'Jane Doe',
      salary: 23000,
      address: '32 Park Road, London',
      email: 'jane.doe@example.com',
    },
    {
      code: '1123321312321',
      token: 'Jane Doe',
      salary: 23000,
      address: '32 Park Road, London',
      email: 'jane.doe@example.com',
    },
    {
      code: '1123321312321',
      token: 'Jane Doe',
      salary: 23000,
      address: '32 Park Road, London',
      email: 'jane.doe@example.com',
    },
    {
      code: '1123321312321',
      token: 'Jane Doe',
      salary: 23000,
      address: '32 Park Road, London',
      email: 'jane.doe@example.com',
    },
    {
      code: '1123321312321',
      token: 'Jane Doe',
      salary: 23000,
      address: '32 Park Road, London',
      email: 'jane.doe@example.com',
    },
    {
      code: '1123321312321',
      token: 'Jane Doe',
      salary: 23000,
      address: '32 Park Road, London',
      email: 'jane.doe@example.com',
    },
  ],
})
</script>
