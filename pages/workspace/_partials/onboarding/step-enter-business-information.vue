<template>
    <div class="flex flex-col justify-center items-stretch gap-16 w-full h-full">
        <div class="flex flex-col justify-center items-stretch text-center gap-2">
            <h6 class="text-3xl font-semibold">{{ $t(`onboarding.business.My Business Information`) }}</h6>
            <p class="text-sm opacity-60"> {{ $t(`onboarding.business.The information we collect about your business`) }}</p>
        </div>
        <u-card class="flex-grow" :ui="uiCard">
            <u-form :state="form" class="flex flex-col gap-y-6">
                <u-form-group :label="$t(`general.form.ABN NZBN`)">
                    <div class="grid grid-cols-12 gap-x-2">
                        <u-input size="md" v-model="form.businessABN" class="col-span-8" placeholder="CS09202..."></u-input>
                    </div>
                </u-form-group>
                <u-form-group :label="$t(`general.form.Company name`)">
                    <div class="grid grid-cols-12 gap-x-2">
                        <u-input size="md" v-model="form.businessCompanyName" class="col-span-8" placeholder="Ardex Inc"></u-input>
                    </div>
                </u-form-group>
                <u-form-group :label="$t(`general.form.Register business Address`)">
                    <div class="grid grid-cols-12 grid-rows-2 gap-2">
                        <u-input size="md" v-model="form.businessStreet" class="col-span-12"
                            :placeholder="$t(`general.form.Street address`)"></u-input>
                        <u-input size="md" v-model="form.businessCity" class="col-span-4" :placeholder="$t(`general.form.Tower City`)"></u-input>
                        <u-input size="md" v-model="form.businessState" class="col-span-4" :placeholder="$t(`general.form.State Provide`)"></u-input>
                        <u-input size="md" v-model="form.businessPostal" class="col-span-4"
                            :placeholder="$t(`general.form.ZIP Postal code`)"></u-input>
                    </div>
                </u-form-group>

                <u-form-group :label="$t(`general.form.Postal Address`)">
                    <div class="grid grid-cols-12 grid-rows-2 gap-2">
                        <u-input size="md" v-model="form.businessPostalStreet" class="col-span-12"
                            :placeholder="$t(`general.form.Street address`)"></u-input>
                        <u-input size="md" v-model="form.businessPostalCity" class="col-span-4" :placeholder="$t(`general.form.Tower City`)"></u-input>
                        <u-input size="md" v-model="form.businessPostalState" class="col-span-4" :placeholder="$t(`general.form.State Provide`)"></u-input>
                        <u-input size="md" v-model="form.businessPostalPostal" class="col-span-4"
                            :placeholder="$t(`general.form.ZIP Postal code`)"></u-input>
                    </div>
                </u-form-group>
                <u-form-group :label="$t(`general.form.Email`)">
                    <div class="grid grid-cols-12 gap-x-2">
                        <u-input size="md" v-model="form.businessEmail" class="col-span-8"
                            placeholder="your_email@email.com"></u-input>
                        <div class="col-span-4 flex flex-row justify-start items-start">
                            <u-button size="md" variant="soft" icon="i-heroicons-plus-20-solid">{{ $t(`general.button.Add more email`) }}</u-button>
                        </div>
                    </div>
                </u-form-group>
                <u-form-group :label="$t(`general.form.Phone`)">
                    <div class="grid grid-cols-12 gap-2">
                        <u-input size="md" v-model="form.businessPhone" class="col-span-8" placeholder="+1 000-000-000"></u-input>
                        <div class="col-span-4 flex flex-row justify-start items-start">
                            <u-button size="md" variant="soft" icon="i-heroicons-plus-20-solid">{{ $t(`general.button.Add more phone`) }}</u-button>
                        </div>
                        <u-input size="md" v-model="form.businessPhone2" class="col-span-8" placeholder="+1 000-000-000"></u-input>
                    </div>
                </u-form-group>
                <u-form-group :label="$t(`general.form.Company website`)">
                    <div class="grid grid-cols-12 gap-x-2">
                        <u-input size="md" v-model="form.businessCompanyWebsite" class="col-span-8"
                            placeholder="Senior house kepper"></u-input>
                    </div>
                </u-form-group>
                <u-form-group :label="$t(`general.form.About`)">
                    <div class="grid grid-cols-12 gap-x-2">
                        <u-textarea v-model="form.businessAbout" class="col-span-12" placeholder="..."></u-textarea>
                    </div>
                </u-form-group>
                <u-form-group :label="$t(`general.form.Country`)">
                    <div class="grid grid-cols-12 gap-x-2">
                        <u-select-menu size="md" v-model="form.businessCountry" :options="countries" class="col-span-8"
                            placeholder="Australia"></u-select-menu>
                    </div>
                </u-form-group>
                <u-form-group :label="$t(`general.form.Currency`)">
                    <div class="grid grid-cols-12 gap-x-2">
                        <u-select-menu size="md" v-model="form.businessCurrency" :options="currencies" class="col-span-8"
                            placeholder="AUD"></u-select-menu>
                    </div>
                </u-form-group>
                <u-form-group :label="$t(`general.form.Datetime format`)" :help="$t(`general.form.This present format base on datetime format`)">
                    <div class="grid grid-cols-12 gap-x-2">
                        <u-input size="md" v-model="form.businessDatetimeFormat" class="col-span-8" placeholder="Australia"></u-input>
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
// inject
const { form } = inject<{
    form: { [key: string]: string | number | undefined }
}>(onboardingInjectionKey, { form: {} })


// data
const countries = ['United State', 'Arlene Mccoy', 'Devon Webb', 'Tom Cook', 'Tanya Fox', 'Hellen Schmidt', 'Caroline Schultz', 'Mason Heaney', 'Claudie Smitham', 'Emil Schaefer']
const currencies = ['AUD', 'USD']


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