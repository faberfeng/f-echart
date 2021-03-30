/**
 * 条状图
 */
import {
  cfff4,
  cfff8,
  defSize,
  cloneDeep,
  defaultChart,
  hexToRgba,
  thinColor,
  linearColor,
  cfff2,
  defGrid,
} from "./common";

/**
 * 获取最大值集合
 * @param {Array} data 原数组 sData
 * @param {Number} num 比例  倍数/10  例：1.5倍传  0.15
 */
const getMax = (data, num) => {
  let max = 0,
    len = data[0].data.length;
  data.forEach(item => {
    item.data.forEach(item1 => {
      if (item1 > max) max = item1;
    })
  });
  return Array(len).fill(Math.ceil(max * num) * 10)
}

/**
 * 第一个条状图
 * @param {Object} barChart1Data 默认数据
 * @param {Array} color 颜色集合
 * @param {Array} xData 横坐标集合
 * @param {Array} sData 数据集合
 */
let barChart1Data = {
  color: ['#8B521F', '#0038A7'],
  xData: ['2016', '2017', '2018', '2019', '2020'],
  sData: [{
    name: '已申请专利',
    data: [600, 450, 350, 550, 600]
  }, {
    name: '已授权专利',
    data: [400, 350, 400, 300, 500]
  }],
}
export const barChart1 = ({
  color = barChart1Data.color,
  xData = barChart1Data.xData,
  sData = barChart1Data.sData,
  total,
}) => {
  let maxArr = total ? Array(xData.length).fill(total) : getMax(sData, 0.15),
    len = sData.length,
    series = [];
  sData.map((item, index) => {
    let arr = [{
      name: item.name,
      type: 'custom',
      renderItem: (params, api) => {
        let location = api.coord([api.value(0), api.value(1)]);
        let xAxisPoint = api.coord([0, api.value(1)]);
        if (len == 1) {
          location = [location[0] + 8, location[1]];
          xAxisPoint = [xAxisPoint[0] + 8, xAxisPoint[1]];
        } else {
          location = [location[0] + 8, index == 0 ? location[1] - 7 : location[1] + 7];
          xAxisPoint = [xAxisPoint[0] + 8, index == 0 ? xAxisPoint[1] - 7 : xAxisPoint[1] + 7];
        }
        return {
          type: 'group',
          children: [{
              type: 'RowCubeTop',
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
                  x2: 1,
                  y2: 0,
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
              type: 'RowCubeBottom',
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
                  x2: 1,
                  y2: 0,
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
              type: 'RowCubeRight',
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
                  x2: 1,
                  y2: 0,
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
      name: item.name,
      type: 'custom',
      renderItem: (params, api) => {
        let location = api.coord([api.value(0), api.value(1)])
        let xAxisPoint = api.coord([0, api.value(1)]);
        if (len == 1) {
          location = [location[0] + 8, location[1]];
          xAxisPoint = [xAxisPoint[0] + 8, xAxisPoint[1]];
        } else {
          location = [location[0] + 8, index == 0 ? location[1] - 7 : location[1] + 7];
          xAxisPoint = [xAxisPoint[0] + 8, index == 0 ? xAxisPoint[1] - 7 : xAxisPoint[1] + 7];
        }
        return {
          type: 'group',
          children: [{
              type: 'RowCubeTop',
              shape: {
                x: location[0],
                y: location[1],
                xAxisPoint: xAxisPoint
              },
              style: {
                fill: 'rgba(255,255,255,.1)'
              }
            },
            {
              type: 'RowCubeBottom',
              shape: {
                x: location[0],
                y: location[1],
                xAxisPoint: xAxisPoint
              },
              style: {
                fill: 'rgba(255,255,255,.2)'
              }
            },
            {
              type: 'RowCubeRight',
              shape: {
                x: location[0],
                y: location[1],
                xAxisPoint: xAxisPoint
              },
              style: {
                fill: 'rgba(255,255,255,.3)'
              }
            }
          ]
        }
      },
      data: maxArr
    }]
    series = [...series, ...arr]
  })
  return {
    ...cloneDeep(defaultChart),
    grid: cloneDeep(defGrid),
    legend: {
      show: true,
      top: 40,
      right: '10%',
      textStyle: {
        color: cfff8,
        fontSize: defSize - 2
      },
      itemWidth: 10,
      itemHeight: 6,
      icon: "rect"
    },
    color: color,
    xAxis: {
      name: '数量',
      type: 'value',
      boundaryGap: ['10%', '10%'],
      axisLabel: {
        color: cfff8
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
    },
    yAxis: {
      name: '年份',
      type: 'category',
      boundaryGap: true,
      data: xData,
      axisLine: {
        lineStyle: {
          color: cfff8
        }
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false,
      },
    },
    series: series,
  }
}

/**
 * 第二个条状图
 * @param {Object} barChart2Data 默认数据
 * @param {Array} color 颜色集合
 * @param {Array} xData 横坐标集合
 * @param {Array} sData 数据集合
 */
let barChart2Data = {
  color: ['#8B521F'],
  xData: ['人工智能', '生命健康', '数字信息', '其他'],
  sData: [{
    name: '',
    data: [90, 25, 45, 75]
  }],
}
export const barChart2 = ({
  color = barChart2Data.color,
  xData = barChart2Data.xData,
  sData = barChart2Data.sData,
  total,
}) => {
  let maxArr = total ? Array(xData.length).fill(total) : getMax(sData, 0.15),
    series = [];
  sData.map((item, index) => {
    let arr = [{
      name: item.name,
      type: 'custom',
      renderItem: (params, api) => {
        let location = api.coord([api.value(0), api.value(1)]);
        let xAxisPoint = api.coord([0, api.value(1)]);
        location = [location[0] + 8, location[1]];
        xAxisPoint = [xAxisPoint[0] + 8, xAxisPoint[1]];
        return {
          type: 'group',
          children: [{
              type: 'RowCubeTop',
              shape: {
                x: location[0],
                y: location[1],
                xAxisPoint: xAxisPoint
              },
              style: {
                fill: linearColor(color[index % color.length], thinColor(color[index % color.length]), [0, 0, 1, 0])
              }
            },
            {
              type: 'RowCubeBottom',
              shape: {
                x: location[0],
                y: location[1],
                xAxisPoint: xAxisPoint
              },
              style: {
                fill: linearColor(color[index % color.length], thinColor(color[index % color.length]), [0, 0, 1, 0])
              }
            },
            {
              type: 'RowCubeRight',
              shape: {
                x: location[0],
                y: location[1],
                xAxisPoint: xAxisPoint
              },
              style: {
                fill: linearColor(color[index % color.length], thinColor(color[index % color.length]), [0, 0, 1, 0])
              }
            }
          ]
        }
      },
      data: item.data
    }, {
      name: item.name,
      type: 'custom',
      renderItem: (params, api) => {
        let location = api.coord([api.value(0), api.value(1)])
        let xAxisPoint = api.coord([0, api.value(1)]);
        location = [location[0] + 8, location[1]];
        xAxisPoint = [xAxisPoint[0] + 8, xAxisPoint[1]];
        return {
          type: 'group',
          children: [{
              type: 'RowCubeTop',
              shape: {
                x: location[0],
                y: location[1],
                xAxisPoint: xAxisPoint
              },
              style: {
                fill: 'rgba(255,255,255,.1)'
              }
            },
            {
              type: 'RowCubeBottom',
              shape: {
                x: location[0],
                y: location[1],
                xAxisPoint: xAxisPoint
              },
              style: {
                fill: 'rgba(255,255,255,.2)'
              }
            },
            {
              type: 'RowCubeRight',
              shape: {
                x: location[0],
                y: location[1],
                xAxisPoint: xAxisPoint
              },
              style: {
                fill: 'rgba(255,255,255,.3)'
              }
            }
          ]
        }
      },
      data: maxArr
    }]
    series = [...series, ...arr]
  })
  let yData = maxArr.map((item, index) => {
    return `${Math.round(sData[0].data[index] / item)}%`
  })
  let yAxis = [{
    inverse: true,
    type: 'category',
    data: xData,
    axisLine: {
      show: false,
      lineStyle: {
        color: cfff8
      }
    },
    axisTick: {
      show: false,
    },
  }, {
    inverse: true,
    type: 'category',
    data: yData,
    axisLine: {
      show: false,
      lineStyle: {
        color: cfff8
      }
    },
    axisTick: {
      show: false,
    },
  }]
  return {
    ...cloneDeep(defaultChart),
    grid: {
      left: '25%',
      right: '15%',
      top: 40,
      bottom: 40,
    },
    legend: {
      show: false
    },
    color: color,
    xAxis: {
      type: 'value',
      show: false,
    },
    yAxis: yAxis,
    series: series,
  }
}

/**
 * 第三个条状图
 * @param {Object} barChart3Data 默认数据
 * @param {Array} color 颜色集合
 * @param {Array} xData 横坐标集合
 * @param {Array} sData 数据集合
 */
let barChart3Data = {
  color: ['#10E7FF', '#FF704A', '#367CED', '#F9C34B', '#FFFFFF'],
  xData: ['正高', '副高', '中级', '初级', '其他'],
  sData: [{
    name: '',
    data: [4321, 4212, 6435, 1042, 2342]
  }],
  max: 1
}
export const barChart3 = ({
  color = barChart3Data.color,
  xData = barChart3Data.xData,
  sData = barChart3Data.sData,
  total,
}) => {
  let maxArr = total ? Array(xData.length).fill(total) : getMax(sData, 0.15),
    series = [];
  sData.map(item => {
    let arr = [{
      type: 'bar',
      yAxisIndex: 0,
      data: item.data,
      barWidth: 4,
      itemStyle: {
        color: function (params) {
          return color[params.dataIndex % color.length]
        },
      },
    }, {
      type: 'bar',
      yAxisIndex: 1,
      data: maxArr.map((item1, index1) => {
        return {
          value: item1,
          itemStyle: {
            color: 'none',
            borderColor: color[index1 % color.length],
            borderWidth: 1,
          }
        }
      }),
      barWidth: 10,
    }]
    series = [...series, ...arr]
  })
  return {
    ...cloneDeep(defaultChart),
    grid: {
      left: '20%',
      right: '20%',
      top: 40,
      bottom: 40,
    },
    legend: {
      show: false
    },
    color: color,
    xAxis: {
      type: 'value',
      show: false,
    },
    yAxis: [{
      inverse: true,
      type: 'category',
      data: xData,
      axisLine: {
        show: false,
        lineStyle: {
          color: cfff8
        }
      },
      axisTick: {
        show: false,
      },
    }, {
      inverse: true,
      type: 'category',
      data: sData[0].data,
      axisLine: {
        show: false,
        lineStyle: {
          color: function (params) {
            return color[sData[0].data.indexOf(+params) % color.length]
          },
        }
      },
      axisTick: {
        show: false,
      },
    }],
    series: series,
  }
}

/**
 * 第四个条状图
 * @param {Object} barChart4Data 默认数据
 * @param {Array} color 颜色集合
 * @param {Array} xData 横坐标集合
 * @param {Array} sData 数据集合
 */
let barChart4Data = {
  color: ['#FF3C3C', '#3AC4E8'],
  xData: ['设备离线率', '人工督查单生成占比', '人工督查单响应占比', '电子督查单响应占比', '报警事件响应占比'],
  sData: [{
    data: [70, 90, 35, 72, 20]
  }],
}
export const barChart4 = ({
  color = barChart4Data.color,
  xData = barChart4Data.xData,
  sData = barChart4Data.sData,
  status = [1, 1, 0, 1, 0],
}) => {
  let maxArr = Array(xData.length).fill(100);
  let series = [{
    name: '不合格',
    type: 'bar',
    yAxisIndex: 0,
    z: 2,
    data: sData[0].data.map((item, index) => {
      return {
        value: item || 1,
        itemStyle: {
          color: linearColor(hexToRgba(color[status[index]], 0.05), color[status[index]], [0, 0, 1, 0]),
        },
        tooltip: {
          show: !!item,
          formatter: `{b}：{c}% ${status[index] == 0 ? '不合格':'合格'}`
        }
      }
    }),
    barWidth: 3,
  }, {
    type: 'bar',
    yAxisIndex: 1,
    tooltip: {
      show: false
    },
    z: 1,
    data: maxArr,
    barWidth: 6,
    itemStyle: {
      color: cfff2
    }
  }, {
    type: 'pictorialBar',
    name: '合格',
    symbolSize: [0, 0],
    symbolPosition: 'end',
    z: 0,
    color: color[1],
    data: sData[0].data,
    tooltip: {
      show: false
    }
  }, {
    type: 'pictorialBar',
    symbolSize: [3, 3],
    symbolOffset: [2, 0],
    symbolPosition: 'end',
    z: 3,
    color: cfff8,
    data: sData[0].data,
    tooltip: {
      show: false
    }
  }, {
    type: 'pictorialBar',
    symbolSize: [10, 10],
    symbolOffset: [6, 0],
    symbolPosition: 'end',
    z: 2,
    data: sData[0].data.map((item, index) => {
      return {
        value: item || 1,
        itemStyle: {
          color: 'none',
          borderColor: color[status[index]],
          borderType: 'solid',
          borderWidth: 1
        },
        tooltip: {
          show: !!item,
          formatter: `{b}：{c} ${status[index] == 0 ? '不合格':'合格'}`
        }
      }
    }),
  }]
  return {
    ...cloneDeep(defaultChart),
    grid: {
      left: '30%',
      right: '10%',
      top: 30,
      bottom: 10,
    },
    legend: {
      selectedMode: false,
      top: 10,
      right: '10%',
      itemWidth: 8,
      itemHeight: 8,
      icon: 'rect',
      textStyle: {
        fontSize: defSize - 2,
        color: cfff8
      }
    },
    color: color,
    xAxis: {
      type: 'value',
      show: false,
    },
    yAxis: [{
      inverse: true,
      type: 'category',
      data: xData,
      axisLabel: {
        fontSize: defSize - 2,
        color: cfff8
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: cfff4,
        }
      },
      axisTick: {
        show: false,
      },
    }, {
      show: false,
      inverse: true,
      type: 'category',
      data: sData[0].data,
      axisLine: {
        show: false,
        lineStyle: {
          color: cfff4,
        }
      },
      axisTick: {
        show: false,
      },
    }],
    series: series,
  }
}