<template>
  <div class="home-container">
    <Banner :banners="banners" />
    <div class="section">
      <img src="@/assets/home_pay.png" alt="" width="100%"/>
    </div>
    <div class="section">
      <img src="@/assets/home_09.jpg" alt="" width="100%" />
    </div>
    <div class="section">
      <img src="@/assets/home_08.png" alt="" width="100%" />
    </div>
    <div class="section">
      <img src="@/assets/huoban.png" alt="" width="100%" />
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
export default {
  comments: {},
  data() {
    return {
      banners: [
        {
          img: "banners/home_banner_1.png",
        },
        {
          img: "banners/home_banner_2.jpg",
        },
        {
          img: "banners/home_banner_3.png",
        },
      ],
    };
  },
  components: {
    Banner,
  },
};
</script>
<style lang="less" scoped>
.home-container {
  width: 100%;
  .banner-container {
    height: 708px;
  }
  .section{
    font-size: 0;
  }
}
</style>

