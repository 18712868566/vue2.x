<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld/> -->
    <headerDiv :logo="logoMsg"></headerDiv>

    <LoginDiv @transferUser="getUser"></LoginDiv>
    <p>用户名为:{{user}}</p>
    <p>密码为:{{pass}}</p>
  </div>
</template>

<script>
// import HelloWorld from './components/helloworld/HelloWorld'
import headerDiv from "./components/header/header";
import LoginDiv from "./components/login/login";

export default {
  name: "App",
  data() {
    return {
      logoMsg: "lixuefeng",
      user: "",
      pass: ""
    };
  },
  methods: {
    getUser(msg) {
      console.log(msg);
      this.user = msg[0];
      this.pass = msg[1];
    }
  },
  components: {
    headerDiv,
    LoginDiv
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
