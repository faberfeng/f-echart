//引入路由对象
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
  RouteRecordRaw,
} from "vue-router";

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
  {
    path: "/publicInfo/noticeRelease",
    component: () => import("@/views/publicInfo/noticeRelease/index.vue"),
    meta: {
      title: "通知发布",
      transition: "animate__fadeIn",
      name: "noticeRelease",
      permission: "",
    },
  },
  {
    path: "/publicInfo/internationalStandard",
    component: () =>
      import("@/views/publicInfo/internationalStandard/index.vue"),
    meta: {
      title: "标准国际化",
      transition: "animate__fadeIn",
      name: "internationalStandard",
      permission: "",
    },
  },
  {
    path: "/standardManagement/takeAdvise",
    component: () => import("@/views/standardManagement/takeAdvise/index.vue"),
    meta: {
      title: "征求意见",
      transition: "animate__fadeIn",
      name: "takeAdvise",
      permission: "",
    },
  },
  {
    path: "/standardManagement/takeAdvise/details",
    component: () =>
      import("@/views/standardManagement/takeAdvise/details.vue"),
    meta: {
      title: "征求意见详情",
      transition: "animate__fadeIn",
      name: "takeAdviseDetails",
      permission: "",
    },
  },
  {
    path: "/standardManagement/standardRelease",
    component: () =>
      import("@/views/standardManagement/standardRelease/index.vue"),
    meta: {
      title: "标准发布",
      transition: "animate__fadeIn",
      name: "standardRelease",
      permission: "",
    },
  },
  {
    path: "/applySupervision/propagandaTraining",
    component: () =>
      import("@/views/applySupervision/propagandaTraining/index.vue"),
    meta: {
      title: "宣贯培训",
      transition: "animate__fadeIn",
      name: "propagandaTraining",
      permission: "",
    },
  },
  {
    path: "/applySupervision/propagandaTraining/details",
    component: () =>
      import("@/views/applySupervision/propagandaTraining/details.vue"),
    meta: {
      title: "宣贯详情",
      transition: "animate__fadeIn",
      name: "propagandaTrainingDetails",
      permission: "",
    },
  },
  {
    path: "/applySupervision/standardConsultation",
    component: () =>
      import("@/views/applySupervision/standardConsultation/index.vue"),
    meta: {
      title: "标准咨询",
      transition: "animate__fadeIn",
      name: "standardConsultation",
      permission: "",
    },
  },
  {
    path: "/groupStandard/applicationInfo",
    component: () => import("@/views/groupStandard/applicationInfo/index.vue"),
    meta: {
      title: "团队标准信息",
      transition: "animate__fadeIn",
      name: "applicationInfo",
      permission: "",
    },
  },
  {
    path: "/groupStandard/engineerInfo",
    component: () => import("@/views/groupStandard/engineerInfo/index.vue"),
    meta: {
      title: "工程应用信息",
      transition: "animate__fadeIn",
      name: "engineerInfo",
      permission: "",
    },
  },
];

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
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
