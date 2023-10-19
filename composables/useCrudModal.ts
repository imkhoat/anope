import { useApplicationStore } from "~/store/application";
import { UCardCrudProps } from '@/components/bases/u-card/u-card-crud.vue'
import { storeToRefs } from "pinia";

export function useCrudModal() {
    const { openCrudModal, closeCrudModal, configCrudModal } = useApplicationStore()
    const { crudModal } = storeToRefs(useApplicationStore())

    function open(options: Partial<UCardCrudProps>) {
        configCrudModal(options as any)
        openCrudModal()
    }

    function close() {
        configCrudModal({})
        closeCrudModal()
    }

    return { open, close, crudModal }
}