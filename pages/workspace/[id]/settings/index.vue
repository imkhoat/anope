<template>
    <u-page page-title="Setting" page-description="Choose between categories">
        <div class="grid grid-cols-12 gap-4 h-fit">
            <div v-for="(menu, index) in menus" :key="index + '__setting-pages'" class="col-span-12 lg:col-span-3">
                <setting-menu :title="menu.title" :items="menu.items"></setting-menu>
            </div>
        </div>
    </u-page>
</template>
<script lang="ts" setup>
import UPage from '@/components/bases/u-page/u-page.vue';
import SettingMenu from '@/pages/workspace/_partials/settings/setting-menu.vue'

const menus = ref([
    {
        title: 'Business Information',
        items: [{
            title: 'My Business Overview',
            class: '!font-normal',
            icon: 'i-heroicons-arrow-top-right-on-square-20-solid',
            value: 'WORKSPACE_01'
        }]
    },
    {
        title: 'User management',
        items: [{
            title: 'Team and Groups',
            class: '!font-normal',
            icon: 'i-heroicons-arrow-top-right-on-square-20-solid',
            value: 'WORKSPACE_01'
        }, {
            title: 'User Management',
            class: '!font-normal',
            icon: 'i-heroicons-arrow-top-right-on-square-20-solid',
            value: 'WORKSPACE_01'
        }, {
            title: 'User Types and Reference Data',
            class: '!font-normal',
            icon: 'i-heroicons-arrow-top-right-on-square-20-solid',
            value: 'WORKSPACE_01'
        }, {
            title: 'Role and Permissions',
            class: '!font-normal',
            icon: 'i-heroicons-arrow-top-right-on-square-20-solid',
            value: 'WORKSPACE_01'
        }]
    },
    {
        title: 'Financial',
        items: [{
            title: 'Payment Settings',
            class: '!font-normal',
            icon: 'i-heroicons-arrow-top-right-on-square-20-solid',
            value: 'WORKSPACE_01'
        }]
    }, {
        title: 'Alert and Notification',
        items: [{
            title: 'My Business Overview',
            class: '!font-normal',
            icon: 'i-heroicons-arrow-top-right-on-square-20-solid',
            value: 'WORKSPACE_01'
        }]
    },
    {
        title: 'Default and Reference data',
        items: [{
            title: 'Local setting',
            class: '!font-normal',
            icon: 'i-heroicons-arrow-top-right-on-square-20-solid',
            value: 'WORKSPACE_01'
        }, {
            title: 'Horses Reference Data',
            class: '!font-normal',
            icon: 'i-heroicons-arrow-top-right-on-square-20-solid',
            value: 'WORKSPACE_01'
        }, {
            title: 'Contact Reference Data',
            class: '!font-normal',
            icon: 'i-heroicons-arrow-top-right-on-square-20-solid',
            value: 'WORKSPACE_01'
        }, {
            title: 'Location Reference Data',
            class: '!font-normal',
            icon: 'i-heroicons-arrow-top-right-on-square-20-solid',
            value: 'WORKSPACE_01'
        }, {
            title: 'Users Reference Data',
            class: '!font-normal',
            icon: 'i-heroicons-arrow-top-right-on-square-20-solid',
            value: 'WORKSPACE_01'
        }, {
            title: 'Activity, Treatment and Proceduce Reference Data',
            class: '!font-normal',
            icon: 'i-heroicons-arrow-top-right-on-square-20-solid',
            value: 'WORKSPACE_01'
        }]
    }
])
</script>