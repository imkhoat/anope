<template>
  <u-datatable
    v-model:page="filter.page"
    v-model:pageCount="filter.pageCount"
    :columns="columns"
    :rows="todos"
    :loading="pending"
  >
    <template #completed-data="{ row }">
      <u-badge
        size="xs"
        :label="row.completed ? 'Completed' : 'In Progress'"
        :color="row.completed ? 'primary' : 'orange'"
        variant="soft"
      />
    </template>

    <template #actions-data>
      <div class="flex flex-row justify-end items-center">
        <u-button
          size="xs"
          variant="ghost"
          color="primary"
          icon="i-heroicons-pencil-square-20-solid"
        />
        <u-button
          size="xs"
          variant="ghost"
          color="error"
          icon="i-heroicons-trash"
          @click="onRemoveUse"
        />
      </div>
    </template>
  </u-datatable>
</template>

<script lang="ts" setup>
import UDatatable from '@/components/bases/u-datatable/u-datatable.vue'

const columns = [
  {
    key: 'id',
    label: '#',
    sortable: true
  },
  {
    key: 'name',
    label: 'Name',
    sortable: true
  },
  {
    key: 'email',
    label: 'Email',
    sortable: true
  },
  {
    key: 'completed',
    label: 'Active',
    sortable: true
  },
  {
    key: 'actions',
    label: 'Actions',
    class: 'text-right',
    sortable: false
  }
]

const filter = reactive({
  search: '',
  page: 0,
  pageCount: 10
})

// Data
const { data: todos, pending } = await useLazyAsyncData(
  'todos',
  () =>
    $fetch<
      {
        id: number;
        title: string;
        completed: string;
      }[]
    >('https://jsonplaceholder.typicode.com/users', {
      query: {
        q: filter.search,
        _page: filter.page,
        _limit: filter.pageCount
      }
    }),
  {
    default: () => [],
    watch: [filter]
  }
)

// Remove user
const { showDeleteDialog } = useModal()
function onRemoveUse() {
  showDeleteDialog({
    title: 'Remove user',
    description: 'We are going to remove user out of workspace, Are you sure?'
  })
}
</script>
