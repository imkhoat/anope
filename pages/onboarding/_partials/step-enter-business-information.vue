<template>
    <div class="flex flex-col justify-center items-stretch gap-16 w-full h-full">
        <div class="flex flex-col justify-center items-stretch text-center gap-2">
            <h6 class="text-3xl font-semibold">Enter your business information</h6>
            <p class="text-sm opacity-60">The information we collect about your business to to facilitate automated lodgerment</p>
        </div>
        <u-card class="flex-grow" :ui="{
            ring: '',
            shadow: ''
        }">
            <u-form :state="form" class="flex flex-col gap-y-6">
                <u-form-group label="ABN / NZBN">
                    <div class="grid grid-cols-12 gap-x-2">
                        <u-input v-model="form.abn" class="col-span-8" placeholder="CS09202..."></u-input>
                    </div>
                </u-form-group>
                <u-form-group label="Company name">
                    <div class="grid grid-cols-12 gap-x-2">
                        <u-input v-model="form.companyName" class="col-span-8" placeholder="Ardex Inc"></u-input>
                    </div>
                </u-form-group>
                <u-form-group label="Register business Address">
                    <div class="grid grid-cols-12 grid-rows-2 gap-2">
                        <u-input v-model="form.jobTitle" class="col-span-12" placeholder="Street address"></u-input>
                        <u-input v-model="form.jobTitle" class="col-span-4" placeholder="Tower/City"></u-input>
                        <u-input v-model="form.jobTitle" class="col-span-4" placeholder="State/Provide"></u-input>
                        <u-input v-model="form.jobTitle" class="col-span-4" placeholder="ZIP/Postal code"></u-input>
                    </div>
                </u-form-group>

                <u-form-group label="Postal Address">
                    <div class="grid grid-cols-12 grid-rows-2 gap-2">
                        <u-input v-model="form.jobTitle" class="col-span-12" placeholder="Street address"></u-input>
                        <u-input v-model="form.jobTitle" class="col-span-4" placeholder="Tower/City"></u-input>
                        <u-input v-model="form.jobTitle" class="col-span-4" placeholder="State/Provide"></u-input>
                        <u-input v-model="form.jobTitle" class="col-span-4" placeholder="ZIP/Postal code"></u-input>
                    </div>
                </u-form-group>
                <u-form-group label="Email">
                    <div class="grid grid-cols-12 gap-x-2">
                        <u-input v-model="form.jobTitle" class="col-span-8" placeholder="your_email@email.com"></u-input>
                    </div>
                </u-form-group>
                <u-form-group label="Phone">
                    <div class="grid grid-cols-12 grid-rows-2 gap-2">
                        <u-input v-model="form.phone" class="col-span-8" placeholder="+1 000-000-000"></u-input>
                        <u-input v-model="form.phone" class="col-span-8" placeholder="+1 000-000-000"></u-input>
                    </div>
                </u-form-group>
                <u-form-group label="Company website">
                    <div class="grid grid-cols-12 gap-x-2">
                        <u-input v-model="form.email2" class="col-span-8" placeholder="Senior house kepper"></u-input>
                    </div>
                </u-form-group>
                <u-form-group label="About">
                    <div class="grid grid-cols-12 gap-x-2">
                        <u-textarea v-model="form.about" class="col-span-12" placeholder="..."></u-textarea>
                    </div>
                </u-form-group>
                <u-form-group label="Country">
                    <div class="grid grid-cols-12 gap-x-2">
                        <u-select-menu v-model="form.businessCountry" :options="countries" class="col-span-8" placeholder="Australia"></u-select-menu>
                    </div>
                </u-form-group>
                <u-form-group label="Currency">
                    <div class="grid grid-cols-12 gap-x-2">
                        <u-select-menu v-model="form.businessCurrency" :options="currencies" class="col-span-8" placeholder="AUD"></u-select-menu>
                    </div>
                </u-form-group>
                <u-form-group label="Datetime format" help="This present format base on datetime format">
                    <div class="grid grid-cols-12 gap-x-2">
                        <u-input v-model="form.country" class="col-span-8" placeholder="Australia"></u-input>
                    </div>
                </u-form-group>
            </u-form>
            <template #footer>
                <div class="flex flex-row justify-end items-center gap-x-2">
                    <u-button color="gray" variant="ghost">Prev</u-button> <u-button>Next</u-button>
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
</script>