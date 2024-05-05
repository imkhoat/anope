<template>
  <u-page
    page-title="Organisations Management"
    page-description="A list of all organisation in the workspace"
  >
    <template #header-action>
      <div class="flex flex-row justify-end items-center gap-1">
        <u-button
          size="md"
          icon="i-heroicons-inbox-stack"
        >
          Create new organisation
        </u-button>
      </div>
    </template>
    <div class="grid grid-cols-12 gap-4 h-fit">
      <div class="col-span-12 md:col-span-12 lg:col-span-10 row-span-1 grid grid-cols-12 gap-4">
        <div class="col-span-6 sm:col-span-6 lg:col-span-3 row-span-1">
          <organisation-summary-card v-bind="summaryData.totalOrganisations" />
        </div>
        <div class="col-span-6 sm:col-span-6 lg:col-span-3 row-span-1">
          <organisation-summary-card v-bind="summaryData.activeOrganisations" />
        </div>
        <div class="col-span-6 sm:col-span-6 lg:col-span-3 row-span-1">
          <organisation-summary-card v-bind="summaryData.newOrganisations" />
        </div>
      </div>
      <div class="col-span-12">
        <organisation-table />
      </div>
    </div>
    <template #modal />
  </u-page>
</template>

<script lang="ts" setup>
import UPage from '@/components/bases/u-page/u-page.vue'

definePageMeta({
  layout: 'workspace'
})

const summaryData = ref({
  totalOrganisations: {
    description: 'Total organisations',
    title: '30',
    icon: 'i-heroicons-user-group'
  },
  activeOrganisations: {
    description: 'Active organisations',
    title: '20',
    icon: 'i-heroicons-cursor-arrow-rays'
  },
  newOrganisations: {
    description: 'New organisations',
    title: '4',
    icon: 'i-heroicons-user-plus'
  }
})
</script>
