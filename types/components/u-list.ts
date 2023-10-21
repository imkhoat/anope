import type { ListItem } from "@/types/components/u-list-item";

export interface List extends ListItem{
    items?: ListItem[],
    modelValue?: string | object,
    subTitle?: string
}