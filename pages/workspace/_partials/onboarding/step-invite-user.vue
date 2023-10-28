<template>
    <div class="flex flex-col justify-center items-stretch gap-16 w-full h-fit">
        <div class="flex flex-col justify-center items-stretch text-center gap-2">
            <h6 class="text-3xl font-semibold">{{ $t(`onboarding.invite.Invite Users`) }}</h6>
            <p class="text-sm opacity-60"> {{ $t(`onboarding.invite.The information we collect about your business`) }}
            </p>
        </div>
        <u-card class="flex-grow" :ui="uiCard">
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
                            <u-button size="xs" variant="ghost" color="rose" icon="i-heroicons-trash"
                                @click="onRemoveUser(row)"></u-button>
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
                    <u-form ref="form" :state="state" :schema="schema">
                        <div class="flex flex-col justify-start items-stretch md:items-start md:flex-row  gap-2">
                            <u-form-group required name="email" description="Email address" class="flex-grow">
                                <u-input v-model="state.email" type="email" placeholder="abc@example.com"></u-input>
                            </u-form-group>
                            <u-form-group required name="name" description="Full name" class="flex-grow">
                                <u-input v-model="state.name" type="text" placeholder="Nick Pascal"></u-input>
                            </u-form-group>
                            <u-form-group required name="type" description="User Type" class="flex-grow">
                                <u-select-menu v-model="state.type" placeholder="Member"
                                    :options="userTypeOptions"></u-select-menu>
                            </u-form-group>
                            <u-form-group required name="role" description="Roles" class="flex-grow">
                                <u-select-menu v-model="state.role" placeholder="Admin"
                                    :options="roleOptions"></u-select-menu>
                            </u-form-group>
                            <u-button class="self-end md:self-auto md:mt-5" @click="onAddUser">Add</u-button>
                        </div>
                    </u-form>
                </u-card>
            </div>
            <template #footer>
                <div class="flex flex-row justify-end items-center gap-x-1">
                    <u-button size="md" variant="soft" color="gray" class="px-6">{{ $t(`general.button.Back`) }}</u-button>
                    <u-button size="md" icon="i-heroicons-envelope" class="min-w-[70px] items-center justify-center">{{ $t(`general.button.Send Invite`) }}</u-button>
                </div>
            </template>
        </u-card>
    </div>
</template>
<script lang="ts" setup>
import { z } from 'zod'
import { workspaceSettingsUsersManagementInjectionKey } from '@/utils/keys';

type Schema = z.output<typeof schema>

const { t } = useI18n()

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


const uiCard = {
    ring: '',
    shadow: '',
    body: {
        "base": "",
        "background": "",
        "padding": "px-8 py-10 sm:p-16"
    },
    footer: {
        "base": "",
        "background": "",
        "padding": "px-8 py-5 sm:px-16 sm:py-6"
    },
}

const state = ref<{
    email: string | undefined,
    name: string | undefined,
    type: string | undefined,
    role: string | undefined
}>({
    email: undefined,
    name: undefined,
    type: 'Guest',
    role: 'Admin'
})

const schema = z.object({
    email: z.string().email(t('general.text.Incorrect format')),
    name: z.string(),
    type: z.string(),
    role: z.string()
}).required({
    name: true,
    email: true,
    role: true,
    type: true
})

const form = ref()

const { inviteEmails } = inject<{ [key: string]: object | string | (() => void) | any }>(workspaceSettingsUsersManagementInjectionKey, {})

const userTypeOptions = computed(() => {
    return ['Employee',
        'Guest']
})
const roleOptions = computed(() => {
    return ['Admin',
        'Super Admin']
})

async function onAddUser() {
    try {
        const valid = await form.value.validate()
        if (valid) {
            inviteEmails.value.push({
                index: inviteEmails.value?.length,
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
    } catch (error) {
        console.log(error)
    }
}

async function onRemoveUser(row) {
    const itemIndex = inviteEmails.value.findIndex(item => item.index == row.index)
    inviteEmails.value.splice(itemIndex, 1)
}
</script>