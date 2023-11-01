<template>
  <u-page page-title="Users Management" page-description="A list of all users in your account including their name, title, email and role">
    <template #header-action>
      <div class="flex flex-row justify-end items-center gap-1">
        <u-button size="md" icon="i-heroicons-user-plus" @click="onOpenInviteNewUserModal">
          Invite new users
        </u-button>
      </div>
    </template>
    <div class="grid grid-cols-12 gap-4 h-fit">
      <div class="col-span-12 md:col-span-12 lg:col-span-10 row-span-1 grid grid-cols-12 gap-4">
        <div class="col-span-6 sm:col-span-6 lg:col-span-3 row-span-1">
          <users-management-summary-card v-bind="summaryData.totalUsers" />
        </div>
        <div class="col-span-6 sm:col-span-6 lg:col-span-3 row-span-1">
          <users-management-summary-card v-bind="summaryData.activeUsers" />
        </div>
        <div class="col-span-6 sm:col-span-6 lg:col-span-3 row-span-1">
          <users-management-summary-card v-bind="summaryData.newUsers" />
        </div>
        <div class="col-span-6 sm:col-span-6 lg:col-span-3 row-span-1">
          <users-management-summary-card v-bind="summaryData.totalMember" />
        </div>
      </div>
      <div class="col-span-12">
        <users-management-table />
      </div>
    </div>
    <template #modal>
      <users-management-invite-user-form v-if="modalKey === MODAL_KEY.INVITE_USER" />
    </template>
  </u-page>
</template>

<script lang="ts" setup>
import { useModal } from '#imports'
import UPage from '@/components/bases/u-page/u-page.vue'
import { workspaceSettingsUsersManagementInjectionKey } from '@/utils/keys'
import { useUserManagement } from '@/pages/workspace/_composables/useUserManagement'
import UsersManagementTable from '@/pages/workspace/_partials/settings/users-management-table.vue'
import UsersManagementSummaryCard from '@/pages/workspace/_partials/settings/users-management-summary-card.vue'
import UsersManagementInviteUserForm from '@/pages/workspace/_partials/settings/users-management-invite-user-form.vue'


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

const { show, modalKey } = useModal()
const { MODAL_KEY, handleSendInvite, inviteEmails } = useUserManagement()

function onOpenInviteNewUserModal() {
  show({
    preventClose: true,
    headerTitle: 'Invite new user',
    headerDescription: 'Click plus button to add new user',
    headerIcon: 'i-heroicons-envelope-open',
    key: MODAL_KEY.INVITE_USER,
    width: 'sm:max-w-2xl',
    yes: {
      label: 'Send Invite',
      icon: 'i-heroicons-envelope',
      action: handleSendInvite
    },
    no: {
      label: 'Cancel',
      variant: 'outline',
      color: 'gray'
    }
  })
}

provide(workspaceSettingsUsersManagementInjectionKey, {
  handleSendInvite,
  inviteEmails
})
</script>