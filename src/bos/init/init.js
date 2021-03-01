// require('../../assets/sdk/third/jquery-1.10.2.min.js');
// require('../../assets/sdk/third/toolbar/jquery.toolbar.js')
// require('../../assets/sdk/viz/ui/DefaultMessageControl.js');


function init(options, type) {
  //type:1,表示bimviz引擎，type:2,表示forge引擎，type:3，表示bdviews引擎，type:4，表示bimface引擎
  let _this = this;
  _this.options = options;

  if (type == 2) {
    if (_this.options.initOption) {
      // forge
      _this.type = type;

      // 初始化引擎对象
      (async function () {
        _this.engine = await initForge();
      })();
    }

  } else if (type == 1) {
    // bimviz
    _this.type = type;
    _this.highlightManager = null;
    _this.htmlMarkerManager = null;
    _this.selectManager = null;

    // 初始化引擎对象
    _this.engine = new BIMVIZ.RenderEngine(_this.options);
  } else if (type == 3) {
    _this.type = type;
    //初始化引擎对象
    _this.engine = document.getElementById(_this.options.renderDomId).contentWindow;

  } else if (type == 4) {
    _this.type = type;
    let loaderConfig = new BimfaceSDKLoaderConfig();
    loaderConfig.viewToken = _this.options.viewToken;
    BimfaceSDKLoader.load(loaderConfig, viewMetaData => {
      let domShow = document.getElementById(_this.options.domId);
      let webAppConfig = new Glodon.Bimface.Application.WebApplication3DConfig();
      webAppConfig.domElement = domShow;
      let app = new Glodon.Bimface.Application.WebApplication3D(webAppConfig);
      app.addView(_this.options.viewToken);
      viewer3D = app.getViewer();
      viewer3D.addEventListener(Glodon.Bimface.Viewer.Viewer3DEvent.ViewAdded, function () {

        //自适应屏幕大小
        window.onresize = function () {
          viewer3D.resize(document.documentElement.clientWidth, document.documentElement.clientHeight - 40)
        }
        // 调用viewer3D对象的Method，可以继续扩展功能
        // 渲染3D模型
        viewer3D.render();
      });
      _this.engine = viewer3D;
    }, err => {
      console.log(err)
    });
  }

  function initBDview() {
    // _this.engine = document.getElementById(_this.options.renderDomId).contentWindow;
    setTimeout(() => {
      _this.engine.postMessage({
          command: "Init",
          parameter: {
            menu: true,
            loadingFiles_display: false
          }
        },
        "*"
      );
      var para = "";
      para = _this.options.para;
      _this.engine.postMessage({
        command: "SetMenuUrl",
        parameter: para
      }, "*");
    }, 2000);
    window.addEventListener(
      "message",
      evt => {
        callback(evt);
      },
      false
    );
  }

  function callback(e) {
    switch (e.data.command) {
      case "EngineReady": {}
      break;
    case "CurrentSelectedEnt": {

    }
    break;
    case "ViewpointSubmited": {

    }
    break;
    case "GetDrawingList": {}
    break;
    case "ProgressBar": {

    }
    break;
    case "CurrentSelectedLabel": {

    }
    break;
    }
  }


  function initForge() {
    return new Promise((resolve, reject) => {
      // let  config = {
      //   extensions:['Autodesk.ADN.Viewing.Extension.Markup3D']
      // }
      Autodesk.Viewing.Initializer(
        _this.options.initOption,
        () => {
          let domContainer = document.getElementById(_this.options.renderDomId);
          // let viewer= new Autodesk.Viewing.Private.GuiViewer3D(domContainer,config);
          let viewer = new Autodesk.Viewing.Private.GuiViewer3D(domContainer);
          viewer.initialize();
          // console.log(viewer.getState())

          resolve(viewer);
        });
    })
  }

  // 加载三维场景
  _this.load = () => {
    if (_this.type === 2) {
      setTimeout(() => {
        if (_this.engine !== undefined) {
          _this.engine.loadModel(_this.options.initOption.path, _this.options.initOption, () => {
            // _this.engine.forEachExtension((ext)=>{
            //   console.log("ddd");
            //   console.log(ext);
            //   console.log(ext.id);
            // })

            _this.engine.loadExtension('IconMarkupsxtension', {
              button: {
                icon: 'fa-thermometer-half',
                tooltip: 'Show Temperature'
              },
              icons: [{
                  dbId: 3944,
                  label: '300&#176;C',
                  css: 'fas fa-thermometer-full'
                },
                {
                  dbId: 721,
                  label: '356&#176;C',
                  css: 'fas fa-thermometer-full'
                },
                {
                  dbId: 10312,
                  label: '450&#176;C',
                  css: 'fas fa-thermometer-empty'
                },
                {
                  dbId: 563,
                  css: 'fas fa-exclamation-triangle'
                },
              ],
              onClick: (id) => {
                viewers.select(id);
                viewers.utilities.fitToView();
                switch (id) {
                  case 563:
                    alert('Sensor offline');
                }
              }
            })
          })
        }
      }, 300)
    } else if (_this.type === 1) {
      _this.engine.start();
    } else if (_this.type === 3) {
      console.log('BdVIEW引擎进来了吗')
      initBDview()
    }
  }

  // 高亮构件
  _this.highlightElement = (gid) => {
    if (_this.type === 1) {
      if (_this.highlightManager === null) {
        _this.highlightManager = _this.engine.getHighlightManager();
      }
      _this.highlightManager.highlightElement(gid);

    } else if (_this.type === 2) {

    } else if (_this.type === 3) {

    } else if (_this.type === 4) {
      _this.engine.addBlinkComponentsById([gid]);
      _this.engine.setBlinkColor(new Glodon.Web.Graphics.Color("#32D3A6", 0.8));
      _this.engine.enableBlinkComponents(true);
      _this.engine.setBlinkIntervalTime(500);
      _this.engine.render();
    }
  }

  // 高亮构件列表
  _this.highlightElementList = (list) => {
    if (_this.type === 2) {
      _this.engine.select(list);
    } else if (_this.type === 1) {
      if (_this.highlightManager === null) {
        _this.highlightManager = _this.engine.getHighlightManager();
      }
      _this.highlightManager.highlightElementList(list);
    } else if (_this.type === 3) {
      //list为数组型
      const data = list
      const para = []
      data.forEach((item) => {
        para.push({
          "TraceID": String(item)
        });
      })
      _this.engine.postMessage({
        command: "LookAtEntities",
        parameter: para
      }, "*");
    } else if (_this.type === 4) {
      _this.engine.addBlinkComponentsById(list);
      _this.engine.setBlinkColor(new Glodon.Web.Graphics.Color("#32D3A6", 0.8));
      _this.engine.enableBlinkComponents(true);
      _this.engine.setBlinkIntervalTime(500);
      _this.engine.render();
    }
  }

  // 定位
  _this.flyToElement = (gid) => {
    if (_this.type === 2) {
      _this.engine.select(gid);
      _this.engine.fitToView(gid);
    } else if (_this.type === 1) {
      _this.engine.flyToElementByBox(gid, 2, () => {});
    } else if (_this.type === 3) {
      const data = [gid]
      const para = []
      data.forEach((item) => {
        para.push({
          "TraceID": String(item)
        });
      })
      _this.engine.postMessage({
        command: "LookAtEntities",
        parameter: para
      }, "*");
    } else if (_this.type == 4) {
      _this.engine.clearSelectedComponents();
      _this.engine.setSelectedComponentsById([gid]);
      _this.engine.zoomToSelectedComponents();
    }
  }

  // 标签
  // 获取标签列表
  _this.getMarkerList = (callback) => {
    if (_this.type === 1) {
      if (_this.htmlMarkerManager === null) {
        _this.htmlMarkerManager = _this.engine.getMarkerManager();
      }
      _this.htmlMarkerManager.createHtmlMarkerListFromDb((result) => {
        callback(true, result)
      });
    } else if (_this.type === 2) {

    } else if (_this.type === 3) {

    }

  }
  // 创建标签
  _this.createMarker = (id, name, domId, position, html, align, visibledistance, usertype, userdata) => {
    if (_this.type === 1) {
      if (_this.htmlMarkerManager === null) {
        _this.htmlMarkerManager = _this.engine.getMarkerManager();
      }
      let marker = new BIMVIZ.HtmlMarker(id, name, domId, position, html, align, visibledistance, usertype, userdata);
      _this.htmlMarkerManager.addHtmlMarker(marker);
      _this.htmlMarkerManager.saveDbHtmlMarker(marker, function () {});
      _this.engine.requestOneUpdate();
    } else if (_this.type === 2) {

    } else if (_this.type === 3) {

    }

  }
  // 删除标签
  _this.deleteMarker = (id, callback) => {
    if (_this.type === 1) {
      _this.htmlMarkerManager.removeDbHtmlMarker(id, (result) => {
        callback({
          success: true,
          message: "删除成功"
        })
      })
    } else if (_this.type === 2) {

    } else if (_this.type === 3) {

    }

  }

  // 更改构件颜色(forge 更改构件颜色和构件透明度)
  _this.changeElementColor = (gid, rgba) => {
    if (_this.type === 2) {
      _this.engine.setThemingColor(parseInt(gid), new THREE.Vector4(rgba[0], rgba[1], rgba[2], rgba[3]));
    } else if (_this.type === 1) {
      // rgba   —  Array类型，4个浮点数组成的数组，格式为[R,G,B,A]；颜色RGB，指的是构件的RGB格式的值，每个分量用0-1的浮点数字表示，
      // 比如红色是（1.0,0.0,0.0）。透明度A，指的是构件在场景中的透明程度，用一个0-1的浮点数字表示。0.0代表完全透明，1.0代表完全显示。
      _this.engine.changeElementRGBA(gid, rgba);
    } else if (_this.type === 3) {


    } else if (_this.type === 4) {
      let color = new Glodon.Web.Graphics.Color("#EE799F", 0.8);
      _this.engine.overrideComponentsColorById([gid], color);
      _this.engine.render();
    }
  }

  // 更改构件透明度
  _this.changeElementAlpha = (gid, alpha) => {
    if (_this.type === 1) {
      _this.engine.changeElementAlpha(gid, alpha);
    } else if (_this.type === 2) {

    } else if (_this.type === 3) {

    } else if (_this.type === 4) {
      _this.engine.transparentComponentsById([gid]);
      _this.engine.render();
    }

  }

  // 属性查询
  _this.getElementProperty = (gid, callback) => {
    if (_this.type === 2) {
      _this.engine.getProperties(gid, (result) => {
        if (result) {
          callback(true, result);
        } else {
          callback(false, undefined);
        }
      })
    } else if (_this.type === 1) {
      _this.engine.getElementById(gid, (success, result) => {
        if (success) {
          callback(true, result);
        } else {
          callback(false, undefined);
        }
      })
    } else if (_this.type === 3) {

    }
  }

  // 根据属性值查询构件
  _this.getElementByProperty = (text, callback) => {
    if (_this.type === 2) {
      _this.engine.search(text, function (result) {
        if (result) {
          callback(true, result)
        } else {
          callback(false, result)
        }
      });
    } else if (_this.type === 1) {
      _this.engine.searchElementsByText(text, (result, text) => {
        if (result.success) {
          callback(true, result.list);
        } else {
          callback(false, []);
        }
      })
    } else if (_this.type === 3) {

    } else if (_this.type === 4) {
      // bimface参数格式为  [{key: value,key1: value},{key: value1}]
      _this.engine.getModel().getComponentsByConditions(JSON.parse(text), res => {
        callback(true, res)
      }, err => {
        callback(false, err)
      })
    }
  }

  // 根据属性查找构件
  _this.getElementBySql = (text, callback) => {
    if (_this.type === 1) {
      _this.engine.searchElementsBySql(text, (result, text) => {
        console.log(result);
        if (result.success) {
          callback(true, result.list);
        } else {
          callback(false, []);
        }
      })

    } else if (_this.type === 2) {

    } else if (_this.type === 3) {

    }
  }

  // 选择集操作
  // ctrl+左键选中构件，一个一个添加；ctrl+左键按住拉选，多个添加
  // 获取所有选择集
  _this.getSelectionList = (callback) => {
    if (_this.type === 1) {
      if (_this.selectManager === null) {
        _this.selectManager = _this.engine.getSelectionSetManager();
      }
      _this.selectManager.getList((success, result) => {
        callback(success, result);
      })
    } else if (_this.type === 2) {

    } else if (_this.type === 3) {

    }

  }
  // 创建选择集
  _this.createSelection = (name, description, callback) => {
    if (_this.type === 1) {
      if (_this.selectManager === null) {
        _this.selectManager = _this.engine.getSelectionSetManager();
      }
      if (_this.highlightManager === null) {
        _this.highlightManager = _this.engine.getHighlightManager();
      }
      let selection = new BIMVIZ.Selection(0, name, description, []);
      selection.list = _this.highlightManager.cloneHighlightElementList();
      _this.selectManager.create(selection, (result) => {
        callback(true, result)
      })
    } else if (_this.type === 2) {

    } else if (_this.type === 3) {

    } else if (_this.type === 4) {

    }

  }
  // 删除选择集
  _this.deleteSelection = (id, callback) => {
    if (_this.type === 1) {
      if (_this.selectManager === null) {
        _this.selectManager = _this.engine.getSelectionSetManager();
      }
      _this.selectManager.delete(id, (result) => {
        callback(true)
      })
    } else if (_this.type === 2) {

    } else if (_this.type === 3) {

    }
  }

  return _this;
}
module.exports = init;