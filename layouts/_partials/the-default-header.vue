<template>
  <u-container :ui="containerUI" class="border-b">
    <div class="the-default-header flex flex-row justify-start items-stretch">
      <div class="md:hidden flex justify-start items-center">
        <u-button color="gray" variant="ghost" icon="i-heroicons-bars-3" @click="toggleSidebar" />
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
import { useApplicationStore } from '@/store/application'
import TheLocale from '@/layouts/_partials/the-locale.vue'
import TheProfile from '@/layouts/_partials/the-profile.vue'
import TheNotification from '@/layouts/_partials/the-notification.vue'
import TheExtraSearch from '@/layouts/_partials/the-extra-search.vue'
const containerUI = {
  base: '',
  padding: 'p-2 sm:px-4 lg:px-4',
  constrained: ''
}

const { toggleSidebar } = useApplicationStore()
</script>
