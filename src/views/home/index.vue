<template>
  <div class="homebody">
    <ul>
      <li v-for="item in homeData" :key="item.title">
        <h5 class="fs-18 my-ml-20" style="color: #0273d4">{{ item.title }}</h5>
        <ul class="homeUl">
          <li class="homeLi" :class="!child.routerUrl ? 'noPage' : ''" v-for="child in item.childrens" :key="child.label" @click="switchRouter(child.routerUrl)">
            <span>{{ child.label }}</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { pa } from "element-plus/es/locale/index.mjs";
import { reactive } from "vue";
import { useRouter } from "vue-router";
interface HomeProps {
  title: string;
  childrens: {
    label: string;
    routerUrl: string | null;
  }[];
}
const router = useRouter();
const homeData = reactive<HomeProps[]>([
  {
    title: "信息公开",
    childrens: [
      {
        label: "标准查询",
        routerUrl: "/publicInfo/standardQuery",
      },
      {
        label: "工程建设标准体系",
        routerUrl: null,
      },
      {
        label: "政策性文件",
        routerUrl: "/publicInfo/policyDocument",
      },
      {
        label: "通知发布",
        routerUrl: "/publicInfo/noticeRelease",
      },
      {
        label: "标准国际化",
        routerUrl: "/publicInfo/internationalStandard",
      },
    ],
  },
  {
    title: "科研管理",
    childrens: [
      {
        label: "立项申报",
        routerUrl: null,
      },
      {
        label: "项目过程管理",
        routerUrl: null,
      },
      {
        label: "科研成果展示",
        routerUrl: null,
      },
      {
        label: "立项批文",
        routerUrl: null,
      },
    ],
  },
  {
    title: "标准管理",
    childrens: [
      {
        label: "立项申报",
        routerUrl: null,
      },
      {
        label: "项目过程管理",
        routerUrl: null,
      },
      {
        label: "征求意见",
        routerUrl: "/standardManagement/takeAdvise",
      },
      {
        label: "标准发布",
        routerUrl: "/standardManagement/standardRelease",
      },
    ],
  },
  {
    title: "实施监督",
    childrens: [
      {
        label: "宣贯培训",
        routerUrl: "/applySupervision/propagandaTraining",
      },
      {
        label: "标准咨询",
        routerUrl: "/applySupervision/standardConsultation",
      },
    ],
  },
  {
    title: "团体标准",
    childrens: [
      {
        label: "团体标准信息",
        routerUrl: null,
      },
      {
        label: "工程应用信息",
        routerUrl: null,
      },
    ],
  },
]);
const switchRouter = (routerUrl: string | null) => {
  if (routerUrl) {
    const newpage: any = router.resolve({
      path: routerUrl,
    });
    window.open(newpage.href, "_blank");
    //跳转路由，需要新打开页面
  }
};
</script>

<style lang="scss" scoped>
.homebody {
  width: 50%;
  margin: 2rem auto;
  //   display: flex;
  //     flex-direction: column;
  //   align-items: center;
  //   justify-content: center;
  .homeUl {
    display: flex;
    flex-direction: row;
    align-items: center;
    // justify-content: space-between;
    justify-content: flex-start;
    text-align: left;
    flex-wrap: wrap;
    .homeLi {
      margin: 12px 20px;
      text-align: center;
      padding: 1rem;
      width: 25%;
      height: 3rem;
      line-height: 3rem;
      border-radius: 0.2rem;
      border: dashed 2px #cccccc;
      color: #0273d4;
      cursor: pointer;
      &:hover {
        background-color: #0273d4;
        border: 2px solid #0273d4;
        color: #fff;
      }
    }
    .noPage {
      color: #cccccc;
    }
  }
}
</style>
