import type { InjectionKey } from "vue";

export const onboardingInjectionKey = Symbol() as InjectionKey<{
  form: object | undefined;
  activeStep: object | string | undefined,
  steps: object[] | undefined
}>;

export const authRegisterInjectionKey = Symbol() as InjectionKey<{
  state?: object;
  form?: object | undefined;
}>;

export const authLoginInjectionKey = Symbol() as InjectionKey<{
  state?: object;
  form?: object | undefined;
}>;

export const authResetPasswordInjectionKey = Symbol() as InjectionKey<{
  state?: object;
  form?: object | undefined;
}>;

export const authForgotPasswordInjectionKey = Symbol() as InjectionKey<{
  state?: object;
  form?: object | undefined;
}>;