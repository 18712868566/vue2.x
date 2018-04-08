<template>
  <section>
        <div class="login">
            <label for="">
                <span>用户名:</span>
                <input  v-model="username" @change="setUser">
            </label>
            <br />
            <label for="">
                <span>密码:</span>
                <input  v-model="password" @change="setUser">
            </label>
        </div>
  </section>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    setUser() {
      this.$emit("transferUser", [this.username, this.password]);
    }
  }
};
</script>

<style scoped>
.login {
  width: 400px;
  height: 200px;
  background: lightblue;
}
</style>
