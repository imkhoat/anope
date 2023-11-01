<template>
  <u-avatar size="2xl" :class="iconClass.firstRing">
    <u-avatar size="lg" :class="iconClass.secondRing">
      <u-avatar size="sm" :ui="avatarUI">
        <slot>
          <u-icon v-if="icon" size="md" :name="icon" :class="iconClass.icon" />
        </slot>
      </u-avatar>
    </u-avatar>
  </u-avatar>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
  icon?: string | undefined,
  color?: string
}>(), {
  icon: undefined,
  color: 'gray'
})

const iconClass = computed(() => {
  return {
    firstRing: 'ring-1 ring-gray-50 bg-transparent -mx-5 md:mx-0',
    secondRing: 'ring-1 ring-gray-100 bg-transparent',
    thirdRing: 'ring-1 ring-gray-200 bg-transparent',
    icon: `text-${props.color}-500`
  }

})

const avatarUI = computed(() => {
  return {
    background: `bg-${props.color}-50`
  }
})
</script>
