import { storeToRefs } from "pinia";
import { useApplicationStore } from "@/store/application";
import type { ModalCrud } from "@/components/bases/u-modal/u-modal-crud.vue";

interface Modal extends Partial<ModalCrud> {
    key?: string
}

export function useModal() {
    const { modal, modalKey } = storeToRefs(useApplicationStore())
    const { openModal, closeModal, configModal } = useApplicationStore()
    
    function show(options:  Modal) {
        configModal(options as any)
        openModal()
    }

    function showConfirmDialog(options: {
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
                label: 'Confirm',
                color: 'primary',
                variant: 'solid'
            },
            no: {
                action: options.onCancel,
                label: 'Cancel',
                color: 'gray',
                variant: 'outline'
            }
        }

        configModal(modalOptions as any)
        openModal()
    }

    function showDeleteDialog(options: {
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
                label: 'Confirm',
                color: 'rose',
                variant: 'solid'
            },
            no: {
                action: options.onCancel,
                label: 'Cancel',
                color: 'gray',
                variant: 'outline'
            }
        }

        configModal(modalOptions as any)
        openModal()
    }
    

    function hide() {
        closeModal()
        configModal({})
    }

    return { hide, show, showConfirmDialog, showDeleteDialog, modal, modalKey }
}