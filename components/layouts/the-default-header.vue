<template>
  <u-container :ui="containerUI" class="border-b">
    <div class="the-default-header flex flex-row justify-start items-stretch gap-2">
      <div class="lg:hidden flex justify-start items-center">
        <u-button color="gray" variant="ghost" icon="i-heroicons-bars-3" size="md" @click="toogleCollapseState" />
      </div>
      <div class="flex-grow flex justify-start items-center">
        <the-extra-search class="w-full md:w-1/2 relative" />
      </div>
      <div class="flex flex-row justify-end items-center gap-x-1">
        <the-notification />
        <the-locale />
        <the-profile />
      </div>
    </div>
  </u-container>
</template>

<script lang="ts" setup>
import { useSidebarStore } from '@/store/sidebar'
import TheLocale from '@/components/layouts/the-locale.vue'
import TheProfile from '@/components/layouts/the-profile.vue'
import TheNotification from '@/components/layouts/the-notification.vue'
import TheExtraSearch from '@/components/layouts/the-extra-search.vue'
const containerUI = {
  base: '',
  padding: 'p-3 sm:px-4 lg:px-4',
  constrained: ''
}

const { toogleCollapseState } = useSidebarStore()
</script>
