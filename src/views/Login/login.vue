<template>
  <el-form
    class="login-container"
    :model="form"
    status-icon
    :rules="rules"
    ref="form"
    label-width="100px"
  >
    <h3 class="login-title">系统登陆</h3>

    <!-- 用户表单 -->
    <el-form-item
      class="username"
      label="用户名"
      label-width="80px"
      prop="username"
    >
      <el-input
        type="input"
        v-model="form.username"
        auto-complete="off"
        placeholder="请输入账号"
      ></el-input>
    </el-form-item>

    <!-- 密码表单 -->
    <el-form-item
      class="password"
      label="密码"
      label-width="80px"
      prop="password"
    >
      <el-input
        type="password"
        v-model="form.password"
        auto-complete="off"
        placeholder="请输入密码"
      ></el-input
    ></el-form-item>

    <!-- 登录按钮 -->
    <el-form-item class="login_submit">
      <el-button class="login-submit" type="primary" @click="login"
        >登录</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
import { getMenu } from "../../../api/data";
export default {
  name: "LOgin",
  data() {
    return {
      form: {},
      rules: {
        // 账户规则
        username: [
          {
            required: true,
            message: "请输入用户名",
            rigger: "blur",
          },
          {
            min: 3,
            message: "用户名长度不能小于3位",
            trigger: "blur",
          },
        ],
        // 密码规则
        password: [
          {
            required: true,
            message: "请输入密码",
            rigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    // 登录
    login() {
      /* 给data起个别名叫res
      因为在不同用户下的菜单不同，因此根据账户获取不同菜单栏 */
      getMenu(this.form).then(({ data: res }) => {
        // 账户密码正确
        if (res.code === 20000) {
          // 不管有没有菜单都先清除
          this.$store.commit("clearMenu");
          this.$store.commit("clearToken");
          // 重新根据账户设置菜单
          this.$store.commit("setMenu", res.data.menu);
          // 设置token
          this.$store.commit("setToken", res.data.token);
          // 添加菜单
          this.$store.commit("addMenu", this.$router);
          // 跳转主页
          this.$router.push({ name: "home" });
        }
        // 账户密码错误，提示信息
        else {
          this.$message.warning(res.data.message);
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.login-title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
.login_submit {
  margin: 10px auto;
}
.login-submit {
  margin-left: 40px;
}
</style>