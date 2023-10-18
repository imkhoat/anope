<template>
    <u-page page-title="Setting" page-description="Choose between categories" page-icon="i-heroicons-wrench-screwdriver">
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
            icon: 'i-heroicons-arrow-top-right-on-square',
            value: 'WORKSPACE_01'
        }]
    },
    {
        title: 'User management',
        items: [{
            title: 'Team and Groups',
            icon: 'i-heroicons-arrow-top-right-on-square',
            value: 'WORKSPACE_01'
        }, {
            title: 'User Management',
            icon: 'i-heroicons-arrow-top-right-on-square',
            value: 'WORKSPACE_01'
        }, {
            title: 'User Types and Reference Data',
            icon: 'i-heroicons-arrow-top-right-on-square',
            value: 'WORKSPACE_01'
        }, {
            title: 'Role and Permissions',
            icon: 'i-heroicons-arrow-top-right-on-square',
            value: 'WORKSPACE_01'
        }]
    },
    {
        title: 'Financial',
        items: [{
            title: 'Payment Settings',
            icon: 'i-heroicons-arrow-top-right-on-square',
            value: 'WORKSPACE_01'
        }]
    }, {
        title: 'Alert and Notification',
        items: [{
            title: 'My Business Overview',
            icon: 'i-heroicons-arrow-top-right-on-square',
            value: 'WORKSPACE_01'
        }]
    },
    {
        title: 'Default and Reference data',
        items: [{
            title: 'Local setting',
            icon: 'i-heroicons-arrow-top-right-on-square',
            value: 'WORKSPACE_01'
        }, {
            title: 'Horses Reference Data',
            icon: 'i-heroicons-arrow-top-right-on-square',
            value: 'WORKSPACE_01'
        }, {
            title: 'Contact Reference Data',
            icon: 'i-heroicons-arrow-top-right-on-square',
            value: 'WORKSPACE_01'
        }, {
            title: 'Location Reference Data',
            icon: 'i-heroicons-arrow-top-right-on-square',
            value: 'WORKSPACE_01'
        }, {
            title: 'Users Reference Data',
            icon: 'i-heroicons-arrow-top-right-on-square',
            value: 'WORKSPACE_01'
        }, {
            title: 'Activity, Treatment and Proceduce Reference Data',
            icon: 'i-heroicons-arrow-top-right-on-square',
            value: 'WORKSPACE_01'
        }]
    }
])
</script>