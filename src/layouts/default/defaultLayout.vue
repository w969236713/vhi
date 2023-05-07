<template>
  <div :class="ns.b()">
    <el-container>
      <VhiAside />
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <RouterView />
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from '@/hooks/use-namespace'
import VhiAside from '@/layouts/default/aside/vhiAside.vue'

const ns = useNamespace('layout')
</script>

<style scoped lang="scss">
//@include b('layout') {
//  width: 100vw;
//  height: 100vh;
//}
</style>
