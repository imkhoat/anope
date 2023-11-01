<template>
  <div class="flex flex-col justify-center items-stretch gap-16 w-full h-fit">
    <div class="flex flex-col justify-center items-stretch text-center gap-2">
      <h6 class="text-3xl font-semibold">
        {{ $t(`onboarding.business.My Business Information`) }}
      </h6>
      <p class="text-sm opacity-60">
        {{ $t(`onboarding.business.The information we collect about your business`) }}
      </p>
    </div>
    <u-card class="flex-grow" :ui="uiCard">
      <u-form :state="form" class="flex flex-col gap-y-6">
        <u-form-group :label="$t(`general.form.ABN NZBN`)">
          <div class="grid grid-cols-12 gap-x-2">
            <u-input v-model="form.businessABN" size="md" class="col-span-8" placeholder="CS09202..." />
          </div>
        </u-form-group>
        <u-form-group :label="$t(`general.form.Company name`)">
          <div class="grid grid-cols-12 gap-x-2">
            <u-input v-model="form.businessCompanyName" size="md" class="col-span-8" placeholder="Ardex Inc" />
          </div>
        </u-form-group>
        <u-form-group :label="$t(`general.form.Register business Address`)">
          <div class="grid grid-cols-12 grid-rows-2 gap-2">
            <u-input
              v-model="form.businessStreet"
              size="md"
              class="col-span-12"
              :placeholder="$t(`general.form.Street address`)"
            />
            <u-input v-model="form.businessCity" size="md" class="col-span-4" :placeholder="$t(`general.form.Tower City`)" />
            <u-input v-model="form.businessState" size="md" class="col-span-4" :placeholder="$t(`general.form.State Provide`)" />
            <u-input
              v-model="form.businessPostal"
              size="md"
              class="col-span-4"
              :placeholder="$t(`general.form.ZIP Postal code`)"
            />
          </div>
        </u-form-group>

        <u-form-group :label="$t(`general.form.Postal Address`)">
          <div class="grid grid-cols-12 grid-rows-2 gap-2">
            <u-input
              v-model="form.businessPostalStreet"
              size="md"
              class="col-span-12"
              :placeholder="$t(`general.form.Street address`)"
            />
            <u-input v-model="form.businessPostalCity" size="md" class="col-span-4" :placeholder="$t(`general.form.Tower City`)" />
            <u-input v-model="form.businessPostalState" size="md" class="col-span-4" :placeholder="$t(`general.form.State Provide`)" />
            <u-input
              v-model="form.businessPostalPostal"
              size="md"
              class="col-span-4"
              :placeholder="$t(`general.form.ZIP Postal code`)"
            />
          </div>
        </u-form-group>
        <u-form-group :label="$t(`general.form.Email`)">
          <div class="grid grid-cols-12 gap-x-2">
            <u-input
              v-model="form.businessEmail"
              size="md"
              class="col-span-8"
              placeholder="your_email@email.com"
            />
            <div class="col-span-4 flex flex-row justify-start items-start">
              <u-button size="md" variant="soft" icon="i-heroicons-plus-20-solid">
                {{ $t(`general.button.Add more email`) }}
              </u-button>
            </div>
          </div>
        </u-form-group>
        <u-form-group :label="$t(`general.form.Phone`)">
          <div class="grid grid-cols-12 gap-2">
            <u-input v-model="form.businessPhone" size="md" class="col-span-8" placeholder="+1 000-000-000" />
            <div class="col-span-4 flex flex-row justify-start items-start">
              <u-button size="md" variant="soft" icon="i-heroicons-plus-20-solid">
                {{ $t(`general.button.Add more phone`) }}
              </u-button>
            </div>
            <u-input v-model="form.businessPhone2" size="md" class="col-span-8" placeholder="+1 000-000-000" />
          </div>
        </u-form-group>
        <u-form-group :label="$t(`general.form.Company website`)">
          <div class="grid grid-cols-12 gap-x-2">
            <u-input
              v-model="form.businessCompanyWebsite"
              size="md"
              class="col-span-8"
              placeholder="Senior house kepper"
            />
          </div>
        </u-form-group>
        <u-form-group :label="$t(`general.form.About`)">
          <div class="grid grid-cols-12 gap-x-2">
            <u-textarea v-model="form.businessAbout" class="col-span-12" placeholder="..." />
          </div>
        </u-form-group>
        <u-form-group :label="$t(`general.form.Country`)">
          <div class="grid grid-cols-12 gap-x-2">
            <u-select-menu
              v-model="form.businessCountry"
              size="md"
              :options="countries"
              class="col-span-8"
              placeholder="Australia"
            />
          </div>
        </u-form-group>
        <u-form-group :label="$t(`general.form.Currency`)">
          <div class="grid grid-cols-12 gap-x-2">
            <u-select-menu
              v-model="form.businessCurrency"
              size="md"
              :options="currencies"
              class="col-span-8"
              placeholder="AUD"
            />
          </div>
        </u-form-group>
        <u-form-group :label="$t(`general.form.Datetime format`)" :help="$t(`general.form.This present format base on datetime format`)">
          <div class="grid grid-cols-12 gap-x-2">
            <u-input v-model="form.businessDatetimeFormat" size="md" class="col-span-8" placeholder="Australia" />
          </div>
        </u-form-group>
      </u-form>
      <template #footer>
        <div class="flex flex-row justify-end items-center gap-x-2">
          <u-button size="md" color="gray" variant="soft" class="px-6">
            {{ $t(`general.button.Back`) }}
          </u-button>
          <u-button size="md">
            {{ $t(`general.button.Save and Next Step`) }}
          </u-button>
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
    'base': '',
    'background': '',
    'padding': 'px-8 py-10 sm:p-16'
  },
  footer: {
    'base': '',
    'background': '',
    'padding': 'px-8 py-5 sm:px-16 sm:py-6'
  }
}
</script>