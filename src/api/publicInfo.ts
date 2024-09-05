import request from "@/utils/request";
/**标准管理维护 */
// 新增标准
export function createStandard(data: any) {
  return request({
    url: "/api/standard/create",
    method: "post",
    data: data,
  });
}
//删除标准
export function deleteStandard(data: any) {
  return request({
    url: `/api/standard/${data.id}`,
    method: "delete",
  });
}
//修改标准
export function updateStandard(data: any) {
  return request({
    url: "/api/standard/update",
    method: "post",
    data: data,
  });
}
//获取标准
export function getStandard(data: any) {
  return request({
    url: `/api/standard/${data.id}`,
    method: "get",
  });
}
//查询搜索标准
export function searchStandard(data: any) {
  return request({
    url: "/api/standard/search",
    method: "post",
    data: data,
  });
}
//标准管理-按page获取标准列表
export function getStandardListByPage(data: any) {
  return request({
    url: `/api/standard/page`,
    method: "post",
    data: data,
  });
}
/*标准标签*/
// 创建标准标签
export function createStandardLabel(data: any) {
  return request({
    url: "/api/standardLabel/create",
    method: "post",
    data: data,
  });
}
// 删除标准标签
export function deleteStandardLabel(data: any) {
  return request({
    url: `api/standardLabel/delete/${data.id}`,
    method: "post",
  });
}
// 修改标准标签
export function updateStandardLabel(data: any) {
  return request({
    url: "/api/standardLabel/update",
    method: "post",
    data: data,
  });
}
// 查询标准标签
export function getStandardLabel(data: any) {
  return request({
    url: `/api/standardLabel/get/${data.id}`,
    method: "get",
  });
}
//获取标准标签列表
export function getStandardLabelList(data: any) {
  return request({
    url: `/api/standardLabel/list/${data.type}`,
    method: "get",
  });
}
//获取标准标签类型列表
export function getStandardLabelTypeList() {
  return request({
    url: "/api/standardLabel/typeList",
    method: "get",
  });
}

/*标准分类*/
// 创建标准分类
export function createStandardCategory(data: any) {
  return request({
    url: "/api/standardCategory/create",
    method: "post",
    data: data,
  });
}
// 删除标准分类
export function deleteStandardCategory(data: any) {
  return request({
    url: `api/standardCategory/delete/${data.id}`,
    method: "post",
  });
}
// 修改标准分类
export function updateStandardCategory(data: any) {
  return request({
    url: "/api/standardCategory/update",
    method: "post",
    data: data,
  });
}
// 查询标准分类
export function getStandardCategory(data: any) {
  return request({
    url: `/api/standardCategory/get/${data.id}`,
    method: "get",
  });
}
//获取标准分类树
export function getStandardCategoryTree(data: any) {
  return request({
    url: `/api/standardCategory/tree/${data.type}`,
    method: "get",
  });
}
//获取标准分类列表
export function getStandardCategoryList() {
  return request({
    url: `/api/standardCategory/typeList`,
    method: "get",
  });
}
