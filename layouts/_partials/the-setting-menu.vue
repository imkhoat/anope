<script lang="ts" setup>
import { useAuthStore } from "@/store/auth";
import UListItem from "@/components/bases/u-list/u-list-item.vue";

defineProps<{
    minimum: boolean
}>()
const emits = defineEmits<{
    (event: 'click'): () => void
}>()

const route = useRoute()
const router = useRouter()
const localePath = useLocalePath()
const { logout } = useAuthStore()

const workspaceId = computed(() => {
    return route.params.id
})

const items = [
    [{
        label: 'All admin setting',
        icon: 'i-heroicons-cog-8-tooth-20-solid',
        click: () => {
            router.push(localePath({ name: 'workspace-id-settings', params: { id: workspaceId.value } }))
        }
    }], [{
        label: 'Business information',
        icon: 'i-heroicons-briefcase-20-solid',
        shortcuts: ['2'],
        click: () => {
            router.push(localePath({ ...route, name: 'workspace-id-settings-business-information', params: { id: workspaceId.value } }))
        }
    }, {
        label: 'User management',
        icon: 'i-heroicons-users-20-solid',
        shortcuts: ['2'],
        click: () => {
            router.push(localePath({ ...route, name: 'workspace-id-settings-users-management', params: { id: workspaceId.value } }))
        }
    }, {
        label: 'Reference data and default',
        icon: 'i-heroicons-shield-check-20-solid',
        shortcuts: ['3'],
        click: () => {
            router.push(localePath({ ...route, name: 'workspace-id-settings-default-and-reference-data', params: { id: workspaceId.value } }))
        }
    }], [{
        label: 'Logout',
        icon: 'i-heroicons-arrow-left-circle-20-solid',
        click: () => {
            logout()
        }
    }]
]
</script>
<template>
    <u-dropdown :items="items" :popper="{ placement: 'right-end' }">
        <u-list-item :collapse="minimum" title="Setting" icon="i-heroicons-cog-8-tooth"
            @click="emits('click')"></u-list-item>
    </u-dropdown>
</template>