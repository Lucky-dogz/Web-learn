<template>
  <!-- 添加用户表单 -->
  <!-- 注意：这里有修改父组件传过来的props值——form，所以会警告 -->
  <el-form ref="form" label-width="100px" :model="form" :inline="inline">
    <!-- 表单域中可以放置各种类型的表单控件，v-for遍历生成多个表单域 -->
    <el-form-item
      v-for="item in formLabel"
      :key="item.label"
      :label="item.label"
    >
      <!-- input框封装 -->
      <el-input
        v-if="item.type === 'input'"
        :placeholder="'请输入' + item.label"
        v-model="/* eslint-disable */ form[item.model]"
      >
      </el-input>
      <!-- switch框封装 -->
      <el-switch
        v-if="item.type === 'switch'"
        v-model="form[item.model]"
      ></el-switch>
      <!-- 日期封装 -->
      <el-date-picker
        v-if="item.type === 'date'"
        type="date"
        value-format="yyyy-MM-dd"
        placeholder="选择日期"
        v-model="form[item.model]"
      ></el-date-picker>
      <!-- 选择option封装 -->
      <el-select
        v-if="item.type === 'select'"
        placeholder="请选择"
        v-model="form[item.model]"
      >
        <el-option
          v-for="item in item.opts"
          :key="item.value"
          :label="item.label"
          v-model="item.value"
        ></el-option>
      </el-select>
    </el-form-item>

    <!-- 加个插槽 -->
    <el-form-item>
      <slot></slot>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "CommonForm",
  // 接收数据、限制类型
  props: {
    formLabel: Array,
    form: Object,
    inline: Boolean,
  },
};
</script>

<style lang="less" scoped>
</style>