<template>
  <div class="grid grid-cols-12 h-full" :class="pageClass">
    <div v-if="menus && menus?.length > 0" class="u-page__menu p-4 md:p-0 col-span-12" :class="pageMenuClass">
      <u-page-menu v-model="isExpand" :menus="menus" :title="menuTitle" />
    </div>
    <div :class="pageBodyClass">
      <div
        class="u-page__body bg-white rounded-2xl w-full h-full flex flex-col justify-start items-stretch gap-y-12"
        :class="pageBodyContentClass"
      >
        <slot name="header">
          <div
            v-if="pageTitle || pageDescription || pageIcon || $slots.headerTitle || $slots.headerAction"
            class="u-page__header flex flex-row flex-wrap justify-between items-center gap-4"
          >
            <slot name="header-title">
              <div class="flex flex-row justify-start items-center gap-x-3">
                <u-waves-avatar v-if="pageIcon" :icon="pageIcon">
                  <u-icon :name="pageIcon" class="w-5 h-5 bg-gray-500" />
                </u-waves-avatar>
                <div
                  v-if="pageTitle || pageDescription"
                  class="flex flex-col justify-start items-start gap-y-1"
                >
                  <h2 v-if="pageTitle" class="text-2xl leading-none font-semibold">
                    {{ pageTitle }}
                  </h2>
                  <span v-if="pageDescription" class="opacity-60">{{ pageDescription }}</span>
                </div>
              </div>
            </slot>
            <slot name="header-action" />
          </div>
        </slot>
        <slot />
        <u-modal-crud v-model="modal.open" v-bind="modal.options" @no="hide">
          <slot name="modal" />
        </u-modal-crud>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useModal } from '@/composables/useModal'
import uPageMenu from '@/components/bases/u-page/u-page-menu.vue'
import UModalCrud from '@/components/bases/u-modal/u-modal-crud.vue'
import UWavesAvatar from '@/components/bases/u-avatar/u-waves-avatar.vue'
import type { VerticalNavigationLink } from '@nuxt/ui/dist/runtime/types'

const { modal, hide } = useModal()

const props = defineProps<{
  pageTitle?: string,
  pageDescription?: string,
  pageIcon?: string,
  menus?: VerticalNavigationLink[] | undefined,
  menuTitle?: string | undefined
}>()

const isExpand = ref(true)
const pageClass = computed(() => {
  return props.menus && props.menus?.length > 0 ? '-m-4 bg-gray-50' : 'bg-white'
})
const pageBodyClass = computed(() => {
  return isExpand.value && props.menus && props.menus?.length > 0 ? 'p-4 col-span-12 lg:col-span-9' : 'col-span-12'
})
const pageBodyContentClass = computed(() => {
  return props.menus && props.menus?.length > 0 ? 'p-8' : 'p-4'
})
const pageMenuClass = computed(() => {
  return isExpand.value ? 'lg:col-span-3' : 'relative'
})
</script>
