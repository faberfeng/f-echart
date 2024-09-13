//引入路由对象
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

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
    redirect: "/nav",
    // redirect: "/home",
    // redirect: "/admin/standardMgt",
  },
  {
    path: "/nav",
    component: () => import("@/views/nav/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
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
