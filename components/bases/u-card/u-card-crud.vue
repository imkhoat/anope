<template>
    <u-card>
        <template #header v-if="headerTitle || headerDescription || headerIcon">
            <u-card-header :title="headerTitle" :description="headerDescription" :icon="headerIcon"></u-card-header>
        </template>
        <slot>
            <div v-if="contentIcon || contentTitle || contentDescription"
                class="flex flex-col md:flex-row justify-start items-start md:items-center gap-x-3">
                <u-waves-avatar v-if="contentIcon" :icon="contentIcon" :color="contentIconColor"></u-waves-avatar>
                <div v-if="contentTitle || contentDescription" class="flex flex-col justify-start items-start gap-y-1">
                    <h6 v-if="contentTitle" class="text-base font-semibold leading-none">{{ contentTitle }}</h6>
                    <span v-if="contentDescription" class="text-sm text-gray-600 leading-none">{{ contentDescription
                    }}</span>
                </div>
            </div>
        </slot>
        <template #footer>
            <div class="flex flex-row justify-end items-center gap-x-1">
                <u-button :variant="no.variant" :color="no.color" class="min-w-[60px] items-center justify-center" @click="onNoClick">{{
                    no?.title }}</u-button>
                <u-button :variant="yes.variant" :color="yes.color" class="min-w-[60px] items-center justify-center" @click="onYesClick">{{ yes?.title }}</u-button>
            </div>
        </template>
    </u-card>
</template>
<script lang="ts" setup>
import UCardHeader from '@/components/bases/u-card/u-card-header.vue';
import UWavesAvatar from '@/components/bases/u-avatar/u-waves-avatar.vue';

export interface UCardCrudProps {
    headerTitle?: string,
    headerDescription?: string,
    headerIcon?: string,
    contentTitle?: string,
    contentDescription?: string,
    contentIcon?: string,
    contentIconColor?: string,
    yes?: {
        action?: (() => void) | null,
        title?: string,
        color?: string,
        variant?: string
    },
    no?: {
        action?: (() => void) | null,
        title?: string,
        color?: string,
        variant?: string
    },
}

const props = withDefaults(defineProps<UCardCrudProps>(), {
    contentIconColor: 'gray',
    yes: () => {
        return {
            title: 'Save',
            action: null,
            color: 'primary',
            variant: 'solid'
        }
    },
    no: () => {
        return {
            title: 'Cancel',
            action: null,
            color: 'gray',
            variant: 'outline'
        }
    }
})
const emits = defineEmits<{
    (event: 'yes'): () => void,
    (event: 'no'): () => void
}>()


// computed
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