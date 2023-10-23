<script lang="ts" setup>
// Columns
const columns = [{
  key: 'id',
  label: '#',
  sortable: true
}, {
  key: 'name',
  label: 'Name',
  sortable: true
}, {
  key: 'email',
  label: 'Email',
  sortable: true
}, {
  key: 'completed',
  label: 'Active',
  sortable: true
}, {
  key: 'actions',
  label: 'Actions',
  class: 'text-right',
  sortable: false
}]

const selectedColumns = ref(columns)
const columnsTable = computed(() => columns.filter((column) => selectedColumns.value.includes(column)))

// Selected Rows
const selectedRows = ref([])

function select(row) {
  const index = selectedRows.value.findIndex((item) => item.id === row.id)
  if (index === -1) {
    selectedRows.value.push(row)
  } else {
    selectedRows.value.splice(index, 1)
  }
}

// Actions
const actions = [
  [{
    key: 'completed',
    label: 'Completed',
    icon: 'i-heroicons-check'
  }], [{
    key: 'uncompleted',
    label: 'In Progress',
    icon: 'i-heroicons-arrow-path'
  }]
]

// Filters
const todoStatus = [{
  key: 'uncompleted',
  label: 'In Progress',
  value: false
}, {
  key: 'completed',
  label: 'Completed',
  value: true
}]

const search = ref('')
const selectedStatus = ref([])
const searchStatus = computed(() => {
  if (selectedStatus.value?.length === 0) {
    return ''
  }

  if (selectedStatus?.value?.length > 1) {
    return `?completed=${selectedStatus.value[0].value}&completed=${selectedStatus.value[1].value}`
  }

  return `?completed=${selectedStatus.value[0].value}`
})

const resetFilters = () => {
  search.value = ''
  selectedStatus.value = []
}

// Pagination
const page = ref(1)
const pageCount = ref(10)
const pageTotal = ref(200) // This value should be dynamic coming from the API
const pageFrom = computed(() => (page.value - 1) * pageCount.value + 1)
const pageTo = computed(() => Math.min(page.value * pageCount.value, pageTotal.value))

// Data
const { data: todos, pending } = await useLazyAsyncData('todos', () => $fetch<{
  id: number
  title: string
  completed: string
}[]>(`https://jsonplaceholder.typicode.com/users${searchStatus.value}`, {
  query: {
    q: search.value,
    '_page': page.value,
    '_limit': pageCount.value
  }
}), {
  default: () => [],
  watch: [page, search, searchStatus, pageCount]
})
</script>

<template>
  <u-card class="w-full" :ui="{
    base: '',
    shadow: '',
    divide: 'divide-y divide-gray-200 dark:divide-gray-700',
    header: { padding: 'px-4 py-5' },
    body: { padding: '', base: 'divide-y divide-gray-200 dark:divide-gray-700' },
    footer: { padding: 'p-4' }
  }">
    <!-- Filters -->
    <div class="flex items-center justify-between gap-3 px-4 py-3">
      <u-input v-model="search" icon="i-heroicons-magnifying-glass-20-solid" placeholder="Search..." />

      <u-select-menu v-model="selectedStatus" :options="todoStatus" multiple placeholder="Status" class="w-40" />
    </div>

    <!-- Header and Action buttons -->
    <div class="flex justify-between items-center w-full px-4 py-3">
      <div class="flex items-center gap-1.5">
        <span class="text-sm leading-5">Rows per page:</span>

        <u-select v-model="pageCount" :options="[3, 5, 10, 20, 30, 40]" class="me-2 w-20" size="xs" />
      </div>

      <div class="flex gap-1.5 items-center">
        <u-dropdown v-if="selectedRows.length > 1" :items="actions" :ui="{ width: 'w-36' }">
          <u-button icon="i-heroicons-chevron-down" trailing color="gray" size="xs">
            Mark as
          </u-button>
        </u-dropdown>

        <u-select-menu v-model="selectedColumns" :options="columns" multiple>
          <u-button icon="i-heroicons-view-columns" color="gray" size="xs">
            Columns
          </u-button>
        </u-select-menu>

        <u-button icon="i-heroicons-funnel" color="gray" size="xs"
          :disabled="search === '' && selectedStatus.length === 0" @click="resetFilters">
          Reset
        </u-button>
      </div>
    </div>

    <!-- Table -->
    <u-table v-model="selectedRows" :rows="todos" :columns="columnsTable" :loading="pending"
      sort-asc-icon="i-heroicons-arrow-up" sort-desc-icon="i-heroicons-arrow-down" class="w-full"
      :ui="{ td: { base: 'max-w-[0] truncate' } }" @select="select">
      <template #completed-data="{ row }">
        <u-badge size="xs" :label="row.completed ? 'Completed' : 'In Progress'"
          :color="row.completed ? 'primary' : 'orange'" variant="soft" />
      </template>

      <template #actions-data="{ row }">
        <div class="flex flex-row justify-end items-center">
          <u-button size="xs" variant="ghost" color="primary" icon="i-heroicons-pencil-square-20-solid"></u-button>
          <u-button size="xs" variant="ghost" color="rose" icon="i-heroicons-trash"></u-button>
        </div>
      </template>
    </u-table>

    <!-- Number of rows & Pagination -->
    <template #footer>
      <div class="flex flex-wrap justify-between items-center">
        <div>
          <span class="text-sm leading-5">
            Showing
            <span class="font-medium">{{ pageFrom }}</span>
            to
            <span class="font-medium">{{ pageTo }}</span>
            of
            <span class="font-medium">{{ pageTotal }}</span>
            results
          </span>
        </div>

        <u-pagination v-model="page" :page-count="pageCount" :total="pageTotal" />
      </div>
    </template>
  </u-card>
</template>