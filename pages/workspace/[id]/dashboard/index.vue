<template>
  <u-page page-title="Hello, Banabas" page-description="It's new day to lean something news 💕">
    <div class="grid grid-cols-12 gap-4 h-fit">
      <div class="col-span-12 lg:col-span-3 grid grid-cols-12 grid-rows-12 gap-4">
        <div class="col-span-12 lg:col-span-12 row-auto">
          <about-me />
        </div>
        <div class="col-span-12 lg:col-span-12 row-auto">
          <my-workspaces />
        </div>
      </div>
      <div class="col-span-12 lg:col-span-9 grid grid-cols-12 grid-rows-6 gap-4">
        <div
          class="col-span-12 lg:col-span-12 row-span-1 grid grid-cols-12 gap-4 p-4 bg-neutral-100 rounded-xl rounded-b-4xl ring-8 ring-neutral-50"
        >
          <div class="col-span-12 sm:col-span-6 lg:col-span-3 row-span-1">
            <my-horses />
          </div>
          <div class="col-span-12 sm:col-span-6 lg:col-span-3 row-span-1">
            <my-open-tasks />
          </div>
          <div class="col-span-12 sm:col-span-6 lg:col-span-3 row-span-1">
            <my-overdue-tasks />
          </div>
          <div class="col-span-12 sm:col-span-6 lg:col-span-3 row-span-1">
            <notification />
          </div>
        </div>
        <div class="col-span-12 lg:col-span-7 row-span-3 grid grid-cols-12 gap-4">
          <div class="col-span-12 lg:col-span-6 row-span-4">
            <empty-card />
          </div>
          <div class="col-span-12 lg:col-span-6 row-span-4">
            <empty-card />
          </div>
          <div class="col-span-12 lg:col-span-12 row-span-4">
            <empty-card />
          </div>
        </div>
        <div class="col-span-12 lg:col-span-5 row-span-5">
          <empty-card />
        </div>
      </div>
    </div>
  </u-page>
</template>

<script lang="ts" setup>
import UPage from '@/components/bases/u-page/u-page.vue'
import AboutMe from '@/pages/workspace/_partials/dashboard/about-me.vue'
import MyHorses from '@/pages/workspace/_partials/dashboard/my-horses.vue'
import EmptyCard from '@/pages/workspace/_partials/dashboard/empty-card.vue'
import MyOpenTasks from '@/pages/workspace/_partials/dashboard/my-open-tasks.vue'
import Notification from '@/pages/workspace/_partials/dashboard/notification.vue'
import MyWorkspaces from '@/pages/workspace/_partials/dashboard/my-workspaces.vue'
import MyOverdueTasks from '@/pages/workspace/_partials/dashboard/my-overdue-tasks.vue'

</script>