<template>
  <u-card class="w-full h-full">
    <template #header>
      <u-card-header :title="title" :description="description" />
    </template>
    <u-vertical-navigation :links="items" :ui="verticalUI" />
  </u-card>
</template>

<script lang="ts" setup>
import UCardHeader from '@/components/bases/u-card/u-card-header.vue'
import type { VerticalNavigationLink } from '@nuxt/ui/dist/runtime/types'

defineProps<
  Partial<{
    title: string;
    description: string;
    items: VerticalNavigationLink[][];
  }>
>()

const verticalUI = {
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
