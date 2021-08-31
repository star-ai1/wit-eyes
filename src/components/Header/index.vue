<template>
  <div class="header-container">
      <div class="logo-container">
        <router-link to="/" class="logo">
          <h1>智识科技</h1>
        </router-link>
      </div>
      <ul class="nav-list">
        <li>
          <router-link to="/" exact>首页</router-link>
        </li>
        <li>
          <router-link to="/shop" exact>商城</router-link>
        </li>
        <li>
          <router-link to="/product" exact>产品</router-link>
        </li>
        <li>
          <router-link to="/project">方案</router-link>
        </li>
        <li>
          <router-link to="/case">案例</router-link>
        </li>
      </ul>
      <div class="login-container">
        <a class="sign-in" @click="handleSignIn">登录</a>
        <a class="sign-up" @click="handleSignUp">免费注册</a>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleSignIn() {
      this.$emit("SignIn");
    },
    handleSignUp() {
      this.$emit("SignUp");
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.header-container {
  width: 100%;
  height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

  .logo {
    display: block;
    height: 100%;
    background-image: url("~@/assets/logo.jpg");
    background-size: 100%;
  }
  h1 {
    height: 100%;
    text-indent: -9999px;
    overflow: hidden;
  }
}
.logo-container {
  margin-left: 30px;
  width: 60px;
  height: 60px;
  img {
    width: 100%;
    height: 100%;
  }
}
.nav-list {
  display: flex;
  height: 100%;
  align-items: center;
  li {
    display: block;

    a {
      height: 60px;
      line-height: 60px;
      display: block;
      margin: 0 10px;
      width: 70px;
      box-sizing: border-box;
      border-bottom: 2px solid transparent;
      border-bottom-width: 0px;
      transform-origin: left center;
      transition: 0.3s;

      &:hover {
        color: @primary;
        border-bottom: 1px solid #000;
      }
      &.router-link-active {
        border-bottom: 2px solid #000;
      }
    }
  }
}
.login-container {
  text-align: center;
  a {
    display: inline-block;
    margin-right: 15px;
    line-height: 40px;
    border-radius: 3px;
    box-sizing: border-box;
    height: 40px;
    cursor: pointer;
  }
  .sign-in {
    color: @warn;
    width: 80px;
    font-weight: 400;
    font-size: 18px;
  }
  .sign-up {
    width: 100px;
    background: @primary;
    color: #fff;
  }
}
</style>