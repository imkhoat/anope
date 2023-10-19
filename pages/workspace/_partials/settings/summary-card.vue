<template>
    <u-card :ui="cardUI" class="w-full h-full min-h-[120px]">
        <div class="flex flex-row justify-between items-stretch">
            <div v-if="description || title" class="flex flex-col justify-start items-start gap-y-1">
                <span v-if="description" class="text-sm text-gray-600">{{ description }}</span>
                <strong v-if="title" class="text-xl font-bold">{{ title }}</strong>
            </div>
            <u-avatar v-if="icon" size="sm" class="ring-8 ring-gray-50 text-gray-400">
                <u-icon :name="icon" class="w-5 h-5"></u-icon>
            </u-avatar>
        </div>
    </u-card>
</template>
<script lang="ts" setup>
const cardUI = {
    shadow: ''
}

defineProps<{
    title?: string,
    description?: string,
    icon?: string
}>()
</script>