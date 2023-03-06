<template>
  <div id="app" class="manage">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="less">
/* 清除外边距 */
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  height: 100vh;
}
</style>