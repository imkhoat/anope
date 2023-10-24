import { ref } from 'vue'

export function useReferenceData() {

    const localSettingForm = ref({})

    function handleUpdateLocalSetting() {
        console.log(localSettingForm.value)
    }

    return { localSettingForm, handleUpdateLocalSetting }
}