<template>
    <u-card>
        <template #header v-if="headerTitle || headerDescription || headerIcon">
            <u-card-header :title="headerTitle" :description="headerDescription" :icon="headerIcon"></u-card-header>
        </template>
        <slot>
            <div v-if="contentIcon || contentTitle || contentDescription"
                class="flex flex-row justify-start items-center gap-x-3">
                <u-avatar v-if="contentIcon" size="xl" class="ring-8 ring-gray-50 border-8 border-gray-100">
                    <u-icon size="md" :name="contentIcon" class="text-neutral-500"></u-icon>
                </u-avatar>
                <div v-if="contentTitle || contentDescription" class="flex flex-col justify-start items-start gap-y-1">
                    <h6 v-if="contentTitle" class="text-base font-semibold leading-none">{{ contentTitle }}</h6>
                    <span v-if="contentDescription" class="text-xs text-gray-600 leading-none">{{ contentDescription
                    }}</span>
                </div>
            </div>
        </slot>
        <template #footer>
            <div class="flex flex-row justify-end items-center gap-x-1">
                <u-button variant="soft" color="gray" class="min-w-[60px] items-center justify-center" @click="onNoClick">{{
                    no?.title }}</u-button>
                <u-button class="min-w-[60px] items-center justify-center" @click="onYesClick">{{ yes?.title }}</u-button>
            </div>
        </template>
    </u-card>
</template>
<script lang="ts" setup>
import UCardHeader from '@/components/bases/u-card/u-card-header.vue';

export interface UCardCrudProps {
    headerTitle?: string,
    headerDescription?: string,
    headerIcon?: string,
    contentTitle?: string,
    contentDescription?: string,
    contentIcon?: string,
    yes?: {
        action?: (() => void) | null,
        title?: string
    },
    no?: {
        action?: (() => void) | null,
        title?: string
    },
}

const props = withDefaults(defineProps<UCardCrudProps>(), {
    yes: () => {
        return {
            title: 'Save',
            action: null
        }
    },
    no: () => {
        return {
            title: 'Cancel',
            action: null
        }
    }
})
const emits = defineEmits<{
    (event: 'yes'): () => void,
    (event: 'no'): () => void
}>()

function onYesClick() {
    emits('yes')
    if (props?.yes?.action) {
        props?.yes?.action()
    }
}

function onNoClick() {
    emits('no')
    if (props?.no?.action) {
        props?.no?.action()
    }
}

</script>