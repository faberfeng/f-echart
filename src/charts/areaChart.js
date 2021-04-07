/**
 * 面积图
 */
import {
  cfff4,
  cfff8,
  defSize,
  defGrid,
  cloneDeep,
  defaultChart,
  hexToRgba,
  linearColor
} from './common.js'
// y轴默认
let yAxisItem = {
  type: 'value',
  splitNumber: 4,
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
 * 第一个面积图
 * @param {Object} areaChart1Data 默认数据
 * @param {Array} color 颜色集合
 * @param {Array} xData 横坐标集合
 * @param {Array} sData 数据集合
 */
let areaChart1Data = {
  color: ['#2549FF', '#D58B2C', '#AF7FFF'],
  xData: ['人工智能', '生命健康', '数字信息', '其他'],
  sData: [{
    name: '迁入',
    data: [100, 900, 700, 50],
  }, {
    name: '回迁',
    data: [400, 350, 300, 950]
  }, {
    name: '迁出',
    data: [300, 200, 750, 550]
  }]
}
export const areaChart1 = ({
  color = areaChart1Data.color,
  xData = areaChart1Data.xData,
  sData = areaChart1Data.sData,
}) => {
  let yAxis = cloneDeep(yAxisItem);
  yAxis.name = '数量';
  let series = sData.map((item, index) => {
    let obj = {
      type: 'line',
      name: item.name,
      areaStyle: {
        color: linearColor(hexToRgba(color[index], 0.8), hexToRgba(color[index], 0.01))
      },
      data: item.data,
      symbol: "none",
      symbolSize: 10,
    }
    if (index == 1) obj.symbol = "circle";
    return obj;
  })
  return {
    ...cloneDeep(defaultChart),
    tooltip: {
      trigger: 'axis'
    },
    grid: cloneDeep(defGrid),
    legend: {
      top: '5%',
      right: "10%",
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
      boundaryGap: false,
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

/**
 * 第二个面积图
 * @param {Object} areaChart2Data 默认数据
 * @param {Array} color 颜色集合
 * @param {Array} xData 横坐标集合
 * @param {Array} sData 数据集合
 */
let areaChart2Data = {
  color: ['#34DEF9', '#507BD2', '#D1BB2B', '#7C61A9'],
  xData: ['1h', '2h', '3h', '4h', '5h', '6h', '7h', '8h', '9h'],
  sData: [{
    name: '人工智能',
    data: [460, 440, 420, 400, 380, 360, 500, 780, 940]
  }, {
    name: '生命健康',
    data: [50, 340, 270, 450, 670, 260, 780, 490, 910]
  }, {
    name: '数字信息',
    data: [240, 730, 710, 710, 620, 880, 840, 800, 760],
  }, {
    name: '其他',
    data: [210, 480, 290, 420, 380, 590, 610, 390, 820]
  }],
  unit: "数量"
}
export const areaChart2 = ({
  color = areaChart2Data.color,
  xData = areaChart2Data.xData,
  sData = areaChart2Data.sData,
  unit = areaChart2Data.unit,
}) => {
  let yAxis = cloneDeep(yAxisItem);
  yAxis.name = unit;
  let series = sData.map((item, index) => {
    let obj = {
      type: 'line',
      name: item.name,
      areaStyle: {
        color: linearColor(hexToRgba(color[index], 0.8), hexToRgba(color[index], 0.01)),
        opacity: +(index == 0),
      },
      data: item.data,
      symbol: "none",
      symbolSize: 10,
    }
    if (index == 0) obj.symbol = "circle";
    return obj;
  })
  return {
    ...cloneDeep(defaultChart),
    tooltip: {
      trigger: 'axis'
    },
    grid: cloneDeep(defGrid),
    legend: {
      top: '5%',
      right: "10%",
      textStyle: {
        color: cfff8,
        fontSize: defSize - 4
      },
      itemGap: 4,
      itemWidth: 10,
      itemHeight: 10,
    },
    color: color,
    xAxis: {
      type: 'category',
      data: xData,
      boundaryGap: false,
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

/**
 * 第三个面积图
 * @param {Object} areaChart3Data 默认数据
 * @param {Array} color 颜色集合
 * @param {Array} xData 横坐标集合
 * @param {Array} sData 数据集合
 */
let areaChart3Data = {
  color: ['#B28F36'],
  xData: ['1h', '2h', '3h', '4h', '5h', '6h', '7h', '8h', '9h', '10h', '11h', '12h'],
  sData: [{
    data: [10, 132, 101, 134, 90, 120, 132, 101, 230, 210, 101, 14],
  }]
}
export const areaChart3 = ({
  color = areaChart3Data.color,
  xData = areaChart3Data.xData,
  sData = areaChart3Data.sData,
}) => {
  let yAxis = cloneDeep(yAxisItem);
  yAxis.name = 'm³';
  yAxis.splitLine = {
    show: false
  }
  let series = sData.map((item, index) => {
    return {
      smooth: true,
      type: 'line',
      areaStyle: {
        color: linearColor(hexToRgba(color[index], 0.8), hexToRgba(color[index], 0.01))
      },
      lineStyle: {
        color: linearColor(hexToRgba(color[index], 0.8), hexToRgba(color[index], 0.01))
      },
      data: item.data,
      symbol: "none",
    }
  })
  let markAreas = [{
    type: 'line',
    markArea: {
      silent: true,
      itemStyle: {
        color: hexToRgba(color[0], 0.2)
      },
      data: [
        [{
          y: '40%'
        }, {
          y: '50%'
        }]
      ]
    },
  }, {
    type: 'line',
    markArea: {
      silent: true,
      itemStyle: {
        color: hexToRgba(color[0], 0.2)
      },
      data: [
        [{
          y: '60%'
        }, {
          y: '70%'
        }]
      ]
    },
  }, {
    type: 'line',
    markArea: {
      silent: true,
      itemStyle: {
        color: hexToRgba(color[0], 0.2)
      },
      data: [
        [{
          y: '75%'
        }, {
          y: '80%'
        }]
      ]
    },
  }]
  series = [...series, ...markAreas]
  return {
    ...cloneDeep(defaultChart),
    tooltip: {
      trigger: 'axis'
    },
    grid: cloneDeep(defGrid),
    legend: {
      top: '5%',
      right: "10%",
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
      boundaryGap: false,
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
      splitLine: {
        show: false
      }
    },
    yAxis: yAxis,
    series: series,
  }
}

/**
 * 第四个面积图
 * @param {Object} areaChart4Data 默认数据
 * @param {Array} color 颜色集合
 * @param {Array} xData 横坐标集合
 * @param {Array} sData 数据集合
 */
let areaChart4Data = {
  color: ['#5F47D9', '#4BB38D', '#FF9D4D'],
  xData: ['2020-01', '2020-02', '2020-03', '2020-04', '2020-05', '2020-06'],
  sData: [{
    name: 'London',
    data: [350, 180, 375, 680, 550, 700],
  }, {
    name: 'Paris',
    data: [680, 600, 500, 270, 840, 500],
  }, {
    name: 'Row',
    data: [520, 740, 100, 210, 255, 900],
  }]
}
export const areaChart4 = ({
  color = areaChart4Data.color,
  xData = areaChart4Data.xData,
  sData = areaChart4Data.sData,
}) => {
  let series = sData.map((item, index) => {
    return {
      type: 'line',
      name: item.name,
      areaStyle: {
        color: linearColor(hexToRgba(color[index], 0.8), hexToRgba(color[index], 0.01))
      },
      data: item.data,
      symbolSize: 5,
    }
  })
  return {
    ...cloneDeep(defaultChart),
    tooltip: {
      trigger: 'axis'
    },
    grid: cloneDeep(defGrid),
    legend: {
      top: '5%',
      right: "10%",
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
      boundaryGap: false,
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
      splitLine: {
        show: false
      }
    },
    yAxis: cloneDeep(yAxisItem),
    series: series,
  }
}

/**
 * 第五个面积图
 * @param {Object} areaChart5Data 默认数据
 * @param {Array} color 颜色集合
 * @param {Array} xData 横坐标集合
 * @param {Array} sData 数据集合
 */
let areaChart5Data = {
  color: ['#269A99'],
  xData: ['2020-01', '2020-02', '2020-03', '2020-04', '2020-05'],
  sData: [{
    name: 'London',
    data: [310, 570, 440, 640, 380],
  }]
}
export const areaChart5 = ({
  color = areaChart5Data.color,
  xData = areaChart5Data.xData,
  sData = areaChart5Data.sData,
}) => {
  let series = sData.map((item, index) => {
    return {
      type: 'line',
      smooth: true,
      name: item.name,
      areaStyle: {
        color: linearColor(hexToRgba(color[index], 0.8), hexToRgba(color[index], 0.01))
      },
      data: item.data,
      symbol: 'none',
    }
  })
  return {
    ...cloneDeep(defaultChart),
    tooltip: {
      trigger: 'axis'
    },
    grid: cloneDeep(defGrid),
    legend: {
      top: '5%',
      right: "10%",
      textStyle: {
        color: cfff8,
        fontSize: defSize - 2
      },
      itemWidth: 10,
      itemHeight: 5,
      icon: "rect"
    },
    color: color,
    xAxis: {
      type: 'category',
      data: xData,
      boundaryGap: false,
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
      splitLine: {
        show: false
      }
    },
    yAxis: cloneDeep(yAxisItem),
    series: series,
  }
}

/**
 * 第六个面积图
 * @param {Object} areaChart6Data 默认数据
 * @param {Array} color 颜色集合
 * @param {Array} xData 横坐标集合
 * @param {Array} sData 数据集合
 */
let areaChart6Data = {
  color: ['#269A99', '#FF9569'],
  xData: ['2020-01', '2020-02', '2020-03', '2020-04', '2020-05'],
  sData: [{
    name: 'London',
    data: [310, 570, 440, 640, 380],
  }, {
    name: 'Row',
    data: [890, 180, 310, 290, 170],
  }]
}
export const areaChart6 = ({
  color = areaChart6Data.color,
  xData = areaChart6Data.xData,
  sData = areaChart6Data.sData,
  unit = ""
}) => {
  let yAxis = cloneDeep(yAxisItem);
  yAxis.name = unit;
  let series = sData.map((item, index) => {
    return {
      type: 'line',
      smooth: true,
      name: item.name,
      areaStyle: {
        color: linearColor(hexToRgba(color[index], 0.8), hexToRgba(color[index], 0.01))
      },
      data: item.data,
      symbolSize: 5,
    }
  })
  return {
    ...cloneDeep(defaultChart),
    tooltip: {
      trigger: 'axis'
    },
    grid: cloneDeep(defGrid),
    legend: {
      top: '5%',
      right: "10%",
      textStyle: {
        color: cfff8,
        fontSize: defSize - 2
      },
      itemWidth: 10,
      itemHeight: 5,
      icon: "rect"
    },
    color: color,
    xAxis: {
      type: 'category',
      data: xData,
      boundaryGap: false,
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
      splitLine: {
        show: false
      }
    },
    yAxis: yAxis,
    series: series,
  }
}

/**
 * 第七个面积图
 * @param {Object} areaChart7Data 默认数据
 * @param {Array} color 颜色集合
 * @param {Array} xData 横坐标集合
 * @param {Array} sData 数据集合
 */
let areaChart7Data = {
  color: ['#142EE2', '#14D1CF', '#FFD462'],
  xData: ['2020-01', '2020-02', '2020-03', '2020-04', '2020-05', '2020-06', '2020-07', '2020-08'],
  sData: [{
    name: 'London',
    data: [1300, 2800, 2900, 3500, 4400, 4600, 3800, 2700],
  }, {
    name: 'Paris',
    data: [1000, 2100, 1800, 1500, 2000, 2500, 2200, 1000],
  }, {
    name: 'Row',
    data: [200, 1500, 1100, 800, 700, 900, 950, 200],
  }]
}
export const areaChart7 = ({
  color = areaChart7Data.color,
  xData = areaChart7Data.xData,
  sData = areaChart7Data.sData,
}) => {
  let yAxis = cloneDeep(yAxisItem);
  yAxis.axisLabel = {
    show: false
  }
  let series = sData.map((item, index) => {
    return {
      type: 'line',
      smooth: true,
      name: item.name,
      areaStyle: {
        color: linearColor(hexToRgba(color[index], 0.8), hexToRgba(color[index], 0.01))
      },
      data: item.data,
      symbol: 'circle',
      symbolSize: 2,
    }
  })
  return {
    ...cloneDeep(defaultChart),
    tooltip: {
      trigger: 'axis'
    },
    grid: {
      left: '10%',
      right: '10%',
      top: 80,
      bottom: 40,
    },
    legend: {
      show: false
    },
    color: color,
    xAxis: {
      type: 'category',
      data: xData,
      boundaryGap: false,
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
      splitLine: {
        show: true,
        lineStyle: {
          color: cfff4
        }
      }
    },
    yAxis: yAxis,
    series: series,
  }
}