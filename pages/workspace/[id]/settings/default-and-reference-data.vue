<template>
    <u-page page-title="Defaut and Reference Data"
        page-description="Setup and config reference data and system enviroments"
        :menus="tabs">
        <div class="flex flex-col justify-start items-stretch divide-y">
            <div class="w-full min-h-screen">
                <div class="grid grid-cols-12 gap-y-8 md:gap-x-16">
                    <u-card-header :title="selectedKey.label" :description="selectedKey.description"
                        class="col-span-12 md:col-span-6 lg:col-span-5"></u-card-header>
                    <default-and-reference-data-local-setting-form v-if="selectedKey.key === 'local-settings'"
                        class="col-span-12 md:col-span-6 lg:col-span-7"></default-and-reference-data-local-setting-form>
                </div>
            </div>
        </div>
    </u-page>
</template>
<script lang="ts" setup>
import UPage from '@/components/bases/u-page/u-page.vue';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import UCardHeader from '@/components/bases/u-card/u-card-header.vue';
import { workspaceSettingsReferenceDataInjectionKey } from '@/utils/keys';
import { useReferenceData } from '@/pages/workspace/_composables/useReferenceData';
import DefaultAndReferenceDataLocalSettingForm from '@/pages/workspace/_partials/settings/default-and-reference-data-local-setting-form.vue';

type TabKey = 'local-settings' | 'horse-ref-data' | 'contact-ref-data' | 'localtion-ref-data'

const route = useRoute()
const router = useRouter()
const { localSettingForm, handleUpdateLocalSetting } = useReferenceData()
const breakpoints = useBreakpoints(breakpointsTailwind)

const tabs = ref<{
    key: TabKey,
    to?: string,
    label: string,
    description: string,
    icon?: string
}[]>([
    {
        key: 'local-settings',
        to: '#local-settings',
        label: 'Local Settings',
        icon: 'i-heroicons-wrench-screwdriver',
        description: 'Make changes to your account here. Click save when you\'re done.'
    }, {
        key: 'horse-ref-data',
        to: '#horse-ref-data',
        label: 'Horse Ref Data',
        icon: 'i-heroicons-trophy',
        description: 'Make changes to your account here. Click save when you\'re done.'
    }, {
        key: 'contact-ref-data',
        to: '#contact-ref-data',
        label: 'Contact Ref Data',
        icon: 'i-heroicons-identification',
        description: 'Make changes to your account here. Click save when you\'re done.'
    }, {
        key: 'localtion-ref-data',
        to: '#localtion-ref-data',
        label: 'Location Ref Data',
        icon: 'i-heroicons-map-pin',
        description: 'Make changes to your account here. Click save when you\'re done.'
    }
])

const isDesktop = computed(() => {
    return breakpoints.greaterOrEqual('sm').value
})
const selected = computed({
    get() {
        const index = tabs.value.findIndex((item) => item.label === route.query.tab)
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