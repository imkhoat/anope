import { ref } from 'vue'
import type { User } from '@/types/model/user'
import { useModal } from '@/composables/useModal'

export function useUserManagement() {

    const { hide } = useModal()

    const MODAL_KEY = {
        INVITE_USER: 'INVITE_USER',
        REMOVE_USER: 'REMOVE_USER'
    }

    const inviteEmails = ref([])

    function handleSendInvite() {

      return new Promise(() => {
            setTimeout(() => {
                hide()
            }, 5000)
        })
    }

    function handleRemoveUser(user: User) {
        console.log(user)
    }

    return { MODAL_KEY, inviteEmails, handleSendInvite, handleRemoveUser }
}
