<template>
    <u-card :ui="cardUI" class="w-full h-full">
        <template #header>
            <u-card-header :title="title" :description="description">
            </u-card-header>
        </template>
        <u-list :items="items">
            <template #item="{ item }">
                <u-list-item v-bind="item" class="overflow-hidden">
                    <template #icon="{ icon }">
                        <u-avatar size="xs" :icon="icon" class="ring-2 ring-gray-50">
                        </u-avatar>
                    </template>
                </u-list-item>
            </template>
        </u-list>
    </u-card>
</template>
<script lang="ts" setup>
import UList from '@/components/bases/u-list/u-list.vue';
import UListItem from '@/components/bases/u-list/u-list-item.vue';
import UCardHeader from '@/components/bases/u-card/u-card-header.vue';
const cardUI = {
    shadow: ''
}

defineProps<{
    title: string,
    description: string,
    items: {
        title: string,
        description: string,
        icon: string,
        value: string
    }[]
}>()
</script>