<template>
    <u-card :ui="cardUI" class="w-full h-full">
        <div class="flex flex-row justify-between items-stretch">
            <div class="flex flex-col justify-start items-start gap-y-1">
                <span class="text-xs text-gray-600">My Overdue Tasks</span>
                <strong class="text-base font-semibold">50</strong>
            </div>
            <u-avatar size="sm" class="ring-4 ring-gray-50">
                <u-icon name="i-heroicons-document-text" class="w-4 h-4"></u-icon>
            </u-avatar>
        </div>
    </u-card>
</template>
<script lang="ts" setup>
const cardUI = {
    shadow: ''
}
</script>