<template>
    <u-card>
        <u-form :state="state" class="flex flex-col justify-start items-stretch gap-y-8">
            <div class="flex flex-col gap-y-1">
                <u-avatar size="lg" class="bg-primary-100 border-8 border-primary-50">
                    <u-icon size="xl" name="i-heroicons-envelope-20-solid" class="text-primary-500"></u-icon>
                </u-avatar>
                <h6 class="font-semibold text-xl leading-0">Forgot password!</h6>
                <span class="text-sm text-gray-500 leading-0">We will send you instructions</span>
            </div>
            <div class="flex flex-col justify-start items-stretch gap-y-2">
                <u-form-group :label="$t('general.form.Email')">
                    <template #hint>
                        <u-button to="/auth/login" variant="ghost" size="xs">Back to login?</u-button>
                    </template>
                    <u-input v-model="state.email" size="lg"></u-input>
                </u-form-group>
            </div>
            <div class="flex flex-col justify-start items-stretch gap-y-2">
                <u-button size="lg" block>{{ $t(`general.button.Send`)}}</u-button>
            </div>
        </u-form>
    </u-card>
</template>
<script lang="ts" setup>
import { authForgotPasswordInjectionKey } from '@/utils/keys'

const { state } = inject<{
    state: {[key: string]: string}
}>(authForgotPasswordInjectionKey, { state: {} })
</script>