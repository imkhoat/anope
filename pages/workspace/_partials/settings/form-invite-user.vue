<template>
    <div class="flex flex-col justify-start items-stretch gap-4">
        <u-table :columns="columns" :rows="inviteEmails"
            :ui="{ wrapper: 'ring-1 ring-gray-200 dark:ring-gray-800 rounded-md', td: { base: 'max-w-[0] truncate', padding: 'px-3 py-2', } }">
            <template #type-data="{ row }">
                <u-badge variant="soft" color="amber">{{ row.type }}</u-badge>
            </template>
            <template #role-data="{ row }">
                <u-badge variant="soft" color="amber">{{ row.role }}</u-badge>
            </template>
            <template #actions-data="{ row }">
                <div class="flex flex-row justify-end items-center">
                    <u-button size="xs" variant="ghost" color="rose" icon="i-heroicons-trash"></u-button>
                </div>
            </template>
        </u-table>
        <u-card :ui="{
            base: '',
            background: 'bg-gray-100',
            shadow: '',
            ring: '',
            body: {
                padding: 'px-4 py-4 sm:p-4'
            }
        }">
            <u-form :state="state" class="flex flex-col justify-start items-stretch gap-2">
                <div class="flex flex-col md:flex-row justify-start items-stretch gap-2">
                    <u-form-group description="Email address" class="flex-grow">
                        <u-input v-model="state.email" type="email" placeholder="abc@example.com"></u-input>
                    </u-form-group>
                    <u-form-group description="Full name" class="flex-grow">
                        <u-input v-model="state.name" type="text" placeholder="Nick Pascal"></u-input>
                    </u-form-group>
                    <u-form-group description="User Type" class="flex-grow">
                        <u-select-menu v-model="state.type" placeholder="Member" :options="userTypeOptions"></u-select-menu>
                    </u-form-group>
                    <u-form-group description="Roles" class="flex-grow">
                        <u-select-menu v-model="state.role" placeholder="Admin" :options="roleOptions"></u-select-menu>
                    </u-form-group>
                    <u-button variant="soft" class="self-end" @click="onAddUser">Add</u-button>
                </div>
            </u-form>
        </u-card>
    </div>
</template>
<script lang="ts" setup>

const columns = [{
    key: 'email',
    label: 'Email'
}, {
    key: 'name',
    label: 'Name'
}, {
    key: 'type',
    label: 'User Type'
}, {
    key: 'role',
    label: 'Role'
}, {
    key: 'actions',
    label: 'Action',
    class: 'text-right'
}]

const state = ref<{
    email: string | undefined,
    name: string | undefined,
    type: string | undefined,
    role: string | undefined
}>({
    email: undefined,
    name: undefined,
    type: undefined,
    role: undefined
})

const { inviteEmails } = inject<{ [key: string]: object | string | (() => void) | any }>(workspaceSettingsUsersManagementInjectionKey, {})

const userTypeOptions = computed(() => {
    return ['Employee',
        'Guest']
})
const roleOptions = computed(() => {
    return ['Admin',
        'Super Admin']
})

function onAddUser() {
    inviteEmails.value.push({
        email: state.value.email,
        name: state.value.name,
        type: state.value.type,
        role: state.value.role
    })
    state.value = {
        email: undefined,
        name: undefined,
        type: 'Employee',
        role: 'Admin'
    }
}
</script>