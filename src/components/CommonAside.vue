<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <h3>{{ isCollapse ? "后台" : "通用后台管理系统" }}</h3>

    <!-- 没有子菜单，遍历渲染-->
    <el-menu-item
      @click="clickMenu(item)"
      v-for="item in noChildren"
      :index="item.path + ''"
      :key="item.path"
    >
      <!-- 拼接icon图标 -->
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>

    <!-- 有子菜单，遍历渲染-->
    <el-submenu
      v-for="item in hasChildren"
      :index="item.path + ''"
      :key="item.path"
    >
      <template slot="title">
        <!-- 拼接icon图标 -->
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </template>

      <el-menu-item-group
        v-for="(subItem, subIndex) in item.children"
        :index="subIndex + ''"
        :key="subItem.path"
      >
        <el-menu-item @click="clickMenu(subItem)" :index="String(subIndex)">{{
          subItem.label
        }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "CommonAside",
  data() {
    return {
      // isCollapse: false,
      menu: [],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    // 点击菜单
    clickMenu(item) {
      // 添加路由
      this.$router.push({
        name: item.name,
      });
      // console.log(item.name);
      // 添加面包屑
      this.$store.commit("selectMenu", item);
    },
  },
  computed: {
    noChildren() {
      return this.asyncMenu.filter((item) => !item.children);
    },
    hasChildren() {
      return this.asyncMenu.filter((item) => item.children);
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    },
    asyncMenu() {
      return this.$store.state.tab.menu;
    },
  },
};
</script>

<style lang="less" scoped>
.el-menu {
  height: 100%;
  border: none;
  h3 {
    font-size: 15px;
    color: rgb(237, 236, 236);
    text-align: center;
    line-height: 48px;
    margin-top: 5px;
    margin-bottom: 10px;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>