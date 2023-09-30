<template>
    <u-container :ui="containerUI" class="border-b">
        <div class="the-default-header flex flex-row justify-start items-stretch">
            <div class="md:hidden flex justify-start items-center">
                <u-button color="gray" variant="ghost" icon="i-heroicons-bars-3" @click="toggleSidebar" />
            </div>
            <div class="flex-grow">

            </div>
            <div class="flex flex-row justify-end items-center gap-x-1">
                <the-notification></the-notification>
                <the-locale></the-locale>
                <the-profile></the-profile>
            </div>
        </div>
    </u-container>
</template>
<script lang="ts" setup>
import { useApplicationStore } from '@/store/application'
import TheLocale from '@/layouts/_partials/the-locale.vue';
import TheProfile from '@/layouts/_partials/the-profile.vue';
import TheNotification from '@/layouts/_partials/the-notification.vue';

const containerUI = {
    base: '',
    padding: "p-4 sm:px-6 lg:px-8",
}

const { toggleSidebar } = useApplicationStore()
</script>