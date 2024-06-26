<template>
  <u-card>
    <template v-if="headerTitle || headerDescription || headerIcon" #header>
      <u-card-header :title="headerTitle" :description="headerDescription" :icon="headerIcon" />
    </template>
    <slot>
      <div
        v-if="contentIcon || contentTitle || contentDescription"
        class="flex flex-col md:flex-row justify-start items-start md:items-center gap-x-3"
      >
        <u-waves-avatar v-if="contentIcon" :icon="contentIcon" :color="contentIconColor" />
        <div v-if="contentTitle || contentDescription" class="flex flex-col justify-start items-start gap-y-1">
          <h6 v-if="contentTitle" class="text-base font-semibold leading-none">
            {{ contentTitle }}
          </h6>
          <span v-if="contentDescription" class="text-sm text-gray-600 leading-none">{{ contentDescription
          }}</span>
        </div>
      </div>
    </slot>
    <template #footer>
      <div class="flex flex-row justify-end items-center gap-x-1">
        <u-button
          :loading="loading.yes"
          size="md"
          v-bind="no"
          class="min-w-[70px] items-center justify-center"
          @click="onNoClick"
        />
        <u-button
          :loading="loading.yes"
          size="md"
          v-bind="yes"
          class="min-w-[70px] items-center justify-center"
          @click="onYesClick"
        />
      </div>
    </template>
  </u-card>
</template>

<script lang="ts" setup>
import UCardHeader from '@/components/bases/u-card/u-card-header.vue'
import UWavesAvatar from '@/components/bases/u-avatar/u-waves-avatar.vue'

export interface CardCrud {
  headerTitle?: string | undefined,
  headerDescription?: string | undefined,
  headerIcon?: string | undefined,
  contentTitle?: string | undefined,
  contentDescription?: string | undefined,
  contentIcon?: string | undefined,
  contentIconColor?: string | undefined,
  yes?: {
    [key: string]: string | (() => void) | null | undefined,
    action?: (() => void) | null,

  },
  no?: {
    [key: string]: string | (() => void) | null | undefined,
    action?: (() => void) | null,
  },
}

const props = withDefaults(defineProps<CardCrud>(), {
  headerTitle: undefined,
  headerDescription: undefined,
  headerIcon: undefined,
  contentTitle: undefined,
  contentDescription: undefined,
  contentIcon: undefined,
  contentIconColor: 'gray',
  yes: () => {
    return {
      label: 'Save',
      action: null,
      color: 'primary',
      variant: 'solid'
    }
  },
  no: () => {
    return {
      label: 'Cancel',
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

const loading = reactive({
  yes: false,
  no: false
})


// computed
async function onYesClick() {
  try {
    emits('yes')
    if (props?.yes?.action instanceof Promise) {
      loading.yes = true
    }
    if (props?.yes?.action) {
      await props?.yes?.action()
    }
  } catch (error) {
    console.log(error)
  } finally {
    loading.yes = false
  }
}

async function onNoClick() {
  try {
    emits('no')
    if (props?.no?.action instanceof Promise) {
      loading.no = true
    }
    if (props?.no?.action) {
      await props?.no?.action()
    }
  } catch (error) {
    console.log(error)
  } finally {
    loading.no = false
  }
}
</script>
