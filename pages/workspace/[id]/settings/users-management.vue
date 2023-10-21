<template>
    <u-page page-title="Users Management" page-description="Invite or remove workspace user">
        <template #header-action>
            <div class="flex flex-row justify-end items-center gap-1">
                <u-button icon="i-heroicons-user-plus" @click="onOpenInviteNewUser">Invite new users</u-button>
            </div>
        </template>
        <div class="grid grid-cols-12 gap-4 h-fit">
            <div class="col-span-12 md:col-span-12 lg:col-span-10 row-span-1 grid grid-cols-12 gap-4">
                <div class="col-span-12 sm:col-span-6 lg:col-span-3 row-span-1">
                    <summary-card v-bind="summaryData.totalUsers"></summary-card>
                </div>
                <div class="col-span-12 sm:col-span-6 lg:col-span-3 row-span-1">
                    <summary-card v-bind="summaryData.activeUsers"></summary-card>
                </div>
                <div class="col-span-12 sm:col-span-6 lg:col-span-3 row-span-1">
                    <summary-card v-bind="summaryData.newUsers"></summary-card>
                </div>
                <div class="col-span-12 sm:col-span-6 lg:col-span-3 row-span-1">
                    <summary-card v-bind="summaryData.totalMember"></summary-card>
                </div>
            </div>
            <div class="col-span-12">
                <u-datatable></u-datatable>
            </div>
        </div>
    </u-page>
</template>
<script lang="ts" setup>
import { useConfirmModal } from '#imports';
import UPage from '@/components/bases/u-page/u-page.vue';
import UDatatable from '@/components/bases/u-datatable/u-datatable.vue';
import SummaryCard from '@/pages/workspace/_partials/settings/summary-card.vue'

const summaryData = ref({
    totalUsers: {
        description: 'Total users',
        title: '30',
        icon: 'i-heroicons-user-group'
    },
    activeUsers: {
        description: 'Active users',
        title: '20',
        icon: 'i-heroicons-cursor-arrow-rays'
    },
    newUsers: {
        description: 'New users',
        title: '4',
        icon: 'i-heroicons-user-plus'
    },
    totalMember: {
        description: 'Total members',
        title: '24',
        icon: 'i-heroicons-cloud'
    }
})

const { showDeleteModal, showConfirmModal } = useConfirmModal()

function onOpenInviteNewUser() {
    showConfirmModal({
        title: 'Remove users',
        description: 'You remove Pascal of users, Are you sure?'
    })
}
</script>