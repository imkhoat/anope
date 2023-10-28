<template>
    <div class="flex flex-col justify-center items-stretch gap-16 w-full h-fit">
        <div class="flex flex-col justify-center items-stretch text-center gap-2">
            <h6 class="text-3xl font-semibold">{{ $t(`onboarding.profile.My Profile`) }}</h6>
            <p class="text-sm opacity-60"> {{ $t(`onboarding.profile.The information we collect as part of your profile`) }}</p>
        </div>
        <u-card class="flex-grow" :ui="uiCard">
            <u-form :state="form" class="flex flex-col gap-y-6">
                <u-form-group :label="$t(`general.form.Fullname`)">
                    <div class="grid grid-cols-12 gap-x-2">
                        <u-input size="md" v-model="form.profileFirstName" class="col-span-4"
                            :placeholder="$t(`general.form.Firstname`)"></u-input>
                        <u-input size="md" v-model="form.profileLastName" class="col-span-4"
                            :placeholder="$t(`general.form.Lastname`)"></u-input>
                    </div>
                </u-form-group>
                <u-form-group :label="$t(`general.form.Email address`)">
                    <div class="grid grid-cols-12 gap-x-2">
                        <u-input size="md" v-model="form.profileEmail" class="col-span-8"
                            placeholder="example@email.com"></u-input>
                    </div>
                </u-form-group>
                <u-form-group :label="$t(`general.form.Job title`)">
                    <div class="grid grid-cols-12 gap-x-2">
                        <u-input size="md" v-model="form.profileJobTitle" class="col-span-12"
                            placeholder="Senior house kepper"></u-input>
                    </div>
                </u-form-group>
                <u-form-group :label="$t(`general.form.About`)">
                    <div class="grid grid-cols-12 gap-x-2">
                        <u-textarea v-model="form.profileAbout" class="col-span-12" placeholder="..."></u-textarea>
                    </div>
                </u-form-group>
                <u-form-group :label="$t(`general.form.Country`)">
                    <div class="grid grid-cols-12 gap-x-2">
                        <u-input size="md" v-model="form.profileCountry" class="col-span-6" placeholder="Australia"></u-input>
                    </div>
                </u-form-group>
                <u-form-group :label="$t(`general.form.Address`)">
                    <div class="grid grid-cols-12 grid-rows-2 gap-2">
                        <u-input size="md" v-model="form.profileStress" class="col-span-12"
                            :placeholder="$t(`general.form.Street address`)"></u-input>
                        <u-input size="md" v-model="form.profileCity" class="col-span-4"
                            :placeholder="$t(`general.form.Tower City`)"></u-input>
                        <u-input size="md" v-model="form.profileState" class="col-span-4"
                            :placeholder="$t(`general.form.State Provide`)"></u-input>
                        <u-input size="md" v-model="form.profilePostal" class="col-span-4"
                            :placeholder="$t(`general.form.ZIP Postal code`)"></u-input>
                    </div>
                </u-form-group>
                <u-form-group :label="$t(`general.form.Phone`)">
                    <div class="grid grid-cols-12 grid-rows-2 gap-2">
                        <u-input size="md" v-model="form.profilePhone" class="col-span-8" placeholder="+1 000-000-000"></u-input>
                        <u-input size="md" v-model="form.profilePhone2" class="col-span-8" placeholder="+1 000-000-000"></u-input>
                    </div>
                </u-form-group>
                <u-form-group :label="$t(`general.form.Second email`)">
                    <div class="grid grid-cols-12 gap-x-2">
                        <u-input size="md" v-model="form.profileEmail2" class="col-span-8"
                            placeholder="example@email.com"></u-input>
                    </div>
                </u-form-group>
            </u-form>
            <template #footer>
                <div class="flex flex-row justify-end items-center gap-x-2">
                    <u-button size="md" color="gray" variant="soft" class="px-6">{{ $t(`general.button.Back`) }}</u-button>
                    <u-button size="md">{{ $t(`general.button.Save and Next Step`) }}</u-button>
                </div>
            </template>
        </u-card>
    </div>
</template>
<script lang="ts" setup>
import { inject } from 'vue'
import { onboardingInjectionKey } from '@/utils/keys'
// data
const { form } = inject<{
    form: { [key: string]: string | number | undefined }
}>(onboardingInjectionKey, { form: {} })


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
</script>