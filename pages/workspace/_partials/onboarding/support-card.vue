<template>
  <u-card
    :ui="{
      ring: '',
      shadow: '',
    }"
  >
    <div
      class="flex flex-col justify-start items-start gap-y-3 text-sm opacity-80"
    >
      <u-icon
        name="i-heroicons-lifebuoy-20-solid"
        class="w-6 h-6 opacity-80"
      ></u-icon>
      <h6 class="opacity-80">Having a trouble?</h6>
      <p class="opacity-60 text-xs">
        Feel free to contact us and we will alway helps you through the process
      </p>
      <u-button colod="gray" size="sm" variant="outline" href="tel:+84382680180"
        >Contact us</u-button
      >
    </div>
  </u-card>
</template>
