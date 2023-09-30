import { UListItem } from "@/types/components/u-list-item";

export interface UList extends UListItem{
    items?: UListItem[],
    modelValue?: string | object,
    subTitle?: string
}