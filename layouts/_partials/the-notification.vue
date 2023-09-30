<template>
    <div class="the-notification">
        <u-button square size="lg" variant="ghost" color="gray" @click="isOpen = true">
            <u-icon name="i-heroicons-bell" class="w-5 h-5 font-bold"/>
        </u-button>
        <u-slideover v-model="isOpen" :side="'right'">
            <u-card :ui="cardUI">
            </u-card>
        </u-slideover>
    </div>
</template>
<script lang="ts" setup>

// data
const isOpen = ref(false)

const cardUI = {
  shadow: '',
  ring: ''
}
</script>