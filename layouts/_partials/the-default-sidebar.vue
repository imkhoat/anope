<template>
  <div class="the-default-sidebar">
    <!-- MOBILE -->
    <div class="relative z-50 md:hidden">
      <u-slideover v-model="sidebar" :side="'left'">
        <u-card :ui="cardUI">
          <template #header>
            <div class="flex flex-row justify-between items-center">
              <the-logo></the-logo>
              <u-button color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" @click="toggleSidebar"></u-button>
            </div>
          </template>
          <the-menu></the-menu>
        </u-card>
      </u-slideover>
    </div>
    <!-- DESKTOP -->
    <div class="hidden md:z-50 md:flex md:flex-col justify-between items-stretch h-full min-h-screen bg-white left-0 top-0 border-r relative"
      :class="collapseWidthClass">
      <u-card :ui="cardUI">
        <div class="flex flex-col justify-start items-stretch gap-y-4">
          <the-logo></the-logo>
          <the-menu :collapse="collapse"></the-menu>
        </div>
      </u-card>
      <u-card :ui="cardUI">
        <div class="flex flex-col justify-start items-stretch gap-y-4">
          <the-setting-menu :minimum="collapse"></the-setting-menu>
          <!-- <the-support-card :minimum="collapse" v-if="!collapse"></the-support-card> -->
        </div>
      </u-card>
      <u-button variant="soft"
        :icon="collapse ? 'i-heroicons-chevron-right-20-solid' : 'i-heroicons-chevron-left-20-solid'"
        class="absolute bottom-2 -right-4" @click="onToggleCollapse"></u-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import TheMenu from '@/layouts/_partials/the-menu.vue';
import TheLogo from '@/layouts/_partials/the-logo.vue';
import { useApplicationStore } from '@/store/application'
import TheSupportCard from '@/layouts/_partials/the-support-card.vue';
import TheSettingMenu from '@/layouts/_partials/the-setting-menu.vue';

const { sidebar } = storeToRefs(useApplicationStore())
const { toggleSidebar } = useApplicationStore()
const collapse = ref(false)

function onToggleCollapse() {
  collapse.value = !collapse.value
}

const cardUI = {
  shadow: '',
  ring: '',
  body: {
    padding: 'p-2 sm:px-4 sm:py-2 lg:px-4 lg:py-2'
  }
}

const collapseWidthClass = computed(() => {
  return collapse.value ? 'md:w-fit' : 'md:w-80'
})
</script>
