<template>
  <el-button class="login-btn" @click="login" type="primary">登录</el-button>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();
const userInfo = reactive<{
  username: string;
  password: string;
}>({
  username: "admin",
  password: "123456",
});

const login = () => {
  store.commit("setUserInfo", userInfo);
  router.push("/home/blog");
};
</script>

<style lang="less">
.login-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
