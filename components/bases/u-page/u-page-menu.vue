<template>
    <u-button v-if="!state" class="fixed top-16 left-16 z-50 rounded-full ring-4 ring-gray-50 border border-gray-500" size="sm" color="white"
        icon="i-heroicons-arrows-pointing-out" @click="onToggleMenu"></u-button>
    <u-card v-else :ui="cardUI">
        <template #header>
            <div class="flex flex-row justify-between items-center">
                <span class="text-xs uppercase font-medium p-2 text-gray-500">User management setting</span>
                <u-button size="xs" variant="soft" color="white" icon="i-heroicons-arrows-pointing-in"
                    @click="onToggleMenu"></u-button>
            </div>
        </template>
        <u-tabs :items="menus" orientation="vertical" :ui="tabsUI">
            <template #default="{ item, index, selected }">
                <div class="flex items-center gap-2 relative truncate shadow-none">
                    <u-avatar :class="selected ? 'bg-gray-100' : 'bg-gray-50'">
                        <u-icon :name="item.icon" class="w-4 h-4 flex-shrink-0" />
                    </u-avatar>
                    <span class="truncate">{{ index + 1 }}. {{ item.label }}</span>
                </div>
            </template>
        </u-tabs>
    </u-card>
</template>
<script lang="ts" setup>
import type { TabItem } from '@nuxt/ui/dist/runtime/types';

defineProps<{
    menus?: TabItem[] | undefined,
    title: string | undefined
}>()

const tabsUI = {
    wrapper: 'flex items-start gap-8', container: 'hidden', list: {
        background: 'bg-gray-50',
        width: 'min-w-48', tab: {
            base: 'justify-start px-1',
            padding: 'px-2',
            height: 'h-12',
            rounded: 'rounded-2xl',
            size: 'text-sm',
            shadow: 'shadow-none'
        },
        marker: {
            shadow: 'shadow-none',
            rounded: 'rounded-lg',
        }
    }
}
const cardUI = {
    base: "overflow-hidden w-full h-full",
    background: 'bg-gray-50',
    rounded: 'rounded-none',
    ring: '',
    body: {
        padding: '!p-4'
    }
}

// expand
const state = defineModel<boolean>()
function onToggleMenu() {
    state.value = !state.value
}
</script>