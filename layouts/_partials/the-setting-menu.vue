<script lang="ts" setup>
import UListItem from "@/components/bases/u-list/u-list-item.vue";

defineProps<{
    minimum: boolean
}>()
const emits = defineEmits<{
    (event: 'click'): () => void
}>()
const items = [
    [{
        label: 'All admin setting',
        icon: 'i-heroicons-cog-8-tooth-20-solid'
    }], [{
        label: 'Business information',
        icon: 'i-heroicons-briefcase-20-solid',
        shortcuts: ['2'],
        click: () => {
            console.log('Edit')
        }
    }, {
        label: 'User management',
        icon: 'i-heroicons-users-20-solid',
        shortcuts: ['2'],
    }, {
        label: 'Reference data and default',
        icon: 'i-heroicons-shield-check-20-solid',
        shortcuts: ['3'],
    }], [{
        label: 'Logout',
        icon: 'i-heroicons-arrow-left-circle-20-solid'
    }]
]
</script>
<template>
    <u-dropdown :items="items" :popper="{ placement: 'right-end' }">
        <u-list-item :collapse="minimum" title="Setting" icon="i-heroicons-cog-8-tooth" @click="emits('click')"></u-list-item>
    </u-dropdown>
</template>