<template>
    <u-card>
        <u-form :state="state" class="flex flex-col justify-start items-stretch gap-y-8">
            <div class="flex flex-col gap-y-1">
                <u-avatar size="lg" class="bg-primary-100 border-8 border-primary-50">
                    <u-icon size="xl" name="i-heroicons-shield-exclamation-20-solid" class="text-primary-500"></u-icon>
                </u-avatar>
                <h6 class="font-semibold text-xl leading-0">Reset password!</h6>
                <span class="text-sm text-gray-500 leading-0">You will be login after reset success</span>
            </div>
            <div class="flex flex-col justify-start items-stretch gap-y-2">
                <u-form-group :label="$t('general.form.New password')">
                    <u-input v-model="state.email" size="lg" type="password"></u-input>
                </u-form-group>
                <u-form-group :label="$t('general.form.Confirm password')">
                    <u-input v-model="state.password" size="lg" type="password"></u-input>
                </u-form-group>
                
            </div>
            <div class="flex flex-col justify-start items-stretch gap-y-2">
                <u-button size="lg" block>{{ $t(`general.button.Reset`)}}</u-button>
            </div>
        </u-form>
    </u-card>
</template>
<script lang="ts" setup>
import { authResetPasswordInjectionKey } from '@/utils/keys'

const { state } = inject<{
    state: {[key: string]: string}
}>(authResetPasswordInjectionKey, { state: {} })
</script>