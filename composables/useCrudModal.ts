import { storeToRefs } from "pinia";
import { useApplicationStore } from "@/store/application";
import { UCardCrudProps } from '@/components/bases/u-card/u-card-crud.vue'

export function useCrudModal() {
    const { openCrudModal, closeCrudModal, configCrudModal } = useApplicationStore()
    const { crudModal } = storeToRefs(useApplicationStore())

    function open(options: Partial<UCardCrudProps>) {
        configCrudModal(options as any)
        openCrudModal()
    }

    function openDeleteModal(options: {
        title?: string,
        description?: string,
        onConfirm?: () => void,
        onCancel?: () => void,
    }) {
        const modalOptions: UCardCrudProps = {
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

        configCrudModal(modalOptions as any)
        openCrudModal()
    }

    function close() {
        closeCrudModal()
    }

    return { open, close, openDeleteModal, crudModal }
}