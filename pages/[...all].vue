<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main p="x4px y10px" text="center teal-700 dark:gray-200">
    <div text-4xl>
      <div i-carbon-warning inline-block />
    </div>
    <div>Not found</div>
    <div>
      <button btn m="3px t8px" @click="router.back()">
        Back
      </button>
    </div>
  </main>
</template>
