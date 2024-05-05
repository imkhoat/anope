<template>
  <u-card>
    <!-- Skeleton -->
    <div v-if="loading" class="flex flex-col justify-start items-start space-y-4">
      <u-skeleton class="h-16 w-16" :ui="{ rounded: 'rounded-full' }" />
      <div class="space-y-2 w-full">
        <u-skeleton class="h-4 w-3/4" />
        <u-skeleton class="h-4 w-full" />
        <u-skeleton class="h-4 w-full" />
      </div>
      <u-skeleton class="h-8 w-full" />
    </div>
    <!-- Content -->
    <div v-else class="flex flex-row justify-between items-stretch">
      <div class="flex flex-col justify-start items-start gap-y-1">
        <u-waves-avatar
          size="lg"
          icon="i-heroicons-briefcase"
          class="relative -top-4 -left-4"
          color="gray"
        />
        <strong class="text-base font-semibold">{{ workspaceName }}</strong>
        <span class="text-sm text-gray-600">Create by miguel_bui <span class="opacity-10">|</span> 19th Dec,
          2023</span>
      </div>
    </div>
    <template #footer>
      <div class="flex flex-row justify-between items-center">
        <u-button @click="onGoingWorkspaceDetail">
          Open workspace
        </u-button>
        <u-button variant="ghost" icon="i-heroicons-ellipsis-vertical" />
      </div>
    </template>
  </u-card>
</template>

<script lang="ts" setup>
import type { Workspace } from '@/types/model/workspace'
import UWavesAvatar from '@/components/bases/u-avatar/u-waves-avatar.vue'

const router = useRouter()
const localePath = useLocalePath()

const props = defineProps<{
  workspace: Workspace;
}>()

const workspaceName = computed(() => {
  return props.workspace?.name
})

function onGoingWorkspaceDetail() {
  router.push(
    localePath({
      name: 'workspace-id-settings',
      params: { id: props.workspace.id }
    })
  )
}

const loading = ref(true)

onMounted(() => {
  loading.value = false
})
</script>
