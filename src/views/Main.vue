<template>
  <el-container style="height: 100%">
    <!-- 展示侧边栏 -->
    <el-aside width="auto">
      <CommonAside />
    </el-aside>

    <el-container>
      <!-- 展示头部页面 -->
      <el-header>
        <CommonHeader />
      </el-header>
      <!-- 展示main主页 -->
      <el-main>
        <CommonTag />
        <router-view> </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from "../components/CommonAside.vue";
import CommonHeader from "../components/CommonHeader.vue";
import CommonTag from "../components/CommonTag.vue";
export default {
  name: "MAin",
  components: { CommonAside, CommonHeader, CommonTag },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.el-header {
  background-color: #333;
}

.el-main {
  width: 1320px;
  padding-top: 0;
}
</style>