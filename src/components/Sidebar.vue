<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    text-color="#fff"
    class="sidebar-menu"
    :default-active="defaultActive"
    router
  >
    <template v-for="menu in menuList" :key="menu.id">
      <el-sub-menu :index="menu.path" v-if="menu.children">
        <template #title>
          <el-icon><icon-location /></el-icon>
          <span>{{ menu.title }}</span>
        </template>
        <template v-for="childMenu in menu.children" :key="childMenu.id">
          <el-menu-item :index="childMenu.path">
            {{ childMenu.title }}
          </el-menu-item>
        </template>
      </el-sub-menu>

      <el-menu-item :index="menu.path" v-else>
        <el-icon><icon-setting /></el-icon>
        <span>{{ menu.title }}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import {
  Location as IconLocation,
  Setting as IconSetting,
} from "@element-plus/icons-vue";
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
let defaultActive = ref(route.meta.title);

interface MenuItem {
  id: number;
  path: string;
  title: string;
  children?: Array<{
    id: number;
    path: string;
    title: string;
  }>;
}

const menuList: Array<MenuItem> = [
  {
    id: 1,
    path: "blog",
    title: "博客",
  },
  {
    id: 2,
    path: "user",
    title: "用户",
  },
];
</script>

<style lang="less">
.sidebar-menu {
  height: 100%;
  width: 240px;
}
</style>
