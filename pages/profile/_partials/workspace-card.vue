<template>
  <u-card>
    <div class="flex flex-row justify-between items-stretch">
      <div class="flex flex-col justify-start items-start gap-y-1">
        <u-waves-avatar size="lg" icon="i-heroicons-briefcase-20-solid" class="relative -top-4 -left-4" color="gray" />
        <strong class="text-base font-semibold">{{ workspaceName }}</strong>
        <span class="text-sm text-gray-600">Create by miguel_bui <span class="opacity-10">|</span> 19th Dec, 2023</span>
      </div>
    </div>
    <template #footer>
      <div class="flex flex-row justify-between items-center">
        <u-button
          variant="soft"
          @click="onGoingWorkspaceDetail"
        >
          Open workspace
        </u-button>
        <u-button
          variant="ghost"
          icon="i-heroicons-ellipsis-vertical"
        />
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
  router.push(localePath({ name: 'workspace-id-settings', params: { id: props.workspace.id } }))
}
</script>
