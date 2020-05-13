require('../../assets/sdk/third/jquery-1.10.2.min.js');
require('../../assets/sdk/third/toolbar/jquery.toolbar.js')
require('../../assets/sdk/viz/ui/DefaultMessageControl.js')

function initObj(options){
  this.highlightManager = null;
  this.htmlMarkerManager = null;
  this.options = options;
  console.log(this.options)
  
  // 初始化引擎对象
  this.engine = new BIMVIZ.RenderEngine(this.options)

  // 加载三维场景
  this.load = ()=>{
    this.engine.start()
  }

  // 高亮构件
  this.highlightElement = (gid)=>{
    if(this.highlightManager === null){
      this.highlightManager = this.engine.getHighlightManager();
    }
    this.highlightManager.highlightElement(gid)
  }

  // 高亮构件列表
  this.highlightElementList = (list)=>{
    if(this.highlightManager === null){
      this.highlightManager = this.engine.getHighlightManager();
    }
    this.highlightManager.highlightElementList(list)
  }

  // 定位
  this.flyToElement = (gid)=>{
    this.engine.flyToElementByBox(gid,2,()=>{ })
  }
  
  // 标签
  // 创建标签
  this.createMarker = (id, name, domId, position, html, align, visibledistance, usertype, userdata)=>{
    if(htmlMarkerManager===null){
      this.htmlMarkerManager = this.engine.getMarkerManager();
    }
    let marker = BIMVIZ.HtmlMarker(id, name, domId, position, html, align, visibledistance, usertype, userdata);
    this.htmlMarkerManager.addHtmlMarker(marker);
  }
  // 删除标签

  // 更改构件颜色
  this.changeElementColor = (gid,rgba)=>{
    // rgba   —  Array类型，4个浮点数组成的数组，格式为[R,G,B,A]；颜色RGB，指的是构件的RGB格式的值，每个分量用0-1的浮点数字表示，
    // 比如红色是（1.0,0.0,0.0）。透明度A，指的是构件在场景中的透明程度，用一个0-1的浮点数字表示。0.0代表完全透明，1.0代表完全显示。
    this.engine.changeElementRGBA(gid, rgba);
  }

  // 更改构件透明度
  this.changeElementAlpha = (gid, alpha)=>{
    this.engine.changeElementAlpha(gid, alpha);
  }

  // 属性查询
  this.getElementProperty = (gid,callback)=>{
    this.engine.getElementById(gid,(success,result)=>{
      if(success){
        callback(true,result)
      }else{
        callback(false,undefined)
      }
    })
  }

  // 根据属性值查询构件
  this.getElementByProperty = (text,callback)=>{
    this.engine.searchElementsByText(text,(result,text)=>{
      if(result.success){
        callback(true,result.list)
      }else{
        callback(false,[])
      }
    })
  }

  // 根据属性查找构件
  this.getElementBySql = (text,callback)=>{
    this.engine.searchElementsBySql(text,(result,text)=>{
      console.log(result)
      if(result.success){
        callback(true,result.list)
      }else{
        callback(false,[])
      }
    })
  }

  return this;
}
module.exports = initObj;