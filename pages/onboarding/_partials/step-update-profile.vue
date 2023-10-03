<template>
    <div class="flex flex-col justify-center items-stretch gap-16 w-full h-full">
        <div class="flex flex-col justify-center items-stretch text-center gap-2">
            <h6 class="text-3xl font-semibold">Update your profiles</h6>
            <p class="text-sm opacity-60">Fill you profile information</p>
        </div>
        <u-card class="flex-grow" :ui="{
            ring: '',
            shadow: ''
        }">
            <u-form :state="form" class="flex flex-col gap-y-6">
                <u-form-group label="Full name">
                    <div class="grid grid-cols-12 gap-x-2">
                        <u-input size="md" v-model="form.fullName.firstName" class="col-span-4"
                            placeholder="Firstname"></u-input>
                        <u-input size="md" v-model="form.fullName.lastName" class="col-span-4"
                            placeholder="Lastname"></u-input>
                    </div>
                </u-form-group>
                <u-form-group label="Email address">
                    <div class="grid grid-cols-12 gap-x-2">
                        <u-input size="md" v-model="form.email" class="col-span-8" placeholder="Email"></u-input>
                    </div>
                </u-form-group>
                <u-form-group label="Job title">
                    <div class="grid grid-cols-12 gap-x-2">
                        <u-input size="md" v-model="form.jobTitle" class="col-span-12"
                            placeholder="Senior house kepper"></u-input>
                    </div>
                </u-form-group>
                <u-form-group label="About">
                    <div class="grid grid-cols-12 gap-x-2">
                        <u-textarea v-model="form.about" class="col-span-12" placeholder="..."></u-textarea>
                    </div>
                </u-form-group>
                <u-form-group label="Country">
                    <div class="grid grid-cols-12 gap-x-2">
                        <u-input size="md" v-model="form.country" class="col-span-6" placeholder="Australia"></u-input>
                    </div>
                </u-form-group>
                <u-form-group label="Address">
                    <div class="grid grid-cols-12 grid-rows-2 gap-2">
                        <u-input size="md" v-model="form.jobTitle" class="col-span-12"
                            placeholder="Street address"></u-input>
                        <u-input size="md" v-model="form.jobTitle" class="col-span-4" placeholder="Tower/City"></u-input>
                        <u-input size="md" v-model="form.jobTitle" class="col-span-4" placeholder="State/Provide"></u-input>
                        <u-input size="md" v-model="form.jobTitle" class="col-span-4"
                            placeholder="ZIP/Postal code"></u-input>
                    </div>
                </u-form-group>
                <u-form-group label="Phone">
                    <div class="grid grid-cols-12 grid-rows-2 gap-2">
                        <u-input size="md" v-model="form.phone" class="col-span-8" placeholder="+1 000-000-000"></u-input>
                        <u-input size="md" v-model="form.phone" class="col-span-8" placeholder="+1 000-000-000"></u-input>
                    </div>
                </u-form-group>
                <u-form-group label="Second email">
                    <div class="grid grid-cols-12 gap-x-2">
                        <u-input size="md" v-model="form.email2" class="col-span-8"
                            placeholder="Senior house kepper"></u-input>
                    </div>
                </u-form-group>
            </u-form>
            <template #footer>
                <div class="flex flex-row justify-end items-center gap-x-2">
                    <u-button size="md" color="gray" variant="soft" class="px-6">Back</u-button> <u-button size="md">Save
                        and Next Step</u-button>
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

</script>