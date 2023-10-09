<template>
    <header
        class="the-auth-header px-4 py-5 sm:p-6 shadow-neutral-100 shadow-sm flex flex-row justify-between items-center w-full gap-x-2 bg-white">
        <the-logo></the-logo>
        <div class="flex flex-row justify-end items-center gap-x-2">
            <u-button size="lg" class="min-w-[80px] justify-center" variant="ghost" color="gray" >{{ $t('general.button.Register') }}</u-button>
            <u-button size="lg" class="min-w-[80px] justify-center" variant="soft">{{ $t('general.button.Login') }}</u-button>
        </div>
    </header>
</template>
<script lang="ts" setup>
import TheLogo from '@/layouts/_partials/the-logo.vue'
</script>