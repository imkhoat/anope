<template>
    <div>
        <u-form :state="localSettingForm" class="flex flex-col justify-start items-stretch gap-3">
            <u-form-group :label="$t(`general.form.Country`)">
                <u-select-menu size="md" v-model="localSettingForm.email" class="col-span-12" placeholder="Australia"></u-select-menu>
            </u-form-group>
            <u-form-group :label="$t(`general.form.Currency`)">
                <u-select-menu size="md" v-model="localSettingForm.email" class="col-span-12" placeholder="CAD"></u-select-menu>
            </u-form-group>
            <u-form-group :label="$t(`general.form.Date Time Format`)">
                <u-select-menu size="md" v-model="localSettingForm.email" class="col-span-12" placeholder="YYYY/MM/DD hh:mm"></u-select-menu>
            </u-form-group>
            <u-form-group :label="$t(`general.form.Measurement`)">
                <u-select-menu size="md" v-model="localSettingForm.email" class="col-span-12" placeholder="Metric"></u-select-menu>
            </u-form-group>
            <u-button class="self-end md:mt-5 min-w-[70px] flex justify-center items-center">Save</u-button>
        </u-form>
    </div>
</template>
<script lang='ts' setup>
import { workspaceSettingsReferenceDataInjectionKey } from '@/utils/keys';

const { localSettingForm } = inject<{
    localSettingForm: { [key: string]: string | number | undefined }
}>(workspaceSettingsReferenceDataInjectionKey, { localSettingForm: {} })

</script>