<template>
  <div class="tabs">
    <!-- 面包屑功能 -->
    <el-tag
      v-for="(tag, index) in tags"
      :key="tag.name"
      :closable="tag.name !== 'home'"
      :effect="$route.name === tag.name ? 'dark' : 'plain'"
      @click="changeMenu(tag)"
      @close="handleClose(tag, index)"
      size="small"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "CommonTag",
  data() {
    return {};
  },
  computed: {
    // 获取tabList
    ...mapState({
      tags: (state) => state.tab.tabList,
    }),
  },
  methods: {
    // 切换面包屑路由
    changeMenu(item) {
      this.$router.push({ name: item.name });
    },
    // 删除所选择的面包屑
    ...mapMutations({
      close: "closeTag",
    }),
    // 删除面包屑路由
    handleClose(tag, index) {
      const last = this.tags.length - 1;
      // 删除所选择的面包屑
      this.close(tag);
      // 如果不是当前路由，直接删掉
      if (tag.name !== this.$route.name) {
        return;
      }
      // 如果是当前路由
      // 如果是最右边的，光标向左跳转,否则向右跳转
      if (index === last) {
        this.$router.push({
          name: this.tags[index - 1].name,
        });
      } else {
        this.$router.push({
          name: this.tags[index].name, //因为已经删除了，所以不用+1
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.tabs {
  padding: 5px;
  margin-top: 15px;

  .el-tag {
    margin-right: 15px;
    cursor: pointer;
    font-size: 15px;
  }
}
</style>