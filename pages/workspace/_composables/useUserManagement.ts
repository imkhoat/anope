import { ref } from 'vue'
import { useModal } from '@/composables/useModal'

export function useUserManagement() {

    const { hide } = useModal()

    const MODAL_KEY = {
        INVITE_USER: 'INVITE_USER',
        REMOVE_USER: 'REMOVE_USER',
    }

    const inviteEmails = ref([])

    function handleSendInvite() {
        console.log(inviteEmails.value)
        return new Promise(() => {
            setTimeout(() => {
                console.log('FUCK')
                hide()
            }, 5000)
        })
    }

    return { MODAL_KEY, inviteEmails, handleSendInvite }
}