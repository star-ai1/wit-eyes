<template>
  <div id="app">
    <Layout>
      <!-- header -->
      <template #header>
        <Header @SignIn="handleSignIn" @SignUp="handleSignUp"/>
      </template>
      <!-- main -->
      <template>
        <RouterView />
      </template>
      <!-- footer -->
      <template #footer>
        <Footer />
      </template>
    </Layout>
    <!-- 登录 -->
    <SignIn v-if="isSignIn" @SignInClose="handleSignIn" />
    <SignUp v-if="isSignUp" @SignUpClose="handleSignUp" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";
import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp"
export default {
  name: "App",
  components: {
    Layout,
    Header,
    Footer,
    SignIn,
    SignUp
  },
  data() {
    return {
      isSignIn: false,
      isSignUp:false,
    };
  },
  methods: {
    handleSignIn() {
      this.isSignIn = !this.isSignIn;
    },
    handleSignUp() {
      this.isSignUp = !this.isSignUp;
    },
  },
};
</script>

<style lang="less">
@import "~@/styles/global.less";

header {
  height: 70px;
}
</style>
