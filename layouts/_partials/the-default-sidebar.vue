<template>
  <div class="the-default-sidebar">
    <!-- MOBILE -->
    <div class="relative z-50 md:hidden">
      <u-slideover v-model="sidebar" :side="'left'">
        <div class="flex flex-col justify-between items-stretch h-full w-full">
          <u-card :ui="cardUI">
            <template #header>
              <div class="flex flex-row justify-between items-center">
                <the-logo />
                <u-button
                  color="gray"
                  variant="ghost"
                  icon="i-heroicons-x-mark-20-solid"
                  @click="toggleSidebar"
                />
              </div>
            </template>
            <the-menu />
          </u-card>
          <u-card :ui="cardUI">
            <div class="flex flex-col justify-start items-stretch gap-y-4">
              <u-list-item title="Setting" icon="i-heroicons-cog-8-tooth" @click="onGoToSettingPage" />
              <div class="p-2">
                <u-card :ui="{ ...cardUI, background: 'bg-gray-50' }">
                  <the-support-card :minimum="false" />
                </u-card>
              </div>
            </div>
          </u-card>
        </div>
      </u-slideover>
    </div>
    <!-- DESKTOP -->
    <div
      class="hidden md:z-50 md:flex md:flex-col justify-between items-stretch h-full min-h-screen bg-white left-0 top-0 border-r relative"
      :class="collapseWidthClass"
    >
      <u-card :ui="cardUI">
        <div class="flex flex-col justify-start items-stretch gap-y-4">
          <the-logo />
          <the-menu :collapse="collapse" />
        </div>
      </u-card>
      <u-card :ui="cardUI">
        <div class="flex flex-col justify-start items-stretch gap-y-4">
          <the-setting-menu :minimum="collapse" />
          <!-- <the-support-card :minimum="collapse" v-if="!collapse"></the-support-card> -->
        </div>
      </u-card>
      <!-- <u-button variant="soft"
        :icon="collapse ? 'i-heroicons-chevron-right-20-solid' : 'i-heroicons-chevron-left-20-solid'"
        class="absolute bottom-2 -right-4" @click="onToggleCollapse"></u-button> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import TheMenu from '@/layouts/_partials/the-menu.vue'
import TheLogo from '@/layouts/_partials/the-logo.vue'
import { useApplicationStore } from '@/store/application'
import UListItem from '@/components/bases/u-list/u-list-item.vue'
import TheSupportCard from '@/layouts/_partials/the-support-card.vue'
import TheSettingMenu from '@/layouts/_partials/the-setting-menu.vue'

const { sidebar } = storeToRefs(useApplicationStore())
const { toggleSidebar } = useApplicationStore()
const collapse = ref(true)

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

//methods
const router = useRouter()
const route = useRoute()

function onGoToSettingPage() {
  const workspaceId = route.params.id
  router.push({ path: `/workspace/${workspaceId}/settings` })
  toggleSidebar()
}
</script>
