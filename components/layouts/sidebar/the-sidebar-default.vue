<template>
  <div class="the-default-sidebar border-r border-gray-200">
    <!-- MOBILE -->
    <div class="flex lg:hidden">
      <u-slideover :model-value="collapse && !isDesktop" :side="'left'">
        <u-card :ui="cardUI">
          <template #header>
            <div class="flex flex-row justify-between items-center">
              <the-workspaces class="flex-grow" :collapse="false" />
              <u-button
                color="gray"
                variant="ghost"
                icon="i-heroicons-x-mark-20-solid"
                @click="toogleCollapseState()"
              />
            </div>
          </template>
          <the-menu-default class="flex-grow" :collapse="false" />
          <template #footer>
            <the-profile :collapse="false" />
          </template>
        </u-card>
      </u-slideover>
    </div>

    <!-- DESKTOP -->
    <div
      class="h-full hidden lg:flex lg:flex-col lg:justify-start lg:items-stretch gap-4 p-3 relative transition-width ease-linear duration-300"
      :class="desktopWidthCollapse"
    >
      <u-button
        icon="i-heroicons-chevron-right-20-solid"
        class="absolute -right-3 top-[5.5rem] rounded-full z-10"
        color="gray"
        size="xs"
        @click="toogleCollapseState()"
      />
      <the-workspaces :collapse="collapse" />
      <the-menu-default :collapse="collapse" class="flex-grow" />
      <the-profile :collapse="collapse" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useSidebarStore } from '@/store/sidebar'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import TheProfile from '@/components/layouts/sidebar/profile/the-profile.vue'
import TheMenuDefault from '@/components/layouts/sidebar/menu/the-menu-default.vue'
import TheWorkspaces from '@/components/layouts/sidebar/workspace/the-workspaces.vue'

const { collapse } = storeToRefs(useSidebarStore())

const { toogleCollapseState } = useSidebarStore()

const desktopWidthCollapse = computed(() => {
  return collapse.value ? 'w-20' : 'min-w-64'
})

// breakpoint
const breakpoints = useBreakpoints(breakpointsTailwind)
const isDesktop = computed(() => {
  return breakpoints.greaterOrEqual('lg').value
})

// ui config
const cardUI = {
  base: 'h-full flex flex-col justify-start items-stretch',
  shadow: '',
  ring: '',
  body: {
    base: 'flex-grow',
    padding: 'p-2 sm:px-4 sm:py-2 lg:px-4 lg:py-2'
  }
}
</script>
