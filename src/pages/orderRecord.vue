<template>
  <PageTemplate v-bind="{tableData}">
    <template #tabs>
      <div>tabs</div>
    </template>
    <template #filter>
      <div>
        <a-form layout="inline">
          <a-form-item hide-label>
            <a-button type="primary">
              新增订单
            </a-button>
          </a-form-item>
          <a-form-item hide-label hide-asterisk>
            <a-input placeholder="用户搜索">
              <template #prefix>
                <IconSearch />
              </template>
            </a-input>
          </a-form-item>
        </a-form>
      </div>
    </template>
    <!-- <template #table="{height}">
      <a-table v-bind="tableData" :pagination="{pageSize: 12, showTotal: true, showJumper: true, showPageSize: true}" />
    </template> -->
  </PageTemplate>
</template>

<script lang="ts" setup>
import { IconSearch } from '@arco-design/web-vue/es/icon'
const tableData = reactive({
  columns: [
    {
      title: '订单号',
      dataIndex: 'name',
    },
    {
      title: '开单时间',
      dataIndex: 'salary',
    },
    {
      title: '名称',
      dataIndex: 'address',
    },
    {
      title: '设备数',
      dataIndex: 'email',
    },
    {
      title: '缴费金额',
      dataIndex: 'salary',
    },
    {
      title: '开始时间',
      dataIndex: 'address',
    },
    {
      title: '到期时间',
      dataIndex: 'email',
    },
    {
      title: '状态',
      dataIndex: 'salary',
    },
  ],
  data: [
    {
      key: '1',
      name: 'Jane Doe',
      salary: 23000,
      address: '32 Park Road, London',
      email: 'jane.doe@example.com',
      expand: 'Expand Data',
    }, {
      key: '2',
      name: 'Alisa Ross',
      salary: 25000,
      address: '35 Park Road, London',
      email: 'alisa.ross@example.com',
    }, {
      key: '3',
      name: 'Kevin Sandra',
      salary: 22000,
      address: '31 Park Road, London',
      email: 'kevin.sandra@example.com',
    }, {
      key: '4',
      name: 'Ed Hellen',
      salary: 17000,
      address: '42 Park Road, London',
      email: 'ed.hellen@example.com',
    }, {
      key: '5',
      name: 'William Smith',
      salary: 27000,
      address: '62 Park Road, London',
      email: 'william.smith@example.com',
    },
  ],
})

for (let i = 0; i < 200; i++) {
  tableData.data.push(...[{
    key: '1',
    name: 'Jane Doe',
    salary: 23000,
    address: '32 Park Road, London',
    email: 'jane.doe@example.com',
    expand: 'Expand Data',
  }, {
    key: '2',
    name: 'Alisa Ross',
    salary: 25000,
    address: '35 Park Road, London',
    email: 'alisa.ross@example.com',
  }, {
    key: '3',
    name: 'Kevin Sandra',
    salary: 22000,
    address: '31 Park Road, London',
    email: 'kevin.sandra@example.com',
  }, {
    key: '5',
    name: 'William Smith',
    salary: 27000,
    address: '62 Park Road, London',
    email: 'william.smith@example.com',
  }])
}
</script>

<route lang="yaml">
meta:
  layout: page
</route>
