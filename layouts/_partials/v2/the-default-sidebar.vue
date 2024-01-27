<template>
  <div class="the-default-sidebar border-r border-gray-200">
    <!-- MOBILE -->
    <div class="flex lg:hidden">
      <u-slideover v-model="sidebar" :side="'left'">
        <u-card :ui="cardUI">
          <template #header>
            <div class="flex flex-row justify-between items-center">
              <the-workspaces class="flex-grow" :collapse="false" />
              <u-button
                color="gray"
                variant="ghost"
                icon="i-heroicons-x-mark-20-solid"
                @click="toggleSidebar"
              />
            </div>
          </template>
          <the-main-menu class="flex-grow" :collapse="false" />
          <template #footer>
            <the-profile-menu :collapse="false" />
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
        @click="onToggleCollapse"
      />
      <the-workspaces :collapse="collapse" />
      <the-main-menu class="flex-grow" :collapse="collapse" />
      <the-profile-menu :collapse="collapse" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useApplicationStore } from '@/store/application'
import TheMainMenu from '@/layouts/_partials/v2/the-main-menu.vue'
import TheWorkspaces from '@/layouts/_partials/v2/the-workspaces.vue'
import TheProfileMenu from '@/layouts/_partials/v2/the-profile-menu.vue'

const { sidebar } = storeToRefs(useApplicationStore())
const { toggleSidebar } = useApplicationStore()

const collapse = ref(false)

const desktopWidthCollapse = computed(() => {
  return collapse.value ? 'w-20' : 'min-w-64'
})

function onToggleCollapse() {
  collapse.value = !collapse.value
}

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
