<template>
    <u-card :ui="cardUI" class="w-full h-full">
        <template #header>
            <div class="flex flex-row justify-between items-center">
                <h6 class="font-semibold">My workspaces</h6>
                <u-button size="xs" color="gray" variant="ghost">View all</u-button>
            </div>
        </template>
        <u-list :items="items">
            <template #item="{item}">
                <u-list-item v-bind="item" hover-class="hover:bg-gray-100 hover:text-gray-900" class="whitespace-nowrap">
                    <template #icon="{icon}">
                        <u-avatar size="sm" :icon="icon" class="ring-4 ring-gray-50">
                            </u-avatar>
                    </template>
                </u-list-item>
            </template>
        </u-list>
    </u-card>
</template>
<script lang="ts" setup>
import UList from '@/components/bases/u-list/u-list.vue';
import { IUListItem } from '@/types/components/u-list-item';
import UListItem from '@/components/bases/u-list/u-list-item.vue';
const cardUI = {
    shadow: ''
}

const items = reactive<IUListItem[]>([{
    title: 'Workspace Mabouse',
    description: 'Create by MiguelBui',
    icon: 'i-heroicons-briefcase',
    value: 'WORKSPACE_01'
}, {
    title: 'Workspace Incheuo',
    description: 'Create by MiguelBui',
    icon: 'i-heroicons-briefcase',
    value: 'WORKSPACE_01'
}, {
    title: 'Workspace Samisuxe',
    description: 'Create by MiguelBui',
    icon: 'i-heroicons-briefcase',
    value: 'WORKSPACE_01'
}])
</script>