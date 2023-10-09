<template>
    <u-card>
        <u-form class="flex flex-col justify-start items-stretch gap-y-8">
            <div class="flex flex-col gap-y-1">
                <u-avatar size="lg" class="bg-primary-100 border-8 border-primary-50">
                    <u-icon size="xl" name="i-heroicons-shield-check-20-solid" class="text-primary-500"></u-icon>
                </u-avatar>
                <h6 class="font-semibold text-xl leading-0">New member!</h6>
                <span class="text-sm text-gray-500 leading-0">Welcome to anope, manage your horses easyer</span>
            </div>
            <div class="flex flex-col justify-start items-stretch gap-y-2">
                <u-form-group :label="$t('general.form.Email')">
                    <u-input size="lg"></u-input>
                </u-form-group>
                <u-form-group :label="$t('general.form.Password')">
                    <u-input size="lg"></u-input>
                </u-form-group>
                <u-form-group :label="$t('general.form.Confirm password')">
                    <u-input size="lg"></u-input>
                </u-form-group>
            </div>
            <div class="flex flex-col justify-start items-stretch gap-y-2">
                <u-button size="lg" block>{{ $t(`general.button.Login`)}}</u-button>
                <div class="flex flex-row justify-between items-stretch gap-x-2 text-center">
                    <u-button size="lg" variant="soft" class="flex-grow text-center justify-center">Google</u-button>
                    <u-button size="lg" variant="soft" class="flex-grow text-center justify-center">Twitter</u-button>
                </div>
            </div>
        </u-form>
    </u-card>
</template>