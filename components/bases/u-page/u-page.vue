<template>
    <div class="u-page w-full h-full p-4 flex flex-col justify-start items-stretch gap-y-12">
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
</template>
<script lang="ts" setup>
import { useModal } from '#imports';
import UModalCrud from '@/components/bases/u-modal/u-modal-crud.vue';

const { modal, hide } = useModal()

defineProps<{
    pageTitle?: string,
    pageDescription?: string,
    pageIcon?: string,
}>()
</script>