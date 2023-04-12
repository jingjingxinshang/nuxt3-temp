<script setup lang="ts">
import { appName } from '~/constants'

useHead({
  title: appName,
})
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html, body , #__nuxt{
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #222;
  color: white;
}
html {
    font-size: 13.33333333vw;
  }

  @media (min-width: 560px) {
   html {
      font-size: 74.66666666666667px;
    }
  }

  body {
    font-size: 16PX;
  }
</style>
