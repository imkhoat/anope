<script lang="ts" setup>
import { DropdownItem } from '@nuxt/ui/dist/runtime/types/dropdown';

const { locale, locales, t } = useI18n()

const localeOptions = computed<DropdownItem[][]>(() => {
    return [locales.value.map(item => {
        const avatar = item.code === 'vi' ? {
            src: 'https://cdn-icons-png.flaticon.com/128/197/197473.png'
        } : {
            src: 'https://cdn-icons-png.flaticon.com/128/197/197484.png'
        }

        return {
            label: item.name,
            click: () => {
                locale.value = item.code
            },
            avatar,
            icon: locale.value === item.code ? 'i-heroicons-check-circle-20-solid' : null
        }
    })] as DropdownItem[][]
})

</script>
<template>
    <u-dropdown :items="localeOptions" :popper="{ placement: 'bottom-start' }">
        <u-button size="lg" square color="gray" variant="soft" icon="i-heroicons-globe-alt" />
        <template #item="{ item }">
            <u-avatar :src="item.avatar.src" size="2xs" />
            <span class="truncate">{{ item.label }}</span>
            <u-icon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-primary-400 dark:text-primary-500 ms-auto" />
        </template>
    </u-dropdown>
</template>