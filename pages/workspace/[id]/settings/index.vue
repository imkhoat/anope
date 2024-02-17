<template>
  <u-page page-title="Setting" page-description="Choose between categories">
    <div class="grid grid-cols-12 gap-4 h-fit">
      <div
        v-for="(menu, index) in menus"
        :key="index + '__setting-pages'"
        class="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3"
      >
        <setting-menu :title="menu.title" :items="menu.items" />
      </div>
    </div>
  </u-page>
</template>

<script lang="ts" setup>
import UPage from '@/components/bases/u-page/u-page.vue'
import SettingMenu from '@/pages/workspace/_partials/settings/setting-menu.vue'

const menus = ref([
  {
    title: 'Business Information',
    items: [
      {
        label: 'My Business Overview',
        class: '!font-normal',
        icon: 'i-heroicons-arrow-top-right-on-square-20-solid',
        value: 'WORKSPACE_01',
        to: '/workspace'
      }
    ]
  },
  {
    title: 'User management',
    items: [
      {
        label: 'Team and Groups',
        class: '!font-normal',
        icon: 'i-heroicons-arrow-top-right-on-square-20-solid',
        value: 'WORKSPACE_01',
        to: '/workspace'
      },
      {
        label: 'User Management',
        class: '!font-normal',
        icon: 'i-heroicons-arrow-top-right-on-square-20-solid',
        value: 'WORKSPACE_01',
        to: '/workspace'
      },
      {
        label: 'User Types and Reference Data',
        class: '!font-normal',
        icon: 'i-heroicons-arrow-top-right-on-square-20-solid',
        value: 'WORKSPACE_01',
        to: '/workspace'
      },
      {
        label: 'Role and Permissions',
        class: '!font-normal',
        icon: 'i-heroicons-arrow-top-right-on-square-20-solid',
        value: 'WORKSPACE_01',
        to: '/workspace'
      }
    ]
  },
  {
    title: 'Financial',
    items: [
      {
        label: 'Payment Settings',
        class: '!font-normal',
        icon: 'i-heroicons-arrow-top-right-on-square-20-solid',
        value: 'WORKSPACE_01',
        to: '/workspace'
      }
    ]
  },
  {
    title: 'Alert and Notification',
    items: [
      {
        label: 'My Business Overview',
        class: '!font-normal',
        icon: 'i-heroicons-arrow-top-right-on-square-20-solid',
        value: 'WORKSPACE_01',
        to: '/workspace'
      }
    ]
  },
  {
    title: 'Default and Reference data',
    items: [
      {
        label: 'Local setting',
        class: '!font-normal',
        icon: 'i-heroicons-arrow-top-right-on-square-20-solid',
        value: 'WORKSPACE_01',
        to: '/workspace'
      },
      {
        label: 'Horses Reference Data',
        class: '!font-normal',
        icon: 'i-heroicons-arrow-top-right-on-square-20-solid',
        value: 'WORKSPACE_01',
        to: '/workspace'
      },
      {
        label: 'Contact Reference Data',
        class: '!font-normal',
        icon: 'i-heroicons-arrow-top-right-on-square-20-solid',
        value: 'WORKSPACE_01',
        to: '/workspace'
      },
      {
        label: 'Location Reference Data',
        class: '!font-normal',
        icon: 'i-heroicons-arrow-top-right-on-square-20-solid',
        value: 'WORKSPACE_01',
        to: '/workspace'
      },
      {
        label: 'Users Reference Data',
        class: '!font-normal',
        icon: 'i-heroicons-arrow-top-right-on-square-20-solid',
        value: 'WORKSPACE_01',
        to: '/workspace'
      },
      {
        label: 'Activity, Treatment and Proceduce Reference Data',
        class: '!font-normal',
        icon: 'i-heroicons-arrow-top-right-on-square-20-solid',
        value: 'WORKSPACE_01',
        to: '/workspace'
      }
    ]
  }
])
</script>
