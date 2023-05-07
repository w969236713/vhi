<template>
  <RouterView />
</template>
<script setup lang="ts">
import { RouterView, useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
console.log(route)
console.log(router)
</script>

<style scoped lang="scss"></style>
