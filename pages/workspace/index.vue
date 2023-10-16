<template>
    <div class="workspace-page">
        <u-modal v-model="isOpen" :prevent-close="true">
            <my-workspace></my-workspace>
        </u-modal>

    </div>
</template>
<script lang="ts" setup>
import MyWorkspace from '@/pages/workspace/_partials/workspace/my-workspaces.vue'

const isOpen = ref(true)
</script>