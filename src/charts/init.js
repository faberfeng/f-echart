import {
  graphic
} from 'echarts'

// 条状图自定义 3D柱子 横向
const RowCubeTop = graphic.extendShape({
  shape: {
    x: 0,
    y: 0
  },
  buildPath: function (ctx, shape) {
    const xAxisPoint = shape.xAxisPoint
    const c0 = [xAxisPoint[0], xAxisPoint[1]]
    const c1 = [xAxisPoint[0], xAxisPoint[1] - 4]
    const c2 = [shape.x, shape.y - 4]
    const c3 = [shape.x - 3, shape.y]
    ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath()
  }
})
const RowCubeBottom = graphic.extendShape({
  shape: {
    x: 0,
    y: 0
  },
  buildPath: function (ctx, shape) {
    const xAxisPoint = shape.xAxisPoint
    const c0 = [xAxisPoint[0], xAxisPoint[1]]
    const c1 = [xAxisPoint[0], xAxisPoint[1] + 6]
    const c2 = [shape.x, shape.y + 6]
    const c3 = [shape.x - 3, shape.y]
    ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath()
  }
})
const RowCubeRight = graphic.extendShape({
  shape: {
    x: 0,
    y: 0
  },
  buildPath: function (ctx, shape) {
    const c0 = [shape.x - 3, shape.y]
    const c1 = [shape.x, shape.y + 6]
    const c2 = [shape.x + 3, shape.y + 2]
    const c3 = [shape.x, shape.y - 4]
    ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath()
  }
})
graphic.registerShape('RowCubeTop', RowCubeTop)
graphic.registerShape('RowCubeBottom', RowCubeBottom)
graphic.registerShape('RowCubeRight', RowCubeRight)

// 柱形图自定义  3D柱子 纵向
const ColCubeLeft = graphic.extendShape({
  shape: {
    x: 0,
    y: 0
  },
  buildPath: function (ctx, shape) {
    const xAxisPoint = shape.xAxisPoint
    const c0 = [shape.x, shape.y]
    const c1 = [shape.x - 4, shape.y - 4]
    const c2 = [xAxisPoint[0] - 4, xAxisPoint[1] - 4]
    const c3 = [xAxisPoint[0], xAxisPoint[1]]
    ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath()
  }
})
const ColCubeRight = graphic.extendShape({
  shape: {
    x: 0,
    y: 0
  },
  buildPath: function (ctx, shape) {
    const xAxisPoint = shape.xAxisPoint
    const c1 = [shape.x, shape.y]
    const c2 = [xAxisPoint[0], xAxisPoint[1]]
    const c3 = [xAxisPoint[0] + 6, xAxisPoint[1] - 4]
    const c4 = [shape.x + 6, shape.y - 4]
    ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
  }
})
const ColCubeTop = graphic.extendShape({
  shape: {
    x: 0,
    y: 0
  },
  buildPath: function (ctx, shape) {
    const c1 = [shape.x, shape.y]
    const c2 = [shape.x + 6, shape.y - 4]
    const c3 = [shape.x + 2, shape.y - 8]
    const c4 = [shape.x - 4, shape.y - 4]
    ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
  }
})
graphic.registerShape('ColCubeLeft', ColCubeLeft)
graphic.registerShape('ColCubeRight', ColCubeRight)
graphic.registerShape('ColCubeTop', ColCubeTop)
