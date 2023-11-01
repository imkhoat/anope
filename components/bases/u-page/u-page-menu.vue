<template>
  <u-button
    v-if="!state"
    class="fixed bottom-2 left-2 md:bottom-2 md:left-16 z-50 rounded-full ring-4 ring-gray-50 border border-gray-500"
    size="sm"
    color="white"
    icon="i-heroicons-arrows-pointing-out"
    @click="onToggleMenu"
  />
  <u-card v-else :ui="cardUI">
    <template #header>
      <div class="flex flex-row justify-between items-center">
        <span class="text-xs uppercase font-medium p-2 text-gray-500">User management setting</span>
        <u-button
          size="xs"
          variant="soft"
          color="white"
          icon="i-heroicons-arrows-pointing-in"
          @click="onToggleMenu"
        />
      </div>
    </template>
    <u-vertical-navigation :links="links" :ui="navUI">
      <template #icon="{ link }">
        <u-avatar class="bg-gray-100 ring-2 ring-gray-50">
          <u-icon :name="link.icon" class="w-4 h-4 flex-shrirk-0" />
        </u-avatar>
      </template>
    </u-vertical-navigation>
  </u-card>
</template>

<script lang="ts" setup>
import type { VerticalNavigationLink } from '@nuxt/ui/dist/runtime/types'

const props = defineProps<{
  menus?: VerticalNavigationLink[] | undefined,
  title: string | undefined
}>()

const navUI = {
  strategy: 'merge',
  base: 'h-12',
  inactive: 'bg-transparent',
  active: 'bg-white before:bg-white'
}
const cardUI = {
  base: 'overflow-hidden w-full h-full',
  background: 'bg-gray-50',
  rounded: 'rounded-none',
  ring: '',
  body: {
    padding: '!p-4'
  }
}

// activeMenu
const links = computed<VerticalNavigationLink[] | undefined>(() => {
  return props.menus?.map(item => {
    return {
      ...item,
      to: item.to
    }
  })
})

// expand
const state = defineModel<boolean>()
function onToggleMenu() {
  state.value = !state.value
}
</script>
