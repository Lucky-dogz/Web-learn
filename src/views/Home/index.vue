<template>
  <el-row class="home">
    <!-- 左侧 -->
    <el-col :span="8" style="margin-top: 20px">
      <!-- 用户栏 -->
      <el-card shadow="hover">
        <!-- 用户信息 -->
        <div class="user">
          <img :src="userImg" />
          <div class="userInfo">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <hr />
        <!-- 登录信息 -->
        <div class="login-info">
          <p>上次登录时间：<span>2022-5-1</span></p>
          <p>上次登录地点：<span>广东佛山</span></p>
        </div>
      </el-card>

      <!-- 数据栏 -->
      <el-card style="margin-top: 20px; height: 400px">
        <el-table :data="tableData">
          <!-- 遍历出数据，val是tableLabel里的键值，key对应的是tableLabel里的键名-->
          <el-table-column
            v-for="(val, key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
            align="center"
          >
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <!-- 右侧 -->
    <el-col :span="16">
      <!-- 订单部分 -->
      <div class="num" v-for="item in countData" :key="item.name">
        <el-card
          :body-style="{ display: 'flex', padding: 0 }"
          style="word-break: break-all"
        >
          <!-- 图标 -->
          <i
            class="icon"
            :class="`el-icon-${item.icon}`"
            :style="{ background: item.color }"
          ></i>
          <!-- 详情 -->
          <div class="detail">
            <p class="value">￥{{ item.value }}</p>
            <p class="txt">{{ item.name }}</p>
          </div>
        </el-card>
      </div>

      <!-- 折线图 -->
      <el-card
        style="
          height: 280px;
          width: 950px;
          margin-left: 10px;
          margin-top: 175px;
        "
      >
        <div style="height: 280px" ref="echarts"></div>
      </el-card>
      <div class="graph">
        <!-- 柱状图 -->
        <el-card style="height: 260px">
          <div style="height: 240px" ref="UserEcharts"></div>
        </el-card>
        <!-- 饼状图 -->
        <el-card style="height: 260px">
          <div style="height: 240px" ref="VedioEcharts"></div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
// 引入getData接口，获取数据
import { getData } from "../../../api/data";
// 引入Echart
import echarts from "echarts";
export default {
  name: "HOme",
  data() {
    return {
      userImg: require("@/assets/images/logo.png"),
      // 左侧数据
      tableData: [],
      tableLabel: {
        name: "品牌",
        todayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "销售额",
      },
      // 右侧数据
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 210,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 1234,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
    };
  },
  methods: {
    // 折线图
    orderEcharts(data) {
      this.tableData = data.tableData;
      // 获取折线图数据
      const order = data.orderData;
      // 获取日期数据，作为x轴
      const xData = order.date;

      /* Object.keys()的用法作用：遍历对象
        返回结果：返回对象中每一项的key组成的数组 */
      const keyArray = Object.keys(order.data[0]);
      // console.log(keyArray, "keyArray");

      // series有name、type、data三个配置项
      const series = [];
      keyArray.forEach((key) => {
        series.push({
          name: key,
          data: order.data.map((item) => item[key]),
          type: "line",
        });
      });

      // 配置Echarts的配置项
      const phoneOption = {
        xAxis: {
          data: xData,
        },
        yAxis: {},
        legend: {
          data: keyArray,
        },
        series,
      };
      // 基于准备好的dom，初始化echarts实例
      const E = echarts.init(this.$refs.echarts);
      // 使用刚指定的配置项和数据显示图表。
      E.setOption(phoneOption);
    },
    // 柱状图
    barEcharts(data) {
      const userOption = {
        legend: {
          //图例文字颜色
          textStyle: {
            color: "#333",
          },
        },
        grid: {
          left: "20%",
        },
        // 提示框
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category", //类目轴
          data: data.userData.map((item) => item.date),
          axisLine: {
            lineStyle: {
              color: "#17b3a3",
            },
          },
          axisLabel: {
            interval: 0,
            color: "#333",
          },
        },
        yAxis: [
          {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#17b3a3",
              },
            },
          },
        ],
        color: ["#2ec7c9", "#b6a2de"],
        series: [
          {
            name: "新增用户",
            data: data.userData.map((item) => item.new),
            type: "bar",
          },
          {
            name: "活跃用户",
            data: data.userData.map((item) => item.active),
            type: "bar",
          },
        ],
      };
      const E = echarts.init(this.$refs.UserEcharts);
      E.setOption(userOption);
    },
    // 饼图
    pieEcharts(data) {
      const videoOption = {
        tooltip: {
          trigger: "item",
        },
        color: [
          "#0f78f4",
          "#dd536b",
          "#9462e5",
          "#a6a6a6",
          "#e1bb22",
          "#39c362",
          "#3ed1cf",
        ],
        series: [
          {
            data: data.videoData,
            type: "pie",
          },
        ],
      };
      const E = echarts.init(this.$refs.VedioEcharts);
      E.setOption(videoOption);
    },
  },
  mounted() {
    // 拦截Ajax请求并获取Mock生成的数据
    getData().then((res) => {
      const { code, data } = res.data;
      if (code === 20000) {
        // 折线图
        this.orderEcharts(data);
        // 柱状图
        this.barEcharts(data);
        // 饼图
        this.pieEcharts(data);
      }
    });
  },
};
</script>
<style lang="less" scoped>
.home {
  display: flex;
  font-size: 10px;
}
.user {
  display: flex;
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-right: 40px;
  }
  .userInfo {
    margin-left: 20px;
    padding: 10px;
    .name {
      font-size: 20px;
      font-weight: 800;
      margin-bottom: 8px;
    }
    .access {
      margin-top: 1px;
      color: rgb(126, 126, 126);
    }
  }
}
.login-info {
  p {
    line-height: 28px;
    font-size: 14px;
    color: #999999;
    span {
      color: #666666;
      margin-left: 60px;
    }
  }
}
.num {
  float: left;
  margin-top: 20px;
  padding-left: 10px;
  .el-card {
    display: flex;
    width: 309px;
    height: 60px;
    .icon {
      text-align: center;
      line-height: 60px;
      width: 70px;
      height: 100%;
    }
    .icon::before {
      color: #fff;
      display: inline-block;
      transform: scale(2);
    }
    .value {
      margin: 5px;
      font-size: 20px;
    }
    .txt {
      margin-top: 1px;
      margin-left: 10px;
      font-size: 10px;
      color: rgb(93, 93, 93);
    }
  }
}
.graph {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  .el-card {
    flex: 1 1;
    margin-left: 10px;
  }
}
</style>