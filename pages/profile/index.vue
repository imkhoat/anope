<template>
  <div class="profile-page">
    <div class="grid grid-cols-12 gap-4">
      <workspace-card v-for="(workspace) in workspaces" :key="workspace.id + '__workspace-key'" :workspace="workspace" class="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import WorkspaceCard from '@/pages/profile/_partials/workspace-card.vue'

const { session, fetch } = useUserSession()

const workspaces = ref([{
  name: 'Miguel Australia',
  id: 'ksuwou-2msog-2920mg-s292020',
  enable: false
}, {
  name: 'Miguel NewZealand',
  id: 'ksuwou-2msog-2920mg-s292020',
  enable: true
}])

onMounted(() => {
  fetch()
})
</script>
