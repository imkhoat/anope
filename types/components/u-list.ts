import { IUListItem } from "@/types/components/u-list-item";

export interface IUList extends IUListItem{
    items?: IUListItem[],
    modelValue?: string | object,
    subTitle?: string
}