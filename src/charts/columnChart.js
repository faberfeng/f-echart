/**
 * 柱状图
 */

import {
  cfff2,
  cfff4,
  cfff8,
  defSize,
  defaultChart,
  defGrid,
  hexToRgba,
  thinColor,
  linearColor,
  lineDefTooltip,
} from "./common";

/**
 * 第一个柱状图
 * @param {Object} columnChart1Data 默认数据
 * @param {Array} color 颜色集合
 * @param {Array} xData 横坐标集合
 * @param {Array} sData 数据集合   1、2为柱状图   3、4 为折线图
 */
const columnChart1Data = {
  color: ["#E9C46A", "#299D8F"],
  xData: [2015, 2016, 2017, 2018, 2019, 2020],
  yData: ["数量", "人均"],
  sData: [
    {
      name: "博士",
      data: [260, 620, 740, 760, 800, 900],
    },
    {
      name: "硕士",
      data: [400, 500, 490, 420, 370, 400],
    },
    {
      name: "博士人均数",
      data: [250, 420, 320, 350, 310, 380],
    },
    {
      name: "硕士人均数",
      data: [200, 240, 180, 240, 250, 200],
    },
  ],
};
export const columnChart1 = ({
  color = columnChart1Data.color,
  xData = columnChart1Data.xData,
  sData = columnChart1Data.sData,
  yData = columnChart1Data.yData,
  showLegend = true,
  xName = "",
}) => {
  const series = sData.map((item, index) => {
    if (index <= 1) {
      return {
        type: "bar",
        name: item.name,
        data: item.data,
        barWidth: "25%",
        itemStyle: {
          borderRadius: [20, 20, 0, 0],
          color: linearColor(
            hexToRgba(color[index], 0.8),
            hexToRgba(color[index], 0.01)
          ),
        },
      };
    } else {
      return {
        type: "line",
        name: item.name,
        yAxisIndex: 1,
        data: item.data,
        lineStyle: {
          shadowColor: color[(index - 2) % color.length],
          shadowBlur: 8,
        },
      };
    }
  });
  const yAxis = yData.map((item) => {
    return {
      type: "value",
      name: item,
      splitNumber: 3,
      nameTextStyle: {
        color: cfff4,
      },
      axisLabel: {
        fontSize: defSize - 2,
        color: cfff8,
      },
      axisLine: {
        show: false,
      },
      splitLine: {
        lineStyle: {
          color: [cfff4],
        },
      },
      axisTick: {
        show: false,
      },
    };
  });
  return {
    ...defaultChart,
    tooltip: lineDefTooltip,
    grid: {
      left: "15%",
      right: "15%",
      top: "30%",
      bottom: "15%",
    },
    legend: {
      show: showLegend,
      top: "5%",
      right: "10%",
      itemWidth: 8,
      itemHeight: 4,
      textStyle: {
        color: cfff8,
        fontSize: defSize - 2,
      },
    },
    xAxis: {
      name: xName,
      type: "category",
      data: xData,
      axisTick: {
        show: false,
      },
      axisLabel: {
        fontSize: defSize - 2,
        color: cfff8,
      },
      axisLine: {
        lineStyle: {
          color: cfff4,
        },
      },
    },
    yAxis: yAxis,
    color: color,
    series: series,
  };
};

/**
 * 第二个柱状图
 * @param {Object} columnChart2Data 默认数据
 * @param {Array} color 颜色集合
 * @param {Array} xData 横坐标集合
 * @param {Array} sData 数据集合   1 为柱状图   2 为折线图
 */
const columnChart2Data = {
  color: ["#14C0FC"],
  xData: ["园区1", "园区2", "园区3", "园区4", "园区5", "园区6", "园区7"],
  sData: [
    {
      name: "London",
      data: [260, 620, 740, 760, 800, 900, 920],
    },
    {
      name: "Paris",
      data: [250, 420, 320, 350, 310, 380, 340],
    },
  ],
};
export const columnChart2 = ({
  color = columnChart2Data.color,
  xData = columnChart2Data.xData,
  sData = columnChart2Data.sData,
  showLegend = false,
  xName = "",
  yName = "数量",
}) => {
  const series = sData.map((item, index) => {
    if (index == 0) {
      return {
        type: "bar",
        name: item.name,
        data: item.data,
        barWidth: "25%",
        itemStyle: {
          borderRadius: [20, 20, 0, 0],
          color: linearColor(
            hexToRgba(color[0], 0.8),
            hexToRgba(color[0], 0.01)
          ),
        },
      };
    } else {
      return {
        type: "line",
        name: item.name,
        data: item.data,
        emphasis: {
          scale: false,
        },
        itemStyle: {
          borderWidth: 1,
          borderColor: cfff4,
        },
        lineStyle: {
          color: color[0],
        },
        symbol: "circle",
        symbolSize: 6,
      };
    }
  });
  return {
    ...defaultChart,
    grid: defGrid,
    tooltip: lineDefTooltip,
    legend: {
      show: showLegend,
      top: "5%",
      right: "10%",
      itemWidth: 8,
      itemHeight: 4,
      textStyle: {
        color: cfff8,
        fontSize: defSize - 2,
      },
    },
    xAxis: {
      name: xName,
      type: "category",
      data: xData,
      axisTick: {
        show: false,
      },
      axisLabel: {
        fontSize: defSize - 2,
        color: cfff8,
      },
      axisLine: {
        lineStyle: {
          color: cfff4,
        },
      },
    },
    yAxis: {
      type: "value",
      name: yName,
      splitNumber: 3,
      nameTextStyle: {
        color: cfff8,
      },
      axisLabel: {
        fontSize: defSize - 2,
        color: cfff8,
      },
      axisLine: {
        show: false,
      },
      splitLine: {
        lineStyle: {
          color: [cfff4],
        },
      },
      axisTick: {
        show: false,
      },
    },
    color: color,
    series: series,
  };
};

/**
 * 第三个柱状图
 * @param {Object} columnChart3Data 默认数据
 * @param {Array} color 颜色集合
 * @param {Array} xData 横坐标集合
 * @param {Array} sData 数据集合  一条数据显示为一个柱状和一个个折线图  折线图为辅助显示
 */
const columnChart3Data = {
  color: ["#FBE031", "#7BFAFF"],
  xData: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  sData: [
    {
      name: "",
      data: [260, 620, 740, 760, 800, 900, 920, 890, 560, 730, 250, 870],
    },
  ],
};
export const columnChart3 = ({
  color = columnChart3Data.color,
  xData = columnChart3Data.xData,
  sData = columnChart3Data.sData,
  showLegend = false,
  xName = "",
  yName = "数量：万元",
}) => {
  let series = [];
  sData.forEach((item) => {
    let arr = [
      {
        type: "bar",
        name: item.name,
        data: item.data,
        barWidth: "25%",
        itemStyle: {
          color: linearColor(
            hexToRgba(color[0], 0.8),
            hexToRgba(color[0], 0.01)
          ),
        },
      },
      {
        type: "line",
        data: item.data,
        emphasis: {
          scale: false,
        },
        itemStyle: {
          color: "none",
          borderWidth: 2,
          borderColor: cfff4,
        },
        lineStyle: {
          color: color[1],
        },
        tooltip: {
          show: false,
        },
        symbol: "circle",
        symbolSize: 5,
      },
    ];
    series = [...series, ...arr];
  });
  return {
    ...defaultChart,
    grid: defGrid,
    tooltip: lineDefTooltip,
    legend: {
      show: showLegend,
      top: "5%",
      right: "10%",
      itemWidth: 8,
      itemHeight: 4,
      textStyle: {
        color: cfff8,
        fontSize: defSize - 2,
      },
    },
    xAxis: {
      name: xName,
      type: "category",
      data: xData,
      axisTick: {
        show: false,
      },
      axisLabel: {
        fontSize: defSize - 2,
        color: cfff8,
      },
      axisLine: {
        lineStyle: {
          color: cfff4,
        },
      },
    },
    yAxis: {
      name: yName,
      type: "value",
      splitNumber: 3,
      nameTextStyle: {
        color: cfff8,
      },
      axisLabel: {
        fontSize: defSize - 2,
        color: cfff8,
      },
      axisLine: {
        show: false,
      },
      splitLine: {
        lineStyle: {
          color: [cfff4],
        },
      },
      axisTick: {
        show: false,
      },
    },
    color: color,
    series: series,
  };
};

// 四数据
const getSeries = (sData, color, isPercent) => {
  const len = sData.length;
  let series = [];
  sData.forEach((item, index) => {
    const arr = [
      {
        name: item.name,
        type: "custom",
        renderItem: (params, api) => {
          let location = api.coord([api.value(0), api.value(1)]);
          let xAxisPoint = api.coord([api.value(0), 0]);
          switch (len) {
            case 2:
              location = [
                index == 0 ? location[0] - 8 : location[0] + 8,
                location[1],
              ];
              xAxisPoint = [
                index == 0 ? xAxisPoint[0] - 8 : xAxisPoint[0] + 8,
                xAxisPoint[1],
              ];
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
            type: "group",
            children: [
              {
                type: "ColCubeLeft",
                shape: {
                  x: location[0],
                  y: location[1],
                  xAxisPoint: xAxisPoint,
                },
                style: {
                  fill: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      {
                        offset: 0,
                        color: color[index % color.length],
                      },
                      {
                        offset: 0.4,
                        color: color[index % color.length],
                      },
                      {
                        offset: 1,
                        color: thinColor(color[index % color.length]),
                      },
                    ],
                    global: false,
                  },
                },
              },
              {
                type: "ColCubeRight",
                shape: {
                  x: location[0],
                  y: location[1],
                  xAxisPoint: xAxisPoint,
                },
                style: {
                  fill: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      {
                        offset: 0,
                        color: color[index % color.length],
                      },
                      {
                        offset: 0.4,
                        color: color[index % color.length],
                      },
                      {
                        offset: 1,
                        color: thinColor(color[index % color.length]),
                      },
                    ],
                    global: false,
                  },
                },
              },
              {
                type: "ColCubeTop",
                shape: {
                  x: location[0],
                  y: location[1],
                  xAxisPoint: xAxisPoint,
                },
                style: {
                  fill: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      {
                        offset: 0,
                        color: color[index % color.length],
                      },
                      {
                        offset: 0.4,
                        color: color[index % color.length],
                      },
                      {
                        offset: 1,
                        color: thinColor(color[index % color.length]),
                      },
                    ],
                    global: false,
                  },
                },
              },
            ],
          };
        },
        data: item.data,
      },
      {
        name: item.name,
        type: "bar",
        label: {
          show: true,
          formatter: isPercent ? "{c}%" : "{c}",
          position: "top",
          fontSize: defSize - 4,
          color: cfff8,
          offset: [0, -5],
        },
        itemStyle: {
          color: "transparent",
        },
        data: item.data,
      },
    ];
    series = [...series, ...arr];
  });
  return series;
};

/**
 * 第四个柱状图
 * @param {Object} columnChart4Data 默认数据
 * @param {Array} color 颜色集合
 * @param {Array} xData 横坐标集合
 * @param {Array} sData 数据集合
 */
const columnChart4Data = {
  color: ["#3C82E2", "#958733"],
  xData: ["人工智能", "生命健康", "数字信息", "其他"],
  sData: [
    {
      data: [40, 52, 38, 76],
    },
    {
      data: [64, 81, 51, 94],
    },
  ],
};
export const columnChart4 = ({
  color = columnChart4Data.color,
  xData = columnChart4Data.xData,
  sData = columnChart4Data.sData,
  isPercent = true,
  showLegend = false,
  xName = "",
  yName = "",
}) => {
  const series = getSeries(sData, color, isPercent);
  return {
    ...defaultChart,
    grid: defGrid,
    legend: {
      show: showLegend,
      top: "5%",
      textStyle: {
        color: cfff8,
        fontSize: defSize - 2,
      },
      itemWidth: 8,
      itemHeight: 8,
    },
    xAxis: {
      name: xName,
      type: "category",
      data: xData,
      axisTick: {
        show: false,
      },
      axisLabel: {
        fontSize: defSize - 2,
        color: cfff8,
      },
      axisLine: {
        lineStyle: {
          color: cfff4,
        },
      },
    },
    yAxis: {
      name: yName,
      type: "value",
      splitNumber: 5,
      max: isPercent ? 100 : "dataMax",
      nameTextStyle: {
        color: cfff4,
      },
      axisLabel: {
        fontSize: defSize - 2,
        color: cfff8,
        formatter: isPercent ? "{value}%" : "{value}",
      },
      axisLine: {
        lineStyle: {
          color: cfff8,
        },
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    color: color,
    series: series,
  };
};

/**
 * 第五个柱状图
 * @param {Object} columnChart5Data 默认数据
 * @param {Array} color 颜色集合
 * @param {Array} xData 横坐标集合
 * @param {Array} sData 数据集合
 */
const columnChart5Data = {
  color: ["#5B8FF9", "#FF99C3", "#9270CA", "#FBE031"],
  xData: ["当日", "当月", "当季", "当年"],
  sData: [
    {
      name: "人工智能",
      data: [96, 77, 56, 93],
    },
    {
      name: "生命健康",
      data: [56, 56, 36, 99],
    },
    {
      name: "数字信息",
      data: [94, 95, 92, 74],
    },
    {
      name: "其他",
      data: [56, 100, 90, 48],
    },
  ],
};
export const columnChart5 = ({
  color = columnChart5Data.color,
  xData = columnChart5Data.xData,
  sData = columnChart5Data.sData,
  isPercent = true,
  showLegend = true,
  xName = "",
  yName = "",
}) => {
  const series = sData.map((item, index) => {
    return {
      type: "bar",
      name: item.name,
      data: item.data,
      barWidth: `${50 / sData.length}%`,
      itemStyle: {
        color: linearColor(
          hexToRgba(color[index], 0.8),
          hexToRgba(color[index], 0.01)
        ),
      },
    };
  });
  return {
    ...defaultChart,
    grid: defGrid,
    tooltip: lineDefTooltip,
    legend: {
      show: showLegend,
      top: "5%",
      right: "10%",
      textStyle: {
        color: cfff8,
        fontSize: defSize - 2,
      },
      itemWidth: 8,
      itemHeight: 8,
    },
    xAxis: {
      name: xName,
      type: "category",
      data: xData,
      axisTick: {
        show: false,
      },
      axisLabel: {
        fontSize: defSize - 2,
        color: cfff8,
      },
      axisLine: {
        lineStyle: {
          color: cfff4,
        },
      },
    },
    yAxis: {
      name: yName,
      type: "value",
      splitNumber: 3,
      max: 100,
      nameTextStyle: {
        color: cfff4,
      },
      axisLabel: {
        fontSize: defSize - 2,
        color: cfff8,
        formatter: `{value}${isPercent ? "%" : ""}`,
      },
      axisLine: {
        lineStyle: {
          color: cfff8,
        },
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    color: color,
    series: series,
  };
};

/**
 * 第六个柱状图
 * @param {Object} columnChart6Data 默认数据
 * @param {Array} color 颜色集合
 * @param {Array} xData 横坐标集合
 * @param {Array} sData 数据集合
 */
const columnChart6Data = {
  color: ["#14C0FC", "#050838"],
  xData: ["人工智能", "生命健康", "数字信息", "其他"],
  sData: [
    {
      data: [60, 40, 46, 30],
    },
  ],
};
export const columnChart6 = ({
  color = columnChart6Data.color,
  xData = columnChart6Data.xData,
  sData = columnChart6Data.sData,
  isPercent = true,
}) => {
  let series = [];
  sData.forEach((item, index) => {
    const arr = [
      {
        type: "bar",
        barWidth: "20%",
        itemStyle: {
          color: linearColor(
            hexToRgba(color[0], 0.8),
            hexToRgba(color[0], 0.01)
          ),
        },
        data: item.data,
        z: 8,
      },
      {
        type: "line",
        areaStyle: {
          color: linearColor(
            hexToRgba(color[1], 0.8),
            hexToRgba(color[1], 0.01)
          ),
        },
        data: item.data,
        symbolSize: 5,
      },
      {
        type: "pictorialBar",
        symbolSize: ["25%", 4],
        symbolOffset: [0, -2],
        symbolPosition: "end",
        z: 12,
        label: {
          show: true,
          position: "top",
          formatter: `{c}${isPercent ? "%" : ""}`,
          fontSize: defSize - 2,
          color: cfff8,
        },
        color: cfff4,
        data: item.data,
      },
      {
        type: "pictorialBar",
        symbolSize: ["25%", 4],
        symbolOffset: [0, 2],
        z: 12,
        color: color[index],
        data: item.data,
      },
      {
        type: "pictorialBar",
        symbolSize: ["35%", 4],
        symbolOffset: [0, 4],
        z: 10,
        itemStyle: {
          color: "none",
          borderColor: color[0],
          borderType: "solid",
          borderWidth: 2,
        },
        data: item.data,
      },
      {
        type: "pictorialBar",
        symbolSize: ["50%", 4],
        symbolOffset: [0, 6],
        z: 10,
        itemStyle: {
          color: "none",
          borderColor: hexToRgba(color[0], 0.4),
          borderType: "solid",
          borderWidth: 1,
        },
        data: item.data,
      },
    ];
    series = [...series, ...arr];
  });
  return {
    ...defaultChart,
    grid: {
      left: "10%",
      right: "10%",
      top: "20%",
      bottom: "20%",
    },
    legend: {
      show: false,
    },
    xAxis: {
      type: "category",
      data: xData,
      axisTick: {
        show: false,
      },
      axisLabel: {
        fontSize: defSize - 2,
        color: cfff8,
      },
      axisLine: {
        show: false,
      },
    },
    yAxis: {
      show: false,
    },
    color: color,
    series: series,
  };
};

/**
 * 第七个柱状图
 * @param {Object} columnChart7Data 默认数据
 * @param {Array} color 颜色集合
 * @param {Array} xData 横坐标集合
 * @param {Array} sData 数据集合
 */
const columnChart7Data = {
  color: ["#1A97FD", "#FDC01A", "#2EF8F1", "#843AFF", "#FF3A3A"],
  xData: ["正常", "常规", "紧急", "疑难", "告警"],
  sData: [
    {
      data: [10, 10, 10, 10, 10],
    },
  ],
};
export const columnChart7 = ({
  color = columnChart7Data.color,
  xData = columnChart7Data.xData,
  sData = columnChart7Data.sData,
}) => {
  let series = [];
  sData.forEach((item) => {
    const arr = [
      {
        type: "bar",
        barWidth: "20%",
        label: {
          show: true,
          position: "top",
          formatter: "{c}",
          fontSize: defSize - 2,
          color: cfff8,
        },
        data: item.data.map((item1, index1) => {
          return {
            value: item1,
            itemStyle: {
              color: linearColor(
                hexToRgba(color[index1], 0.01),
                hexToRgba(color[index1], 0.8)
              ),
            },
          };
        }),
        z: 8,
      },
      {
        type: "pictorialBar",
        symbolSize: ["40%", 4],
        symbolOffset: [0, -15],
        z: 10,
        data: item.data.map((item1, index1) => {
          return {
            value: item1,
            itemStyle: {
              color: "none",
              borderColor: color[index1 % color.length],
              borderType: "solid",
              borderWidth: 2,
            },
          };
        }),
      },
      {
        type: "pictorialBar",
        symbolSize: ["50%", 4],
        symbolOffset: [0, 4],
        z: 10,
        data: item.data.map((item1, index1) => {
          return {
            value: item1,
            itemStyle: {
              color: "none",
              borderColor: color[index1 % color.length],
              borderType: "solid",
              borderWidth: 2,
            },
          };
        }),
      },
    ];
    series = [...series, ...arr];
  });
  return {
    ...defaultChart,
    grid: {
      left: "10%",
      right: "10%",
      top: "20%",
      bottom: "20%",
    },
    legend: {
      show: false,
    },
    xAxis: {
      type: "category",
      data: xData,
      axisTick: {
        show: false,
      },
      axisLabel: {
        formatter: "{value}",
        fontSize: defSize - 2,
        color: cfff8,
      },
      axisLine: {
        show: false,
      },
    },
    yAxis: [
      {
        type: "value",
        show: false,
      },
    ],
    color: color,
    series: series,
  };
};

/**
 * 第八个柱状图
 */
const columnChart8Data = {
  color: ["#D13F3F", "#F98539", "#999999", "#42E4FE", "#9742FE"],
  xData: ["报警", "故障", "屏蔽", "动作", "隐患"],
  sData: [
    {
      data: [389, 312, 267, 159, 159],
    },
  ],
};
export const columnChart8 = ({
  color = columnChart8Data.color,
  xData = columnChart8Data.xData,
  sData = columnChart8Data.sData,
}) => {
  let series = [];
  sData.forEach((item) => {
    const arr = [
      {
        name: item.name || "",
        type: "bar",
        barWidth: 15,
        barGap: "100%",
        data: item.data.map((item1, index1) => {
          return {
            name: xData[index1],
            value: item1,
            itemStyle: {
              color: linearColor(
                hexToRgba(color[index1], 0.8),
                hexToRgba(color[index1], 0.1)
              ),
            },
          };
        }),
        z: 8,
      },
      {
        name: item.name || "",
        type: "pictorialBar",
        symbolSize: [15, 4],
        symbolOffset: [0, -2],
        symbolPosition: "end",
        z: 12,
        label: {
          show: true,
          position: "top",
          formatter: "{c}",
          fontSize: defSize - 2,
          color: cfff8,
        },
        color: cfff8,
        data: item.data,
      },
      {
        name: item.name || "",
        type: "pictorialBar",
        symbolSize: [15, 4],
        symbolOffset: [0, 2],
        z: 12,
        data: item.data.map((item1, index1) => {
          return {
            name: xData[index1],
            value: item1,
            itemStyle: {
              color: color[index1],
            },
          };
        }),
      },
      {
        name: item.name || "",
        type: "pictorialBar",
        symbolSize: [20, 4],
        symbolOffset: [0, 4],
        z: 10,
        data: item.data.map((item1, index1) => {
          return {
            name: xData[index1],
            value: item1,
            itemStyle: {
              color: "none",
              borderColor: color[index1],
              borderType: "solid",
              borderWidth: 2,
            },
          };
        }),
      },
      {
        name: item.name || "",
        type: "pictorialBar",
        symbolSize: [25, 4],
        symbolOffset: [0, 6],
        z: 10,
        data: item.data.map((item1, index1) => {
          return {
            name: xData[index1],
            value: item1,
            itemStyle: {
              color: "none",
              borderColor: color[index1],
              borderType: "solid",
              borderWidth: 1,
            },
          };
        }),
      },
    ];
    series = [...series, ...arr];
  });
  return {
    ...defaultChart,
    grid: {
      left: "5%",
      right: "5%",
      top: 30,
      bottom: 35,
    },
    legend: {
      show: false,
    },
    xAxis: {
      type: "category",
      data: xData,
      boundaryGap: ["10%", "10%"],
      axisTick: {
        show: false,
      },
      axisLabel: {
        fontSize: defSize - 2,
        color: cfff8,
        padding: [5, 0, 0, 0],
      },
      axisLine: {
        show: false,
      },
    },
    yAxis: {
      show: false,
    },
    color: color,
    series: series,
  };
};

/**
 * 第九个柱状图
 */
const columnChart9Data = {
  color: ["#3AAEFD", "#FFBB49", "#FFFFFF"],
  xData: ["会议室空置率：35%"],
  sData: [
    {
      name: "使用中",
      data: [5],
    },
    {
      name: "已预订",
      data: [5],
    },
    {
      name: "空闲数",
      data: [4],
    },
  ],
};
export const columnChart9 = ({
  color = columnChart9Data.color,
  xData = columnChart9Data.xData,
  sData = columnChart9Data.sData,
}) => {
  const pictorialBarData = sData.map((item, index) => {
    if (index === 0) {
      return {
        data: item.data,
      };
    }
    let i = index;
    let arr = item.data;
    while (i > 0) {
      i -= 1;
      arr = arr.map((aItem, aIndex) => {
        return aItem + sData[i].data[aIndex];
      });
    }
    return {
      data: arr,
    };
  });
  let series = [
    {
      name: "底部大环",
      type: "pictorialBar",
      symbolSize: [50, 10],
      symbolOffset: [0, 12],
      tooltip: {
        show: false,
      },
      data: sData[0].data.map((item) => {
        return {
          value: item,
          itemStyle: {
            color: "none",
            borderColor: color[0],
            borderType: "solid",
            borderWidth: 6,
          },
        };
      }),
    },
    {
      name: "底部小环",
      type: "pictorialBar",
      symbolSize: [45, 10],
      symbolOffset: [0, 10],
      tooltip: {
        show: false,
      },
      data: sData[0].data.map((item) => {
        return {
          value: item,
          itemStyle: {
            color: "none",
            borderColor: color[0],
            borderType: "solid",
            borderWidth: 10,
          },
        };
      }),
    },
    {
      name: "底部圆",
      type: "pictorialBar",
      symbolSize: [35, 10],
      symbolOffset: [0, 5],
      z: 12,
      tooltip: {
        show: false,
      },
      data: sData[0].data.map((item) => {
        return {
          value: item,
          itemStyle: {
            color: color[0],
          },
        };
      }),
    },
  ];
  sData.forEach((item, index) => {
    const arr = [
      {
        name: item.name,
        type: "pictorialBar",
        symbolSize: [35, 10],
        symbolOffset: [0, -5],
        z: 12,
        tooltip: {
          show: false,
        },
        data: item.data.map((dItem, dIndex) => {
          return {
            value: index === 0 ? dItem : pictorialBarData[index].data[dIndex],
            symbolPosition: "end",
            itemStyle: {
              color: hexToRgba(color[index], 0.6),
            },
          };
        }),
      },
      {
        name: item.name,
        type: "bar",
        barWidth: 35,
        stack: "stack",
        tooltip: {
          formatter: "{a}：{c}",
        },
        itemStyle: {
          color:
            index % 2 == 0
              ? hexToRgba(color[index], 0.3)
              : linearColor(
                  hexToRgba(color[index], 0.4),
                  hexToRgba(color[index], 0.1)
                ),
        },
        label: {
          show: true,
          color: cfff8,
          offset: [-50, 0],
          align: "center",
          formatter: "{a}\n{val|{c}}",
          rich: {
            val: {
              fontSize: 16,
              color: "#34DEF9",
              padding: [5, 0, 0, 0],
            },
          },
        },
        data: item.data,
      },
    ];
    series = [...series, ...arr];
  });
  return {
    ...defaultChart,
    grid: {
      left: "5%",
      right: "5%",
      top: 30,
      bottom: 40,
    },
    legend: {
      show: false,
    },
    xAxis: {
      type: "category",
      data: xData,
      boundaryGap: ["10%", "10%"],
      axisTick: {
        show: false,
      },
      axisLabel: {
        fontSize: defSize,
        color: "#47FEFF",
        padding: [10, 0, 0, 0],
      },
      axisLine: {
        show: false,
      },
    },
    yAxis: {
      show: false,
    },
    color: color,
    series: series,
  };
};

/**
 * 第十个柱状图
 */
const columnChart10Data = {
  color: ["#4BFAFF", "#0066FF"],
  xData: ["6:00", "8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
  sData: [
    {
      data: [3, 12, 10, 2, 5, 8, 10, 5],
    },
  ],
};
export const columnChart10 = ({
  color = columnChart10Data.color,
  xData = columnChart10Data.xData,
  sData = columnChart10Data.sData,
  isPercent = false,
  showLegend = false,
  xName = "",
  yName = "",
}) => {
  let barWidth = 15;
  const series = [
    {
      //内
      type: "bar",
      barWidth,
      legendHoverLink: false,
      symbolRepeat: true,
      silent: true,
      itemStyle: {
        color: linearColor(color[0], hexToRgba(color[1], 0.2)),
      },
      data: sData[0].data,
      z: 1,
    },
    {
      //分隔
      type: "pictorialBar",
      itemStyle: {
        color: "rgba(0,0,0,0.6)",
      },
      symbolRepeat: "fixed",
      symbolMargin: 2,
      symbol: "roundRect",
      symbolClip: true,
      symbolSize: [barWidth, 2],
      symbolPosition: "start",
      symbolOffset: [0, 0],
      data: sData[0].data,
      tooltip: {
        show: false,
      },
      z: 2,
    },
    {
      // 背景
      type: "pictorialBar",
      animationDuration: 0,
      symbolRepeat: "fixed",
      symbolMargin: "20%",
      symbol: "roundRect",
      symbolSize: [barWidth, 4],
      itemStyle: {
        color: cfff2,
      },
      label: {
        show: false,
      },
      data: sData[0].data,
      tooltip: {
        show: false,
      },
      z: 0,
    },
  ];
  return {
    ...defaultChart,
    grid: defGrid,
    tooltip: lineDefTooltip,
    legend: {
      show: showLegend,
      top: "5%",
      textStyle: {
        color: cfff8,
        fontSize: defSize - 2,
      },
      itemWidth: 8,
      itemHeight: 8,
    },
    xAxis: {
      name: xName,
      type: "category",
      data: xData,
      axisTick: {
        show: false,
      },
      axisLabel: {
        fontSize: defSize - 2,
        color: cfff8,
      },
      axisLine: {
        lineStyle: {
          color: cfff4,
        },
      },
    },
    yAxis: {
      name: yName,
      type: "value",
      splitNumber: 3,
      max: isPercent ? 100 : "dataMax",
      nameTextStyle: {
        color: cfff4,
      },
      axisLabel: {
        fontSize: defSize - 2,
        color: cfff8,
        formatter: isPercent ? "{value}%" : "{value}",
      },
      axisLine: {
        show: false,
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: cfff4,
        },
      },
      axisTick: {
        show: false,
      },
    },
    color: color,
    series: series,
  };
};
