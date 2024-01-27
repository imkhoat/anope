<template>
  <div class="the-menu">
    <u-vertical-navigation :links="menus" :ui="mainVerticalUI" />
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useSidebarStore } from '@/store/sidebar'

const { menus } = storeToRefs(useSidebarStore())

// Vertical navigation config
const mainVerticalUI = {
  padding: 'px-2.5 py-2.5',
  font: 'font-normal',
  active:
    'text-gray-900 dark:text-white before:bg-gray-100 dark:before:bg-gray-800',
  inactive:
    'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50',
  icon: {
    base: 'flex-shrink-0 w-5 h-5 font-bold ml-2',
    active: 'text-gray-700 dark:text-gray-200',
    inactive:
      'text-gray-600 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200'
  }
}
</script>
