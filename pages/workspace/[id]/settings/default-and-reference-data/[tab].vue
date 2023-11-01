<template>
    <u-page :page-title="selectedKey.label" :page-description="selectedKey.description" :page-icon="selectedKey.icon" :menus="tabs">
        <div class="flex flex-col justify-start items-stretch divide-y">
            <div class="w-full min-h-screen">
                <div class="grid grid-cols-12 gap-y-8 md:gap-x-16">
                    <reference-data-local-setting-form v-if="selectedKey.key === 'local-settings'"
                        class="col-span-12 md:col-span-6 lg:col-span-7"></reference-data-local-setting-form>
                </div>
            </div>
        </div>
    </u-page>
</template>
<script lang="ts" setup>
import UPage from '@/components/bases/u-page/u-page.vue';
import { workspaceSettingsReferenceDataInjectionKey } from '@/utils/keys';
import { useReferenceData } from '@/pages/workspace/_composables/useReferenceData';
import ReferenceDataLocalSettingForm from '@/pages/workspace/_partials/settings/reference-data-local-setting-form.vue';

type TabKey = 'local-settings' | 'horse-ref-data' | 'contact-ref-data' | 'localtion-ref-data'

const route = useRoute()
const router = useRouter()
const { localSettingForm, handleUpdateLocalSetting } = useReferenceData()

const tabs = ref<{
    key: TabKey,
    to?: string | any,
    label: string,
    description: string,
    icon?: string
}[]>([
    {
        key: 'local-settings',
        to: {
            ...route,
            params: {
                tab: 'local-settings'
            }
        },
        label: 'Local Settings',
        icon: 'i-heroicons-wrench-screwdriver',
        description: 'Make changes to your account here. Click save when you\'re done.'
    }, {
        key: 'horse-ref-data',
        to: {
            ...route,
            params: {
                tab: 'horse-ref-data'
            }
        },
        label: 'Horse Ref Data',
        icon: 'i-heroicons-trophy',
        description: 'Make changes to your account here. Click save when you\'re done.'
    }, {
        key: 'contact-ref-data',
        to: {
            ...route,
            params: {
                tab: 'contact-ref-data'
            }
        },
        label: 'Contact Ref Data',
        icon: 'i-heroicons-identification',
        description: 'Make changes to your account here. Click save when you\'re done.'
    }, {
        key: 'localtion-ref-data',
        to: {
            ...route,
            params: {
                tab: 'localtion-ref-data'
            }
        },
        label: 'Location Ref Data',
        icon: 'i-heroicons-map-pin',
        description: 'Make changes to your account here. Click save when you\'re done.'
    }
])

const selected = computed({
    get() {
        const index = tabs.value.findIndex((item) => item.key === route.params.tab)
        if (index === -1) {
            return 0
        }

        return index
    },
    set(value) {
        router.replace({ query: { tab: tabs.value[value].key } })
    }
})
const selectedKey = computed(() => {
    return tabs.value[selected.value]
})


provide(workspaceSettingsReferenceDataInjectionKey, {
    handleUpdateLocalSetting,
    localSettingForm
})
</script>