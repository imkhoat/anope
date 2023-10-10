<template>
    <u-card>
        <u-form :state="state" class="flex flex-col justify-start items-stretch gap-y-8">
            <div class="flex flex-col gap-y-1">
                <u-avatar size="lg" class="bg-primary-100 border-8 border-primary-50">
                    <u-icon size="xl" name="i-heroicons-shield-check-20-solid" class="text-primary-500"></u-icon>
                </u-avatar>
                <h6 class="font-semibold text-xl leading-0">New member!</h6>
                <span class="text-sm text-gray-500 leading-0">Workspace colaborator with your team</span>
            </div>
            <div class="flex flex-col justify-start items-stretch gap-y-2">
                <u-form-group :label="$t('general.form.Workspace')">
                    <u-input v-model="state.workspace" disabled color="gray" size="lg"></u-input>
                </u-form-group>
                <u-form-group :label="$t('general.form.Email')">
                    <u-input v-model="state.email" size="lg"></u-input>
                </u-form-group>
                <u-form-group :label="$t('general.form.Password')">
                    <u-input v-model="state.password" size="lg" type="password"></u-input>
                </u-form-group>
                
            </div>
            <div class="flex flex-col justify-start items-stretch gap-y-2">
                <u-button size="lg" block>{{ $t(`general.button.Register`)}}</u-button>
                <div class="flex flex-row justify-between items-stretch gap-x-2 text-center">
                    <u-button size="lg" variant="soft" class="flex-grow text-center justify-center">Google</u-button>
                    <u-button size="lg" variant="soft" class="flex-grow text-center justify-center">Twitter</u-button>
                </div>
            </div>
        </u-form>
    </u-card>
</template>
<script lang="ts" setup>
import { authRegisterInjectionKey } from '@/utils/keys'

const { state } = inject<{
    state: {[key: string]: string}
}>(authRegisterInjectionKey, { state: {} })
</script>