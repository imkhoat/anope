<template>
  <div class="the-main-menu">
    <u-vertical-navigation :links="collapsedMenus" :ui="mainVerticalUI" />
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useSidebarStore } from '@/store/sidebar'
import type { VerticalNavigationLink } from '@nuxt/ui/dist/runtime/types'

const props = withDefaults(
  defineProps<{
    collapse: boolean;
  }>(),
  {
    collapse: false
  }
)
const { menus } = storeToRefs(useSidebarStore())

const collapsedMenus = computed(() => {
  return props.collapse
    ? (menus.value.map((menu) => {
      return menu.map((item) => {
        return {
          icon: item.icon,
          to: item.to
        }
      })
    }) as VerticalNavigationLink[][])
    : menus.value
})

// Vertical navigation config
const mainVerticalUI = {
  padding: 'px-2.5 py-2.5',
  font: 'font-normal',
  active:
    'text-gray-900 dark:text-white before:bg-gray-100 dark:before:bg-gray-800',
  inactive:
    'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50',
  icon: {
    base: 'flex-shrink-0 w-5 h-5 font-bold ml-2 relative',
    active: 'text-gray-700 dark:text-gray-200',
    inactive:
      'text-gray-600 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-800'
  }
}
</script>
