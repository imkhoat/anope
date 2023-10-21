import { ref } from 'vue'

export function useUserManagement() {
    const MODAL_KEY = {
        INVITE_USER: 'INVITE_USER',
        REMOVE_USER: 'REMOVE_USER',
    }

    const inviteEmails = ref([])

    function handleSendInvite(){
        useFetch()
    }

    return { MODAL_KEY, inviteEmails , handleSendInvite}
}