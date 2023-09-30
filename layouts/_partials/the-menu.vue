<template>
    <u-list :items="menus" v-model="activeMenu">
    </u-list>
</template>
<script lang="ts" setup>
import UList from "@/components/bases/u-list/u-list.vue";

interface MenuItem {
    title?: string;
    to?: string;
    icon?: string;
    badge?: string;
    childs?: MenuItem[];
    value?: string
}

//data
const activeMenu = ref<string>('DASHBOARD')

const menus = reactive<MenuItem[]>([
    { title: "Dashboard", to: "#", icon: "i-heroicons-academic-cap", badge: "10", value: 'DASHBOARD' },
    { title: "Team", to: "#", icon: "i-heroicons-arrow-down-on-square-stack", value: 'TEAM' },
    { title: "Projects", to: "#", icon: "i-heroicons-banknotes", value: 'PROJECTS' },
    { title: "Calendar", to: "#", icon: "i-heroicons-building-library", value: 'CALENDAR' },
    {
        title: "Documents",
        to: "#",
        icon: "i-heroicons-chat-bubble-bottom-center-text",
        value: 'DOCUMENTS'
    },
    { title: "Reports", to: "#", icon: "i-heroicons-circle-stack", value: 'REPORTS' },
    {
        title: "Projects",
        to: "#",
        icon: "i-heroicons-cursor-arrow-ripple",
        childs: [
            {
                title: "Website redesign",
                to: "#",
                icon: "i-heroicons-light-bulb",
            },
            {
                title: "GraphQL API",
                to: "#",
                icon: "i-heroicons-light-bulb",
            },
            {
                title: "Customer migration guides",
                to: "#",
                icon: "i-heroicons-light-bulb",
            },
            {
                title: "Profit sharing program",
                to: "#",
                icon: "i-heroicons-light-bulb",
            },
        ],
    },
]);
</script>
