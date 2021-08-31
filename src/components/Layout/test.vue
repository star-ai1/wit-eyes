<template>
  <div class="test">
    <Layout>
      <template #header>
        <Header />
      </template>
      <template>
        <router-view></router-view>
      </template>
      <template #footer> </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
export default {
  components: {
    Layout,
    Header,
    Banner,
  },
};
</script>

<style>
@import "~@/styles/global.less";
header {
  width: 100%;
  height: 80px;
}
</style>