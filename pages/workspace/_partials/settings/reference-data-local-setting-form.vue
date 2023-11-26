<template>
  <div>
    <u-form
      :state="localSettingForm"
      class="flex flex-col justify-start items-stretch gap-3"
    >
      <u-form-group :label="$t(`general.form.Country`)">
        <u-select-menu
          v-model="localSettingForm.email"
          :options="['Australia', 'Newzealand']"
          size="lg"
          class="col-span-12"
          placeholder="Australia"
        />
      </u-form-group>
      <u-form-group :label="$t(`general.form.Currency`)">
        <u-select-menu
          v-model="localSettingForm.email"
          size="lg"
          class="col-span-12"
          placeholder="CAD"
        />
      </u-form-group>
      <u-form-group :label="$t(`general.form.Date Time Format`)">
        <u-select-menu
          v-model="localSettingForm.email"
          size="lg"
          class="col-span-12"
          placeholder="YYYY/MM/DD hh:mm"
        />
      </u-form-group>
      <u-form-group :label="$t(`general.form.Measurement`)">
        <u-select-menu
          v-model="localSettingForm.email"
          size="lg"
          class="col-span-12"
          placeholder="Metric"
        />
      </u-form-group>
      <div class="flex flex-row justify-end items-center gap-x-1">
        <u-button
          size="lg"
          variant="soft"
          color="gray"
          class="self-end md:mt-5 min-w-[70px] flex justify-center items-center"
        >
          Reset
        </u-button>
        <u-button
          size="lg"
          class="self-end md:mt-5 min-w-[70px] flex justify-center items-center"
        >
          Save
        </u-button>
      </div>
    </u-form>
  </div>
</template>

<script lang="ts" setup>
import { workspaceSettingsReferenceDataInjectionKey } from '@/utils/keys'

const { localSettingForm } = inject<{
  localSettingForm: { [key: string]: string | number | undefined };
}>(workspaceSettingsReferenceDataInjectionKey, { localSettingForm: {} })
</script>
