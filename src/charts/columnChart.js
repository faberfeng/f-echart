/**
 * 柱状图
 */

import {
  cfff4,
  cfff8,
  defSize,
  cloneDeep,
  defaultChart,
  hexToRgba,
  linearColor,
  thinColor,
  defGrid,
} from "./common";

/**
 * 第一个柱状图   
 * @param {Object} columnChart1Data 默认数据
 * @param {Array} color 颜色集合
 * @param {Array} xData 横坐标集合
 * @param {Array} sData 数据集合   1、2为柱状图   3、4 为折线图
 */
let columnChart1Data = {
  color: ['#E9C46A', '#299D8F'],
  xData: [2015, 2016, 2017, 2018, 2019, 2020],
  sData: [{
    name: '博士',
    data: [260, 620, 740, 760, 800, 900]
  }, {
    name: '硕士',
    data: [400, 500, 490, 420, 370, 400]
  }, {
    name: '博士人均数',
    data: [250, 420, 320, 350, 310, 380]
  }, {
    name: '硕士人均数',
    data: [200, 240, 180, 240, 250, 200]
  }],
}
export const columnChart1 = ({
  color = columnChart1Data.color,
  xData = columnChart1Data.xData,
  sData = columnChart1Data.sData,
}) => {
  let series = sData.map((item, index) => {
    if (index <= 1) {
      return {
        type: 'bar',
        name: item.name,
        data: item.data,
        tooltip: {
          show: false
        },
        barWidth: '25%',
        itemStyle: {
          borderRadius: [20, 20, 0, 0],
          color: linearColor(hexToRgba(color[index], 0.8), hexToRgba(color[index], 0.01))
        }
      }
    } else {
      return {
        type: 'line',
        name: item.name,
        yAxisIndex: 1,
        data: item.data,
        lineStyle: {
          shadowColor: color[(index - 2) % color.length],
          shadowBlur: 8
        }
      }
    }
  })
  return {
    ...cloneDeep(defaultChart),
    grid: {
      left: '15%',
      right: '15%',
      top: 80,
      bottom: 40,
    },
    legend: {
      show: true,
      top: '5%',
      right: '10%',
      itemWidth: 8,
      itemHeight: 4,
      textStyle: {
        color: cfff8,
        fontSize: defSize - 2,
      }
    },
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
    yAxis: [{
      type: 'value',
      name: '数量',
      splitNumber: 3,
      nameTextStyle: {
        color: cfff4
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
    }, {
      type: 'value',
      name: '人均',
      splitNumber: 3,
      nameTextStyle: {
        color: cfff4
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
    }],
    color: color,
    series: series
  }
}

/**
 * 第二个柱状图   
 * @param {Object} columnChart2Data 默认数据
 * @param {Array} color 颜色集合
 * @param {Array} xData 横坐标集合
 * @param {Array} sData 数据集合   1 为柱状图   2 为折线图
 */
let columnChart2Data = {
  color: ['#14C0FC'],
  xData: ['园区1', '园区2', '园区3', '园区4', '园区5', '园区6', '园区7'],
  sData: [{
    name: '',
    data: [260, 620, 740, 760, 800, 900, 920]
  }, {
    name: '',
    data: [250, 420, 320, 350, 310, 380, 340],
  }],
}
export const columnChart2 = ({
  color = columnChart2Data.color,
  xData = columnChart2Data.xData,
  sData = columnChart2Data.sData,
}) => {
  let series = sData.map((item, index) => {
    if (index == 0) {
      return {
        type: 'bar',
        name: item.name,
        data: item.data,
        tooltip: {
          show: false
        },
        barWidth: '25%',
        itemStyle: {
          borderRadius: [20, 20, 0, 0],
          color: linearColor(hexToRgba(color[0], 0.8), hexToRgba(color[0], 0.01))
        }
      }
    } else {
      return {
        type: 'line',
        data: item.data,
        emphasis: {
          scale: false
        },
        itemStyle: {
          color: 'none',
          borderWidth: 2,
          borderColor: cfff4
        },
        lineStyle: {
          color: color[0],
        },
        symbol: 'circle',
        symbolSize: 10,
      }
    }
  })
  return {
    ...cloneDeep(defaultChart),
    grid: cloneDeep(defGrid),
    legend: {
      show: false
    },
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
    yAxis: [{
      type: 'value',
      name: '数量',
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
    }],
    color: color,
    series: series
  }
}

/**
 * 第三个柱状图   
 * @param {Object} columnChart3Data 默认数据
 * @param {Array} color 颜色集合
 * @param {Array} xData 横坐标集合
 * @param {Array} sData 数据集合   1、2为柱状图   3、4 为折线图
 */
let columnChart3Data = {
  color: ['#FBE031', '#7BFAFF'],
  xData: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  sData: [{
    name: '',
    data: [260, 620, 740, 760, 800, 900, 920, 890, 560, 730, 250, 870]
  }, {
    name: '',
    data: [270, 630, 750, 770, 810, 910, 930, 900, 570, 740, 260, 880]
  }],
}
export const columnChart3 = ({
  color = columnChart3Data.color,
  xData = columnChart3Data.xData,
  sData = columnChart3Data.sData,
}) => {
  let series = sData.map((item, index) => {
    if (index == 0) {
      return {
        type: 'bar',
        name: item.name,
        data: item.data,
        tooltip: {
          show: false
        },
        barWidth: '25%',
        itemStyle: {
          color: linearColor(hexToRgba(color[0], 0.8), hexToRgba(color[0], 0.01))
        }
      }
    } else {
      return {
        type: 'line',
        data: item.data,
        emphasis: {
          scale: false
        },
        itemStyle: {
          color: 'none',
          borderWidth: 2,
          borderColor: cfff4
        },
        lineStyle: {
          color: color[1],
        },
        symbol: 'circle',
        symbolSize: 5,
      }
    }
  })
  return {
    ...cloneDeep(defaultChart),
    grid: cloneDeep(defGrid),
    legend: {
      show: false
    },
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
    yAxis: [{
      type: 'value',
      name: '数量：万元',
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
    }],
    color: color,
    series: series
  }
}

// 四五六数据雷同
let getSeries = (sData, color) => {
  let len = sData.length;
  let series = [];
  sData.map((item, index) => {
    let arr = [{
      name: item.name,
      type: 'custom',
      renderItem: (params, api) => {
        let location = api.coord([api.value(0), api.value(1)]);
        let xAxisPoint = api.coord([api.value(0), 0]);
        switch (len) {
          case 2:
            location = [index == 0 ? location[0] - 8 : location[0] + 8, location[1]];
            xAxisPoint = [index == 0 ? xAxisPoint[0] - 8 : xAxisPoint[0] + 8, xAxisPoint[1]];
            break;
          case 3:
            if (index == 0) {
              location = [location[0] - 12, location[1]];
              xAxisPoint = [xAxisPoint[0] - 12, xAxisPoint[1]];
            } else if (index == 1) {
              location = [location[0], location[1]];
              xAxisPoint = [xAxisPoint[0], xAxisPoint[1]];
            } else {
              location = [location[0] + 12, location[1]];
              xAxisPoint = [xAxisPoint[0] + 12, xAxisPoint[1]];
            }
            break;
          default:
            break;
        }
        return {
          type: 'group',
          children: [{
              type: 'ColCubeLeft',
              shape: {
                x: location[0],
                y: location[1],
                xAxisPoint: xAxisPoint
              },
              style: {
                fill: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0,
                    color: color[index % color.length]
                  }, {
                    offset: 0.4,
                    color: color[index % color.length]
                  }, {
                    offset: 1,
                    color: thinColor(color[index % color.length])
                  }],
                  global: false
                }
              }
            },
            {
              type: 'ColCubeRight',
              shape: {
                x: location[0],
                y: location[1],
                xAxisPoint: xAxisPoint
              },
              style: {
                fill: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0,
                    color: color[index % color.length]
                  }, {
                    offset: 0.4,
                    color: color[index % color.length]
                  }, {
                    offset: 1,
                    color: thinColor(color[index % color.length])
                  }],
                  global: false
                }
              }
            },
            {
              type: 'ColCubeTop',
              shape: {
                x: location[0],
                y: location[1],
                xAxisPoint: xAxisPoint
              },
              style: {
                fill: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0,
                    color: color[index % color.length]
                  }, {
                    offset: 0.4,
                    color: color[index % color.length]
                  }, {
                    offset: 1,
                    color: thinColor(color[index % color.length])
                  }],
                  global: false
                }
              }
            }
          ]
        }
      },
      data: item.data
    }, {
      type: 'bar',
      label: {
        show: true,
        formatter: '{c}%',
        position: 'top',
        fontSize: defSize - 4,
        color: cfff8,
        offset: [0, -5]
      },
      itemStyle: {
        color: 'transparent'
      },
      data: item.data
    }]
    series = [...series, ...arr];
  })
  return series
}

/**
 * 第四个柱状图   
 * @param {Object} columnChart4Data 默认数据
 * @param {Array} color 颜色集合
 * @param {Array} xData 横坐标集合
 * @param {Array} sData 数据集合
 */
let columnChart4Data = {
  color: ['#3C82E2', '#958733'],
  xData: ['人工智能', '生命健康', '数字信息', '其他'],
  sData: [{
    data: [40, 52, 38, 76]
  }, {
    data: [64, 81, 51, 94]
  }],
}
export const columnChart4 = ({
  color = columnChart4Data.color,
  xData = columnChart4Data.xData,
  sData = columnChart4Data.sData,
}) => {
  let series = getSeries(sData, color);
  return {
    ...cloneDeep(defaultChart),
    grid: cloneDeep(defGrid),
    legend: {
      show: false
    },
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
    yAxis: [{
      type: 'value',
      splitNumber: 5,
      max: 100,
      nameTextStyle: {
        color: cfff4
      },
      axisLabel: {
        fontSize: defSize - 2,
        color: cfff8,
        formatter: '{value}%'
      },
      axisLine: {
        lineStyle: {
          color: cfff8
        }
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
    }],
    color: color,
    series: series
  }
}

/**
 * 第五个柱状图   
 * @param {Object} columnChart5Data 默认数据
 * @param {Array} color 颜色集合
 * @param {Array} xData 横坐标集合
 * @param {Array} sData 数据集合
 */
let columnChart5Data = {
  color: ['#3C82E2', '#633CE2'],
  xData: ['人工智能', '生命健康', '数字信息', '其他'],
  sData: [{
    data: [40, 52, 38, 76]
  }, {
    data: [64, 81, 51, 94]
  }],
}
export const columnChart5 = ({
  color = columnChart5Data.color,
  xData = columnChart5Data.xData,
  sData = columnChart5Data.sData,
}) => {
  let series = getSeries(sData, color);
  return {
    ...cloneDeep(defaultChart),
    grid: cloneDeep(defGrid),
    legend: {
      show: false
    },
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
    yAxis: [{
      type: 'value',
      splitNumber: 5,
      max: 100,
      nameTextStyle: {
        color: cfff4
      },
      axisLabel: {
        fontSize: defSize - 2,
        color: cfff8,
        formatter: '{value}%'
      },
      axisLine: {
        lineStyle: {
          color: cfff4
        }
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
    }],
    color: color,
    series: series
  }
};

/**
 * 第六个柱状图   
 * @param {Object} columnChart6Data 默认数据
 * @param {Array} color 颜色集合
 * @param {Array} xData 横坐标集合
 * @param {Array} sData 数据集合
 */
let columnChart6Data = {
  color: ['#3C82E2'],
  xData: ['0-17', '18-24', '25-29', '30-34', '35-39', '40-49'],
  sData: [{
    data: [13, 37, 18, 42, 35, 35]
  }],
}
export const columnChart6 = ({
  color = columnChart6Data.color,
  xData = columnChart6Data.xData,
  sData = columnChart6Data.sData,
}) => {
  let series = getSeries(sData, color);
  return {
    ...cloneDeep(defaultChart),
    grid: cloneDeep(defGrid),
    legend: {
      show: false
    },
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
    yAxis: [{
      type: 'value',
      splitNumber: 5,
      nameTextStyle: {
        color: cfff8
      },
      axisLabel: {
        fontSize: defSize - 2,
        color: cfff8,
        formatter: '{value}%'
      },
      axisLine: {
        lineStyle: {
          color: cfff4
        }
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
    }],
    color: color,
    series: series
  }
};

/**
 * 第七个柱状图   
 * @param {Object} columnChart7Data 默认数据
 * @param {Array} color 颜色集合
 * @param {Array} xData 横坐标集合
 * @param {Array} sData 数据集合
 */
let columnChart7Data = {
  color: ['#5B8FF9', '#FF99C3', '#9270CA', '#FBE031'],
  xData: ['当日', '当月', '当季', '当年'],
  sData: [{
    name: '人工智能',
    data: [96, 77, 56, 93]
  }, {
    name: '生命健康',
    data: [56, 56, 36, 99]
  }, {
    name: '数字信息',
    data: [94, 95, 92, 74]
  }, {
    name: '其他',
    data: [56, 100, 90, 48]
  }],
}
export const columnChart7 = ({
  color = columnChart7Data.color,
  xData = columnChart7Data.xData,
  sData = columnChart7Data.sData,
}) => {
  let series = sData.map((item, index) => {
    return {
      type: 'bar',
      name: item.name,
      data: item.data,
      barWidth: `${50 / sData.length}%`,
      itemStyle: {
        color: linearColor(hexToRgba(color[index], 0.8), hexToRgba(color[index], 0.01))
      }
    }
  })
  return {
    ...cloneDeep(defaultChart),
    grid: cloneDeep(defGrid),
    legend: {
      top: '5%',
      textStyle: {
        color: cfff8,
        fontSize: defSize - 2
      },
      itemWidth: 8,
      itemHeight: 8,
    },
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
    yAxis: [{
      type: 'value',
      splitNumber: 3,
      max: 100,
      nameTextStyle: {
        color: cfff4
      },
      axisLabel: {
        fontSize: defSize - 2,
        color: cfff8,
        formatter: '{value}%'
      },
      axisLine: {
        lineStyle: {
          color: cfff8
        }
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
    }],
    color: color,
    series: series
  }
}

/**
 * 第八个柱状图   
 * @param {Object} columnChart8Data 默认数据
 * @param {Array} color 颜色集合
 * @param {Array} xData 横坐标集合
 * @param {Array} sData 数据集合
 */
let columnChart8Data = {
  color: ['#14C0FC', '#050838'],
  xData: ['人工智能', '生命健康', '数字信息', '其他'],
  sData: [{
    data: [60, 40, 46, 30]
  }],
}
export const columnChart8 = ({
  color = columnChart8Data.color,
  xData = columnChart8Data.xData,
  sData = columnChart8Data.sData,
}) => {
  let series = [];
  sData.map((item, index) => {
    let arr = [{
      type: 'bar',
      barWidth: "20%",
      itemStyle: {
        color: linearColor(hexToRgba(color[0], 0.8), hexToRgba(color[0], 0.01))
      },
      data: item.data,
      z: 8,
    }, {
      type: 'line',
      areaStyle: {
        color: linearColor(hexToRgba(color[1], 0.8), hexToRgba(color[1], 0.01))
      },
      data: item.data,
      symbolSize: 5,
    }, {
      type: 'pictorialBar',
      symbolSize: ['25%', 4],
      symbolOffset: [0, -2],
      symbolPosition: 'end',
      z: 12,
      label: {
        show: true,
        position: "top",
        formatter: "{c}%",
        fontSize: defSize - 2,
        color: cfff8
      },
      color: cfff4,
      data: item.data
    }, {
      type: 'pictorialBar',
      symbolSize: ['25%', 4],
      symbolOffset: [0, 2],
      z: 12,
      color: color[index],
      data: item.data
    }, {
      type: 'pictorialBar',
      symbolSize: ['35%', 4],
      symbolOffset: [0, 4],
      z: 10,
      itemStyle: {
        color: 'none',
        borderColor: color[0],
        borderType: 'solid',
        borderWidth: 2
      },
      data: item.data
    }, {
      type: 'pictorialBar',
      symbolSize: ['50%', 4],
      symbolOffset: [0, 6],
      z: 10,
      itemStyle: {
        color: 'none',
        borderColor: hexToRgba(color[0], 0.4),
        borderType: 'solid',
        borderWidth: 1
      },
      data: item.data
    }];
    series = [...series, ...arr]
  })
  return {
    ...cloneDeep(defaultChart),
    grid: {
      left: '10%',
      right: '10%',
      top: 80,
      bottom: 40,
    },
    legend: {
      show: false
    },
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
    yAxis: [{
      type: 'value',
      show: false
    }],
    color: color,
    series: series
  }
}

/**
 * 第九个柱状图   
 * @param {Object} columnChart9Data 默认数据
 * @param {Array} color 颜色集合
 * @param {Array} xData 横坐标集合
 * @param {Array} sData 数据集合
 */
let columnChart9Data = {
  color: ['#1A97FD', '#FDC01A', '#2EF8F1', '#843AFF', '#FF3A3A'],
  xData: ['正常', '常规', '紧急', '疑难', '告警'],
  sData: [{
    data: [10, 10, 10, 10, 10]
  }],
}
export const columnChart9 = ({
  color = columnChart9Data.color,
  xData = columnChart9Data.xData,
  sData = columnChart9Data.sData,
}) => {
  let series = [];
  sData.map((item) => {
    let arr = [{
      type: 'bar',
      barWidth: "20%",
      label: {
        show: true,
        position: "top",
        formatter: "{c}",
        fontSize: defSize - 2,
        color: cfff8
      },
      data: item.data.map((item1, index1) => {
        return {
          value: item1,
          itemStyle: {
            color: linearColor(hexToRgba(color[index1], 0.01), hexToRgba(color[index1], 0.8))
          },
        }
      }),
      z: 8,
    }, {
      type: 'pictorialBar',
      symbolSize: ['40%', 4],
      symbolOffset: [0, -15],
      z: 10,
      data: item.data.map((item1, index1) => {
        return {
          value: item1,
          itemStyle: {
            color: 'none',
            borderColor: color[index1 % color.length],
            borderType: 'solid',
            borderWidth: 2
          },
        }
      }),
    }, {
      type: 'pictorialBar',
      symbolSize: ['50%', 4],
      symbolOffset: [0, 4],
      z: 10,
      data: item.data.map((item1, index1) => {
        return {
          value: item1,
          itemStyle: {
            color: 'none',
            borderColor: color[index1 % color.length],
            borderType: 'solid',
            borderWidth: 2
          },
        }
      }),
    }];
    series = [...series, ...arr]
  })
  return {
    ...cloneDeep(defaultChart),
    grid: {
      left: '10%',
      right: '10%',
      top: 80,
      bottom: 40,
    },
    legend: {
      show: false
    },
    xAxis: {
      type: 'category',
      data: xData,
      axisTick: {
        show: false
      },
      axisLabel: {
        formatter: '15%\n{value}',
        fontSize: defSize - 2,
        color: cfff8
      },
      axisLine: {
        show: false
      },
    },
    yAxis: [{
      type: 'value',
      show: false
    }],
    color: color,
    series: series
  }
}

/**
 * 第十个柱状图
 */
let columnChart10Data = {
  color: ['#D13F3F', '#F98539', '#999999', '#42E4FE', '#9742FE'],
  xData: ['报警', '故障', '屏蔽', '动作', '隐患'],
  sData: [{
    data: [389, 312, 267, 159, 159]
  }],
}
export const columnChart10 = ({
  color = columnChart10Data.color,
  xData = columnChart10Data.xData,
  sData = columnChart10Data.sData,
}) => {
  let series = [];
  sData.map((item) => {
    let arr = [{
      name: item.name || '',
      type: 'bar',
      barWidth: 15,
      barGap: "100%",
      data: item.data.map((item1, index1) => {
        return {
          name: xData[index1],
          value: item1,
          itemStyle: {
            color: linearColor(hexToRgba(color[index1], 0.8), hexToRgba(color[index1], 0.1))
          },
        }
      }),
      z: 8,
    }, {
      name: item.name || '',
      type: 'pictorialBar',
      symbolSize: [15, 4],
      symbolOffset: [0, -2],
      symbolPosition: 'end',
      z: 12,
      label: {
        show: true,
        position: 'top',
        formatter: '{c}',
        fontSize: defSize - 2,
        color: cfff8
      },
      color: cfff8,
      data: item.data
    }, {
      name: item.name || '',
      type: 'pictorialBar',
      symbolSize: [15, 4],
      symbolOffset: [0, 2],
      z: 12,
      data: item.data.map((item1, index1) => {
        return {
          name: xData[index1],
          value: item1,
          itemStyle: {
            color: color[index1]
          },
        }
      }),
    }, {
      name: item.name || '',
      type: 'pictorialBar',
      symbolSize: [20, 4],
      symbolOffset: [0, 4],
      z: 10,
      data: item.data.map((item1, index1) => {
        return {
          name: xData[index1],
          value: item1,
          itemStyle: {
            color: 'none',
            borderColor: color[index1],
            borderType: 'solid',
            borderWidth: 2
          },
        }
      }),
    }, {
      name: item.name || '',
      type: 'pictorialBar',
      symbolSize: [25, 4],
      symbolOffset: [0, 6],
      z: 10,
      data: item.data.map((item1, index1) => {
        return {
          name: xData[index1],
          value: item1,
          itemStyle: {
            color: 'none',
            borderColor: color[index1],
            borderType: 'solid',
            borderWidth: 1
          },
        }
      }),
    }];
    series = [...series, ...arr]
  })
  return {
    ...cloneDeep(defaultChart),
    grid: {
      left: '5%',
      right: '5%',
      top: 30,
      bottom: 35,
    },
    legend: {
      show: false
    },
    xAxis: {
      type: 'category',
      data: xData,
      boundaryGap: ['10%', '10%'],
      axisTick: {
        show: false
      },
      axisLabel: {
        fontSize: defSize - 2,
        color: cfff8,
        padding: [5, 0, 0, 0]
      },
      axisLine: {
        show: false
      },
    },
    yAxis: {
      show: false
    },
    color: color,
    series: series
  }
}