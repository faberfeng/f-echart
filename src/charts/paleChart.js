import {
  cfff2,
  cfff4,
  cfff6,
  cfff8,
  defSize,
  defaultChart,
  hexToRgba,
  linearColor,
  legendObj,
} from "./common";

// 第一个环状图
const paleChart1Data = {
  color: ["#D5B3FF", "#FF6C38", "#F7D60B", "#11E2FF"],
  xData: ["学生", "教师", "领导", "职工"],
  sData: [
    {
      name: "",
      data: [100, 30, 40, 50],
    },
  ],
};
export const paleChart1 = ({
  color = paleChart1Data.color,
  xData = paleChart1Data.xData,
  sData = paleChart1Data.sData,
  width = 140,
  legendType = "bottom",
  showLegend = true,
  isPercent = true,
}) => {
  const series = [
    {
      type: "pie",
      clockwise: true,
      emphasis: {
        scaleSize: 4,
      },
      radius: [0, "40%"],
      center: ["50%", "50%"],
      data: sData[0].data.map((item, index) => {
        return {
          name: xData[index],
          value: item,
        };
      }),
      label: {
        fontFamily: "pangmeng",
        color: cfff8,
        formatter: isPercent ? "{d}%" : "{c}",
      },
      labelLine: {
        length: 5,
        length2: 50,
        lineStyle: {
          color: "#00BAE3",
        },
      },
    },
  ];
  return {
    ...defaultChart,
    legend: {
      show: showLegend,
      ...legendObj[legendType].legend,
      itemWidth: 8,
      itemHeight: 8,
      textStyle: {
        fontSize: xData.length > 4 ? defSize - 4 : defSize - 2,
        color: cfff8,
      },
    },
    graphic: [
      {
        type: "image",
        top: "middle",
        left: "center",
        style: {
          image: "/imgs/morepale1-bg.png",
          width: width,
          height: width,
        },
      },
    ],
    color: color,
    series: series,
  };
};

// 第二个环状图
const paleChart2Data = {
  color: [
    "#43AA8B",
    "#2DC4B6",
    "#E76F51",
    "#FB8F3A",
    "#F9C74F",
    "#90BE6D",
    "#277DA1",
  ],
  xData: [
    "图书馆面积",
    "体育馆面积",
    "食堂面积",
    "教学面积",
    "办公面积",
    "宿舍面积",
    "其他",
  ],
  sData: [
    {
      data: [15, 14, 12, 22, 16, 11, 10],
    },
  ],
  width: 180,
};
export const paleChart2 = ({
  color = paleChart2Data.color,
  xData = paleChart2Data.xData,
  sData = paleChart2Data.sData,
  width = paleChart2Data.width,
  showLegend = true,
  isPercent = true,
}) => {
  const series = [
    {
      type: "pie",
      clockwise: true,
      radius: ["30%", "38%"],
      center: ["50%", "50%"],
      data: sData[0].data.map((item, index) => {
        return {
          name: xData[index],
          value: item,
        };
      }),
      emphasis: {
        scaleSize: 4,
      },
      label: {
        color: cfff8,
        formatter: isPercent ? "{d}%" : "{c}",
      },
      labelLine: {
        length: 10,
        length2: 5,
      },
    },
  ];
  return {
    ...defaultChart,
    legend: {
      show: showLegend,
      bottom: 0,
      icon: "circle",
      itemWidth: 5,
      itemHeight: 5,
      textStyle: {
        fontSize: xData.length > 4 ? defSize - 4 : defSize - 2,
        color: cfff8,
      },
    },
    graphic: [
      {
        type: "image",
        top: "middle",
        left: "center",
        style: {
          image: "/imgs/morepale2-bg.png",
          width: width,
          height: width / 1.3,
        },
      },
    ],
    color: color,
    series: series,
  };
};

// 第三个环状图
const paleChart3Data = {
  color: ["#E76F51", "#F4A261", "#E9C46A", "#299D8F", "#A8DADC"],
  xData: ["书籍", "论文", "获奖", "专利", "软件"],
  sData: [
    {
      data: [30, 10, 15, 20, 25],
    },
  ],
  width: 230,
};
export const paleChart3 = ({
  color = paleChart3Data.color,
  xData = paleChart3Data.xData,
  sData = paleChart3Data.sData,
  width = paleChart3Data.width,
  showLegend = true,
  isPercent = true,
}) => {
  const series = [
    {
      type: "pie",
      radius: ["25%", "40%"],
      center: ["50%", "50%"],
      data: sData[0].data.map((item, index) => {
        return {
          name: xData[index],
          value: item,
        };
      }),
      emphasis: {
        scaleSize: 4,
      },
      label: {
        color: cfff8,
        formatter: isPercent ? "{d}%" : "{c}",
      },
      labelLine: {
        length: 20,
        length2: 5,
      },
    },
  ];
  return {
    ...defaultChart,
    legend: {
      show: showLegend,
      bottom: 0,
      icon: "circle",
      itemWidth: 5,
      itemHeight: 5,
      textStyle: {
        fontSize: xData.length > 4 ? defSize - 4 : defSize - 2,
        color: cfff8,
      },
    },
    graphic: [
      {
        type: "image",
        top: "middle",
        left: "center",
        style: {
          image: "/imgs/morepale3-bg.png",
          width: width,
          height: width,
        },
      },
    ],
    color: color,
    series: series,
  };
};

// 第四个环状图
const paleChart4Data = {
  color: ["#D5B3FF", "#FF6C38", "#F7D60B", "#11E2FF"],
  xData: ["本科", "专科", "硕士", "博士"],
  sData: [
    {
      data: [46, 19, 23, 12],
    },
  ],
  title: "学历分布",
};
export const paleChart4 = ({
  color = paleChart4Data.color,
  xData = paleChart4Data.xData,
  sData = paleChart4Data.sData,
  title = paleChart4Data.title,
  showLegend = true,
  isPercent = true,
}) => {
  const series = [
    {
      type: "pie",
      clockwise: true,
      radius: ["45%", "55%"],
      center: ["50%", "45%"],
      data: sData[0].data.map((item, index) => {
        return {
          name: xData[index],
          value: item,
        };
      }),
      emphasis: {
        scaleSize: 4,
      },
      label: {
        color: cfff8,
        formatter: isPercent ? "{b}\n{yellow|{d}%}" : "{b}\n{yellow|{c}}",
        rich: {
          yellow: {
            color: "#F7D60B",
            fontFamily: "pangmeng",
            fontSize: defSize,
          },
        },
      },
      labelLine: {
        length: 4,
        length2: 20,
        lineStyle: {
          type: "dotted",
          color: cfff8,
        },
      },
    },
    {
      type: "gauge",
      radius: "35%",
      center: ["50%", "45%"],
      startAngle: 110,
      endAngle: 10,
      axisLabel: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          width: 2,
          color: [
            [
              1,
              linearColor(
                hexToRgba("#11E2FF", 0.8),
                hexToRgba("#11E2FF", 0.01)
              ),
            ],
          ],
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      detail: {
        show: false,
      },
    },
    {
      type: "gauge",
      radius: "35%",
      center: ["50%", "45%"],
      startAngle: 290,
      endAngle: 190,
      axisLabel: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          width: 2,
          color: [
            [
              1,
              linearColor(
                hexToRgba("#11E2FF", 0.01),
                hexToRgba("#11E2FF", 0.8)
              ),
            ],
          ],
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      detail: {
        show: false,
      },
      pointer: {
        show: false,
      },
      data: [
        {
          value: 1,
          name: title,
          title: {
            color: cfff8,
            fontSize: defSize,
            offsetCenter: [0, 0],
          },
        },
      ],
    },
    {
      type: "pie",
      radius: ["0%", "34%"],
      center: ["50%", "45%"],
      axisLabel: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      tooltip: {
        show: false,
      },
      emphasis: {
        scale: false,
      },
      itemStyle: {
        color: cfff2,
      },
      data: [1],
    },
  ];
  return {
    ...defaultChart,
    legend: {
      show: showLegend,
      bottom: 0,
      itemWidth: 8,
      itemHeight: 8,
      textStyle: {
        fontSize: xData.length > 4 ? defSize - 4 : defSize - 2,
        color: cfff8,
      },
    },
    color: color,
    series: series,
  };
};

/**
 * 第五个环状图
 */
const paleChart5Data = {
  color: [
    "#5B8FF9",
    "#5AD8A6",
    "#5D7092",
    "#F6BD16",
    "#E8684A",
    "#FF9D4D",
    "#6DC8EC",
    "#9270CA",
    "#269A99",
    "#FF99C3",
    "#5B8FF9",
    "#BDD2FD",
    "#5AD8A6",
  ],
  xData: [
    "工程类",
    "金融类",
    "数学类",
    "经济类",
    "管理类",
    "艺术与设计类",
    "自然科学类",
    "计算机类",
    "心理学",
    "教育与公共卫生类",
    "酒店管理",
    "法律与社会学",
    "其他",
  ],
  sData: [
    {
      data: [9, 10, 5, 15, 12, 30, 28, 31, 12, 6, 5, 7, 8],
    },
  ],
  showLabel: true,
};
export const paleChart5 = ({
  color = paleChart5Data.color,
  xData = paleChart5Data.xData,
  sData = paleChart5Data.sData,
  showLegend = true,
  isPercent = true,
  topNum = 6,
}) => {
  const legend = [
    {
      show: showLegend,
      top: 0,
      data: xData.slice(0, topNum),
      icon: "circle",
      itemGap: 4,
      itemWidth: 8,
      itemHeight: 8,
      textStyle: {
        fontSize: defSize - 4,
        color: cfff8,
      },
    },
  ];
  if (xData.length > topNum) {
    legend.push({
      show: showLegend,
      bottom: 0,
      data: xData.slice(topNum),
      icon: "circle",
      itemGap: 4,
      itemWidth: 8,
      itemHeight: 8,
      textStyle: {
        fontSize: defSize - 4,
        color: cfff8,
      },
    });
  }
  const series = [
    {
      type: "pie",
      clockwise: true,
      radius: [0, "55%"],
      center: ["50%", "50%"],
      data: sData[0].data.map((item, index) => {
        return {
          name: xData[index],
          value: item,
        };
      }),
      emphasis: {
        scaleSize: 4,
      },
      label: {
        color: cfff8,
        fontSize: defSize - 4,
        formatter: isPercent ? "{d}%" : "{c}",
      },
      labelLine: {
        length: 8,
        length2: 15,
      },
    },
  ];
  return {
    ...defaultChart,
    legend: legend,
    color: color,
    series: series,
  };
};

// 第六个环状图
const paleChart6Data = {
  color: ["#2BFB63", "#C6BF18", "#00D9FF", "#F76747"],
  xData: ["迟到(人)", "请假(人)", "未到(人)", "实到(人)"],
  sData: [
    {
      data: [90, 72, 54, 3384],
    },
  ],
};
export const paleChart6 = ({
  color = paleChart6Data.color,
  xData = paleChart6Data.xData,
  sData = paleChart6Data.sData,
}) => {
  const sum = sData[0].data.reduce((item, pre) => {
    return (item += pre);
  });
  const arr = [50, 33, 25, 20];
  const title = xData.map((item, index) => {
    return {
      text: item,
      left: `${arr[xData.length - 1] * (index + 1) - 1}%`,
      top: "75%",
      textAlign: "center",
      textStyle: {
        fontWeight: "normal",
        fontSize: defSize - 4,
        color: cfff8,
        textAlign: "center",
      },
    };
  });
  const series = sData[0].data.map((item, index) => {
    return {
      type: "pie",
      clockwise: false,
      emphasis: {
        scale: false,
      },
      radius: ["18%", "20%"],
      center: [`${arr[sData[0].data.length - 1] * (index + 1)}%`, "60%"],
      labelLine: {
        show: false,
        length: 0,
        length2: 0,
      },
      data: [
        {
          value: item,
          label: {
            show: true,
            formatter: "{d}%",
            position: "center",
            padding: [0, 0, 100, 0],
            fontSize: defSize,
            color: cfff8,
          },
          itemStyle: {
            color: color[index % color.length],
            borderWidth: 4,
            borderColor: color[index % color.length],
          },
        },
        {
          value: sum - item,
          label: {
            show: false,
          },
          tooltip: {
            show: false,
          },
          itemStyle: {
            color: cfff8,
            opacity: 0.1,
          },
        },
      ],
    };
  });

  return {
    ...defaultChart,
    title: title,
    legend: {
      show: false,
    },
    color: color,
    series: series,
  };
};

// 第七个环状图
const paleChart7Data = {
  color: ["#2DDD81"],
  xData: ["类别1"],
  sData: [
    {
      name: "系列1",
      data: [65451],
    },
  ],
};
export const paleChart7 = ({
  color = paleChart7Data.color,
  // xData = paleChart7Data.xData,
  sData = paleChart7Data.sData,
}) => {
  const series = [
    {
      type: "pie",
      clockwise: false,
      emphasis: {
        scale: false,
      },
      radius: ["50%", "58%"],
      center: ["50%", "55%"],
      labelLine: {
        show: false,
      },
      data: [
        {
          value: sData[0].data[0] / 2,
          tooltip: {
            formatter: `${sData[0].data[0]}`,
          },
          label: {
            show: true,
            fontFamily: "pangmeng",
            formatter: `${sData[0].data[0]}`,
            position: "center",
            fontSize: defSize + 8,
            color: cfff8,
          },
          itemStyle: {
            color: linearColor(color[0], hexToRgba(color[0], 0.5)),
          },
        },
        {
          value: sData[0].data[0] / 2,
          tooltip: {
            formatter: `${sData[0].data[0]}`,
          },
          itemStyle: {
            color: linearColor(
              hexToRgba(color[0], 0.5),
              hexToRgba(color[0], 0.01),
              [0, 1, 0, 0]
            ),
          },
        },
      ],
    },
  ];
  return {
    ...defaultChart,
    legend: {
      show: false,
    },
    color: color,
    series: series,
  };
};

/**
 * 第八个环状图
 */
const paleChart8Data = {
  color: ["#38DAF1", "#38A8F1", "#386BF1", "#6B38F1"],
  xData: ["高新企业", "重点企业", "落税企业", "规土企业"],
  sData: [
    {
      data: [75, 65, 40, 20],
    },
  ],
};
export const paleChart8 = ({
  color = paleChart8Data.color,
  xData = paleChart8Data.xData,
  sData = paleChart8Data.sData,
  width = 180,
  total = 200,
}) => {
  let series = [];
  sData[0].data.map((item, i) => {
    const arr = [
      {
        type: "pie",
        radius: [61 - i * 15 + "%", 64 - i * 15 + "%"],
        center: ["50%", "50%"],
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
        emphasis: {
          scaleSize: 4,
        },
        data: [
          {
            value: item,
            name: xData[i],
            label: {
              show: true,
              formatter: "{d}%",
              color: cfff8,
              position: "inside",
            },
          },
          {
            value: total - item,
            itemStyle: {
              color: "none",
              borderWidth: 5,
              borderRadius: 5,
            },
            tooltip: {
              show: false,
            },
            label: {
              show: false,
            },
          },
        ],
      },
      {
        name: "背景线",
        type: "pie",
        silent: true,
        z: 1,
        emphasis: {
          scale: false,
        },
        radius: [62 - i * 15 + "%", 63 - i * 15 + "%"],
        center: ["50%", "50%"],
        label: {
          show: false,
        },
        itemStyle: {
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
        },
        data: [
          {
            value: 75,
            itemStyle: {
              color: hexToRgba(color[2], 0.6),
            },
            tooltip: {
              show: false,
            },
          },
          {
            value: 25,
            itemStyle: {
              color: "none",
              borderWidth: 0,
            },
            tooltip: {
              show: false,
            },
          },
        ],
      },
    ];
    series = [...series, ...arr];
  });
  return {
    ...defaultChart,
    legend: {
      show: false,
    },
    grid: {
      top: "15%",
      bottom: "55%",
      left: "50%",
      containLabel: false,
    },
    graphic: [
      {
        type: "image",
        top: "middle",
        left: "center",
        style: {
          image: "/imgs/chart_decorate.png",
          width: width * 1.27,
          height: width,
        },
      },
    ],
    color: color,
    xAxis: {
      show: false,
    },
    yAxis: {
      type: "category",
      inverse: true,
      z: 3,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
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
  };
};

/**
 * 第九个环状图
 */
const paleChart9Data = {
  color: ["#38DAF1", "#38A8F1", "#386BF1", "#6B38F1"],
  xData: ["高新企业", "重点企业", "落税企业", "规土企业"],
  sData: [
    {
      data: [75, 65, 40, 20],
    },
  ],
};
export const paleChart9 = ({
  color = paleChart9Data.color,
  xData = paleChart9Data.xData,
  sData = paleChart9Data.sData,
  total = 200,
}) => {
  let series = [];
  sData[0].data.map((item, i) => {
    const arr = [
      {
        type: "pie",
        clockwise: false,
        emphasis: {
          scaleSize: 4,
        },
        radius: [59 - i * 15 + "%", 66 - i * 15 + "%"],
        center: ["50%", "50%"],
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
        data: [
          {
            value: item,
            name: xData[i],
            label: {
              show: false,
            },
          },
          {
            value: total - item,
            itemStyle: {
              color: "none",
              borderWidth: 5,
              borderRadius: 5,
            },
            tooltip: {
              show: false,
            },
            label: {
              show: false,
            },
          },
        ],
      },
      {
        name: "背景线",
        type: "pie",
        silent: true,
        clockwise: false,
        emphasis: {
          scale: false,
        },
        radius: [60 - i * 15 + "%", 65 - i * 15 + "%"],
        center: ["50%", "50%"],
        label: {
          show: false,
        },
        itemStyle: {
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
        },
        data: [
          {
            value: 75,
            itemStyle: {
              color: hexToRgba(color[2], 0.2),
            },
            tooltip: {
              show: false,
            },
          },
          {
            value: 25,
            itemStyle: {
              color: "none",
              borderWidth: 0,
            },
            tooltip: {
              show: false,
            },
          },
        ],
      },
    ];
    series = [...series, ...arr];
  });
  return {
    ...defaultChart,
    legend: {
      top: "13%",
      left: "52%",
      orient: "vertical",
      data: xData,
      itemGap: 8,
      itemWidth: 8,
      itemHeight: 8,
      icon: "circle",
      textStyle: {
        color: cfff8,
        fontSize: defSize - 4,
      },
    },
    color: color,
    xAxis: {
      show: false,
    },
    yAxis: {
      show: false,
    },
    series: series,
  };
};

/**
 * 第十个环状图
 */
const paleChart10Data = {
  color: [],
  sData: [
    {
      name: "lengon",
      data: [60],
    },
    {
      name: "prima",
      data: [120],
    },
  ],
};
export const paleChart10 = ({
  color = paleChart10Data.color,
  sData = paleChart10Data.sData,
  total = 180,
  angle = 0,
}) => {
  const angleArr = [
    {
      start: 0,
      end: 90,
      color: "#FF8E89",
    },
    {
      start: 90,
      end: 180,
      color: "#8450F9",
    },
    {
      start: 180,
      end: 270,
      color: "#0CD3DB",
    },
    {
      start: 270,
      end: 0,
      color: "#4386FA",
    },
  ];
  const rings = [];
  angleArr.map((item, index) => {
    let pei = 0.6;
    if (index % 2 == 0) pei = 0.65;
    rings.push({
      type: "custom",
      coordinateSystem: "none",
      renderItem: function(params, api) {
        return {
          type: "arc",
          shape: {
            cx: api.getWidth() / 2,
            cy: api.getHeight() / 2,
            r: (Math.min(api.getWidth(), api.getHeight()) / 2) * pei,
            startAngle:
              ((item.start + (index % 2 == 0 ? angle : -angle)) * Math.PI) /
              180,
            endAngle:
              ((item.end + (index % 2 == 0 ? angle : -angle)) * Math.PI) / 180,
          },
          style: {
            stroke: item.color,
            fill: "transparent",
            lineWidth: 1,
          },
          silent: true,
        };
      },
      data: [0],
    });
  });

  const series = sData.map((item, index) => {
    return {
      type: "pie",
      radius: index == 0 ? ["40%", "50%"] : ["32%", "35%"],
      center: ["50%", "50%"],
      startAngle: 90,
      label: {
        show: false,
      },
      labelLine: {
        length: 5,
        length2: 20,
      },
      data: [
        {
          value: item.data[0],
          name: item.name,
          emphasis: {
            scaleSize: 4,
          },
          itemStyle: {
            color: {
              colorStops: [
                {
                  offset: 0,
                  color: "#A098FC", // 0% 处的颜色
                },
                {
                  offset: 0.3,
                  color: "#4386FA", // 0% 处的颜色
                },
                {
                  offset: 0.6,
                  color: "#4FADFD", // 0% 处的颜色
                },
                {
                  offset: 0.8,
                  color: "#0CD3DB", // 100% 处的颜色
                },
                {
                  offset: 1,
                  color: "#646CF9", // 100% 处的颜色
                },
              ],
            },
          },
        },
        {
          value: total - item.data[0],
          label: {
            show: false,
          },
          tooltip: {
            show: false,
          },
          emphasis: {
            scaleSize: 0,
          },
          itemStyle: {
            color: "RGBA(11, 21, 43, 0.6)",
          },
        },
      ],
    };
  });

  return {
    ...defaultChart,
    title: [
      {
        text: total,
        textStyle: {
          fontSize: defSize + 4,
          color: "rgba(102, 252, 255, 1)",
        },
        left: "center",
        top: "middle",
      },
    ],
    color: color,
    series: [...rings, ...series],
  };
};

/**
 * 第十一个环状图 南丁格尔图
 */
const paleChart11Data = {
  color: ["#B6F6EB", "#88E7E0", "#5DDBD3", "#36CFC9", "#11C2C1", "#01989D"],
  xData: ["19岁以下", "19-25", "26-35", "36-45", "46-55", "55岁以上"],
  sData: [
    {
      data: [300, 250, 200, 150, 100, 50],
    },
  ],
};
export const paleChart11 = ({
  color = paleChart11Data.color,
  xData = paleChart11Data.xData,
  sData = paleChart11Data.sData,
  total = 1050,
}) => {
  const series = [
    {
      type: "pie",
      width: "50%",
      radius: ["0%", "90%"],
      center: ["50%", "50%"],
      clockwise: true,
      avoidLabelOverlap: true,
      label: {
        show: false,
      },
      emphasis: {
        scaleSize: 4,
      },
      data: sData[0].data.map((item, index) => {
        return {
          name: `${xData[index]}  ${((item / total) * 100).toFixed(2)}%`,
          value: item,
          tooltip: `${xData[index]}: {c}`,
        };
      }),
      roseType: "radius",
    },
  ];
  return {
    ...defaultChart,
    legend: {
      orient: "vertical",
      top: "middle",
      right: 20,
      itemWidth: 8,
      itemHeight: 8,
      textStyle: {
        fontSize: defSize - 2,
        color: cfff8,
      },
    },
    color: color,
    series: series,
  };
};

// 第十二个环状图
const paleChart12Data = {
  color: ["#00FFFF"],
  xData: [""],
  sData: [{ data: [47] }],
};
export const paleChart12 = ({
  color = paleChart12Data.color,
  // xData = paleChart12Data.xData,
  sData = paleChart12Data.sData,
}) => {
  const series = [
    {
      type: "gauge",
      radius: "85%",
      splitNumber: 48,
      startAngle: 270,
      endAngle: -90,
      axisLine: {
        show: false,
      },
      splitLine: {
        length: 8,
        distance: 0,
        lineStyle: {
          width: 1,
          color: hexToRgba(color[0], 0.5),
        },
      },
      axisLabel: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      detail: {
        show: false,
      },
    },
    {
      type: "pie",
      radius: ["46%", "50%"],
      emphasis: {
        scale: false,
      },
      label: {
        show: false,
      },
      labelLine: {
        show: false,
      },
      tooltip: {
        show: false,
      },
      itemStyle: {
        color: hexToRgba(color[0], 0.6),
      },
      data: [
        {
          value: 1,
        },
      ],
    },
    {
      type: "gauge",
      radius: "53%",
      startAngle: 270,
      endAngle: 270 - (3.6 * sData[0].data[0]).toFixed(0),
      axisLine: {
        show: true,
        lineStyle: {
          width: 12,
          color: [[1, color[0]]],
        },
      },
      pointer: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      detail: {
        show: true,
        formatter: "{value}%",
        offsetCenter: [0, 0],
        color: color[0],
        fontSize: defSize + 6,
        fontFamily: "pangmeng",
      },
      data: [
        {
          value: sData[0].data[0],
        },
      ],
    },
  ];
  return {
    ...defaultChart,
    legend: {
      show: false,
      orient: "vertical",
      top: "middle",
      right: 20,
      itemWidth: 8,
      itemHeight: 8,
      textStyle: {
        fontSize: defSize - 2,
        color: cfff8,
      },
    },
    color: color,
    series: series,
  };
};

// 第十三个环状图
const paleChart13Data = {
  color: ["#11E2FF", "#D13F3F", "#5263AB"],
  xData: ["正常设备", "报警设备", "离线设备"],
  sData: [
    {
      data: [240, 140, 20],
    },
  ],
};
export const paleChart13 = ({
  color = paleChart13Data.color,
  xData = paleChart13Data.xData,
  sData = paleChart13Data.sData,
  total = 400,
  title = "",
  clockwise = true,
  showLabel = true,
  showValue = true,
  showPercent = false,
}) => {
  const series = [
    {
      type: "pie",
      clockwise: clockwise,
      radius: ["50%", "60%"],
      center: ["35%", "50%"],
      data: sData[0].data.map((item, index) => {
        return {
          name: `${xData[index]}：${showValue ? item : ""} ${
            showPercent ? `${((item / total) * 100).toFixed(2)}%` : ""
          }`,
          value: item,
        };
      }),
      emphasis: {
        scaleSize: 4,
      },
      tooltip: {
        formatter: "{b}",
      },
      label: {
        show: showLabel,
        color: cfff8,
        formatter: "{d}%",
      },
      labelLine: {
        show: showLabel,
        length: 4,
        length2: 10,
        lineStyle: {
          type: "solid",
          color: cfff4,
        },
      },
    },
    {
      type: "gauge",
      radius: "40%",
      center: ["35%", "50%"],
      startAngle: 110,
      endAngle: 10,
      axisLabel: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          width: 2,
          color: [
            [
              1,
              linearColor(
                hexToRgba("#11E2FF", 0.8),
                hexToRgba("#11E2FF", 0.01)
              ),
            ],
          ],
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      detail: {
        show: false,
      },
      pointer: {
        show: false,
      },
      data: [
        {
          value: 1,
          name: `{val|${total}}${title ? "\n" + title : ""}`,
          title: {
            color: cfff8,
            fontFamily: "pangmeng",
            fontSize: defSize + 2,
            offsetCenter: [0, 0],
            rich: {
              val: {
                fontFamily: "FZLTZHKGBK",
                color: cfff8,
                fontSize: defSize + 6,
                padding: [0, 0, title ? 5 : 0, 0],
              },
            },
          },
        },
      ],
      z: 2,
    },
    {
      type: "gauge",
      radius: "40%",
      center: ["35%", "50%"],
      startAngle: 290,
      endAngle: 190,
      axisLabel: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          width: 2,
          color: [
            [
              1,
              linearColor(
                hexToRgba("#11E2FF", 0.01),
                hexToRgba("#11E2FF", 0.8)
              ),
            ],
          ],
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      detail: {
        show: false,
      },
      z: 2,
    },
    {
      type: "pie",
      radius: ["0%", "39%"],
      center: ["35%", "50%"],
      emphasis: {
        scale: false,
      },
      axisLabel: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      tooltip: {
        show: false,
      },
      itemStyle: {
        color: cfff2,
      },
      labelLine: {
        show: false,
      },
      data: [1],
      z: 1,
    },
  ];
  return {
    ...defaultChart,
    legend: {
      orient: "vertical",
      top: "middle",
      right: "5%",
      itemGap: 20,
      icon: "circle",
      itemWidth: 8,
      itemHeight: 8,
      textStyle: {
        fontSize: defSize - 2,
        color: cfff8,
      },
    },
    color: color,
    series: series,
  };
};

// 第十四个环状图
const paleChart14Data = {
  color: ["#63F2FC", "#39B3FF", "#A5DCFF"],
  xData: ["自用", "闲置", "出租"],
  sData: [
    {
      data: [3000, 3000, 3000],
    },
  ],
};
export const paleChart14 = ({
  color = paleChart14Data.color,
  xData = paleChart14Data.xData,
  sData = paleChart14Data.sData,
  total = 9000,
  unit = "m³",
  title = "总建筑面积",
}) => {
  const series = [
    {
      type: "pie",
      radius: ["65%", "75%"],
      center: ["30%", "50%"],
      emphasis: {
        scale: false,
      },
      label: {
        show: false,
      },
      labelLine: {
        show: false,
      },
      tooltip: {
        show: false,
      },
      itemStyle: {
        color: "rgba(57, 179, 255, 0.2)",
      },
      data: [
        {
          value: 1,
        },
      ],
    },
    {
      type: "pie",
      clockwise: true,
      radius: ["50%", "65%"],
      center: ["30%", "50%"],
      data: sData[0].data.map((item, index) => {
        return {
          name: `${xData[index]}：${((item / total) * 100).toFixed(2)}%`,
          value: item,
          tooltip: {
            formatter: `${xData[index]}：{c}`,
          },
        };
      }),
      emphasis: {
        scaleSize: 4,
      },
      label: {
        show: false,
      },
      labelLine: {
        show: false,
      },
    },
    {
      type: "gauge",
      radius: "35%",
      center: ["30%", "50%"],
      axisLabel: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      detail: {
        show: false,
      },
      pointer: {
        show: false,
      },
      data: [
        {
          value: 1,
          name: `{val|${total}}{unit|${unit}}${title ? "\n" + title : ""}`,
          title: {
            color: cfff8,
            fontSize: defSize - 2,
            offsetCenter: [0, 0],
            rich: {
              val: {
                fontSize: defSize + 8,
                color: "#39B3FF",
                fontWeight: 600,
              },
              unit: {
                fontSize: defSize - 2,
                color: "#39B3FF",
              },
            },
          },
        },
      ],
    },
  ];
  return {
    ...defaultChart,
    legend: {
      orient: "vertical",
      right: "10%",
      top: "middle",
      itemGap: 10,
      icon: "rect",
      itemWidth: 10,
      itemHeight: 6,
      textStyle: {
        fontSize: defSize - 2,
        color: cfff8,
      },
    },
    color: color,
    series: series,
  };
};

// 第十五个环状图
const paleChart15Data = {
  color: ["#63F2FC"],
  xData: ["设备正常率"],
  sData: [
    {
      data: [80],
    },
  ],
};
export const paleChart15 = ({
  color = paleChart15Data.color,
  xData = paleChart15Data.xData,
  sData = paleChart15Data.sData,
}) => {
  let gaugeSeries = [
    {
      type: "gauge",
      clockwise: false,
      radius: "66%",
      center: ["50%", "40%"],
      startAngle: sData[0].data[0] > 50 ? 90 : 270,
      endAngle: sData[0].data[0] * 3.6 - 90,
      axisLabel: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          width: 3,
          color: [
            [
              1,
              sData[0].data[0] > 50
                ? linearColor(hexToRgba(color[0], 0.7), hexToRgba(color[0], 1))
                : linearColor(
                    hexToRgba(color[0], 1),
                    hexToRgba(color[0], 0.01)
                  ),
            ],
          ],
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      detail: {
        show: true,
        formatter: "{value}{unit|%}",
        fontFamily: "pangmeng",
        fontWeight: "normal",
        fontSize: defSize + 6,
        color: color[0],
        offsetCenter: [0, 0],
        rich: {
          unit: {
            fontSize: defSize - 2,
            color: color[0],
            padding: [8, 0, 0, 4],
          },
        },
      },
      pointer: {
        show: false,
      },
      data: [
        {
          value: sData[0].data[0],
          name: xData[0],
          title: {
            color: cfff8,
            fontSize: defSize,
            offsetCenter: [0, "130%"],
          },
        },
      ],
    },
  ];
  if (sData[0].data[0] > 50) {
    gaugeSeries.push({
      type: "gauge",
      clockwise: false,
      radius: "66%",
      center: ["50%", "40%"],
      startAngle: 270,
      endAngle: 90,
      axisLabel: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          width: 3,
          color: [
            [
              1,
              linearColor(hexToRgba(color[0], 0.7), hexToRgba(color[0], 0.01)),
            ],
          ],
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      detail: {
        show: false,
      },
      pointer: {
        show: false,
      },
    });
  }
  const series = [
    ...gaugeSeries,
    {
      type: "pie",
      radius: ["64%", "65%"],
      center: ["50%", "40%"],
      emphasis: {
        scale: false,
      },
      label: {
        show: false,
      },
      labelLine: {
        show: false,
      },
      tooltip: {
        show: false,
      },
      itemStyle: {
        color: "rgba(57, 179, 255, 0.2)",
      },
      data: [1],
    },
    {
      type: "pie",
      radius: ["44%", "45%"],
      center: ["50%", "40%"],
      emphasis: {
        scale: false,
      },
      label: {
        show: false,
      },
      labelLine: {
        show: false,
      },
      tooltip: {
        show: false,
      },
      itemStyle: {
        color: color[0],
      },
      data: [1],
    },
    {
      type: "pie",
      radius: ["0%", "44%"],
      center: ["50%", "40%"],
      emphasis: {
        scale: false,
      },
      axisLabel: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      tooltip: {
        show: false,
      },
      itemStyle: {
        color: "rgba(0,0,0,0.1)",
      },
      data: [1],
      z: 1,
    },
  ];

  return {
    ...defaultChart,
    legend: {
      show: false,
    },
    color: color,
    series: series,
  };
};

// 第十六个环状图
const paleChart16Data = {
  color: ["#39B3FF", "#EDA026", "#FFFFFF"],
  xData: ["自用", "出租", "待租"],
  sData: [
    {
      data: [4250, 2975, 1275],
    },
  ],
};
export const paleChart16 = ({
  color = paleChart16Data.color,
  xData = paleChart16Data.xData,
  sData = paleChart16Data.sData,
  total = 8500,
  unit = "m³",
  title = "总建筑面积",
}) => {
  const series = [
    {
      type: "pie",
      clockwise: true,
      radius: ["55%", "63%"],
      center: ["60%", "50%"],
      data: sData[0].data.map((item, index) => {
        return {
          name: `${xData[index]}：${((item / total) * 100).toFixed(2)}%`,
          value: item,
          tooltip: {
            formatter: `${xData[index]}：{c}`,
          },
        };
      }),
      emphasis: {
        scaleSize: 4,
      },
      label: {
        show: false,
      },
      labelLine: {
        show: false,
      },
    },
    {
      type: "gauge",
      radius: "55%",
      center: ["60%", "50%"],
      axisLabel: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      detail: {
        show: false,
      },
      pointer: {
        show: false,
      },
      data: [
        {
          value: 1,
          name: `{val|${total}}  {unit|${unit}}${title ? "\n" + title : ""}`,
          title: {
            color: cfff4,
            fontSize: defSize - 2,
            offsetCenter: [0, 0],
            rich: {
              val: {
                fontFamily: "pangmeng",
                fontWeight: "normal",
                fontSize: defSize + 6,
                color: cfff8,
              },
              unit: {
                fontSize: defSize - 4,
                color: cfff8,
              },
            },
          },
        },
      ],
    },
  ];
  return {
    ...defaultChart,
    legend: {
      orient: "vertical",
      left: "5%",
      top: "middle",
      itemGap: 10,
      icon: "circle",
      itemWidth: 4,
      itemHeight: 4,
      textStyle: {
        fontSize: defSize,
        color: cfff6,
      },
    },
    color: color,
    series: series,
  };
};

// 第十七个环状图
const paleChart17Data = {
  color: ["#39B3FF", "#EEBE80", "#63F2FC", "#FFFFFF"],
  xData: ["暖通空调", "照明插座", "动力用电", "特殊用电"],
  sData: [
    {
      data: [220.7, 144.6, 43.3, 95.2],
    },
  ],
};
export const paleChart17 = ({
  color = paleChart17Data.color,
  xData = paleChart17Data.xData,
  sData = paleChart17Data.sData,
  total = 503.8,
  unit = "KWh",
  title = "当日耗电",
  showLabel = true,
  showInner = true,
}) => {
  const series = [
    {
      type: "pie",
      clockwise: true,
      radius: ["60%", "65%"],
      center: ["30%", "50%"],
      data: sData[0].data.map((item, index) => {
        return {
          name: `${xData[index]}：${item}${unit}`,
          value: item,
          tooltip: {
            formatter: `${xData[index]}：{c}`,
          },
          label: {
            show: showLabel,
            formatter: "{d}%",
            color: color[index],
          },
        };
      }),
      emphasis: {
        scaleSize: 4,
      },
      labelLine: {
        show: showLabel,
        length: 5,
        length2: 5,
      },
    },
    {
      type: "gauge",
      radius: "45%",
      center: ["30%", "50%"],
      axisLabel: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      detail: {
        show: false,
      },
      pointer: {
        show: false,
      },
      data: [
        {
          value: 1,
          name: `{val|${total}}\n{unit|${unit}}${title ? "\n" + title : ""}`,
          title: {
            color: cfff4,
            fontSize: defSize - 2,
            offsetCenter: [0, 0],
            rich: {
              val: {
                fontFamily: "pangmeng",
                fontWeight: "normal",
                fontSize: defSize + 4,
                color: cfff8,
              },
              unit: {
                fontSize: defSize - 2,
                color: cfff8,
              },
            },
          },
        },
      ],
    },
  ];
  if (showInner) {
    series.push({
      type: "pie",
      clockwise: true,
      radius: ["45%", "53%"],
      center: ["30%", "50%"],
      data: [1],
      itemStyle: {
        color: cfff4,
      },
      emphasis: {
        scale: false,
      },
      tooltip: {
        show: false,
      },
      label: {
        show: false,
      },
      labelLine: {
        show: false,
      },
    });
  }
  return {
    ...defaultChart,
    legend: {
      orient: "vertical",
      top: "middle",
      right: 0,
      itemGap: 20,
      icon: "circle",
      itemWidth: 6,
      itemHeight: 6,
      textStyle: {
        fontSize: defSize - 2,
        color: cfff6,
      },
    },
    color: color,
    series: series,
  };
};

/**
 * 第十八个环状图
 */
const paleChart18Data = {
  color: ["#63F2FC", "#A5DCFF", "#1888F3", "#EDA026", "#EEEEEE"],
  xData: ["安防", "新风", "消防", "照明", "空调"],
  sData: [
    {
      data: [4, 3, 6, 5, 2],
    },
  ],
};
export const paleChart18 = ({
  color = paleChart18Data.color,
  xData = paleChart18Data.xData,
  sData = paleChart18Data.sData,
  total = 20,
}) => {
  const series = [
    {
      type: "pie",
      width: "60%",
      radius: ["0%", "90%"],
      center: ["50%", "50%"],
      clockwise: true,
      avoidLabelOverlap: true,
      label: {
        show: false,
      },
      emphasis: {
        scaleSize: 4,
      },
      data: sData[0].data.map((item, index) => {
        return {
          name: `${xData[index]} ${item} ${((item / total) * 100).toFixed(2)}%`,
          value: item,
          tooltip: `${xData[index]}: {c}`,
        };
      }),
      roseType: "radius",
    },
  ];
  return {
    ...defaultChart,
    legend: {
      orient: "vertical",
      top: "middle",
      right: 20,
      itemGap: 20,
      itemWidth: 15,
      itemHeight: 2,
      textStyle: {
        fontSize: defSize - 2,
        color: cfff8,
      },
    },
    color: color,
    series: series,
  };
};

/**
 * 第十九个环状图
 */
const paleChart19Data = {
  color: [
    "#48B0CA",
    "#A0A8B2",
    "#F3D8AA",
    "#EBBF75",
    "#B0D0F6",
    "#FFFFFF",
    "#C90D0D",
    "#FBD723",
    "#2D9A4E",
  ],
  xData: [
    "测试组",
    "空置",
    "平面设计组",
    "应急软件组",
    "产品部",
    "APP开发组",
    "研发部",
    "前端研发组",
    "基础软件组",
  ],
  sData: [
    {
      name: "月使用占比",
      data: [15, 15, 5, 10, 15, 15, 15, 15, 15],
    },
  ],
};
export const paleChart19 = ({
  color = paleChart19Data.color,
  xData = paleChart19Data.xData,
  sData = paleChart19Data.sData,
  title = "月使用\n占比",
  angle = 0,
}) => {
  const angleArr = [
    {
      start: 20,
      end: 70,
      color: cfff6,
    },
    {
      start: 90,
      end: 160,
      color: cfff6,
    },
    {
      start: 200,
      end: 250,
      color: cfff6,
    },
    {
      start: 270,
      end: 340,
      color: cfff6,
    },
  ];
  let rings = [];
  angleArr.map((item, index) => {
    let pei = 0.6;
    // if (index % 2 == 0) pei = 0.65;
    rings.push({
      type: "custom",
      coordinateSystem: "none",
      renderItem: function(params, api) {
        return {
          type: "arc",
          shape: {
            cx: api.getWidth() / 2,
            cy: (api.getHeight() * 0.7) / 2,
            r: (Math.min(api.getWidth(), api.getHeight()) / 2) * pei,
            startAngle:
              ((item.start + (index % 2 == 0 ? angle : -angle)) * Math.PI) /
              180,
            endAngle:
              ((item.end + (index % 2 == 0 ? angle : -angle)) * Math.PI) / 180,
          },
          style: {
            stroke: item.color,
            fill: "transparent",
            lineWidth: 1,
          },
          silent: true,
        };
      },
      data: [0],
    });
  });
  const series = [
    {
      type: "pie",
      radius: ["47%", "50%"],
      center: ["50%", "35%"],
      clockwise: true,
      label: {
        show: false,
      },
      labelLine: {
        show: false,
      },
      emphasis: {
        scaleSize: 2,
      },
      data: sData[0].data.map((item, index) => {
        return {
          name: xData[index],
          value: item,
        };
      }),
      itemStyle: {
        borderWidth: 10,
        borderCap: "round",
      },
    },
  ];
  return {
    ...defaultChart,
    title: {
      text: title,
      textStyle: {
        fontSize: defSize,
        color: cfff6,
      },
      left: "center",
      top: "27%",
    },
    legend: {
      bottom: 0,
      icon: "rect",
      itemWidth: 6,
      itemHeight: 6,
      textStyle: {
        fontSize: defSize - 2,
        color: cfff6,
      },
    },
    color: color,
    series: [...rings, ...series],
  };
};

/**
 * 第二十个环状图
 */
const paleChart20Data = {
  color: ["#4DEBE4", "#3186ED", "#F9BB4C", "#D7DAE4", "#514EE7"],
  xData: ["空调", "照明", "电梯", "新风", "其他"],
  sData: [
    {
      name: "",
      data: [53, 18, 12, 10, 7],
    },
  ],
};
export const paleChart20 = ({
  color = paleChart20Data.color,
  xData = paleChart20Data.xData,
  sData = paleChart20Data.sData,
  total = 100,
  title = "告警总数",
}) => {
  const series = [
    {
      type: "gauge",
      radius: "80%",
      center: ["40%", "50%"],
      splitNumber: 0,
      startAngle: 355,
      endAngle: 5,
      axisLine: {
        show: true,
        lineStyle: {
          width: 10,
          color: [
            [
              1,
              linearColor(
                hexToRgba("#3592FB", 0.15),
                hexToRgba("#52F6FB", "0.4"),
                [0, 1, 0, 0]
              ),
            ],
          ],
        },
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      pointer: {
        show: false,
      },
      title: {
        show: true,
        offsetCenter: [0, 0],
        color: cfff8,
      },
      detail: {
        show: false,
      },
      data: [
        {
          name: title ? `${total}\n{val|${title}}` : total,
          value: 1,
          title: {
            rich: {
              val: {
                fontSize: defSize + 2,
                color: cfff8,
                padding: [10, 0, 0, 0],
              },
            },
          },
        },
      ],
    },
    {
      type: "pie",
      radius: ["60%", "65%"],
      center: ["40%", "50%"],
      clockwise: true,
      label: {
        show: false,
      },
      labelLine: {
        show: false,
      },
      emphasis: {
        scaleSize: 2,
      },
      data: sData[0].data.map((item, index) => {
        return {
          name: `${xData[index]}：${((item / total) * 100).toFixed(2)}%`,
          value: item,
          tooltip: {
            formatter: `${xData[index]}：{c}`,
          },
        };
      }),
    },
    {
      type: "pie",
      radius: ["50%", "60%"],
      center: ["40%", "50%"],
      clockwise: true,
      label: {
        show: false,
      },
      labelLine: {
        show: false,
      },
      data: sData[0].data.map((item, index) => {
        return {
          value: item,
          tooltip: {
            formatter: `${xData[index]}：{c}`,
          },
          itemStyle: {
            color: hexToRgba(color[index], 0.2),
          },
        };
      }),
    },
  ];
  return {
    ...defaultChart,
    legend: {
      orient: "vertical",
      top: "middle",
      right: 0,
      icon: "rect",
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        fontSize: defSize - 2,
        color: cfff6,
      },
    },
    color: color,
    series: series,
  };
};
