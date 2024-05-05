<template>
  <div class="default-layout font-sans flex flex-row justify-start items-stretch w-screen h-screen max-h-screen">
    <the-sidebar-workspace />
    <div class="flex-grow flex flex-col justify-start items-stretch max-h-screen">
      <the-header-default />
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
import TheHeaderDefault from '@/components/layouts/header/the-header-default.vue'
import TheSidebarWorkspace from '@/components/layouts/sidebar/the-sidebar-workspace.vue'

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
