<template>
    <u-list :items="menus" v-model="activeMenu" active-class="bg-gray-100 text-primary-900">
        <template v-slot:item="{ item }">
            <u-list-item v-if="!item?.childs?.length" v-bind="item" :is-active="item?.value === activeMenu"></u-list-item>
            <u-accordion v-else :items="[item]">
                <template #default>
                    <u-list-item v-bind="item" :is-active="item?.value === activeMenu">
                        <template #action>
                            <u-icon name="i-heroicons-chevron-down" class="h-4 w-4"></u-icon>
                        </template>
                    </u-list-item>
                </template>
                <template #item>
                    <div class="pl-4">
                        <u-list :items="item.childs" v-model="activeMenu" active-class="bg-gray-100 text-primary-900">
                        </u-list>
                    </div>
                </template>
            </u-accordion>
        </template>
    </u-list>
</template>
<script lang="ts" setup>
import UList from "@/components/bases/u-list/u-list.vue";
import UListItem from "@/components/bases/u-list/u-list-item.vue";
import { UList as UListProps } from "@/types/components/u-list"

interface MenuItem extends UListProps{
    title?: string;
    to?: string;
    icon?: string;
    badge?: string;
    childs?: MenuItem[];
    value?: string;
    description?: string
}

//data
const activeMenu = ref<string>('DASHBOARD')

const menus = reactive<MenuItem[]>([
    { title: "Dashboard", to: "#Dashboard", icon: "i-heroicons-academic-cap", badge: "10", value: 'DASHBOARD' },
    { title: "Team", to: "#Team", icon: "i-heroicons-arrow-down-on-square-stack", value: 'TEAM' },
    { title: "Projects", to: "#Projects", icon: "i-heroicons-banknotes", value: 'PROJECTS' },
    { title: "Calendar", to: "#Calendar", icon: "i-heroicons-building-library", value: 'CALENDAR' },
    {
        title: "Documents",
        to: "#Documents",
        icon: "i-heroicons-chat-bubble-bottom-center-text",
        value: 'DOCUMENTS'
    },
    { title: "Reports", to: "#Reports", icon: "i-heroicons-circle-stack", value: 'REPORTS' },
    {
        title: "Projects",
        to: "#Projects",
        icon: "i-heroicons-cursor-arrow-ripple",
        childs: [
            {
                title: "Website redesign",
                to: "#WebsiteRedesign",
                icon: "i-heroicons-home-modern",
                value: 'WEBSITE_REDESIGN'
            },
            {
                title: "GraphQL API",
                to: "#GraphQLAPI",
                icon: "i-heroicons-gift",
                value: 'GRAPHQL_API'
            },
            {
                title: "Customer migration guides",
                to: "#CustomerMigrationGuides",
                icon: "i-heroicons-film",
                value: 'CUSTOMERMIGRATION'
            },
            {
                title: "Profit sharing program",
                to: "#Profitsharingprogram",
                icon: "i-heroicons-envelope-open",
                value: 'PROFITSHARING'
            },
        ],
    },
]);
</script>
