<template>
  <el-menu class="navbar-menu" mode="horizontal" router>
    <el-sub-menu index="1">
      <template #title>{{ store.state.user.username }}</template>
      <el-menu-item index="1-1">项目地址</el-menu-item>
      <el-menu-item index="/login">退出</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { useStore } from "vuex";

const store = useStore();
</script>

<style lang="less">
.navbar-menu {
  height: 60px;
  width: calc(100% - 240px);
  position: absolute;
  top: 0;
  z-index: 9;
  display: flex;
  justify-content: flex-end;
}
</style>
