<template>
  <u-card class="w-full h-full">
    <template #header>
      <u-card-header title="My workspaces" description="Click to view all your workspace">
        <template #action>
          <u-button size="2xs" color="gray" variant="soft">
            View all
          </u-button>
        </template>
      </u-card-header>
    </template>
    <u-list :items="items">
      <template #item="{ item }">
        <u-list-item v-bind="item" class="whitespace-nowrap">
          <template #icon="{ icon }">
            <u-avatar size="sm" :icon="icon" class="ring-4 ring-gray-50" />
          </template>
        </u-list-item>
      </template>
    </u-list>
  </u-card>
</template>

<script lang="ts" setup>
import UList from '@/components/bases/u-list/u-list.vue'
import UListItem from '@/components/bases/u-list/u-list-item.vue'
import UCardHeader from '@/components/bases/u-card/u-card-header.vue'

const items = ref([{
  title: 'Workspace Mabouse',
  description: 'Create by MiguelBui',
  icon: 'i-heroicons-briefcase',
  value: 'WORKSPACE_01'
}, {
  title: 'Workspace Incheuo',
  description: 'Create by MiguelBui',
  icon: 'i-heroicons-briefcase',
  value: 'WORKSPACE_01'
}, {
  title: 'Workspace Samisuxe',
  description: 'Create by MiguelBui',
  icon: 'i-heroicons-briefcase',
  value: 'WORKSPACE_01'
}])
</script>
