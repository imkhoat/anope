<template>
    <div class="grid grid-cols-12 h-full" :class="pageClass">
        <div v-if="menus && menus?.length > 0" class="u-page__menu" :class="pageMenuClass">
            <u-page-menu :menus="menus" :title="menuTitle" v-model="isExpand"></u-page-menu>
        </div>
        <div class="p-4" :class="pageBodyClass">
            <div class="u-page__body bg-white rounded-2xl w-full h-full flex flex-col justify-start items-stretch gap-y-12" :class="pageBodyContentClass">
                <slot name="header">
                    <div v-if="pageTitle || pageDescription || pageIcon || $slots.headerTitle || $slots.headerAction"
                        class="u-page__header flex flex-row flex-wrap justify-between items-center gap-4">
                        <slot name="header-title">
                            <div class="flex flex-row justify-start items-center gap-x-3">
                                <u-avatar v-if="pageIcon" size="md"
                                    class="bg-neutral-300 border-8 border-neutral-200 ring-8 ring-neutral-100">
                                    <u-icon size="xl" :name="pageIcon" class="text-neutral-500"></u-icon>
                                </u-avatar>
                                <div v-if="pageTitle || pageDescription" class="flex flex-col justify-start items-start gap-y-1">
                                    <h2 v-if="pageTitle" class="text-2xl leading-none font-semibold">{{ pageTitle }}</h2>
                                    <span v-if="pageDescription" class="opacity-60">{{ pageDescription }}</span>
                                </div>
                            </div>
                        </slot>
                        <slot name="header-action">
        
                        </slot>
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
import { useModal } from '#imports';
import UModalCrud from '@/components/bases/u-modal/u-modal-crud.vue';
import uPageMenu from '@/components/bases/u-page/u-page-menu.vue';
import type { TabItem } from '@nuxt/ui/dist/runtime/types';
const { modal, hide } = useModal()

const props = defineProps<{
    pageTitle?: string,
    pageDescription?: string,
    pageIcon?: string,
    menus?: TabItem[] | undefined,
    menuTitle?: string | undefined
}>()

const isExpand = ref(true)
const pageClass = computed(() => {
    return props.menus && props.menus?.length > 0 ? '-m-4 bg-gray-50' : 'bg-white'
})
const pageBodyClass = computed(() => {
    return isExpand.value && props.menus && props.menus?.length > 0 ? 'col-span-9' : 'col-span-12'
})
const pageBodyContentClass = computed(() => {
    return props.menus && props.menus?.length > 0 ? 'p-8': 'p-4'
})
const pageMenuClass = computed(() => {
    return isExpand.value ? 'col-span-3':  'relative'
})
</script>