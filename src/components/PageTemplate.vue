<template lang="pug">
div(class="h-full pageTemplate overflow-hidden")
  div(class="observeEl" ref="observeEl")
    div(v-if="slots.tabs" class="topTabs mb-3")
      <slot name="tabs"></slot>
    div(v-if="slots.filter" class="filter")
      slot(name="filter")

  a-table(v-bind="tableData" :pagination="pagination")
    div(v-if="slots.table")
      slot(name="table") hhhh
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { useTableHeight } from '~/utils'

const slots = useSlots()
const { observeEl, height } = useTableHeight(0)

defineProps({
  tableData: {
    type: Object as PropType<Data>,
    default: () => ({}),
  },
})

const pagination = { pageSize: 12, showTotal: true, showJumper: true, showPageSize: true }
</script>
