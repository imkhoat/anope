<template>
    <u-card :ui="cardUI" class="w-full h-full min-h-[120px]">
        <div class="flex flex-row justify-between items-stretch">
            <div v-if="description || title" class="flex flex-col justify-start items-start gap-y-1">
                <span v-if="description" class="text-sm text-gray-600">{{ description }}</span>
                <strong v-if="title" class="text-xl font-bold">{{ title }}</strong>
            </div>
            <div class="-ml-4 md:-mr-4 md:-mt-4">
                <u-waves-avatar v-if="icon" :icon="icon"></u-waves-avatar>
            </div>
        </div>
    </u-card>
</template>
<script lang="ts" setup>
import UWavesAvatar from '@/components/bases/u-avatar/u-waves-avatar.vue';
const cardUI = {
    shadow: ''
}

defineProps<{
    title?: string,
    description?: string,
    icon?: string,
}>()
</script>