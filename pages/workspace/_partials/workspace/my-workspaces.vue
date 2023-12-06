<template>
  <u-card class="w-full h-full">
    <template #header>
      <div class="flex flex-row justify-between items-center">
        <h6 class="font-semibold">
          My workspaces
        </h6>
      </div>
    </template>
    <u-list :items="items">
      <template #item="{ item }">
        <u-list-item
          v-bind="item"
          hover-class="hover:bg-gray-100 hover:text-gray-900"
          class="whitespace-nowrap"
        >
          <template #icon="{ icon }">
            <u-avatar
              v-if="item.admin"
              chip-color="primary"
              chip-text="A"
              chip-position="bottom-right"
              size="sm"
              :icon="icon"
              class="ring-4 ring-gray-50"
            />
            <u-avatar v-else size="sm" :icon="icon" class="ring-4 ring-gray-50" />
          </template>
          <template #action>
            <u-button
              variant="soft"
              size="xs"
              icon="i-heroicons-arrow-right"
            />
          </template>
        </u-list-item>
      </template>
    </u-list>
  </u-card>
</template>

<script lang="ts" setup>
import UList from '@/components/bases/u-list/u-list.vue'
import UListItem from '@/components/bases/u-list/u-list-item.vue'

// data
const items = ref([
  {
    title: 'Workspace Mabouse',
    description: 'Create by MiguelBui',
    icon: 'i-heroicons-briefcase',
    value: 'WORKSPACE_01'
  },
  {
    title: 'Workspace Incheuo',
    description: 'Create by MiguelBui',
    icon: 'i-heroicons-briefcase',
    value: 'WORKSPACE_01'
  },
  {
    title: 'Workspace Samisuxe',
    description: 'Create by MiguelBui',
    icon: 'i-heroicons-briefcase',
    value: 'WORKSPACE_01',
    admin: true
  }
])
</script>
