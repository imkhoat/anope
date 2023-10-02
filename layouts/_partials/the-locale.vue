<script setup>
const items = [
    [{
        label: 'Vietnamese',
        avatar: {
            src: 'https://cdn-icons-png.flaticon.com/128/197/197473.png'
        },
    },{
        label: 'English',
        avatar: {
            src: 'https://cdn-icons-png.flaticon.com/128/197/197484.png'
        }
    }]
]
</script>
<template>
    <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
        <UButton size="lg" square color="gray" variant="soft" icon="i-heroicons-globe-alt"/>
    </UDropdown>
</template>