<template>
    <div class="default-layout font-sans flex flex-row justify-start items-stretch w-screen h-screen">
        <the-default-sidebar></the-default-sidebar>
        <div class="flex-grow flex flex-col justify-start items-stretch">
            <the-default-header></the-default-header>
            <u-container :ui="containerUI" class="flex-grow bg-gray-50">
                <div class="w-full h-full">
                    <slot />
                </div>
            </u-container>
            <!-- <the-default-footer></the-default-footer> -->
        </div>
    </div>
</template>
<script lang="ts" setup>
import TheDefaultHeader from '@/layouts/_partials/the-default-header.vue';
import TheDefaultFooter from '@/layouts/_partials/the-default-footer.vue';
import TheDefaultSidebar from '@/layouts/_partials/the-default-sidebar.vue';

const containerUI = {
    base: '',
    padding: "p-2 sm:p-4 lg:p-4",
    constrained: ''
}
</script>