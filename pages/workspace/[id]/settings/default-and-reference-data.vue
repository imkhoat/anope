<template>
    <u-page page-title="Defaut and Reference Data"
        page-description="Setup and config reference data and system enviroments">
        <template #header-action>
            <div class="flex flex-row justify-end items-center gap-1">
                <u-tabs :ui="tabUI" :items="tabs" v-model="selected" class="w-full">
                </u-tabs>
            </div>
        </template>
        <div class="flex flex-col justify-start items-stretch">
            
        </div>
    </u-page>
</template>
<script lang="ts" setup>
import UPage from '@/components/bases/u-page/u-page.vue';

const tabUI = {
    list: {
        background: '',
        tab: {
            base: "border-b-2 relative inline-flex items-center justify-center flex-shrink-0 w-full ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-primary-500 dark:ui-focus-visible:ring-primary-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out",
            active: 'text-primary dark:text-white border-primary',
            rounded: ''
        },
        marker: {
            background: '',
            shadow: '',
            rounded: ''
        }
    }
}

const route = useRoute()
const router = useRouter()

const tabs = ref([
    {
        key: 'local-settings',
        label: 'Local Settings',
        description: 'Make changes to your account here. Click save when you\'re done.'
    }, {
        key: 'horse-ref-data',
        label: 'Horse Ref Data',
        description: 'Make changes to your account here. Click save when you\'re done.'
    }, {
        key: 'contact-ref-data',
        label: 'Contact Ref Data',
        description: 'Make changes to your account here. Click save when you\'re done.'
    }, {
        key: 'localtion-ref-data',
        label: 'Location Ref Data',
        description: 'Make changes to your account here. Click save when you\'re done.'
    }
])
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
</script>