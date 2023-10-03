import type { InjectionKey } from "vue";

export const onboardingInjectionKey = Symbol() as InjectionKey<{
  form: object | undefined;
  activeStep: object | string | undefined,
  steps: object[] | undefined
}>;
