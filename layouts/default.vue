<template>
    <div class="default-layout font-sans flex flex-row justify-start items-stretch w-screen h-screen max-h-screen">
        <the-default-sidebar></the-default-sidebar>
        <div class="flex-grow flex flex-col justify-start items-stretch max-h-screen">
            <the-default-header></the-default-header>
            <div class="flex-grow overflow-y-auto bg-gray-50">
                <u-container :ui="containerUI" class="min-w-full min-h-full">
                    <div class="w-full h-full">
                        <slot />
                    </div>
                </u-container>
            </div>
        </div>
        <u-modal-curd v-model="confirm.open" v-bind="confirm.options" @no="hide"></u-modal-curd>
    </div>
</template>
<script lang="ts" setup>
import { useConfirmModal } from '#imports';
import TheDefaultHeader from '@/layouts/_partials/the-default-header.vue';
import TheDefaultSidebar from '@/layouts/_partials/the-default-sidebar.vue';
import UModalCurd from '@/components/bases/u-modal/u-modal-curd.vue';
const containerUI = {
    base: '',
    padding: "p-2 sm:p-4 lg:p-4",
    constrained: ''
}

const {confirm, hide} = useConfirmModal()
</script>
<style>
.default-layouts {
  font-family: 'AR One Sans', sans-serif;
}
</style>