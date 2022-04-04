import { createStore } from "vuex";
import persistedstate from "vuex-persistedstate";

const initState = {
  user: {},
};
const state = sessionStorage.getItem("vuex") ? JSON.parse(sessionStorage.getItem("vuex") || "") : initState;

export default createStore({
  state,
  mutations: {
    setUserInfo(state, payload) {
      state.user = payload;
    },
  },
  actions: {},
  modules: {},
  /** 使用vuex-persistedstate插件将vuex内容动态写入sessionStorage */
  plugins: [persistedstate({ storage: window.sessionStorage })],
});
