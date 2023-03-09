<template>
  <header>
    <!-- 左边栏 -->
    <div class="l-content">
      <el-button
        plain
        icon="el-icon-menu"
        size="mini"
        @click="handleMenu"
      ></el-button>

      <!-- <h3 style="color: #fff">首页</h3> -->
      <!-- 头部面包屑 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item class="bread" v-for="item in tags" :key="item.path">
          {{ item.label }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <!-- 右边栏 -->
    <div class="r-content">
      <el-dropdown trigger="hover" szie="mini">
        <!-- 头像 -->
        <span>
          <img class="user" :src="userImg" />
        </span>

        <!-- 下拉菜单 -->
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item @click.native="logOut">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CommonHeader",
  data() {
    return {
      userImg: require("../assets/images/wendi.jpg"),
    };
  },
  methods: {
    handleMenu() {
      this.$store.commit("tab/collapseMenu");
    },
    logOut() {
      this.$store.commit("user/clearToken");
      this.$store.commit("tab/clearMenu");
      this.$router.push("/login");
    },
  },
  computed: {
    ...mapState("tab", {
      tags: "tabList",
    }),
  },
};
</script>

<style lang="less" scoped>
header {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}
.l-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
  h3 {
    font-size: 15px;
  }
}
.r-content {
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
// 面包屑
.el-breadcrumb__item:hover {
  transform: scale(1.1);
}
.el-breadcrumb /deep/ .el-breadcrumb__inner {
  color: #ccc !important; //你想要设置的字体颜色
  // cursor: pointer;
}
// .bread {
//   font-weight: 700 !important;
//   cursor: pointer !important;
// }
</style>