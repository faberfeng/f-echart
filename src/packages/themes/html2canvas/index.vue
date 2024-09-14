<template>
  <a-row type="flex" align="top">
    <div class="col">
      <template v-for="(item, index) in nameData" :key="index">
        <template v-for="(arr, aindex) in statusData" :key="aindex">
          <a-row
            type="flex"
            justify="end"
            align="middle"
            :id="`${item}${arr.join('')}`"
            :class="`${item} my-pr-5`"
          >
            <i
              class="my-mr-2 iconfont iconnenghaopingtai fs-16 fc-second"
              v-show="arr[0]"
            ></i>
            <i
              class="my-mr-2 iconfont iconxiaofangshuan fs-16 fc-warn"
              v-show="arr[1]"
            ></i>
            <i
              class="my-mr-2 iconfont icontingchepingtai fs-16 fc-fff8"
              v-show="arr[2]"
            ></i>
          </a-row>
        </template>
      </template>
    </div>
    <div @click="createImg" class="my-mt-20 my-px-10 my-py-5 bg-primary cursor">
      生成
    </div>
    <div class="col">
      <template v-for="(item, index) in imgData" :key="index">
        <div>
          <img :src="item.url" style="height: 34px" />
          <a :href="item.url" :download="item.id">下载</a>
        </div>
      </template>
    </div>
    <!-- <div
      @click="downloadImg"
      class="my-mt-20 my-px-10 my-py-5 bg-primary cursor"
      v-show="imgData.length"
    >
      下载
    </div> -->
  </a-row>
</template>
<script>
import html2canvas from "html2canvas";
import { reactive } from "vue";
export default {
  setup() {
    let nameData = ["parkbgSmall", "parkbgMedium", "parkbgLarge"];
    let statusData = [
      [0, 0, 0],
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
      [1, 1, 0],
      [1, 0, 1],
      [0, 1, 1],
      [1, 1, 1],
    ];

    let imgData = reactive([]);
    async function createImg() {
      imgData.length = 0;
      for await (let item of nameData) {
        for await (let arr of statusData) {
          let id = `${item}${arr.join("")}`;
          let canvas = await html2canvas(document.getElementById(id), {
            backgroundColor: "none",
          });
          imgData.push({
            id: id,
            url: canvas.toDataURL(),
          });
        }
      }
      // nameData.forEach((item) => {
      //   statusData.forEach((arr) => {
      //     html2canvas(document.getElementById(id), {
      //       backgroundColor: "none",
      //     }).then(function(canvas) {
      //       let imgUrl = canvas.toDataURL();
      //       imgData.push({
      //         id: id,
      //         url: imgUrl,
      //       });
      //     });
      //   });
      // });
    }

    function downloadImg() {
      let dom = document.createElement("a");
      imgData.forEach((item) => {
        dom.setAttribute("href", item.url);
        dom.setAttribute("download", item.id);
        dom.click();
      });
    }

    return {
      nameData,
      statusData,

      createImg,
      downloadImg,
      imgData,
    };
  },
};
</script>
<style lang="scss" scoped>
.parkbgSmall {
  width: 185px;
  height: 34px;
  background: url("../../../assets/imgs/parkBgSmall.png") center no-repeat;
  background-size: 100% 100%;
}
.parkbgMedium {
  width: 257px;
  height: 34px;
  background: url("../../../assets/imgs/parkBgMedium.png") center no-repeat;
  background-size: 100% 100%;
}
.parkbgLarge {
  width: 377px;
  height: 34px;
  background: url("../../../assets/imgs/parkBgLarge.png") center no-repeat;
  background-size: 100% 100%;
}
</style>
