<template>
  <u-list v-model="activeMenu" :items="menus" :collapse="collapse" active-class="bg-gray-100 text-primary-900">
    <template #item="{ item }">
      <u-list-item v-if="!item?.childs?.length" v-bind="item" :collapse="collapse" :is-active="item?.value === activeMenu" />
      <u-accordion v-else :items="[item]">
        <template #default>
          <u-list-item v-bind="item" :collapse="collapse" :is-active="item?.value === activeMenu">
            <template #action>
              <u-icon name="i-heroicons-chevron-down" class="h-4 w-4" />
            </template>
          </u-list-item>
        </template>
        <template #item>
          <div class="pl-4">
            <u-list v-model="activeMenu" :items="item.childs" :collapse="collapse" active-class="bg-gray-100 text-primary-900" />
          </div>
        </template>
      </u-accordion>
    </template>
  </u-list>
</template>

<script lang="ts" setup>
import UList from '@/components/bases/u-list/u-list.vue'
import UListItem from '@/components/bases/u-list/u-list-item.vue'
import type { List } from '@/types/components/u-list'

interface MenuItem extends List{
  title?: string;
  to?: string;
  icon?: string;
  badge?: string;
  childs?: MenuItem[];
  value?: string;
  description?: string
}

//props
defineProps<{
  collapse?: boolean
}>()

//data
const activeMenu = ref<string>('DASHBOARD')

const menus = reactive<MenuItem[]>([
  { title: 'Dashboard', to: '#Dashboard', icon: 'i-heroicons-academic-cap', badge: '10', value: 'DASHBOARD' },
  { title: 'Calendar', to: '#Team', icon: 'i-heroicons-calendar-days', value: 'TEAM' },
  { title: 'Horses', to: '#Projects', icon: 'i-heroicons-arrow-path-rounded-square', value: 'PROJECTS' },
  { title: 'Contacts', to: '#Calendar', icon: 'i-heroicons-inbox-stack', value: 'CALENDAR' },
  {
    title: 'Locations and Maps',
    to: '#Documents',
    icon: 'i-heroicons-map-pin',
    value: 'DOCUMENTS'
  },
  { title: 'Financials', to: '#Reports', icon: 'i-heroicons-credit-card', value: 'REPORTS' },
  {
    title: 'Communications',
    to: '#Projects',
    icon: 'i-heroicons-chat-bubble-left-right',
    childs: [
      {
        title: 'Website redesign',
        to: '#WebsiteRedesign',
        icon: 'i-heroicons-home-modern',
        value: 'WEBSITE_REDESIGN'
      },
      {
        title: 'GraphQL API',
        to: '#GraphQLAPI',
        icon: 'i-heroicons-gift',
        value: 'GRAPHQL_API'
      },
      {
        title: 'Customer migration guides',
        to: '#CustomerMigrationGuides',
        icon: 'i-heroicons-film',
        value: 'CUSTOMERMIGRATION'
      },
      {
        title: 'Profit sharing program',
        to: '#Profitsharingprogram',
        icon: 'i-heroicons-envelope-open',
        value: 'PROFITSHARING'
      }
    ]
  },
  { title: 'Completition', to: '#Reports', icon: 'i-heroicons-cpu-chip', value: 'REPORTS' },
  { title: 'Training', to: '#Reports', icon: 'i-heroicons-bookmark-square', value: 'REPORTS' }
])
</script>
