<template>
  <div class="common-layout">
    <el-container>
      <el-aside>Aside</el-aside>
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

<script setup lang="ts"></script>

<style scoped></style>
