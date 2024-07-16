//引入路由对象
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    title: string;
    transition: string;
    name: string;
    permission: string;
  }
}

//路由数组的类型 RouteRecordRaw
// 定义一些路由
// 每个路由都需要映射到一个组件。
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import("@/views/home/index.vue"),
    meta: {
      title: "上海工程建设标准管理系统导航页",
      transition: "animate__fadeIn",
      name: "home",
      permission: "",
    },
  },
  {
    path: "/a",
    component: () => import("@/views/example/index.vue"),
    meta: {
      title: "上海工程建设标准管理系统",
      transition: "animate__fadeIn",
      name: "example",
      permission: "",
    },
  },

  {
    path: "/publicInfo/standardQuery",
    component: () => import("@/views/publicInfo/standardQuery/index.vue"),
    meta: {
      title: "标准查询",
      transition: "animate__fadeIn",
      name: "standardQuery",
      permission: "",
    },
  },
  {
    path: "/publicInfo/policyDocument",
    component: () => import("@/views/publicInfo/policyDocument/index.vue"),
    meta: {
      title: "政策性文件",
      transition: "animate__fadeIn",
      name: "policyDocument",
      permission: "",
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// 白名单
const whileList = ["/login", "/register", "/", "/permission", "/404"];

router.beforeEach(async (to, from, next) => {
  // 跳转页面修改标题
  if (to.meta.title) {
    // 判断是否有标题
    document.title = to.meta.title;
  }
  next();
  // // 获取令牌数据
  // let token = sessionStorage.getItem("token");

  // // 白名单直接进入
  // if (whileList.includes(to.path)) {
  //   next();
  //   return;
  // }
  // // 查看令牌数据，没有令牌，进入登录
  // if (!token) {
  //   next({
  //     path: "/login",
  //   });
  //   return;
  // }
});

//导出router
export default router;
