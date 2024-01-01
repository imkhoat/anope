<template>
  <u-avatar :size="sizeConfig[size].firstRing" :class="iconClass.firstRing">
    <u-avatar :size="sizeConfig[size].secondRing" :class="iconClass.secondRing">
      <u-avatar :size="sizeConfig[size].thirdRing" :ui="avatarUI">
        <slot>
          <u-icon v-if="icon" :size="sizeConfig[size].icon" :name="icon" :class="iconClass.icon" />
        </slot>
      </u-avatar>
    </u-avatar>
  </u-avatar>
</template>

<script lang="ts" setup>
import type { AvatarSize } from '@nuxt/ui/dist/runtime/types/avatar'
const props = withDefaults(
  defineProps<{
    icon?: string | undefined;
    color?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  }>(),
  {
    icon: undefined,
    color: 'gray',
    size: 'md'
  }
)

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

const sizeConfig = computed<{[key in 'xs' | 'sm' | 'md' | 'lg' | 'xl']: {
  firstRing: AvatarSize,
  secondRing: AvatarSize,
  thirdRing: AvatarSize,
  icon: AvatarSize
}}>(() => {
  return {
    xs: {
      firstRing: 'lg',
      secondRing: 'md',
      thirdRing: 'xs',
      icon: 'md'
    },
    sm: {
      firstRing: '2xl',
      secondRing: 'lg',
      thirdRing: 'sm',
      icon: 'md'
    },
    md: {
      firstRing: '3xl',
      secondRing: 'xl',
      thirdRing: 'md',
      icon: 'lg'
    },
    lg: {
      firstRing: '3xl',
      secondRing: '2xl',
      thirdRing: 'lg',
      icon: 'xl'
    },
    xl: {
      firstRing: '3xl',
      secondRing: '2xl',
      thirdRing: 'lg',
      icon: '2xl'
    }
  }
})
</script>
