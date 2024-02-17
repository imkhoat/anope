<template>
  <u-card>
    <u-form :state="state" class="flex flex-col justify-start items-stretch gap-y-8">
      <div class="flex flex-col gap-y-1">
        <u-avatar size="lg" class="bg-primary-100 border-8 border-primary-50">
          <u-icon name="i-heroicons-shield-check-20-solid" class="text-primary-500 w-6 h-6" />
        </u-avatar>
        <h6 class="font-semibold text-xl leading-0">
          Welcome back!
        </h6>
        <span class="text-sm text-gray-500 leading-0">Manage your horses easyer</span>
      </div>
      <div class="flex flex-col justify-start items-stretch gap-y-2">
        <u-form-group :label="$t('general.form.Email')">
          <u-input v-model="state.email" size="lg" />
        </u-form-group>
        <u-form-group :label="$t('general.form.Password')">
          <template #hint>
            <u-button to="/auth/forgot-password" variant="ghost" size="xs">
              Forgot password?
            </u-button>
          </template>
          <template #default>
            <u-input v-model="state.password" size="lg" type="password" />
          </template>
        </u-form-group>
      </div>
      <div class="flex flex-col justify-start items-stretch gap-y-2">
        <u-button size="lg" block>
          {{ $t(`general.button.Login`) }}
        </u-button>
        <u-divider label="Or login with" />
        <div class="flex flex-col justify-start items-stretch gap-y-2 text-center">
          <u-button size="lg" variant="soft" class="flex-grow text-center justify-center" @click="onLoginWithOauthGithub">
            Github
          </u-button>
          <u-button size="lg" variant="soft" class="flex-grow text-center justify-center" @click="onLoginWithOauthAuth0">
            Auth0
          </u-button>
          <u-button disabled size="lg" variant="soft" color="gray" class="flex-grow text-center justify-center">
            Twitter
          </u-button>
        </div>
      </div>
    </u-form>
  </u-card>
</template>

<script lang="ts" setup>
import { authLoginInjectionKey } from '@/utils/keys'

const { state } = inject<{
  state: { [key: string]: string }
}>(authLoginInjectionKey, { state: {} })

function onLoginWithOauthGithub() {
  navigateTo('/api/auth/github', { external: true })
}

function onLoginWithOauthAuth0() {
  navigateTo('/api/auth/auth0', { external: true })
}
</script>
