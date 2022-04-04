<template>
  <el-menu
    :default-active="activeIndex"
    class="navbar-menu"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-sub-menu index="1">
      <template #title>admin</template>
      <el-menu-item index="1-1">项目地址</el-menu-item>
      <el-menu-item index="1-2">退出</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
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
