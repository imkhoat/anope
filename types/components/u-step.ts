import type { UStepItem } from '@/types/components/u-step-item'

export interface UStep extends UStepItem {
  items?: UStepItem[],
  modelValue?: string | object,
  subTitle?: string
}
