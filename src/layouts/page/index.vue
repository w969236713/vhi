<template>
  <RouterView>
    <template v-slot="{ Component }">
      <component :is="Component" />
    </template>
  </RouterView>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageLayout'
})
</script>

<style scoped lang="scss"></style>
