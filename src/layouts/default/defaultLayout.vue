<template>
  <div :class="ns.b()">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from '@/hooks/use-namespace'

const ns = useNamespace('layout')
</script>

<style scoped lang="scss"></style>
