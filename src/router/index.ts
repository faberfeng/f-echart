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
    path: "/admin",
    component: () => import("@/views/index.vue"),
    meta: {
      title: "后台管理系统",
      transition: "animate__fadeIn",
      name: "admin",
      permission: "admin",
    },
    children: [
      //标准管理
      {
        path: "/admin/standardMgt",
        component: () => import("@/views/admin/standardMgt/index.vue"),
        meta: {
          title: "标准管理",
          transition: "animate__fadeIn",
          name: "standardMgt",
          permission: "standardMgt",
        },
      },
      //新增标准
      {
        path: "/admin/addStandard/detail",
        component: () => import("@/views/admin/detail/index.vue"),
        meta: {
          title: "新增标准",
          transition: "animate__fadeIn",
          name: "addStandard",
          permission: "addStandard",
        },
      },
      //标签管理
      {
        //动态路由
        path: `/admin/labelMgt/:id`,
        component: () => import("@/views/admin/labelMgt/index.vue"),
        meta: {
          title: "标签管理",
          transition: "animate__fadeIn",
          name: "labelMgt",
          permission: "labelMgt",
        },
      },
      //基础分类和专题分类
      {
        //动态路由
        path: `/admin/labelMgtTree/:id`,
        component: () => import("@/views/admin/labelMgt/tree.vue"),
        meta: {
          title: "标签管理树结构",
          transition: "animate__fadeIn",
          name: "labelMgtTree",
          permission: "labelMgtTree",
        },
      },
      // #日志管理
      {
        path: "/admin/logMgt",
        component: () => import("@/views/admin/logMgt/index.vue"),
        meta: {
          title: "日志管理",
          transition: "animate__fadeIn",
          name: "logMgt",
          permission: "logMgt",
        },
      },
    ],
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
