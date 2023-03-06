<template>
  <div class="common-table">
    <!-- 用户信息表 -->
    <el-table :data="tableData" height="100%" stripe>
      <!-- 遍历出前五列 -->
      <el-table-column
        show-overflow-tooltip
        v-for="item in tableLabel"
        :key="item.prop"
        :label="item.label"
        :width="item.width ? item.width : 125"
      >
        <!-- scope是每一行的所有属性，里面的row存着数据 -->
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row[item.prop] }}</span>
        </template>
      </el-table-column>
      <!-- 最后一列——操作 -->
      <el-table-column label="操作" min-width="180">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" @click="handleDelete(scope.row)" type="danger"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页栏 -->
    <el-pagination
      class="pager"
      layout="prev,pager,next"
      :total="/* eslint-disable */ config.total"
      :current-page.sync="config.page"
      @current-change="changePage"
      :page-size="20"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "CommonTable",
  props: {
    tableData: Array,
    // 列名
    tableLabel: Array,
    // 分页配置
    config: Object,
  },
  data() {
    return {};
  },
  methods: {
    // 编辑按钮,这三个都是自定义事件
    handleEdit(row) {
      // console.log(row);
      this.$emit("edit", row);
    },
    // 删除按钮，只有自己新增的用户才可以删除，其它的是mock模拟出来的，删不掉
    handleDelete(row) {
      this.$emit("del", row);
    },
    // 切换页面按钮
    changePage(page) {
      this.$emit("changePage", page);
    },
  },
};
</script>

<style lang="less" scoped>
.common-table {
  height: calc(100% - 62px);
  background-color: #fff;
  position: relative;
  .pager {
    position: absolute;
    bottom: 0;
    right: 20px;
  }
}
</style>