<template>
  <div class="default-layout font-sans flex flex-row justify-start items-stretch w-screen h-screen max-h-screen">
    <the-default-sidebar />
    <div class="flex-grow flex flex-col justify-start items-stretch max-h-screen">
      <the-default-header />
      <div class="flex-grow overflow-y-auto bg-white">
        <u-container :ui="containerUI" class="min-w-full min-h-full">
          <div class="w-full h-full">
            <slot />
          </div>
        </u-container>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TheDefaultHeader from '@/layouts/_partials/the-default-header.vue'
import TheDefaultSidebar from '@/layouts/_partials/v2/the-default-sidebar.vue'

const containerUI = {
  base: '',
  padding: 'p-2 sm:p-4 lg:p-4',
  constrained: ''
}
</script>

<style>
.default-layouts {
  font-family: 'AR One Sans', sans-serif;
}
</style>
