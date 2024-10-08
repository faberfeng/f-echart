export const cfff2 = "rgba(255,255,255,0.2)";
export const cfff4 = "rgba(255,255,255,0.4)";
export const cfff6 = "rgba(255,255,255,0.6)";
export const cfff8 = "rgba(255,255,255,0.8)";
export const defSize = 14;

// 深拷贝
export const cloneDeep = (object) => {
  if (!object) return object;
  const target = object instanceof Array ? [] : {};
  for (const [key, val] of Object.entries(object)) {
    target[key] = typeof val === "object" ? cloneDeep(val) : val;
  }
  return target;
};

// 图表基本配置
export const defaultChart = {
  tooltip: {
    show: true,
  },
  animation: true,
  animationDuration: 1000,
  animationEasing: "elasticOut",
  animationEasingUpdate: "elasticOut",
  animationDurationUpdate: 6000,
  animationDelayUpdate: function(idx) {
    return idx * 50;
  },
};

export const defGrid = {
  left: "15%",
  right: "10%",
  top: "20%",
  bottom: 25,
};

// 图表图例
export const legendObj = {
  top: {
    legend: {
      top: "5%",
      right: "auto",
    },
    center: ["50%", "60%"],
  },
  bottom: {
    legend: {
      bottom: "5%",
      right: "auto",
    },
    center: ["50%", "40%"],
  },
  left: {
    legend: {
      orient: "vertical",
      top: "middle",
      left: "5%",
    },
    center: ["60%", "50%"],
  },
  right: {
    legend: {
      orient: "vertical",
      top: "middle",
      right: "5%",
    },
    center: ["40%", "50%"],
  },
};

/**
 * 获取数组最大字符串长度
 * @param {Array} arr xData
 */
export const getMaxLen = (arr) => {
  let len = 0;
  arr.forEach((item) => {
    if (item.length && item.length > len) len = item.length;
  });
  return len;
};

/**
 * 计算左边距
 * @param {Array} arr xData
 */
export const maxGridLeft = (arr) => {
  const len = getMaxLen(arr);
  if (len < 6) return 14 * (len + 1);
  else return 14 * len;
};

/**
 * 颜色转换rgba
 * @param {String} hex 颜色值
 * @param {Number} opacity 透明度
 */
export const hexToRgba = (hex, opacity) => {
  let rgbaColor = "";
  const reg = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
  if (reg.test(hex)) {
    rgbaColor = `rgba(${parseInt("0x" + hex.slice(1, 3))},${parseInt(
      "0x" + hex.slice(3, 5)
    )},${parseInt("0x" + hex.slice(5, 7))},${opacity || 1})`;
  } else if ((hex + "").includes("rgb(")) {
    rgbaColor = `rgba(${hex.slice(4, -1)},${opacity || 1})`;
  } else {
    rgbaColor = hex;
  }
  return rgbaColor;
};

/**
 * 颜色变淡
 * @param {String} color 颜色值
 */
export const thinColor = (color) => {
  let arr = hexToRgba(color, 1)
    .split("(")[1]
    .split(",")
    .slice(0, 3);
  const numArr = [1.2, 1.8, 2];
  arr = arr.map((item, index) => {
    return Math.floor(item * numArr[index]);
  });
  return `rgb(${arr[0]},${arr[1]},${arr[2]})`;
};

/**
 * 线性渐变
 * @param {String} color1 颜色值1
 * @param {String} color2 颜色值2
 * @param {Array} location 位置  横向或竖向  默认竖直方向
 */
export const linearColor = (color1, color2, location) => {
  const [x, y, x2, y2] = location || [0, 0, 0, 1];
  return {
    type: "linear",
    x: x,
    y: y,
    x2: x2,
    y2: y2,
    colorStops: [
      {
        offset: 0,
        color: color1,
      },
      {
        offset: 1,
        color: color2,
      },
    ],
    global: false,
  };
};

/**
 * 径向渐变
 * @param {String} color1 颜色值
 * @param {String} color2 颜色值
 */
export const radialColor = (color1, color2, location) => {
  const [x, y, r] = location || [0.5, 0.5, 0.5];
  return {
    type: "radial",
    x: x,
    y: y,
    r: r,
    colorStops: [
      {
        offset: 0,
        color: color1,
      },
      {
        offset: 1,
        color: color2,
      },
    ],
    global: false,
  };
};
