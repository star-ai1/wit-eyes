<template>
  <div class="shop-container">
    <Banner :banners="banners" />
    <div class="desk product_item">
      <img src="@/assets/product_2.png" alt="" />
      <ul class="info">
        <h2>桌台式智眼结算系统</h2>
        <h3 class="desc">
          适用于各类大中型用餐场景在企业中，可一人值守两台机器，结算0出错。
        </h3>
        <li>结算速度：2s</li>
        <li>识别速度：&gt;100ms</li>
        <li>读写距离：0-3cm</li>
        <li>支付方式：IC卡、现金、支付宝、微信</li>
        <li>整体尺寸：1500mm×700mm×800mm</li>
      </ul>
    </div>
    <div class="port product_item">
      <img src="@/assets/product_1.png" alt="" />
      <ul class="info">
        <h2>便携式智眼结算系统</h2>
        <h3 class="desc">
          广泛适用于小型用餐场所。由于较快的结算速度，一个快餐店仅需一台机器，就能满足日流水14000的结账需求。
        </h3>
        <li>结算速度：2S</li>
        <li>识别速度：&gt;140ms</li>
        <li>读写距离：0-5cm</li>
        <li>支付方式：IC卡、现金、支付宝、微信</li>
        <li>台面尺寸： 740mm×450mm×450mm、780mm×450mm×760mm</li>
      </ul>
    </div>
    <div class="section">
      <img src="@/assets/shop_1.gif" alt="" width="100%" />
    </div>
    <div class="section use">
      <h2><span class="">50w+零售商户 </span>都在用</h2>
      <img src="@/assets/shop_2.png" alt="" height="400px" />
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner";

export default {
  data() {
    return {
      banners: [
        {
          img: "/banners/shop_banner_1.png",
        },
        {
          img: "/banners/shop_banner_2.gif",
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
.shop-container {
  .banner-container {
    height: 708px;
  }
}
.product_item {
  margin: 0 auto;
  height: 400px;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  img {
    width: 300px;
    height: 300px;
    margin-right: 50px;
  }
  .info {
    text-align: left;
    width: 500px;
    h2 {
      height: 60px;
      line-height: 60px;
    }
    .desc {
      font-size: 16px;
      line-height: 40px;
    }
    li {
      line-height: 30px;
      height: 30px;
    }
  }
}
.section {
  font-size: 0px;
  width: 100%;
  &.use {
    background: #f6f6f6;
    padding: 50px 0;

    h2 {
      font-size: 28px;
      margin: 20px 0;
      span {
        color: #ef7641;
        font-size: 33px;
      }
    }
  }
}
</style>