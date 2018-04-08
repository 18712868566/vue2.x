<template>
  <header class="header">
      <div id="logo">{{logo}}</div>
      <ul class="nav">
          <li v-for="nav in navs" :key="nav.id">{{nav.li}}</li>
      </ul>
  </header>
</template>

<script>
export default {
  name: "headerDiv",
  data() {
    return {
      navs: [
        { id: "0", li: "主页" },
        { id: "1", li: "相册" },
        { id: "2", li: "日志" },
        { id: "3", li: "留言" },
        { id: "4", li: "点赞" }
      ]
    };
  },
  props: ["logo"]
};
</script>

<style scoped>
.header {
  background: #333;
  color: #fff;
  font-size: 24px;
}
#logo {
  line-height: 40px;
  float: left;
}
.nav {
  text-align: center;
  line-height: 40px;
}
.nav li {
  display: inline-block;
  padding: 0 20px;
  margin: 0 10px;
}
</style>
