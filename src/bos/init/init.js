// require('../../assets/sdk/third/jquery-1.10.2.min.js');
// require('../../assets/sdk/third/toolbar/jquery.toolbar.js')
// require('../../assets/sdk/viz/ui/DefaultMessageControl.js')


function init(options){
  let _this = this;
  _this.options = options;

  if(_this.options.initOption){
    // forge
    _this.type = 2;

    // 初始化引擎对象
    (async function(){
      _this.engine = await init();
    })();
  }else{
    // bimviz
    _this.type = 1;
    _this.highlightManager = null;
    _this.htmlMarkerManager = null;
    _this.selectManager = null;

    // 初始化引擎对象
    _this.engine = new BIMVIZ.RenderEngine(_this.options);
  }

  function init(){
    return new Promise((resolve,reject)=>{
      let  config = {
        extensions:['Viewing.Extension.Markup3D','Viewing.Extension.Markup3D.Tool']
      }
      Autodesk.Viewing.Initializer(
        _this.options.initOption,
        () => {
          let domContainer = document.getElementById(_this.options.renderDomId);
          let viewer= new Autodesk.Viewing.Private.GuiViewer3D(domContainer,config);
          viewer.initialize();
          resolve(viewer);
      });
    })
  }

  // 加载三维场景
  _this.load = ()=>{
    if(_this.type === 2){
      setTimeout(()=>{
        if(_this.engine !== undefined){
          _this.engine.loadModel(_this.options.initOption.path, _this.options.initOption,()=>{ })
        }
      },300)
    }else if(_this.type === 1){
      _this.engine.start();
    }
  }

  // 高亮构件
  _this.highlightElement = (gid)=>{
    if(_this.highlightManager === null){
      _this.highlightManager = _this.engine.getHighlightManager();
    }
    _this.highlightManager.highlightElement(gid);
  }

  // 高亮构件列表
  _this.highlightElementList = (list)=>{
    if(_this.type === 2){
      _this.engine.select(list);
    }else if(_this.type === 1){
      if(_this.highlightManager === null){
        _this.highlightManager = _this.engine.getHighlightManager();
      }
      _this.highlightManager.highlightElementList(list);
    }
  }

  // 定位
  _this.flyToElement = (gid)=>{
    if(_this.type === 2 ){
      _this.engine.select(gid);
      _this.engine.fitToView(gid);
    }else if(_this.type === 1){
      _this.engine.flyToElementByBox(gid,2,()=>{ });
    }
  }
  
  // 标签
  // 获取标签列表
  _this.getMarkerList = (callback) => {
    if(_this.htmlMarkerManager===null){
      _this.htmlMarkerManager = _this.engine.getMarkerManager();
    }
    _this.htmlMarkerManager.createHtmlMarkerListFromDb((result)=>{
      callback(true,result)
    });
  }
  // 创建标签
  _this.createMarker = (id, name, domId, position, html, align, visibledistance, usertype, userdata)=>{
    if(_this.htmlMarkerManager===null){
      _this.htmlMarkerManager = _this.engine.getMarkerManager();
    }
    let marker = new BIMVIZ.HtmlMarker(id, name, domId, position, html, align, visibledistance, usertype, userdata);
    _this.htmlMarkerManager.addHtmlMarker(marker);
    _this.htmlMarkerManager.saveDbHtmlMarker(marker, function(){ });
    _this.engine.requestOneUpdate();
  }
  // 删除标签
  _this.deleteMarker = (id,callback) => {
    _this.htmlMarkerManager.removeDbHtmlMarker(id,(result)=>{
      callback({
        success: true,
        message: "删除成功"
      })
    })
  }

  // 更改构件颜色(forge 更改构件颜色和构件透明度)
  _this.changeElementColor = (gid,rgba)=>{
    if(_this.type === 2){
      _this.engine.setThemingColor(parseInt(gid), new THREE.Vector4(rgba[0],rgba[1],rgba[2],rgba[3]));
    }else if(_this.type === 1){
      // rgba   —  Array类型，4个浮点数组成的数组，格式为[R,G,B,A]；颜色RGB，指的是构件的RGB格式的值，每个分量用0-1的浮点数字表示，
      // 比如红色是（1.0,0.0,0.0）。透明度A，指的是构件在场景中的透明程度，用一个0-1的浮点数字表示。0.0代表完全透明，1.0代表完全显示。
      _this.engine.changeElementRGBA(gid, rgba);
    }
  }

  // 更改构件透明度
  _this.changeElementAlpha = (gid, alpha)=>{
    _this.engine.changeElementAlpha(gid, alpha);
  }

  // 属性查询
  _this.getElementProperty = (gid,callback)=>{
    if(_this.type === 2){
      _this.engine.getProperties(gid,(result)=>{
        if(result){
          callback(true,result);
        }else{
          callback(false,undefined);
        }
      })
    }else if(_this.type === 1){
      _this.engine.getElementById(gid,(success,result)=>{
        if(success){
          callback(true,result);
        }else{
          callback(false,undefined);
        }
      })
    }
  }

  // 根据属性值查询构件
  _this.getElementByProperty = (text,callback)=>{
    if(_this.type === 2){
      _this.engine.search(text, function (result) {
        if(result){
          callback(true,result)
        }else{
          callback(false,result)
        }
      });
    }else if(_this.type === 1){
      _this.engine.searchElementsByText(text,(result,text)=>{
        if(result.success){
          callback(true,result.list);
        }else{
          callback(false,[]);
        }
      })
    }
  }

  // 根据属性查找构件
  _this.getElementBySql = (text,callback)=>{
    _this.engine.searchElementsBySql(text,(result,text)=>{
      console.log(result);
      if(result.success){
        callback(true,result.list);
      }else{
        callback(false,[]);
      }
    })
  }

  // 选择集操作
  // ctrl+左键选中构件，一个一个添加；ctrl+左键按住拉选，多个添加
  // 获取所有选择集
  _this.getSelectionList = (callback) => {
    if(_this.selectManager === null){
      _this.selectManager = _this.engine.getSelectionSetManager();
    }
    _this.selectManager.getList((success, result) => {
      callback(success,result);
    })
  }
  // 创建选择集
  _this.createSelection = (name,description,callback) => {
    if(_this.selectManager === null){
      _this.selectManager = _this.engine.getSelectionSetManager();
    }
    if(_this.highlightManager === null){
      _this.highlightManager = _this.engine.getHighlightManager();
    }
    let selection =  new BIMVIZ.Selection(0, name, description, []);
    selection.list = _this.highlightManager.cloneHighlightElementList();
    _this.selectManager.create(selection,(result)=>{
      callback(true,result)
    })
  }
  // 删除选择集
  _this.deleteSelection = (id,callback) =>{
    if(_this.selectManager === null){
      _this.selectManager = _this.engine.getSelectionSetManager();
    }
    _this.selectManager.delete(id,(result)=>{
      callback(true)
    })
  }

  return _this;
}
module.exports = init;