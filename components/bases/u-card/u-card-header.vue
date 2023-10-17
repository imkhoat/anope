<template>
    <div class="u-card-header flex flex-row justify-between items-start">
        <div class="flex flex-row justify-start items-center gap-x-3">
            <u-avatar v-if="icon" size="sm" class="ring-4 ring-gray-50">
                <u-icon size="sm" :name="icon" class="text-neutral-500"></u-icon>
            </u-avatar>
            <div v-if="title || description" class="flex flex-col justify-start items-start gap-y-1">
                <h6 v-if="title" class="text-base font-semibold leading-none">{{ title }}</h6>
                <span v-if="description" class="text-xs text-gray-600 leading-none">{{ description }}</span>
            </div>
        </div>
        <slot name="action" />
    </div>
</template>
<script lang="ts" setup>

defineProps<{
    title: string,
    description: string,
    icon: string,
}>()
</script>