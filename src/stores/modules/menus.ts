import { defineStore } from "pinia";
const useMenusStore = defineStore("menus", {
  state: () => ({
    menus: [],
    currentMenu: "1",
    menuName: "标准管理",
    currentPath: [],
  }),
  actions: {
    // 设置菜单
    setMenus(menus: any) {
      this.menus = menus;
    },
    // 设置当前菜单
    setCurrentMenu(menu: any) {
      this.currentMenu = menu;
    },
    // 设置当前路径
    setCurrentPath(path: any) {
      this.currentPath = path;
    },
    //设置菜单名称
    setMenuName(name: any) {
      this.menuName = name;
    },
  },
  getters: {
    getMenus: (state) => state.menus,
    getCurrentMenu: (state) => state.currentMenu,
    getCurrentPath: (state) => state.currentPath,
    getMenuName: (state) => state.menuName,
  },
  persist: true,
});
export default useMenusStore;
