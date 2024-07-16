import { defineStore } from "pinia";

const useUserStore = defineStore("user", {
  state: () => ({
    token: "token",
    id: "",
    name: "",
    avatar: "",
    roles: [],
    permissions: [],
  }),
  actions: {
    // 登录
    login() {},
    // 获取用户信息
    getInfo() {},
    // 退出系统
    logOut() {},
  },
});

export default useUserStore;
