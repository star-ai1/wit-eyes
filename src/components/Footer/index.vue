<template>
  <div class="footer-container">
    <div class="top">
      <div class="weChat_qr">
        <img src="@/assets/weChat_qr.jpg" alt="" />
        <p class="desc">微信公众号</p>
      </div>
      <div class="side">
        <!-- 联系电话 -->
        <p>
          <Icon :type="'call'" />
          <span>400-006-2300</span>
        </p>
        <!-- 公司mail -->
        <p>
          <Icon :type="'email'" />
          <span>reception@zhishi.com</span>
        </p>
        <p>
          <Icon :type="'copy'" />
          <span>2021 - 江西智识科技有限公司|智慧食堂,智能食堂,智能结算</span>
        </p>
        <!-- 公司地址 -->
        <p>
          <Icon :type="'site'" />
          <span
            >江西省萍乡市萍乡经济技术开发区</span
          >
        </p>
        <p>
          <img src="@/assets/beian.png" width="16px" />
          赣公网安备 35020302033577号
        </p>
      </div>
    </div>
    <div class="copy">
    demo部分资源来自网络，不做任何的商业行为使用，如有侵犯请联系下架。2996590992@qq.con
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  components: {
    Icon,
  },
};
</script>
<style lang="less" scoped>
@import "~@/styles/var.less";

.footer-container {
  .top {
    flex: 0 0 auto;
    background-color: @dark;
    display: flex;
    justify-content: space-around;
    padding: 20px 0;
    align-items: center;
  }
}
.weChat_qr {
  width: 150px;
  height: 150px;
  padding: 10px 10px 35px 10px;
  background: #fff;
  img {
    width: 150px;
    height: 150px;
  }
  .desc {
    text-align: center;
  }
}
.side {
  flex: 0 0 auto;
  font-size: 16px;
  p {
    color: @lightWords;
    height: 30px;
    line-height: 30px;
    text-align: left;
    .iconfont {
      margin-right: 5px;
    }
  }
}
</style>