<script setup>
const items = [
    [{
        label: 'Vietnamese',
        avatar: {
            src: 'https://avatars.githubusercontent.com/u/739984?v=4'
        }
    },{
        label: 'English',
        avatar: {
            src: 'https://avatars.githubusercontent.com/u/739984?v=4'
        }
    }]
]
</script>
<template>
    <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
        <UButton size="lg" square color="gray" variant="soft" icon="i-heroicons-globe-alt"/>
    </UDropdown>
</template>