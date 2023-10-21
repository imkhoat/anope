import { storeToRefs } from "pinia";
import { useApplicationStore } from "@/store/application";
import { UModalCurdProps } from "@/components/bases/u-modal/u-modal-curd.vue";

export function useConfirmModal() {
    const { confirm } = storeToRefs(useApplicationStore())
    const { openconfirm, closeconfirm, configconfirm } = useApplicationStore()

    function open(options: Partial<UModalCurdProps>) {
        configconfirm(options as any)
        openconfirm()
    }
    
    function show(options: {
        title?: string,
        description?: string,
        onConfirm?: () => void,
        onCancel?: () => void,
    }) {
        const modalOptions = {
            contentIcon: 'i-heroicons-trash',
            contentIconColor: 'primary',
            contentTitle: options.title,
            contentDescription: options.description,
            yes: {
                action: options.onConfirm,
                title: 'Confirm',
                color: 'primary',
                variant: 'solid'
            },
            no: {
                action: options.onCancel,
                title: 'Cancel',
                color: 'gray',
                variant: 'outline'
            }
        }

        configconfirm(modalOptions as any)
        openconfirm()
    }

    function showConfirmModal(options: {
        title?: string,
        description?: string,
        onConfirm?: () => void,
        onCancel?: () => void,
    }) {
        const modalOptions = {
            contentIcon: 'i-heroicons-shield-exclamation',
            contentIconColor: 'primary',
            contentTitle: options.title,
            contentDescription: options.description,
            yes: {
                action: options.onConfirm,
                title: 'Confirm',
                color: 'primary',
                variant: 'solid'
            },
            no: {
                action: options.onCancel,
                title: 'Cancel',
                color: 'gray',
                variant: 'outline'
            }
        }

        configconfirm(modalOptions as any)
        openconfirm()
    }

    function showDeleteModal(options: {
        title?: string,
        description?: string,
        onConfirm?: () => void,
        onCancel?: () => void,
    }) {
        const modalOptions = {
            preventClose: true,
            contentIcon: 'i-heroicons-trash',
            contentIconColor: 'rose',
            contentTitle: options.title,
            contentDescription: options.description,
            yes: {
                action: options.onConfirm,
                title: 'Confirm',
                color: 'rose',
                variant: 'solid'
            },
            no: {
                action: options.onCancel,
                title: 'Cancel',
                color: 'gray',
                variant: 'outline'
            }
        }

        configconfirm(modalOptions as any)
        openconfirm()
    }
    

    function hide() {
        closeconfirm()
    }

    return { open, hide, show, showConfirmModal, showDeleteModal, confirm }
}