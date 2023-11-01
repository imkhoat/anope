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
import TheLogo from '@/layouts/_partials/the-logo.vue'
import TheLocale from '@/layouts/_partials/the-locale.vue'
import TheProfile from '@/layouts/_partials/the-profile.vue'
import TheNotification from '@/layouts/_partials/the-notification.vue'

const containerUI = {
  base: '',
  padding: 'p-2 sm:px-4 lg:px-4',
  constrained: ''
}

</script>