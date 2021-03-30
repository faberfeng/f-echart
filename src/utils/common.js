// 判断是否为空（判断undefined、null、空字符串、空对象、空数组，其它（数字、Symbol、Bigint）返回非空）
export const isEmpty = (target) => {
  let result = false;
  const res = Object.prototype.toString.call(target);
  switch (res) {
    case "[object Undefined]":
      result = true;
      break;
    case "[object Null]":
      result = true;
      break;
    case "[object String]":
      result = target.trim().length == 0;
      break;
    case "[object Object]":
      result = Object.keys(target).length == 0;
      break;
    case "[object Array]":
      result = target.length == 0;
      break;
    case "[object Boolean]":
      result = target;
      break;
    default:
      result = false;
  }
  return result
}

// 深拷贝
export const cloneDeep = (object) => {
  if (!object) return object
  let target = object instanceof Array ? [] : {}
  for (const [key, val] of Object.entries(object)) {
    target[key] = typeof val == 'object' ? cloneDeep(val) : val
  }
  return target
}

/**
 * @desc 函数防抖
 * @param func 目标函数
 * @param wait 延迟执行毫秒数
 * @param immediate true - 立即执行， false - 延迟执行
 */
export const debounce = (func, wait, immediate = true) => {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    if (timer) clearTimeout(timer);
    if (immediate) {
      let callNow = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, wait);
      if (callNow) func.apply(context, args);
    } else {
      timer = setTimeout(() => {
        func.apply
      }, wait)
    }
  }
}

/**
 * @desc 函数节流
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param type 1 表时间戳版，2 表定时器版
 */
export const throttle = (func, wait) => {
  let timeout = null;
  return function () {
    let context = this;
    let args = arguments;
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
        func.apply(context, args)
      }, wait)
    }
  }
}

// 图片转换base64
export const imgToBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

// 页面元素拖拽
export const dragFunc = (id) => {
  let Drag = document.getElementById(id);
  Drag.onmousedown = function (event) {
    let ev = event || window.event;
    event.stopPropagation();
    let disX = ev.clientX - Drag.offsetLeft;
    let disY = ev.clientY - Drag.offsetTop;
    document.onmousemove = function (event) {
      let ev = event || window.event;
      Drag.style.left = ev.clientX - disX + "px";
      Drag.style.top = ev.clientY - disY + "px";
      Drag.style.cursor = "move";
    };
  };
  Drag.onmouseup = function () {
    document.onmousemove = null;
    this.style.cursor = "default";
  };
};