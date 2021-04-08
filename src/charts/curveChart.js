/**
 * 曲线图
 */
import {
  cfff4,
  cfff8,
  defSize,
  defGrid,
  cloneDeep,
  defaultChart,
  linearColor,
  hexToRgba
} from './common'

/**
 * 第一个曲线图图
 * @param {Object} curveChart1Data 默认数据
 * @param {Array} color 颜色集合
 * @param {Array} xData 横坐标集合
 * @param {Array} sData 数据集合
 */
const curveChart1Data = {
  color: ['#5BF7E0', '#E6BE54', '#F05794'],
  xData: ['2020-01', '2020-02', '2020-03', '2020-04', '2020-05', '2020-06', '2020-07', '2020-08'],
  sData: [{
    name: 'London',
    data: [1300, 2800, 2900, 3500, 4400, 4600, 3800, 2700]
  }, {
    name: 'Paris',
    data: [1000, 2100, 1800, 1500, 2000, 2500, 2200, 1000]
  }, {
    name: 'Row',
    data: [200, 1500, 1100, 800, 700, 900, 950, 200]
  }]
}
export const curveChart1 = ({
  color = curveChart1Data.color,
  xData = curveChart1Data.xData,
  sData = curveChart1Data.sData
}) => {
  const series = sData.map((item) => {
    return {
      type: 'line',
      smooth: true,
      name: item.name,
      areaStyle: {
        opacity: 0
      },
      data: item.data,
      symbol: 'circle',
      symbolSize: 2
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
      bottom: 40
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
        show: false
      },
      axisLine: {
        show: false
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: cfff4
        }
      }
    },
    yAxis: [{
      type: 'value',
      nameTextStyle: {
        color: cfff4
      },
      axisLabel: {
        show: false
      },
      axisLine: {
        show: false
      },
      splitLine: {
        lineStyle: {
          color: [cfff4]
        }
      },
      axisTick: {
        show: false
      }
    }],
    series: series
  }
}

/**
 * 第二个曲线图图
 * @param {Object} curveChart2Data 默认数据
 * @param {Array} color 颜色集合
 * @param {Array} xData 横坐标集合
 * @param {Array} sData 数据集合
 */
const curveChart2Data = {
  color: ['#5AD8A6', '#5B8FF9'],
  xData: ['2020-01', '2020-02', '2020-03', '2020-04', '2020-05', '2020-06'],
  sData: [{
    name: 'London',
    data: [800, 350, 500, 875, 600, 0]
  }, {
    name: 'Paris',
    data: [600, 260, 900, 260, 500, 675]
  }]
}
export const curveChart2 = ({
  color = curveChart2Data.color,
  xData = curveChart2Data.xData,
  sData = curveChart2Data.sData
}) => {
  const series = sData.map((item, index) => {
    return {
      type: 'line',
      smooth: true,
      name: item.name,
      areaStyle: {
        opacity: 0
      },
      lineStyle: {
        shadowColor: color[index % color.length],
        shadowBlur: 1,
        shadowOffsetY: 3
      },
      data: item.data,
      symbolSize: 5
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
      right: '10%',
      itemWidth: 10,
      itemHeight: 8,
      textStyle: {
        fontSize: defSize - 2,
        color: cfff8
      }
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
      splitLine: {
        show: false
      }
    },
    yAxis: [{
      type: 'value',
      nameTextStyle: {
        color: cfff4
      },
      axisLabel: {
        fontSize: defSize - 2,
        color: cfff8
      },
      axisLine: {
        show: false
      },
      splitLine: {
        lineStyle: {
          color: [cfff4]
        }
      },
      axisTick: {
        show: false
      }
    }],
    series: series
  }
}

/**
 * 第三个曲线图图
 * @param {Object} curveChart3Data 默认数据
 * @param {Array} color 颜色集合
 * @param {Array} xData 横坐标集合
 * @param {Array} sData 数据集合
 */
const curveChart3Data = {
  color: ['#D8885A', '#7A5BF9'],
  xData: ['2020-01', '2020-02', '2020-03', '2020-04', '2020-05', '2020-06'],
  sData: [{
    name: 'London',
    data: [800, 350, 500, 875, 600, 0]
  }, {
    name: 'Paris',
    data: [600, 260, 900, 260, 500, 675]
  }]
}
export const curveChart3 = ({
  color = curveChart3Data.color,
  xData = curveChart3Data.xData,
  sData = curveChart3Data.sData
}) => {
  const series = sData.map((item, index) => {
    return {
      type: 'line',
      smooth: true,
      name: item.name,
      areaStyle: {
        opacity: 0
      },
      lineStyle: {
        shadowColor: color[index % color.length],
        shadowBlur: 1,
        shadowOffsetY: 3
      },
      data: item.data,
      symbolSize: 5
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
      right: '10%',
      itemWidth: 10,
      itemHeight: 8,
      textStyle: {
        fontSize: defSize - 2,
        color: cfff8
      }
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
      splitLine: {
        show: false
      }
    },
    yAxis: [{
      type: 'value',
      nameTextStyle: {
        color: cfff4
      },
      axisLabel: {
        fontSize: defSize - 2,
        color: cfff8
      },
      axisLine: {
        show: false
      },
      splitLine: {
        lineStyle: {
          color: [cfff4]
        }
      },
      axisTick: {
        show: false
      }
    }],
    series: series
  }
}

/**
 * 第四个曲线图图
 * @param {Object} curveChart4Data 默认数据
 * @param {Array} color 颜色集合
 * @param {Array} xData 横坐标集合
 * @param {Array} sData 数据集合
 */
const curveChart4Data = {
  color: ['#40B5FF', '#FEBC0F'],
  xData: ['2020-01', '2020-02', '2020-03', '2020-04', '2020-05', '2020-06'],
  sData: [{
    name: 'London',
    data: [1024, 545, 1394, 296, 778, 519]
  }, {
    name: 'Paris',
    data: [794, 790, 519, 876, 609, 22]
  }]
}
export const curveChart4 = ({
  color = curveChart4Data.color,
  xData = curveChart4Data.xData,
  sData = curveChart4Data.sData
}) => {
  const areaStyleArr = [{
    opacity: 0
  }, {
    color: linearColor(hexToRgba(color[1], 0.8), hexToRgba(color[1], 0.01))
  }]
  const series = sData.map((item, index) => {
    return {
      type: 'line',
      smooth: true,
      name: item.name,
      areaStyle: areaStyleArr[index],
      label: {
        show: true,
        color: cfff8,
        fontSize: defSize - 8
      },
      data: item.data,
      symbolSize: 5
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
      right: '10%',
      itemWidth: 10,
      itemHeight: 8,
      textStyle: {
        fontSize: defSize - 2,
        color: cfff8
      }
    },
    color: color,
    xAxis: {
      type: 'category',
      data: xData,
      boundaryGap: true,
      axisTick: {
        show: false
      },
      axisLabel: {
        fontSize: defSize - 2,
        color: cfff8
      },
      axisLine: {
        color: cfff4
      },
      splitLine: {
        show: false
      }
    },
    yAxis: [{
      type: 'value',
      nameTextStyle: {
        color: cfff4
      },
      axisLabel: {
        fontSize: defSize - 2,
        color: cfff8
      },
      axisLine: {
        show: false
      },
      splitLine: {
        color: cfff4
      },
      axisTick: {
        show: false
      }
    }],
    series: series
  }
}

/**
 * 第五个曲线图图
 * @param {Object} curveChart5Data 默认数据
 * @param {Array} color 颜色集合
 * @param {Array} xData 横坐标集合
 * @param {Array} sData 数据集合
 */
const curveChart5Data = {
  color: ['#D58B2C'],
  xData: ['人工智能', '生命健康', '数字信息', '其他'],
  sData: [{
    data: [400, 750, 260, 970]
  }]
}
export const curveChart5 = ({
  color = curveChart5Data.color,
  xData = curveChart5Data.xData,
  sData = curveChart5Data.sData
}) => {
  const series = sData.map((item, index) => {
    return {
      type: 'line',
      smooth: true,
      name: item.name,
      areaStyle: {
        opacity: 0
      },
      lineStyle: {
        color: color[index % color.length],
        shadowColor: color[index % color.length],
        shadowBlur: 4,
        shadowOffsetY: 4
      },
      itemStyle: {
        color: 'none',
        borderColor: color[index % color.length],
        borderWidth: 2
      },
      data: item.data,
      symbol: 'circle',
      symbolSize: 8
    }
  })
  return {
    ...cloneDeep(defaultChart),
    tooltip: {
      trigger: 'axis'
    },
    grid: cloneDeep(defGrid),
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
        show: false
      },
      splitLine: {
        show: false
      }
    },
    yAxis: [{
      type: 'value',
      name: '数量',
      nameTextStyle: {
        color: cfff4
      },
      axisLabel: {
        fontSize: defSize - 2,
        color: cfff8
      },
      axisLine: {
        show: false
      },
      splitLine: {
        lineStyle: {
          color: [cfff4]
        }
      },
      axisTick: {
        show: false
      }
    }],
    series: series
  }
}

/**
 * 第六个曲线图图
 * @param {Object} curveChart6Data 默认数据
 * @param {Array} color 颜色集合
 * @param {Array} xData 横坐标集合
 * @param {Array} sData 数据集合
 */
const curveChart6Data = {
  color: ['#465EF0', '#EEBB46'],
  xData: ['1h', '2h', '3h', '4h', '5h', '6h', '7h', '8h', '9h', '10h', '11h', '12h'],
  sData: [{
    data: [4, 5.5, 7.5, 8, 7.8, 6.5, 9.1, 12.4, 7.4, 2.5, 1.2, 3]
  }, {
    data: [1.2, 1.2, 1.3, 1.4, 1.2, 1.2, 2.5, 3.7, 3.2, 5.6, 2.4, 2.2]
  }]
}
export const curveChart6 = ({
  color = curveChart6Data.color,
  xData = curveChart6Data.xData,
  sData = curveChart6Data.sData
}) => {
  const series = sData.map((item) => {
    return {
      type: 'line',
      smooth: true,
      name: item.name,
      areaStyle: {
        opacity: 0
      },
      data: item.data,
      symbol: 'none'
    }
  })
  return {
    ...cloneDeep(defaultChart),
    tooltip: {
      trigger: 'axis'
    },
    grid: cloneDeep(defGrid),
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
        color: cfff4
      },
      splitLine: {
        show: false
      }
    },
    yAxis: [{
      type: 'value',
      nameTextStyle: {
        color: cfff4
      },
      axisLabel: {
        fontSize: defSize - 2,
        color: cfff8
      },
      axisLine: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      }
    }],
    series: series
  }
}

/**
 * 第七个曲线图图
 * @param {Array} color 颜色集合
 * @param {Array} xData 横坐标集合
 * @param {Array} sData 数据集合
 */
const curveChart7Data = {
  color: ['#D13F3F', '#F98539', '#999999', '#42E4FE', '#9742FE'],
  xData: ['01-23', '01-24', '01-25', '01-26', '01-27', '01-28', '01-29'],
  sData: [{
    name: '报警',
    data: [240, 730, 710, 710, 620, 880, 840]
  }, {
    name: '故障',
    data: [50, 340, 270, 450, 670, 260, 780]
  }, {
    name: '屏蔽',
    data: [460, 440, 420, 400, 380, 360, 500]
  }, {
    name: '动作',
    data: [210, 480, 290, 420, 380, 590, 610]
  }, {
    name: '隐患',
    data: [20, 40, 20, 20, 30, 50, 10]
  }]
}
export const curveChart7 = ({
  color = curveChart7Data.color,
  xData = curveChart7Data.xData,
  sData = curveChart7Data.sData
}) => {
  const series = sData.map((item, index) => {
    return {
      type: 'line',
      name: item.name,
      areaStyle: {
        opacity: 0
      },
      itemStyle: {
        color: hexToRgba(color[index], index == 0 ? 0.8 : 0.4)
      },
      lineStyle: {
        width: index == 0 ? 2 : 1
      },
      label: {
        show: index == 0,
        color: cfff8,
        fontSize: defSize - 6
      },
      symbol: index == 0 ? 'circle' : 'none',
      showSymbol: true,
      smooth: true,
      data: item.data
    }
  })
  return {
    ...cloneDeep(defaultChart),
    tooltip: {
      trigger: 'axis'
    },
    grid: {
      bottom: 40
    },
    legend: {
      top: '5%',
      right: 10,
      textStyle: {
        color: cfff8,
        fontSize: defSize - 2
      },
      itemWidth: 6,
      itemHeight: 2
    },
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
      }
    },
    yAxis: {
      name: '报警数',
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
        show: false
      },
      splitLine: {
        lineStyle: {
          color: [cfff4]
        }
      },
      axisTick: {
        show: false
      }
    },
    color: color,
    series: series
  }
}
