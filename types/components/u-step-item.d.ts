export interface UStepItem {
    as?: string,
    to?: string | object,
    dense?: boolean,
    icon?: string,
    passedIcon?: string,
    currentIcon?: string,
    title?: string,
    description?: string,
    activeClass?: string,
    isActive?: boolean,
    badge?: string,
    value?: string,
    collapse?: boolean,
    passed?: boolean,
    current?: boolean,
    last?: boolean,
    step?: number | string
}