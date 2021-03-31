import {
  cfff4,
  cfff8,
  defSize,
  cloneDeep,
  defaultChart,
  hexToRgba,
  linearColor,
} from "./common";

// 第一个环状图
let paleChart1Data = {
  color: ['#D5B3FF', '#FF6C38', '#F7D60B', '#11E2FF'],
  xData: ['学生', '教师', '领导', '职工'],
  sData: [{
    name: '',
    data: [100, 30, 40, 50]
  }],
  width: 180,
}
export const paleChart1 = ({
  color = paleChart1Data.color,
  xData = paleChart1Data.xData,
  sData = paleChart1Data.sData,
  width = paleChart1Data.width,
}) => {
  let series = [{
    type: 'pie',
    clockwise: false,
    emphasis: {
      scaleSize: 4
    },
    radius: [0, '35%'],
    center: ['50%', '50%'],
    data: sData[0].data.map((item, index) => {
      return {
        name: xData[index],
        value: item,
      }
    }),
    label: {
      fontFamily: "pangmeng",
      color: cfff8,
      formatter: "{c}",
    },
    labelLine: {
      length: 5,
      length2: 50,
      lineStyle: {
        color: "#00BAE3",
      },
    },
  }]
  return {
    ...cloneDeep(defaultChart),
    legend: {
      bottom: 10,
      data: xData,
      itemWidth: 8,
      itemHeight: 8,
      textStyle: {
        color: cfff8
      }
    },
    graphic: [{
      type: 'image',
      top: "middle",
      left: "center",
      style: {
        image: require('../assets/imgs/chart/morepale1-bg.png'),
        width: width,
        height: width,
      }
    }],
    color: color,
    series: series,
  }
}

// 第二个环状图
let paleChart2Data = {
  color: ['#43AA8B', '#2DC4B6', '#E76F51', '#FB8F3A', '#F9C74F', '#90BE6D', '#277DA1'],
  xData: ['图书馆面积', '体育馆面积', '食堂面积', '教学面积', '办公面积', '宿舍面积', '其他'],
  sData: [{
    data: [15, 14, 12, 22, 16, 11, 10]
  }],
  width: 180
}
export const paleChart2 = ({
  color = paleChart2Data.color,
  xData = paleChart2Data.xData,
  sData = paleChart2Data.sData,
  width = paleChart2Data.width,
}) => {
  let series = [{
    type: 'pie',
    clockwise: false,
    radius: ['30%', '38%'],
    center: ['50%', '50%'],
    data: sData[0].data.map((item, index) => {
      return {
        name: xData[index],
        value: item,
      }
    }),
    emphasis: {
      scaleSize: 4
    },
    label: {
      color: cfff8,
      formatter: "{d}%",
    },
    labelLine: {
      length: 10,
      length2: 5,
    },
  }]
  return {
    ...cloneDeep(defaultChart),
    legend: {
      bottom: 5,
      data: xData,
      icon: 'circle',
      itemWidth: 5,
      itemHeight: 5,
      textStyle: {
        fontSize: defSize - 4,
        color: cfff8
      }
    },
    graphic: [{
      type: 'image',
      top: "middle",
      left: "center",
      style: {
        image: require('../assets/imgs/chart/morepale2-bg.png'),
        width: width,
        height: width / 1.3,
      }
    }],
    color: color,
    series: series,
  }
}

// 第三个环状图
let paleChart3Data = {
  color: ['#E76F51', '#F4A261', '#E9C46A', '#299D8F', '#A8DADC'],
  xData: ['书籍', '论文', '获奖', '专利', '软件'],
  sData: [{
    data: [30, 10, 15, 20, 25]
  }],
  width: 230,
}
export const paleChart3 = ({
  color = paleChart3Data.color,
  xData = paleChart3Data.xData,
  sData = paleChart3Data.sData,
  width = paleChart3Data.width,
}) => {
  let series = [{
    type: 'pie',
    radius: ['25%', '40%'],
    center: ['50%', '50%'],
    data: sData[0].data.map((item, index) => {
      return {
        name: xData[index],
        value: item,
      }
    }),
    emphasis: {
      scaleSize: 4
    },
    label: {
      color: cfff8,
      formatter: "{d}%",
    },
    labelLine: {
      length: 20,
      length2: 5,
    },
  }]
  return {
    ...cloneDeep(defaultChart),
    legend: {
      bottom: 10,
      data: xData,
      icon: 'circle',
      itemWidth: 5,
      itemHeight: 5,
      textStyle: {
        fontSize: defSize - 4,
        color: cfff8
      }
    },
    graphic: [{
      type: 'image',
      top: "middle",
      left: "center",
      style: {
        image: require('../assets/imgs/chart/morepale3-bg.png'),
        width: width,
        height: width,
      }
    }],
    color: color,
    series: series,
  }
}

// 第四个环状图
let paleChart4Data = {
  color: ['#D5B3FF', '#FF6C38', '#F7D60B', '#11E2FF'],
  xData: ['本科', '专科', '硕士', '博士'],
  sData: [{
    data: [46, 19, 23, 12]
  }],
  title: '学历分布',
}
export const paleChart4 = ({
  color = paleChart4Data.color,
  xData = paleChart4Data.xData,
  sData = paleChart4Data.sData,
  title = paleChart4Data.title,
}) => {
  let series = [{
    type: 'pie',
    clockwise: false,
    radius: ['45%', '50%'],
    center: ['50%', '50%'],
    data: sData[0].data.map((item, index) => {
      return {
        name: xData[index],
        value: item,
      }
    }),
    emphasis: {
      scaleSize: 4
    },
    label: {
      color: cfff8,
      formatter: "{b}\n{yellow|{d}%}",
      rich: {
        yellow: {
          color: '#F7D60B',
          fontFamily: "pangmeng",
          fontSize: defSize,
        }
      }
    },
    labelLine: {
      length: 4,
      length2: 20,
      lineStyle: {
        type: 'dotted',
        color: cfff8,
      }
    },
  }, {
    type: 'gauge',
    radius: '35%',
    startAngle: 110,
    endAngle: 10,
    axisLabel: {
      show: false
    },
    axisLine: {
      lineStyle: {
        width: 2,
        color: [
          [1, linearColor(hexToRgba('#11E2FF', 0.8), hexToRgba('#11E2FF', 0.01))]
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
    },
  }, {
    type: 'gauge',
    radius: '35%',
    startAngle: 290,
    endAngle: 190,
    axisLabel: {
      show: false
    },
    axisLine: {
      lineStyle: {
        width: 2,
        color: [
          [1, linearColor(hexToRgba('#11E2FF', 0.01), hexToRgba('#11E2FF', 0.8))]
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
    },
  }, {
    type: 'pie',
    radius: ['0%', '34%'],
    axisLabel: {
      show: false,
    },
    axisLine: {
      show: false
    },
    tooltip: {
      show: false
    },
    emphasis: {
      scale: false
    },
    itemStyle: {
      color: 'rgba(28,31,49,0.8)'
    },
    data: [1]
  }]
  return {
    ...cloneDeep(defaultChart),
    title: {
      text: title,
      top: "middle",
      left: "center",
      textStyle: {
        color: cfff8,
        fontSize: defSize,
      }
    },
    legend: {
      bottom: 10,
      data: xData,
      itemWidth: 8,
      itemHeight: 8,
      textStyle: {
        fontSize: defSize - 4,
        color: cfff8
      }
    },
    color: color,
    series: series,
  }
}

// 第五个环状图
let paleChart5Data = {
  color: ['#5B8FF9', '#5AD8A6', '#5D7092', '#F6BD16', '#E8684A', '#FF9D4D', '#6DC8EC', '#9270CA', '#269A99', '#FF99C3', '#5B8FF9', '#BDD2FD', '#5AD8A6'],
  xData: ['工程类', '金融类', '数学类', '经济类', '管理类', '艺术与设计类', '自然科学类', '计算机类', '心理学', '教育与公共卫生类', '酒店管理', '法律与社会学', '其他'],
  sData: [{
    data: [9, 10, 5, 15, 12, 30, 28, 31, 12, 6, 5, 7, 8]
  }],
}
export const paleChart5 = ({
  color = paleChart5Data.color,
  xData = paleChart5Data.xData,
  sData = paleChart5Data.sData,
}) => {
  let legend = [{
    top: 60,
    data: xData.slice(0, 9),
    icon: 'circle',
    itemWidth: 8,
    itemHeight: 8,
    textStyle: {
      fontSize: defSize - 6,
      color: cfff8
    }
  }];
  if (xData.length > 9) {
    legend.push({
      bottom: 10,
      data: xData.slice(9),
      icon: 'circle',
      itemWidth: 8,
      itemHeight: 8,
      textStyle: {
        fontSize: defSize - 6,
        color: cfff8
      }
    })
  }
  let series = [{
    type: 'pie',
    clockwise: false,
    radius: [0, '40%'],
    center: ['50%', '60%'],
    data: sData[0].data.map((item, index) => {
      return {
        name: xData[index],
        value: item,
      }
    }),
    emphasis: {
      scaleSize: 4
    },
    label: {
      color: cfff8,
      fontSize: defSize - 4,
      formatter: "{d}%",
    },
    labelLine: {
      length: 8,
    },
  }]
  return {
    ...cloneDeep(defaultChart),
    legend: legend,
    color: color,
    series: series,
  }
}

// 第六个环状图
let paleChart6Data = {
  color: ['#2BFB63', '#C6BF18', '#00D9FF', '#F76747'],
  xData: ['迟到(人)', '请假(人)', '未到(人)', '实到(人)'],
  sData: [{
    data: [90, 72, 54, 3384]
  }],
}
export const paleChart6 = ({
  color = paleChart6Data.color,
  xData = paleChart6Data.xData,
  sData = paleChart6Data.sData,
}) => {
  let sum = sData[0].data.reduce((item, pre) => {
    return item += pre
  })
  let arr = [50, 33, 25, 20];
  let title = xData.map((item, index) => {
    return {
      text: item,
      left: `${arr[xData.length - 1]*(index + 1) - 1}%`,
      top: '75%',
      textAlign: 'center',
      textStyle: {
        fontWeight: 'normal',
        fontSize: defSize - 4,
        color: cfff8,
        textAlign: 'center',
      },
    }
  })
  let series = sData[0].data.map((item, index) => {
    return {
      type: 'pie',
      clockwise: false,
      emphasis: {
        scale: false
      },
      radius: ['16%', '20%'],
      center: [`${arr[sData[0].data.length - 1]*(index + 1)}%`, '60%'],
      labelLine: {
        show: false,
        length: 0,
        length2: 0
      },
      data: [{
        value: item,
        label: {
          show: true,
          formatter: '{d}%',
          position: 'center',
          padding: [0, 0, 100, 0],
          fontSize: defSize,
          color: cfff8
        },
        itemStyle: {
          color: color[index % color.length],
          borderWidth: 4,
          borderColor: color[index % color.length],
        },
      }, {
        value: sum - item,
        label: {
          show: false,
        },
        tooltip: {
          show: false
        },
        itemStyle: {
          color: cfff8,
          opacity: 0.1
        }
      }]
    }
  })

  return {
    ...cloneDeep(defaultChart),
    title: title,
    legend: {
      show: false
    },
    color: color,
    series: series,
  }
}

// 第七个环状图
let paleChart7Data = {
  color: ['#2DDD81'],
  xData: ['类别1'],
  sData: [{
    name: '系列1',
    data: [65451]
  }],
}
export const paleChart7 = ({
  color = paleChart7Data.color,
  // xData = paleChart7Data.xData,
  sData = paleChart7Data.sData,
}) => {
  let series = [{
    type: 'pie',
    clockwise: false,
    emphasis: {
      scale: false
    },
    radius: ['50%', '58%'],
    center: ['50%', '55%'],
    labelLine: {
      show: false
    },
    data: [{
      value: sData[0].data[0] / 2,
      tooltip: {
        formatter: `${sData[0].data[0]}`
      },
      label: {
        show: true,
        fontFamily: 'pangmeng',
        formatter: `${sData[0].data[0]}`,
        position: 'center',
        fontSize: defSize + 8,
        color: cfff8
      },
      itemStyle: {
        color: linearColor(color[0], hexToRgba(color[0], 0.5))
      }
    }, {
      value: sData[0].data[0] / 2,
      tooltip: {
        formatter: `${sData[0].data[0]}`
      },
      itemStyle: {
        color: linearColor(hexToRgba(color[0], 0.5), hexToRgba(color[0], 0.01), [0, 1, 0, 0])
      }
    }]
  }]
  return {
    ...cloneDeep(defaultChart),
    legend: {
      show: false
    },
    color: color,
    series: series,
  }
}

/**
 * 第八个环状图
 */
let paleChart8Data = {
  color: ['#38DAF1', '#38A8F1', '#386BF1', '#6B38F1'],
  xData: ['高新企业', '重点企业', '落税企业', '规土企业'],
  sData: [{
    data: [75, 65, 40, 20]
  }],
}
export const paleChart8 = ({
  color = paleChart8Data.color,
  xData = paleChart8Data.xData,
  sData = paleChart8Data.sData,
  total = 200
}) => {
  let series = [];
  sData[0].data.map((item, i) => {
    let arr = [{
      type: 'pie',
      radius: [61 - i * 15 + '%', 64 - i * 15 + '%'],
      center: ["50%", "50%"],
      label: {
        show: false,
      },
      labelLine: {
        show: false
      },
      emphasis: {
        scaleSize: 4
      },
      data: [{
        value: item,
        name: xData[i],
        label: {
          show: true,
          formatter: '{d}%',
          color: cfff8,
          position: 'inside'
        },
      }, {
        value: total - item,
        itemStyle: {
          color: "none",
          borderWidth: 5,
          borderRadius: 5,
        },
        tooltip: {
          show: false
        },
        label: {
          show: false
        }
      }]
    }, {
      name: '背景线',
      type: 'pie',
      silent: true,
      z: 1,
      emphasis: {
        scale: false
      },
      radius: [62 - i * 15 + '%', 63 - i * 15 + '%'],
      center: ["50%", "50%"],
      label: {
        show: false
      },
      itemStyle: {
        label: {
          show: false,
        },
        labelLine: {
          show: false
        },
      },
      data: [{
        value: 75,
        itemStyle: {
          color: hexToRgba(color[2], 0.6)
        },
        tooltip: {
          show: false
        },
      }, {
        value: 25,
        itemStyle: {
          color: 'none',
          borderWidth: 0
        },
        tooltip: {
          show: false
        },
      }]
    }];
    series = [...series, ...arr]
  })
  return {
    ...cloneDeep(defaultChart),
    legend: {
      show: false,
      bottom: 5,
      data: xData,
      itemWidth: 8,
      itemHeight: 8,
      textStyle: {
        color: cfff8,
        fontSize: defSize - 2
      }
    },
    grid: {
      top: '15%',
      bottom: '55%',
      left: "50%",
      containLabel: false
    },
    graphic: [{
      type: 'image',
      top: 'middle',
      left: 'center',
      style: {
        image: require('../assets/imgs/chart/chart_decorate.png'),
        width: 200 * 1.27,
        height: 200,
      }
    }],
    color: color,
    xAxis: {
      show: false,
    },
    yAxis: {
      type: 'category',
      inverse: true,
      z: 3,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: true,
        interval: 0,
        inside: false,
        color: cfff8,
        fontSize: defSize - 4,
      },
      data: xData,
    },
    series: series,
  }
}

/**
 * 第九个环状图
 */
let paleChart9Data = {
  color: ['#38DAF1', '#38A8F1', '#386BF1', '#6B38F1'],
  xData: ['高新企业', '重点企业', '落税企业', '规土企业'],
  sData: [{
    data: [75, 65, 40, 20]
  }],
}
export const paleChart9 = ({
  color = paleChart9Data.color,
  xData = paleChart9Data.xData,
  sData = paleChart9Data.sData,
  total = 200
}) => {
  let series = [];
  sData[0].data.map((item, i) => {
    let arr = [{
      type: 'pie',
      clockwise: false,
      emphasis: {
        scaleSize: 4
      },
      radius: [59 - i * 15 + '%', 66 - i * 15 + '%'],
      center: ["50%", "50%"],
      label: {
        show: false,
      },
      labelLine: {
        show: false
      },
      data: [{
        value: item,
        name: xData[i],
        label: {
          show: false,
        },
      }, {
        value: total - item,
        itemStyle: {
          color: "none",
          borderWidth: 5,
          borderRadius: 5,
        },
        tooltip: {
          show: false
        },
        label: {
          show: false
        }
      }]
    }, {
      name: '背景线',
      type: 'pie',
      silent: true,
      clockwise: false,
      emphasis: {
        scale: false
      },
      radius: [60 - i * 15 + '%', 65 - i * 15 + '%'],
      center: ["50%", "50%"],
      label: {
        show: false
      },
      itemStyle: {
        label: {
          show: false,
        },
        labelLine: {
          show: false
        },
      },
      data: [{
        value: 75,
        itemStyle: {
          color: hexToRgba(color[2], 0.2)
        },
        tooltip: {
          show: false
        },
      }, {
        value: 25,
        itemStyle: {
          color: 'none',
          borderWidth: 0
        },
        tooltip: {
          show: false
        },
      }]
    }];
    series = [...series, ...arr]
  })
  return {
    ...cloneDeep(defaultChart),
    legend: {
      top: '15%',
      left: '55%',
      orient: "vertical",
      data: xData,
      itemWidth: 8,
      itemHeight: 8,
      icon: 'circle',
      textStyle: {
        color: cfff8,
        fontSize: defSize - 2
      }
    },
    color: color,
    xAxis: {
      show: false,
    },
    yAxis: {
      show: false
    },
    series: series,
  }
}

/**
 * 第十个环状图
 */
let paleChart10Data = {
  color: [],
  sData: [{
      data: [60],
    },
    {
      data: [120],
    },
  ],
}
export const paleChart10 = ({
  color = paleChart10Data.color,
  sData = paleChart10Data.sData,
  total = 180,
  angle = 0,
}) => {
  let angleArr = [{
    start: 0,
    end: 90,
    color: '#FF8E89'
  }, {
    start: 90,
    end: 180,
    color: '#8450F9'
  }, {
    start: 180,
    end: 270,
    color: '#0CD3DB'
  }, {
    start: 270,
    end: 0,
    color: '#4386FA'
  }]
  let rings = [];
  angleArr.map((item, index) => {
    let pei = 0.6;
    if (index % 2 == 0) pei = 0.65
    rings.push({
      type: 'custom',
      coordinateSystem: "none",
      renderItem: function (params, api) {
        return {
          type: 'arc',
          shape: {
            cx: api.getWidth() / 2,
            cy: api.getHeight() / 2,
            r: Math.min(api.getWidth(), api.getHeight()) / 2 * pei,
            startAngle: (item.start + (index % 2 == 0 ? angle : -angle)) * Math.PI / 180,
            endAngle: (item.end + (index % 2 == 0 ? angle : -angle)) * Math.PI / 180
          },
          style: {
            stroke: item.color,
            fill: "transparent",
            lineWidth: 1
          },
          silent: true
        };
      },
      data: [0]
    }, )
  })

  let series = sData.map((item, index) => {
    return {
      type: 'pie',
      radius: index == 0 ? ['40%', '50%'] : ['32%', '35%'],
      center: ['50%', '50%'],
      startAngle: 90,
      label: {
        show: false
      },
      labelLine: {
        length: 5,
        length2: 20,
      },
      emphasis: {
        scaleSize: 4
      },
      data: [{
          value: item.data[0],
          name: item.name,
          itemStyle: {
            color: {
              colorStops: [{
                  offset: 0,
                  color: '#A098FC' // 0% 处的颜色
                },
                {
                  offset: 0.3,
                  color: '#4386FA' // 0% 处的颜色
                },
                {
                  offset: 0.6,
                  color: '#4FADFD' // 0% 处的颜色
                },
                {
                  offset: 0.8,
                  color: '#0CD3DB' // 100% 处的颜色
                }, {
                  offset: 1,
                  color: '#646CF9' // 100% 处的颜色
                }
              ]
            },
          },
        },
        {
          value: total - item.data[0],
          label: {
            show: false
          },
          tooltip: {
            show: false
          },
          itemStyle: {
            color: 'RGBA(11, 21, 43, 0.6)'
          }
        }
      ]
    }
  })

  return {
    ...cloneDeep(defaultChart),
    title: [
      //   ...sData.map((item, index) => {
      //   return {
      //     text: `{unit|${item.data[0]}}\n${item.name}\n{percent|${rate[index]}%}`,
      //     textStyle: {
      //       fontSize: defSize - 2,
      //       color: cfff,
      //       rich: {
      //         unit: {
      //           color: 'rgba(102, 252, 255, 1)',
      //           fontSize: defSize,
      //           padding: [5, 0],
      //         },
      //         percent: {
      //           padding: [3, 0],
      //         }
      //       }
      //     },
      //     top: index == 0 ? "5%" : 'auto',
      //     right: index == 0 ? "5%" : 'auto',
      //     bottom: index == 1 ? "5%" : 'auto',
      //     left: index == 1 ? "5%" : 'auto',
      //   }
      // }), 
      {
        text: `${total}`,
        textStyle: {
          fontSize: defSize + 4,
          color: 'rgba(102, 252, 255, 1)',
        },
        left: 'center',
        top: 'middle',
      }
    ],
    color: color,
    series: [...rings, ...series]
  }
}

/**
 * 第十一个环状图 南丁格尔图
 */
let paleChart11Data = {
  color: ['#B6F6EB', '#88E7E0', '#5DDBD3', '#36CFC9', '#11C2C1', '#01989D'],
  xData: ['19岁以下', '19-25', '26-35', '36-45', '46-55', '55岁以上'],
  sData: [{
    data: [300, 250, 200, 150, 100, 50]
  }]
}

export const paleChart11 = ({
  color = paleChart11Data.color,
  xData = paleChart11Data.xData,
  sData = paleChart11Data.sData,
  total = 1050,
}) => {
  let series = [{
    type: 'pie',
    width: '50%',
    radius: ['0%', '90%'],
    center: ['50%', '50%'],
    clockwise: true,
    avoidLabelOverlap: true,
    label: {
      show: false,
    },
    emphasis: {
      scaleSize: 4
    },
    data: sData[0].data.map((item, index) => {
      return {
        name: `${xData[index]}  ${(item/total*100).toFixed(2)}%`,
        value: item,
        tooltip: `${xData[index]}: {c}`,
      }
    }),
    roseType: 'radius'
  }]
  return {
    ...cloneDeep(defaultChart),
    legend: {
      orient: "vertical",
      top: 'middle',
      right: 20,
      itemWidth: 8,
      itemHeight: 8,
      textStyle: {
        fontSize: defSize,
        color: cfff8
      }
    },
    color: color,
    series: series,
  }
}

// 第十三个环状图
let paleChart13Data = {
  color: ['#11E2FF', '#D13F3F', '#5263AB'],
  xData: ['正常设备', '报警设备', '离线设备'],
  sData: [{
    data: [240, 140, 20]
  }],
  title: 400,
}
export const paleChart13 = ({
  color = paleChart13Data.color,
  xData = paleChart13Data.xData,
  sData = paleChart13Data.sData,
  title = paleChart13Data.title,
}) => {
  let series = [{
    type: 'pie',
    clockwise: false,
    radius: ['45%', '50%'],
    center: ['40%', '50%'],
    data: sData[0].data.map((item, index) => {
      return {
        name: `${xData[index]}：${item}`,
        value: item,
      }
    }),
    emphasis: {
      scaleSize: 4
    },
    tooltip: {
      formatter: '{b}'
    },
    label: {
      color: cfff8,
      formatter: "{d}%",
    },
    labelLine: {
      length: 4,
      length2: 10,
      lineStyle: {
        type: 'solid',
        color: cfff4,
      }
    },
  }, {
    type: 'gauge',
    radius: '35%',
    center: ['40%', '50%'],
    startAngle: 110,
    endAngle: 10,
    axisLabel: {
      show: false
    },
    axisLine: {
      lineStyle: {
        width: 2,
        color: [
          [1, linearColor(hexToRgba('#11E2FF', 0.8), hexToRgba('#11E2FF', 0.01))]
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
    },
  }, {
    type: 'gauge',
    radius: '35%',
    center: ['40%', '50%'],
    startAngle: 290,
    endAngle: 190,
    axisLabel: {
      show: false
    },
    axisLine: {
      lineStyle: {
        width: 2,
        color: [
          [1, linearColor(hexToRgba('#11E2FF', 0.01), hexToRgba('#11E2FF', 0.8))]
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
    },
  }, {
    type: 'pie',
    radius: ['0%', '34%'],
    center: ['40%', '50%'],
    emphasis: {
      scale: false
    },
    axisLabel: {
      show: false,
    },
    axisLine: {
      show: false
    },
    tooltip: {
      show: false
    },
    itemStyle: {
      color: 'rgba(28,31,49,0.8)'
    },
    data: [1]
  }]
  return {
    ...cloneDeep(defaultChart),
    title: {
      text: title,
      top: "middle",
      left: "35%",
      textStyle: {
        color: cfff8,
        fontSize: defSize + 2,
      }
    },
    legend: {
      orient: "vertical",
      top: "middle",
      right: "5%",
      itemGap: 20,
      icon: 'circle',
      itemWidth: 8,
      itemHeight: 8,
      textStyle: {
        fontSize: defSize - 4,
        color: cfff8
      }
    },
    color: color,
    series: series,
  }
}