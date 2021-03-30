import {
  cfff4,
  cfff8,
  defSize,
  cloneDeep,
  defaultChart,
  hexToRgba,
  linearColor,
  radialColor,
  thinColor
} from "./common"
// 第一个仪表盘
let gaugeChart1Data = {
  color: ['#1B407E', '#02EDF8', '#4C2C94'],
  xData: ['气压'],
  sData: [{
    name: '系列1',
    data: [90]
  }],
}
export const gaugeChart1 = ({
  color = gaugeChart1Data.color,
  xData = gaugeChart1Data.xData,
  sData = gaugeChart1Data.sData,
}) => {
  let series = [{
      type: 'gauge',
      radius: '70%',
      center: ['50%', '55%'],
      startAngle: '89.99',
      endAngle: '-270',
      axisLabel: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          width: 6,
          color: [
            [1, linearColor(color[0], thinColor(color[0]), [0, 0, 1, 0])]
          ]
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      detail: {
        show: false
      }
    },
    {
      type: 'gauge',
      radius: '62%',
      center: ['50%', '55%'],
      startAngle: '89.99',
      endAngle: '-270',
      splitNumber: 15,
      axisLine: {
        lineStyle: {
          width: 2,
          color: [
            [1, linearColor(color[0], thinColor(color[0]), [0, 0, 1, 0])]
          ]
        }
      },
      axisLabel: {
        show: false
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false
      },
      detail: {
        show: false
      }
    },
    {
      name: xData[0],
      type: 'gauge',
      radius: '52%',
      center: ['50%', '55%'],
      startAngle: '215',
      endAngle: '-35',
      min: 80,
      max: 120,
      detail: {
        formatter: '{value} kpa',
        offsetCenter: [0, 0],
        color: cfff8,
        fontSize: defSize - 2,
        fontFamily: 'pangmeng',
      },
      pointer: {
        length: '95%',
        itemStyle: {
          opacity: 0.6
        }
      },
      itemStyle: {
        color: {
          type: 'linear',
          colorStops: [{
            offset: 0,
            color: hexToRgba(color[0], 1)
          }, {
            offset: 0.8,
            color: hexToRgba(color[0], 0)
          }, {
            offset: 1,
            color: hexToRgba(color[0], 0)
          }]
        }
      },
      title: {
        show: false
      },
      data: [{
        name: xData[0],
        value: sData[0].data[0],
      }],
      axisLabel: {
        color: cfff4,
        distance: -15,
        fontSize: defSize - 6,
      },
      axisLine: {
        lineStyle: {
          width: 3,
          color: [
            [1, linearColor(color[1], thinColor(color[1]), [0, 0, 1, 0])]
          ]
        }
      },
      splitLine: {
        length: 4,
        distance: 0,
      },
      axisTick: {
        show: false
      }
    },
    {
      type: 'gauge',
      radius: '38%',
      center: ['50%', '55%'],
      startAngle: '89.99',
      endAngle: '-270',
      pointer: {
        show: false
      },
      axisLabel: {
        show: false
      },
      axisLine: {
        lineStyle: {
          width: 2,
          color: [
            [1, color[2]]
          ]
        }
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      detail: {
        show: false
      }
    }
  ]
  return {
    ...cloneDeep(defaultChart),
    series: series,
  }
}

// 第二个仪表盘
let gaugeChart2Data = {
  color: ['#0080FF', '#014E9A'],
  xData: ['光感'],
  sData: [{
    name: '系列1',
    data: [80]
  }],
}
export const gaugeChart2 = ({
  color = gaugeChart2Data.color,
  xData = gaugeChart2Data.xData,
  sData = gaugeChart2Data.sData,
}) => {
  let series = [{
      type: 'gauge',
      radius: '80%',
      center: ['50%', '65%'],
      startAngle: 200,
      endAngle: -20,
      min: -20,
      max: 200,
      splitNumber: 11,
      axisLabel: {
        color: cfff8,
        distance: -30,
        fontSize: defSize - 4,
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      detail: {
        show: false
      },
    },
    {
      type: 'gauge',
      radius: '62%',
      center: ['50%', '65%'],
      startAngle: 200,
      endAngle: -20,
      min: -20,
      max: 200,
      splitNumber: 11,
      axisLabel: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        length: 4,
        lineStyle: {
          color: cfff4
        }
      },
      detail: {
        show: false
      }
    },
    {
      type: 'gauge',
      radius: '60%',
      center: ['50%', '65%'],
      startAngle: 185,
      endAngle: 180 - sData[0].data[0],
      axisLabel: {
        show: false
      },
      axisLine: {
        lineStyle: {
          width: 4,
          color: [
            [1, color[0]]
          ]
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      detail: {
        show: false
      }
    },
    {
      name: '光感',
      type: 'gauge',
      radius: '60%',
      center: ['50%', '65%'],
      startAngle: 200,
      endAngle: -20,
      min: -20,
      max: 200,
      splitNumber: 33,
      axisLabel: {
        show: false
      },
      axisLine: {
        lineStyle: {
          width: 18,
          color: [
            [1, linearColor(hexToRgba(color[0], 0.2), hexToRgba(color[0], 0.01), [0, 0, 1, 0])]
          ]
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      detail: {
        formatter: '{value}',
        color: cfff8,
        offsetCenter: [0, 0],
        fontFamily: 'pangmeng',
        fontSize: defSize + 16,
        fontWeight: 600
      },
      pointer: {
        width: 4,
        length: '100%'
      },
      itemStyle: {
        color: hexToRgba(color[0], 0.6)
      },
      title: {
        show: false
      },
      data: [{
        value: sData[0].data[0],
        name: xData[0]
      }]
    },
    {
      type: 'gauge',
      radius: '45%',
      center: ['50%', '65%'],
      startAngle: 270,
      endAngle: -89.999,
      axisLabel: {
        show: false
      },
      axisLine: {
        lineStyle: {
          width: 6,
          color: [
            [1, hexToRgba(color[0], 0.2)]
          ]
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      detail: {
        show: false
      }
    },
    {
      type: 'gauge',
      radius: '40%',
      center: ['50%', '65%'],
      startAngle: 270,
      endAngle: -89.999,
      axisLabel: {
        show: false
      },
      axisLine: {
        lineStyle: {
          width: '100%',
          color: [
            [1, {
              type: 'radial',
              x: 0.5,
              y: 0.5,
              r: 0.5,
              colorStops: [{
                offset: 0,
                color: hexToRgba(color[1], 0.8)
              }, {
                offset: 0.8,
                color: hexToRgba(color[1], 0.4)
              }, {
                offset: 1,
                color: 'rgba(0,0,0,0.4)'
              }],
              global: false
            }]
          ]
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      detail: {
        show: false
      }
    }
  ];
  return {
    ...cloneDeep(defaultChart),
    series: series,
  }
}

// 第三个仪表盘
let gaugeChart3Data = {
  color: ['#2046F3', '#14BAFB'],
  xData: ['执行效率'],
  sData: [{
    name: '系列1',
    data: [98.3]
  }],
}
export const gaugeChart3 = ({
  color = gaugeChart3Data.color,
  xData = gaugeChart3Data.xData,
  sData = gaugeChart3Data.sData,
}) => {
  let series = [{
    type: 'gauge',
    radius: '68%',
    center: ['50%', '55%'],
    startAngle: 230,
    endAngle: -50,
    splitNumber: 21,
    axisLabel: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    splitLine: {
      length: 2,
      lineStyle: {
        color: linearColor(color[0], color[1], [0, 0, 1, 0]),
        type: 'dotted'
      }
    },
    detail: {
      show: false
    },
  }, {
    name: xData[0],
    type: 'gauge',
    radius: '60%',
    center: ['50%', '55%'],
    startAngle: 230,
    endAngle: -50,
    splitNumber: 19,
    title: {
      show: false
    },
    axisLabel: {
      show: false
    },
    axisLine: {
      lineStyle: {
        width: 15,
        color: [
          [1, linearColor(color[0], color[1], [0, 0, 1, 0])]
        ]
      }
    },
    axisTick: {
      show: false
    },
    splitLine: {
      length: 15,
      lineStyle: {
        color: 'rgba(6,6,6,0.4)',
      }
    },
    detail: {
      formatter: '{value}%',
      color: '#F7D60B',
      offsetCenter: [0, 0],
      fontFamily: 'pangmeng',
      fontWeight: 600,
      fontSize: defSize + 6
    },
    pointer: {
      width: 4,
      length: '100%'
    },
    data: [{
      name: xData[0],
      value: sData[0].data[0],
    }]
  }, {
    type: 'gauge',
    radius: '38%',
    center: ['50%', '55%'],
    startAngle: '89.99',
    endAngle: '-270',
    axisLabel: {
      show: false,
    },
    axisLine: {
      lineStyle: {
        width: 2,
        shadowBlur: 4,
        shadowColor: color[1],
        color: [
          [1, color[1]]
        ]
      }
    },
    axisTick: {
      show: false
    },
    splitLine: {
      show: false
    },
    pointer: {
      show: false
    },
    detail: {
      show: false
    }
  }, {
    type: 'gauge',
    radius: '35%',
    center: ['50%', '55%'],
    startAngle: 270,
    endAngle: -89.999,
    axisLabel: {
      show: false
    },
    axisLine: {
      lineStyle: {
        width: '100%',
        color: [
          [1, hexToRgba(thinColor(color[0]), 0.2)]
        ]
      }
    },
    axisTick: {
      show: false
    },
    splitLine: {
      show: false
    },
    detail: {
      show: false
    }
  }, {
    type: 'funnel',
    left: 'center',
    top: '80%',
    minSize: '100%',
    maxSize: '80%',
    width: '55%',
    height: '12%',
    label: {
      position: 'inside',
      fontSize: defSize - 2,
      color: cfff8
    },
    data: [{
      name: xData[0],
      value: 10,
      itemStyle: {
        borderWidth: 0,
        color: linearColor(hexToRgba(color[0], 0.8), hexToRgba(color[0], 0.01))
      }
    }]
  }];
  return {
    ...cloneDeep(defaultChart),
    series: series,
  }
}

// 第四个仪表盘
let gaugeChart4Data = {
  color: ['#249EEA', '#00EFF8', '#905FFF'],
  xData: ['类目'],
  sData: [{
    name: '系列',
    data: [80]
  }],
}
export const gaugeChart4 = ({
  color = gaugeChart4Data.color,
  xData = gaugeChart4Data.xData,
  sData = gaugeChart4Data.sData,
}) => {
  let series = [{
    type: 'gauge',
    radius: '72%',
    center: ['50%', '55%'],
    startAngle: '89.99',
    endAngle: '-270',
    title: {
      show: false
    },
    axisLabel: {
      show: false,
    },
    axisLine: {
      lineStyle: {
        width: 6,
        color: [
          [1, linearColor(color[1], color[0], [0, 0, 1, 0])]
        ]
      }
    },
    axisTick: {
      show: false
    },
    splitLine: {
      show: false
    },
    pointer: {
      show: false
    },
    detail: {
      show: false
    }
  }, {
    type: 'gauge',
    radius: '61%',
    center: ['50%', '55%'],
    startAngle: '89.99',
    endAngle: '-270',
    title: {
      show: false
    },
    axisLabel: {
      show: false,
    },
    axisLine: {
      lineStyle: {
        width: 1,
        color: [
          [1, color[0]]
        ]
      }
    },
    axisTick: {
      show: false
    },
    splitLine: {
      show: false
    },
    pointer: {
      show: false
    },
    detail: {
      show: false
    }
  }, {
    type: 'gauge',
    radius: '60%',
    center: ['50%', '55%'],
    startAngle: '220',
    endAngle: '-40',
    title: {
      show: false
    },
    axisLabel: {
      show: false,
    },
    axisLine: {
      lineStyle: {
        width: 12,
        color: [
          [1, linearColor(color[0], color[1], [0, 0, 1, 0])]
        ]
      }
    },
    axisTick: {
      show: false
    },
    splitLine: {
      show: false
    },
    pointer: {
      show: false
    },
    detail: {
      formatter: '{value}%',
      offsetCenter: [0, -10],
      color: cfff8,
      fontSize: defSize + 10,
      fontFamily: 'pangmeng'
    },
    data: [{
      name: xData[0],
      value: sData[0].data[0],
    }],
  }, {
    type: 'gauge',
    radius: '45%',
    center: ['50%', '55%'],
    startAngle: '89.99',
    endAngle: '-270',
    title: {
      show: false
    },
    axisLabel: {
      show: false,
    },
    axisLine: {
      lineStyle: {
        width: 1,
        color: [
          [1, color[2]]
        ]
      }
    },
    axisTick: {
      show: false
    },
    splitLine: {
      show: false
    },
    pointer: {
      show: false
    },
    detail: {
      formatter: '{value}/100',
      offsetCenter: [0, 20],
      color: cfff4,
      fontSize: defSize,
    },
    data: [{
      name: xData[0],
      value: sData[0].data[0],
    }],
  }];
  return {
    ...cloneDeep(defaultChart),
    series: series,
  }
}

// 第五个仪表盘
let gaugeChart5Data = {
  color: ['#18DCED', '#F8705E', '#18DBEC'],
  xData: ['类目'],
  sData: [{
    name: '系列',
    data: [233]
  }],
}
export const gaugeChart5 = ({
  color = gaugeChart5Data.color,
  xData = gaugeChart5Data.xData,
  sData = gaugeChart5Data.sData,
}) => {
  let series = [{
    type: 'gauge',
    radius: '72%',
    center: ['50%', '55%'],
    startAngle: '89.99',
    endAngle: '-270',
    title: {
      show: false
    },
    axisLabel: {
      show: false,
    },
    axisLine: {
      lineStyle: {
        width: 6,
        color: [
          [1, linearColor(color[1], color[0], [0, 0, 1, 0])]
        ]
      }
    },
    axisTick: {
      show: false
    },
    splitLine: {
      show: false
    },
    pointer: {
      show: false
    },
    detail: {
      show: false
    }
  }, {
    type: 'gauge',
    radius: '61%',
    center: ['50%', '55%'],
    startAngle: '89.99',
    endAngle: '-270',
    title: {
      show: false
    },
    axisLabel: {
      show: false,
    },
    axisLine: {
      lineStyle: {
        width: 1,
        color: [
          [1, color[0]]
        ]
      }
    },
    axisTick: {
      show: false
    },
    splitLine: {
      show: false
    },
    pointer: {
      show: false
    },
    detail: {
      show: false
    }
  }, {
    type: 'gauge',
    radius: '60%',
    center: ['50%', '55%'],
    startAngle: '220',
    endAngle: '-40',
    title: {
      show: false
    },
    axisLabel: {
      show: false,
    },
    axisLine: {
      lineStyle: {
        width: 12,
        color: [
          [1, linearColor(color[0], color[1], [0, 0, 1, 0])]
        ]
      }
    },
    axisTick: {
      show: false
    },
    splitLine: {
      show: false
    },
    pointer: {
      show: false
    },
    detail: {
      formatter: `${sData[0].data[0]/5}%`,
      offsetCenter: [0, -10],
      color: cfff8,
      fontSize: defSize + 10,
      fontFamily: 'pangmeng'
    },
    data: [{
      name: xData[0],
      value: sData[0].data[0],
    }],
  }, {
    type: 'gauge',
    radius: '45%',
    center: ['50%', '55%'],
    startAngle: '89.99',
    endAngle: '-270',
    title: {
      show: false
    },
    axisLabel: {
      show: false,
    },
    axisLine: {
      lineStyle: {
        width: 1,
        color: [
          [1, color[2]]
        ]
      }
    },
    axisTick: {
      show: false
    },
    splitLine: {
      show: false
    },
    pointer: {
      show: false
    },
    detail: {
      formatter: '{value}/500',
      offsetCenter: [0, 20],
      color: cfff4,
      fontSize: defSize,
    },
    data: [{
      name: xData[0],
      value: sData[0].data[0],
    }],
  }];
  return {
    ...cloneDeep(defaultChart),
    series: series,
  }
}

// 第六个仪表盘
let gaugeChart6Data = {
  color: ['#1492FB', '#CAE637', '#FB7422'],
  xData: ['摄氏度'],
  sData: [{
    name: '系列1',
    data: [63]
  }],
}
export const gaugeChart6 = ({
  color = gaugeChart6Data.color,
  xData = gaugeChart6Data.xData,
  sData = gaugeChart6Data.sData,
}) => {
  let series = [{
    type: 'gauge',
    radius: '68%',
    center: ['50%', '55%'],
    startAngle: 230,
    endAngle: -50,
    splitNumber: 21,
    axisLabel: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    splitLine: {
      length: 2,
      lineStyle: {
        color: linearColor(color[0], color[1], [0, 0, 1, 0]),
        type: 'dotted'
      }
    },
    detail: {
      show: false
    },
  }, {
    name: xData[0],
    type: 'gauge',
    radius: '60%',
    center: ['50%', '55%'],
    startAngle: 230,
    endAngle: -50,
    splitNumber: 19,
    title: {
      show: false
    },
    axisLabel: {
      show: false
    },
    axisLine: {
      lineStyle: {
        width: 15,
        color: [
          [1, {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [{
              offset: 0,
              color: color[0]
            }, {
              offset: 0.5,
              color: color[1]
            }, {
              offset: 1,
              color: color[2]
            }],
            global: false
          }]
        ]
      }
    },
    axisTick: {
      show: false
    },
    splitLine: {
      length: 15,
      lineStyle: {
        color: 'rgba(6,6,6,0.4)',
      }
    },
    detail: {
      formatter: '{value}℃',
      color: cfff8,
      offsetCenter: [0, 0],
      fontFamily: 'pangmeng',
      fontWeight: 600,
      fontSize: defSize + 6
    },
    pointer: {
      width: 4,
      length: '100%'
    },
    data: [{
      name: xData[0],
      value: sData[0].data[0],
    }]
  }, {
    type: 'gauge',
    radius: '38%',
    center: ['50%', '55%'],
    startAngle: '89.99',
    endAngle: '-270',
    axisLabel: {
      show: false,
    },
    axisLine: {
      lineStyle: {
        width: 2,
        shadowBlur: 4,
        shadowColor: color[0],
        color: [
          [1, color[0]]
        ]
      }
    },
    axisTick: {
      show: false
    },
    splitLine: {
      show: false
    },
    pointer: {
      show: false
    },
    detail: {
      show: false
    }
  }, {
    type: 'gauge',
    radius: '35%',
    center: ['50%', '55%'],
    startAngle: 270,
    endAngle: -89.999,
    axisLabel: {
      show: false
    },
    axisLine: {
      lineStyle: {
        width: '100%',
        color: [
          [1, hexToRgba(thinColor(color[0]), 0.2)]
        ]
      }
    },
    axisTick: {
      show: false
    },
    splitLine: {
      show: false
    },
    detail: {
      show: false
    }
  }, {
    type: 'funnel',
    left: 'center',
    top: '80%',
    minSize: '100%',
    maxSize: '80%',
    width: '55%',
    height: '12%',
    label: {
      position: 'inside',
      fontSize: defSize - 2,
      color: cfff8
    },
    data: [{
      name: '标准值：16℃-24℃',
      value: 10,
      itemStyle: {
        borderWidth: 0,
        color: linearColor(hexToRgba(thinColor(color[2]), 0.8), hexToRgba(thinColor(color[2]), 0.01))
      }
    }]
  }];
  return {
    ...cloneDeep(defaultChart),
    series: series,
  }
}

// 第七个仪表盘
let gaugeChart7Data = {
  color: ['#AF8D35'],
  xData: ['光感'],
  sData: [{
    name: '系列1',
    data: [80]
  }],
}
export const gaugeChart7 = ({
  color = gaugeChart7Data.color,
  xData = gaugeChart7Data.xData,
  sData = gaugeChart7Data.sData,
}) => {
  let series = [{
      type: 'gauge',
      radius: '80%',
      center: ['50%', '65%'],
      startAngle: 200,
      endAngle: -20,
      min: -20,
      max: 200,
      splitNumber: 11,
      axisLabel: {
        color: cfff8,
        distance: -20,
        fontSize: defSize - 4,
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      detail: {
        show: false
      },
    },
    {
      type: 'gauge',
      radius: '65%',
      center: ['50%', '65%'],
      startAngle: 200,
      endAngle: -20,
      min: -20,
      max: 200,
      splitNumber: 11,
      axisLabel: {
        show: false
      },
      axisLine: {
        lineStyle: {
          width: 2,
          color: [
            [1, hexToRgba(color[0], 0.2)]
          ]
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        length: 6,
        lineStyle: {
          color: cfff4
        }
      },
      detail: {
        show: false
      }
    },
    {
      type: 'gauge',
      radius: '64%',
      center: ['50%', '65%'],
      startAngle: 200,
      endAngle: 180 - sData[0].data[0],
      axisLabel: {
        show: false
      },
      axisLine: {
        lineStyle: {
          width: 8,
          color: [
            [1, linearColor(hexToRgba(color[0], 0.01), color[0], [0, 0, 1, 0])]
          ]
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      detail: {
        show: false
      }
    },
    {
      name: '光感',
      type: 'gauge',
      radius: '55%',
      center: ['50%', '65%'],
      startAngle: 200,
      endAngle: -20,
      min: -20,
      max: 200,
      splitNumber: 33,
      axisLabel: {
        show: false
      },
      axisLine: {
        lineStyle: {
          width: 12,
          color: [
            [1, linearColor(color[0], hexToRgba(color[0], 0.01), [0, 0, 1, 0])]
          ]
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        length: 10,
        lineStyle: {
          color: 'rgba(6,6,6,0.4)',
        }
      },
      detail: {
        formatter: '{value} lux',
        color: cfff8,
        offsetCenter: [0, 0],
        fontFamily: 'pangmeng',
        fontSize: defSize
      },
      pointer: {
        width: 10,
        length: '100%'
      },
      itemStyle: {
        color: hexToRgba(color[0], 0.6)
      },
      title: {
        show: false
      },
      data: [{
        value: sData[0].data[0],
        name: xData[0]
      }]
    },
    {
      type: 'gauge',
      radius: '45%',
      center: ['50%', '65%'],
      startAngle: 270,
      endAngle: -89.999,
      axisLabel: {
        show: false
      },
      axisLine: {
        lineStyle: {
          width: 6,
          color: [
            [1, hexToRgba(color[0], 0.2)]
          ]
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      detail: {
        show: false
      }
    },
    {
      type: 'gauge',
      radius: '32%',
      center: ['50%', '65%'],
      startAngle: 270,
      endAngle: -89.999,
      axisLabel: {
        show: false
      },
      axisLine: {
        lineStyle: {
          width: 2,
          color: [
            [1, hexToRgba(color[0], 0.8)]
          ]
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      detail: {
        show: false
      }
    },
    {
      type: 'gauge',
      radius: '32%',
      center: ['50%', '65%'],
      startAngle: 270,
      endAngle: -89.999,
      axisLabel: {
        show: false
      },
      axisLine: {
        lineStyle: {
          width: '100%',
          color: [
            [1, hexToRgba(color[0], 0.2)]
          ]
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      detail: {
        show: false
      }
    }
  ]
  return {
    ...cloneDeep(defaultChart),
    series: series,
  }
}

// 第八个仪表盘
let gaugeChart8Data = {
  color: ['#023650', '#2B908F'],
  xData: ['温度', '湿度'],
  sData: [{
    name: '系列1',
    data: [24, 45]
  }],
}
export const gaugeChart8 = ({
  color = gaugeChart8Data.color,
  xData = gaugeChart8Data.xData,
  sData = gaugeChart8Data.sData,
}) => {
  let graphic = [{
      type: 'group',
      left: '16%',
      top: '10%',
      children: [{
        type: 'text',
        z: 100,
        left: 'center',
        top: 'top',
        style: {
          fill: '#fff',
          text: '温度',
          fontSize: defSize
        }
      }]
    },
    {
      type: 'group',
      left: '2%',
      top: '17%',
      children: [{
        type: 'text',
        z: 100,
        left: 'center',
        top: 'top',
        style: {
          fill: '#fff',
          text: '（标准值：16℃-24℃）',
          fontSize: defSize - 4
        }
      }]
    },
    {
      type: 'group',
      right: '22%',
      top: '10%',
      children: [{
        type: 'text',
        z: 100,
        left: 'center',
        top: 'top',
        style: {
          fill: '#fff',
          text: '湿度',
          subtext: '（标准值：30%-60%）',
          fontSize: defSize
        }
      }]
    },
    {
      type: 'group',
      right: '4%',
      top: '17%',
      children: [{
        type: 'text',
        z: 100,
        left: 'center',
        top: 'top',
        style: {
          fill: '#fff',
          text: '（标准值：30%-60%）',
          fontSize: defSize - 4
        }
      }]
    }
  ]
  let series = [{
    name: xData[0],
    type: 'bar',
    xAxisIndex: 0,
    data: [{
      name: '湿度',
      type: 'liquidFill',
      radius: '40%',
      center: ['67%', '57%'],
      color: linearColor(hexToRgba(color[1], 0.6), hexToRgba(color[1], 0.01), [0, 1, 0, 0]),
      itemStyle: {
        shadowBlur: 0,
        color: linearColor(hexToRgba(color[1], 0.01), hexToRgba(color[1], 0.6), [0, 1, 0, 0]),
        opacity: 1,
      },
      outline: {
        show: false
      },
      title: {
        color: cfff8,
        fontSize: defSize + 2
      },
      data: [sData[0].data[1] / 100, sData[0].data[1] / 100],
      backgroundStyle: {
        borderWidth: 3,
        borderColor: color[1],
        color: 'transparent'
      },
      label: {
        textStyle: {
          fontSize: defSize + 8,
          color: cfff8,
          fontFamily: 'pangmeng'
        }
      }
    }, {
      name: xData[0],
      value: sData[0].data[0],
      label: {
        show: true,
        position: 'bottom',
        distance: 30,
        formatter: '{c}℃',
        fontFamily: 'pangmeng',
        color: cfff8,
        fontSize: defSize + 6,
      }
    }],
    barWidth: 8,
    itemStyle: {
      shadowBlur: 0,
      color: {
        type: 'linear',
        x: 0,
        y: 1,
        x2: 0,
        y2: 0,
        colorStops: [{
            offset: 1,
            color: 'rgba(255, 162, 25, 1)'
          },
          {
            offset: 0.5,
            color: 'rgba(247, 212, 30, 1)'
          },
          {
            offset: 0,
            color: 'rgba(7, 124, 228, 1)'
          }
        ]
      },
      opacity: 1,
    },
    z: 3
  }, {
    name: '内框',
    type: 'bar',
    xAxisIndex: 1,
    barGap: '-100%',
    data: [50],
    barWidth: 20,
    itemStyle: {
      color: '#1E2131',
      barBorderRadius: 20,
    },
    z: 2
  }, {
    name: '外框',
    type: 'bar',
    xAxisIndex: 2,
    barGap: '-100%',
    data: [55],
    barWidth: 24,
    itemStyle: {
      color: '#03061A',
      barBorderRadius: 55,
      borderWidth: 1,
      borderColor: '#5A5C69'
    },
    z: 1
  }, {
    name: '圆',
    type: 'scatter',
    hoverAnimation: false,
    data: [0],
    xAxisIndex: 0,
    symbolSize: 15,
    itemStyle: {
      color: '#03061A',
      opacity: 1,
    },
    z: 3
  }, {
    name: '白圆',
    type: 'scatter',
    hoverAnimation: false,
    data: [0],
    xAxisIndex: 1,
    symbolSize: 30,
    itemStyle: {
      color: '#1E2131',
      opacity: 1,
    },
    z: 2
  }, {
    name: '外圆',
    type: 'scatter',
    hoverAnimation: false,
    data: [0],
    xAxisIndex: 2,
    symbolSize: 35,
    itemStyle: {
      color: '#03061A',
      opacity: 1,
      borderWidth: 1,
      borderColor: '#5A5C69'
    },
    z: 1
  }, {
    name: '湿度外环',
    type: 'pie',
    color: color,
    radius: ['55%', '60%'],
    center: ['67%', '57%'],
    hoverAnimation: false,
    data: [{
      value: 1,
      name: ''
    }],
    labelLine: {
      show: false
    }
  }, {
    type: 'gauge',
    radius: '50%',
    center: ['67%', '57%'],
    startAngle: 89.999,
    endAngle: -270,
    splitNumber: 40,
    axisLabel: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    splitLine: {
      length: 2,
      lineStyle: {
        color: color[0],
        type: 'dotted'
      }
    },
    detail: {
      show: false
    },
  }]
  return {
    ...cloneDeep(defaultChart),
    yAxis: [{
      show: false,
      data: [],
      min: 0,
      max: 40,
      axisLine: {
        show: false
      }
    }, {
      show: false,
      min: 0,
      max: 60,
    }, {
      type: 'category',
      position: 'left',
      offset: -80,
      axisLabel: {
        fontSize: defSize - 4,
        color: 'white'
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
    }],
    xAxis: [{
      show: false,
      min: -10,
      max: 60,
      data: []
    }, {
      show: false,
      min: -10,
      max: 60,
      data: []
    }, {
      show: false,
      min: -10,
      max: 60,
      data: []
    }],
    graphic: graphic,
    series: series,
  }
}

// 第九个仪表盘
let gaugeChart9Data = {
  color: ['#B28F36', '#0A7968', '#0A8FBC'],
  xData: ['PM2.5', 'TVOC', 'CO2'],
  sData: [{
    name: '系列1',
    data: [35, 0.2, 512]
  }],
}
export const gaugeChart9 = ({
  color = gaugeChart9Data.color,
  xData = gaugeChart9Data.xData,
  sData = gaugeChart9Data.sData,
}) => {
  let safeColor = '#6BDCCB';
  let series = [{
      name: xData[0],
      type: 'gauge',
      center: ['23%', '60%'],
      radius: '35%',
      startAngle: 220,
      endAngle: 45,
      splitNumber: 5,
      axisLine: {
        lineStyle: {
          width: 4,
          color: [
            [0.35, safeColor],
            [1, color[0]]
          ]
        }
      },
      axisTick: {
        length: -2,
        lineStyle: {
          color: 'auto'
        }
      },
      splitLine: {
        length: -4,
        lineStyle: {
          color: 'auto'
        }
      },
      axisLabel: {
        distance: -15,
        fontSize: defSize - 6,
      },
      pointer: {
        width: 2
      },
      detail: {
        formatter: '{value}ppm',
        fontFamily: 'pangmeng',
        fontSize: defSize - 4,
        color: cfff8,
        offsetCenter: [-5, 30]
      },
      title: {
        offsetCenter: [-5, 50],
        color: color[0],
        fontSize: defSize - 4
      },
      data: [{
        value: sData[0].data[0],
        name: '空气优'
      }]
    },
    {
      name: 'TVOC',
      type: 'gauge',
      z: 3,
      min: 0,
      max: 1,
      splitNumber: 5,
      center: ['50%', '60%'],
      radius: '35%',
      startAngle: 200,
      endAngle: -20,
      axisLine: {
        lineStyle: {
          width: 4,
          color: [
            [0.16, color[1]],
            [0.3, safeColor],
            [1, color[1]]
          ]
        }
      },
      axisTick: {
        length: -2,
        lineStyle: {
          color: 'auto'
        }
      },
      splitLine: {
        length: -4,
        lineStyle: {
          color: 'auto'
        }
      },
      axisLabel: {
        distance: -15,
        fontSize: defSize - 6,
      },
      pointer: {
        width: 2
      },
      detail: {
        formatter: '{value}ppm',
        fontFamily: 'pangmeng',
        fontSize: defSize - 4,
        color: cfff8,
        offsetCenter: [0, 30]
      },
      title: {
        offsetCenter: [0, 50],
        textStyle: {
          color: color[1],
          fontSize: defSize - 4
        }
      },
      data: [{
        value: sData[0].data[1],
        name: '空气优'
      }]
    },
    {
      name: 'CO2',
      type: 'gauge',
      center: ['77%', '60%'],
      radius: '35%',
      clockwise: true,
      min: 0,
      max: 1000,
      startAngle: 135,
      endAngle: -45,
      splitNumber: 5,
      axisLine: {
        lineStyle: {
          width: 4,
          color: [
            [0.458, color[2]],
            [0.916, safeColor],
            [1, color[2]]
          ]
        }
      },
      axisTick: {
        length: -2,
        lineStyle: {
          color: 'auto'
        }
      },
      splitLine: {
        length: -4,
        lineStyle: {
          color: 'auto'
        }
      },
      axisLabel: {
        distance: -15,
        fontSize: defSize - 6,
      },
      pointer: {
        width: 2
      },
      detail: {
        formatter: '{value}ppm',
        fontFamily: 'pangmeng',
        fontSize: defSize - 4,
        color: cfff8,
        offsetCenter: [5, 30]
      },
      title: {
        offsetCenter: [5, 50],
        color: color[2],
        fontSize: defSize - 4
      },
      data: [{
        value: sData[0].data[2],
        name: '空气优'
      }]
    },
    {
      type: 'gauge',
      center: ['23%', '60%'],
      radius: '55%',
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      pointer: {
        show: false
      },
      detail: {
        formatter: '标准值：0-35',
        fontSize: defSize - 4,
        color: cfff4,
        offsetCenter: [0, 80]
      },
      title: {
        offsetCenter: [-10, -80],
        fontFamily: 'pangmeng',
        color: cfff8,
        fontSize: defSize
      },
      data: [{
        value: 1,
        name: xData[0]
      }]
    },
    {
      type: 'gauge',
      center: ['50%', '60%'],
      radius: '55%',
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      pointer: {
        show: false
      },
      detail: {
        formatter: '标准值：0.16-0.3',
        fontSize: defSize - 4,
        color: cfff4,
        offsetCenter: [0, 80]
      },
      title: {
        offsetCenter: [0, -80],
        fontFamily: 'pangmeng',
        color: cfff8,
        fontSize: defSize
      },
      data: [{
        value: 1,
        name: xData[1]
      }]
    },
    {
      type: 'gauge',
      center: ['77%', '60%'],
      radius: '55%',
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      pointer: {
        show: false
      },
      detail: {
        formatter: '标准值：458-916',
        fontSize: defSize - 4,
        color: cfff4,
        offsetCenter: [0, 80]
      },
      title: {
        offsetCenter: [10, -80],
        fontFamily: 'pangmeng',
        color: cfff8,
        fontSize: defSize
      },
      data: [{
        value: 1,
        name: xData[2]
      }]
    },
  ]
  return {
    ...cloneDeep(defaultChart),
    series: series,
  }
}

// 第十个仪表盘
let gaugeChart10Data = {
  color: ['#E53475'],
  xData: ['类目1'],
  sData: [{
    name: '系列1',
    data: [60]
  }],
}
export const gaugeChart10 = ({
  color = gaugeChart10Data.color,
  // xData = gaugeChart10Data.xData,
  sData = gaugeChart10Data.sData,
}) => {
  let series = [{
    type: 'pie',
    clockWise: false,
    hoverAnimation: false,
    radius: ['79%', '80%'],
    center: ['50%', '55%'],
    labelLine: {
      show: false
    },
    data: [{
      type: 'liquidFill',
      radius: '65%',
      center: ['50%', '55%'],
      data: [sData[0].data[0] / 100],
      backgroundStyle: {
        color: radialColor('#3782FF', hexToRgba('#264F8E', 0.5))
      },
      outline: {
        borderDistance: 0,
        itemStyle: {
          borderWidth: 1,
          borderColor: linearColor('#3782FF', color[0])
        }
      },
      label: {
        // formatter: '',
        position: ['50%', '50%']
      },
      color: [linearColor(hexToRgba(color[0], 0.75), hexToRgba(color[0], 0.25))]
    }, {
      value: sData[0].data[0] / 2,
      label: {
        show: false,
      },
      itemStyle: {
        color: linearColor(thinColor(color[0]), color[0])
      }
    }, {
      value: sData[0].data[0] / 2,
      label: {
        show: false,
      },
      itemStyle: {
        color: linearColor(thinColor(color[0]), '#6CDCF3')
      }
    }]
  }]
  return {
    ...cloneDeep(defaultChart),
    title: {
      text: `${sData[0].data[0]}%`,
      textStyle: {
        fontSize: defSize + 10,
        color: cfff8,
      },
      left: 'center',
      top: '50%'
    },
    series: series,
  }
}