<template>
<div class="default-layout">
    <the-default-sidebar></the-default-sidebar>
    <the-default-header></the-default-header>
    <slot/>
    <the-default-footer></the-default-footer>
</div>
</template>
<script lang="ts" setup>
import TheDefaultHeader from '@/layouts/_partials/the-default-header.vue';
import TheDefaultFooter from '@/layouts/_partials/the-default-footer.vue';
import TheDefaultSidebar from '@/layouts/_partials/the-default-sidebar.vue';

</script>