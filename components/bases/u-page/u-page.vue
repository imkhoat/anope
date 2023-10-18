<template>
    <div class="u-page w-full h-full p-4 flex flex-col justify-start items-stretch gap-y-8">
        <slot name="header">
            <div class="u-page__header flex flex-row justify-between items-start">
                <slot name="header-title">
                    <div class="flex flex-row justify-start items-center gap-x-3">
                        <u-avatar v-if="pageIcon" size="md" class="bg-neutral-300 border-8 border-neutral-200 ring-8 ring-neutral-100">
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
    </div>
</template>
<script lang="ts" setup>

defineProps<{
    pageTitle: string,
    pageDescription: string,
    pageIcon: string,
}>()
</script>