<template>
    <div class="u-page w-full h-full p-4 flex flex-col justify-start items-stretch gap-y-3">
        <slot name="header">
            <div class="u-page__header flex flex-row justify-between items-start">
                <slot name="header-title">
                    <div v-if="pageTitle || pageDescription" class="flex flex-col justify-start items-start gap-y-1">
                        <h2 v-if="pageTitle" class="text-2xl leading-none font-semibold">{{ pageTitle }}</h2>
                        <span v-if="pageDescription" class="opacity-60">{{ pageDescription }}</span>
                    </div>
                </slot>
                <slot name="header-action">

                </slot>
            </div>
        </slot>
        <slot />
    </div>
</template>
<script lang="ts" setup>

defineProps<{
    pageTitle: string,
    pageDescription: string
}>()
</script>