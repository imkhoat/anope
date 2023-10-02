<template>
    <div class="the-notification">
        <u-button square size="lg" variant="ghost" color="gray" @click="isOpen = true">
            <u-icon name="i-heroicons-bell" class="w-5 h-5 font-bold" />
        </u-button>
        <u-slideover v-model="isOpen" :side="'right'">
            <u-card :ui="cardUI">
                <template #header>
                    <div class="flex flex-row justify-between items-center">
                        <h6 class="font-bold">Notification</h6>
                        <u-button color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid"
                            @click="onToggleSidebar"></u-button>
                    </div>
                </template>
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

//methods
function onToggleSidebar(){
    isOpen.value = !isOpen.value
}
</script>