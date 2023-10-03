<template>
    <component :is="as">
        
    </component>
</template>
<script lang="ts" setup>
withDefaults(defineProps<{
    as: string
}>(), {
    as: 'div'
})
</script>