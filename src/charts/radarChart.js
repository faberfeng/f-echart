import {
  cfff8,
  cloneDeep,
  defaultChart,
} from "./common"

// 第一个雷达图
let radarChart1Data = {
  color: ['#5B8FF9', '#43E1E1'],
  xData: ['建筑品质', '性价比', '交通出行', '市场关注度', '周边配套', '政务中心'],
  sData: [{
    name: '系列1',
    data: [4300, 10000, 28000, 35000, 50000, 19000],
  }, {
    name: '系列2',
    data: [5000, 14000, 28000, 31000, 42000, 21000],
  }]
}
export const radarChart1 = ({
  color = radarChart1Data.color,
  xData = radarChart1Data.xData,
  sData = radarChart1Data.sData,
}) => {
  let indicator = xData.map(item => {
    return {
      name: item
    }
  })
  let series = [{
    type: "radar",
    data: sData.map((item, index) => {
      return {
        name: item.name,
        value: cloneDeep(item.data),
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: color[index % color.length]
            }, {
              offset: 0.5,
              color: 'rgba(0,0,0,0)'
            }, {
              offset: 1,
              color: color[index % color.length]
            }],
            global: false
          }
        },
      }
    }),
  }]
  return {
    ...cloneDeep(defaultChart),
    tooltip: {
      show: true,
    },
    legend: {
      show: false,
    },
    radar: {
      indicator: indicator,
      radius: ["0%", "60%"],
      center: ['50%', '55%'],
      splitNumber: 4,
      axisName: {
        color: 'rgba(0,0,0,0)',
      },
      axisNameGap: 5,
      axisLine: {
        lineStyle: {
          color: '#0C1339'
        }
      },
      splitLine: {
        lineStyle: {
          color: "#121B4D"
        }
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: ['rgba(0,0,0,0)', 'rgba(0,0,0,0)'],
        }
      },
    },
    color: color,
    series: series,
  }
}

// 第二个雷达图
let radarChart2Data = {
  color: ['#5B8FF9'],
  xData: ['故障报修', '应急告警', '安全告警', '综合告警', '能耗告警', '设备告警'],
  sData: [{
    name: '系列1',
    data: [3300, 8000, 22000, 10000, 4900, 12000],
  }]
}
export const radarChart2 = ({
  color = radarChart2Data.color,
  xData = radarChart2Data.xData,
  sData = radarChart2Data.sData,
}) => {
  let indicator = xData.map(item => {
    return {
      name: item
    }
  })
  let series = [{
    type: "radar",
    data: sData.map((item, index) => {
      return {
        name: item.name,
        value: cloneDeep(item.data),
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: color[index % color.length]
            }, {
              offset: 0.5,
              color: 'rgba(0,0,0,0)'
            }, {
              offset: 1,
              color: color[index % color.length]
            }],
            global: false
          }
        },
      }
    }),
  }]
  return {
    ...cloneDeep(defaultChart),
    tooltip: {
      show: true,
    },
    legend: {
      show: false,
    },
    radar: {
      indicator: indicator,
      radius: ["0%", "60%"],
      center: ['50%', '55%'],
      splitNumber: 4,
      axisNameGap: 5,
      axisName: {
        color: cfff8,
      },
      axisLine: {
        lineStyle: {
          color: '#0C1339'
        }
      },
      splitLine: {
        lineStyle: {
          color: "#4B5277"
        }
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: ['rgba(0,0,0,0)', 'rgba(0,0,0,0)'],
        }
      },
    },
    color: color,
    series: series,
  }
}