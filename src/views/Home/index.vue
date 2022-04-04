<template>
  <div class="home">
    <Sidebar />
    <div class="container">
      <Navbar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Sidebar from "../../components/Sidebar.vue";
import Navbar from "../../components/Navbar.vue";
</script>

<style lang="less">
.home {
  height: 100%;
  display: flex;
  .container {
    margin-top: 60px;
    width: calc(100% - 240px);
    overflow: auto;
  }
}
</style>
