<template>
  <u-container :ui="containerUI" class="border-b">
    <div class="the-default-header flex flex-row justify-start items-stretch">
      <the-logo class="self-center" />
      <div class="flex-grow" />
      <div class="flex flex-row justify-end items-center gap-x-1">
        <the-notification />
        <the-locale />
        <the-profile />
      </div>
    </div>
  </u-container>
</template>

<script lang="ts" setup>
import TheLogo from '@/components/layouts/the-logo.vue'
import TheLocale from '@/components/layouts/the-locale.vue'
import TheProfile from '@/components/layouts/header/the-profile.vue'
import TheNotification from '@/components/layouts/the-notification.vue'

const containerUI = {
  base: '',
  padding: 'p-2 sm:px-4 lg:px-4',
  constrained: ''
}

</script>
