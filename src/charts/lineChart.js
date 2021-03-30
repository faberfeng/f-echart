/**
 * 折线图
 */
import {
  cfff4,
  cfff8,
  defSize,
  cloneDeep,
  defGrid,
  defaultChart,
  hexToRgba,
  linearColor,
  radialColor,
} from './common.js'

// 最大值浮窗
function maxMark(color1, color2) {
  return {
    symbol: 'pin',
    symbolSize: 25,
    label: {
      fontSize: defSize - 8,
    },
    itemStyle: {
      color: radialColor(color1, color2, [0.5, 0.3, 0.5])
    },
    data: [{
      type: 'max',
      name: '最大值',
    }]
  }
}

// y轴默认
let yAxisItem = {
  type: 'value',
  splitNumber: 3,
  nameTextStyle: {
    color: cfff8
  },
  axisLabel: {
    fontSize: defSize - 2,
    color: cfff8
  },
  axisLine: {
    show: false,
  },
  splitLine: {
    lineStyle: {
      color: [cfff4]
    }
  },
  axisTick: {
    show: false
  },
}

/**
 * 第一个折线图
 * @param {Object} lineChart1Data 默认数据
 * @param {Array} color 颜色集合
 * @param {Array} xData 横坐标集合
 * @param {Array} sData 数据集合
 */
let lineChart1Data = {
  color: ['#FFC009', '#39E0DF'],
  xData: ['2020-01', '2020-02', '2020-03', '2020-04', '2020-05', '2020-06'],
  sData: [{
    name: 'London',
    data: [1010, 400, 1400, 300, 750, 510],
  }, {
    name: 'Paris',
    data: [800, 800, 510, 900, 600, 50]
  }]
}
export const lineChart1 = ({
  color = lineChart1Data.color,
  xData = lineChart1Data.xData,
  sData = lineChart1Data.sData,
}) => {
  let defColor = ['#362906', '#062E2D'];
  let series = sData.map((item, index) => {
    return {
      type: 'line',
      name: item.name,
      areaStyle: {
        opacity: 0
      },
      itemStyle: {
        color: linearColor(color[index % color.length], defColor[index % defColor.length]),
      },
      markPoint: maxMark(color[index % color.length], defColor[index % defColor.length]),
      data: item.data,
      symbol: "circle",
      symbolSize: 5,
    }
  })
  return {
    ...cloneDeep(defaultChart),
    grid: cloneDeep(defGrid),
    legend: {
      top: 30,
      right: '10%',
      textStyle: {
        color: cfff8,
        fontSize: defSize - 2
      },
      itemWidth: 10,
      itemHeight: 10,
      icon: "circle"
    },
    color: color,
    xAxis: {
      type: 'category',
      data: xData,
      axisTick: {
        show: false
      },
      axisLabel: {
        fontSize: defSize - 2,
        color: cfff8
      },
      axisLine: {
        show: false
      },
    },
    yAxis: cloneDeep(yAxisItem),
    series: series,
  }
}

/**
 * 第二个折线图
 * @param {Object} lineChart2Data 默认数据
 * @param {Array} color 颜色集合
 * @param {Array} xData 横坐标集合
 * @param {Array} sData 数据集合
 */
let lineChart2Data = {
  color: ['#CF6AE9', '#E9C46A'],
  xData: ['2020-01', '2020-02', '2020-03', '2020-04', '2020-05', '2020-06'],
  sData: [{
    name: 'London',
    data: [1010, 400, 1400, 300, 750, 510],
  }, {
    name: 'Paris',
    data: [800, 800, 510, 900, 600, 50]
  }],
}
export const lineChart2 = ({
  color = lineChart2Data.color,
  xData = lineChart2Data.xData,
  sData = lineChart2Data.sData,
}) => {
  let defColor = ['#2C2004', '#2E0738'];
  let series = sData.map((item, index) => {
    return {
      type: 'line',
      name: item.name,
      areaStyle: {
        opacity: 0
      },
      markPoint: maxMark(color[index % color.length], defColor[index % defColor.length]),
      data: item.data,
      symbol: "circle",
      symbolSize: 5,
    }
  })
  return {
    ...cloneDeep(defaultChart),
    grid: cloneDeep(defGrid),
    legend: {
      top: 30,
      right: '10%',
      textStyle: {
        color: cfff8,
        fontSize: defSize - 2
      },
      itemWidth: 10,
      itemHeight: 10,
      icon: "circle"
    },
    color: color,
    xAxis: {
      type: 'category',
      data: xData,
      axisTick: {
        show: false
      },
      axisLabel: {
        fontSize: defSize - 2,
        color: cfff8
      },
      axisLine: {
        show: false
      },
    },
    yAxis: cloneDeep(yAxisItem),
    series: series,
  }
}

/**
 * 第三个折线图
 * @param {Object} lineChart3Data 默认数据
 * @param {Array} color 颜色集合
 * @param {Array} xData 横坐标集合
 * @param {Array} sData 数据集合
 */
let lineChart3Data = {
  color: ['#D8745A', '#7B5AF6'],
  xData: ['2020-01', '2020-02', '2020-03', '2020-04'],
  sData: [{
    name: 'London',
    data: [1010, 400, 1400, 300],
  }, {
    name: 'Paris',
    data: [800, 800, 510, 900]
  }],
}
export const lineChart3 = ({
  color = lineChart3Data.color,
  xData = lineChart3Data.xData,
  sData = lineChart3Data.sData,
}) => {
  let series = sData.map((item, index) => {
    return {
      type: 'line',
      name: item.name,
      lineStyle: {
        color: {
          type: 'linear',
          colorStops: [{
            offset: 0,
            color: hexToRgba(color[index % color.length], 0.1)
          }, {
            offset: 0.333,
            color: hexToRgba(color[index % color.length], 1)
          }, {
            offset: 0.666,
            color: hexToRgba(color[index % color.length], 1)
          }, {
            offset: 1,
            color: hexToRgba(color[index % color.length], 0.1)
          }],
        }
      },
      areaStyle: {
        opacity: 0
      },
      data: item.data,
      symbol: "none",
    }
  })
  return {
    ...cloneDeep(defaultChart),
    grid: cloneDeep(defGrid),
    legend: {
      top: 30,
      right: '10%',
      textStyle: {
        color: cfff8,
        fontSize: defSize - 2
      },
      itemWidth: 8,
      itemHeight: 4,
      icon: "rect"
    },
    color: color,
    xAxis: {
      type: 'category',
      data: xData,
      axisTick: {
        show: false
      },
      axisLabel: {
        fontSize: defSize - 2,
        color: cfff8
      },
      axisLine: {
        show: false
      },
    },
    yAxis: cloneDeep(yAxisItem),
    series: series,
  }
}

/**
 * 第四个折线图
 * @param {Object} lineChart4Data 默认数据
 * @param {Array} color 颜色集合
 * @param {Array} xData 横坐标集合
 * @param {Array} sData 数据集合
 */
let lineChart4Data = {
  color: ['#3D5A80', '#E0FBFC'],
  xData: ['1h', '2h', '3h', '4h', '5h', '6h'],
  sData: [{
    name: 'London',
    data: [220, 460, 270, 150, 300, 210],
  }, {
    name: 'Paris',
    data: [500, 200, 240, 280, 180, 220]
  }],
}
export const lineChart4 = ({
  color = lineChart4Data.color,
  xData = lineChart4Data.xData,
  sData = lineChart4Data.sData,
}) => {
  let series = sData.map((item, index) => {
    return {
      type: 'line',
      name: item.name,
      areaStyle: {
        opacity: 0
      },
      lineStyle: {
        color: color[index % color.length]
      },
      itemStyle: {
        borderColor: color[index % color.length],
        borderWidth: 2,
      },
      data: item.data,
      symbol: "circle",
      symbolSize: 5,
    }
  })
  return {
    ...cloneDeep(defaultChart),
    grid: cloneDeep(defGrid),
    legend: {
      show: false,
    },
    color: color,
    xAxis: {
      type: 'category',
      data: xData,
      axisTick: {
        show: false
      },
      axisLabel: {
        fontSize: defSize - 2,
        color: cfff8
      },
      axisLine: {
        lineStyle: {
          color: cfff4
        }
      },
    },
    yAxis: cloneDeep(yAxisItem),
    series: series,
  }
}

/**
 * 第五个折线图
 * @param {Object} lineChart5Data 默认数据
 * @param {Array} color 颜色集合
 * @param {Array} xData 横坐标集合
 * @param {Array} sData 数据集合
 */
let lineChart5Data = {
  color: ['#F9DD5C'],
  xData: ['2020-01', '2020-02', '2020-03', '2020-04', '2020-05', '2020-06'],
  sData: [{
    name: 'London',
    data: [220, 460, 270, 150, 300, 210],
  }],
}
export const lineChart5 = ({
  color = lineChart5Data.color,
  xData = lineChart5Data.xData,
  sData = lineChart5Data.sData,
}) => {
  let series = sData.map((item, index) => {
    return {
      type: 'line',
      name: item.name,
      areaStyle: {
        opacity: 0
      },
      lineStyle: {
        color: color[index % color.length]
      },
      itemStyle: {
        color: 'none',
        borderColor: color[index % color.length],
        borderWidth: 2,
      },
      data: item.data,
      symbol: 'circle',
      symbolSize: 10,
    }
  })
  return {
    ...cloneDeep(defaultChart),
    grid: cloneDeep(defGrid),
    legend: {
      show: false,
    },
    color: color,
    xAxis: {
      type: 'category',
      data: xData,
      axisTick: {
        show: false
      },
      axisLabel: {
        fontSize: defSize - 2,
        color: cfff8
      },
      axisLine: {
        lineStyle: {
          color: cfff4
        }
      },
    },
    yAxis: cloneDeep(yAxisItem),
    series: series,
  }
}

/**
 * 第六个折线图
 * @param {Object} lineChart6Data 默认数据
 * @param {Array} color 颜色集合
 * @param {Array} xData 横坐标集合
 * @param {Array} yData 纵坐标集合
 * @param {Array} sData 数据集合
 */
let lineChart6Data = {
  color: ['#FFD665', '#00FFE8'],
  xData: ['2015', '2016', '2017', '2018', '2019', '2020'],
  yData: ['数量', '人均'],
  sData: [{
    name: '博士数',
    yAxisIndex: 0,
    data: [630, 760, 730, 740, 720, 750],
  }, {
    name: '硕士人均数',
    yAxisIndex: 1,
    data: [120, 180, 80, 160, 800, 90]
  }],
}
export const lineChart6 = ({
  color = lineChart6Data.color,
  xData = lineChart6Data.xData,
  yData = lineChart6Data.yData,
  sData = lineChart6Data.sData,
}) => {
  let yAxis = yData.map(item => {
    return {
      type: 'value',
      name: item,
      splitNumber: 3,
      nameTextStyle: {
        color: cfff8
      },
      axisLabel: {
        fontSize: defSize - 2,
        color: cfff8
      },
      axisLine: {
        show: false,
      },
      splitLine: {
        lineStyle: {
          color: [cfff4]
        }
      },
      axisTick: {
        show: false
      },
    };
  })
  let series = sData.map(item => {
    return {
      type: 'line',
      name: item.name,
      yAxisIndex: item.yAxisIndex,
      areaStyle: {
        opacity: 0
      },
      data: item.data,
      symbol: "circle",
      symbolSize: 5,
    }
  })
  return {
    ...cloneDeep(defaultChart),
    grid: cloneDeep(defGrid),
    legend: {
      top: 30,
      textStyle: {
        fontSize: defSize - 2,
        color: cfff8,
      },
      itemWidth: 10,
      itemHeight: 10,
      icon: "circle"
    },
    color: color,
    xAxis: {
      type: 'category',
      data: xData,
      axisTick: {
        show: false
      },
      axisLabel: {
        fontSize: defSize - 2,
        color: cfff8
      },
      axisLine: {
        show: false
      },
    },
    yAxis: yAxis,
    series: series,
  }
}