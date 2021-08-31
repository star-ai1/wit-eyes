<template>
  <div class="project-container">
    <div class="section">
      <img src="@/assets/project_banner.png" width="100%" />
    </div>
    <!-- 方案特点 -->
    <div class="section trait">
      <h2>方案特点</h2>
      <div class="contents">
        <div class="section">
          <h3>无需排队，更多用餐选择，解决传统烦恼</h3>
          <p>
            使用易创达智能结算系统，结算速度可达2/s一单，客人在挑选菜品的同时，也解决了传统排队的烦恼
          </p>
        </div>
        <div class="section">
          <h3>财务信息更便捷</h3>
          <p>财务信息，消费报表后台一键查询，一键导出</p>
        </div>
        <div class="section">
          <h3>节约人力开支</h3>
          <p>高效率结账准确率与防逃单机制，较大程度减少人力开支</p>
        </div>
      </div>
      <img src="@/assets/project.webp" alt="" />
    </div>
    <div class="section manage">
      <!-- 商品管理 -->
      <h2>商品管理</h2>
      <div class="desc">攻略全品类商品精细化管理需求</div>
      <ul class="list">
        <li>
          <div class="detail">
            <p class="detail_title">实用促销</p>
            <p class="detail_desc">
              满减、打折、<br />
              特价、买赠、换购 ……
            </p>
          </div>
        </li>
        <li>
          <div class="detail">
            <p class="detail_title">一品多码</p>
            <p class="detail_desc">
              同名称不同内容和口味的商品内设不同<br />
              条码，各自记录销量各自记录库存，合<br />并也可统计
            </p>
          </div>
        </li>
        <li>
          <div class="detail">
            <p class="detail_title">组装拆分</p>
            <p class="detail_desc">
              大件单位的商品拆开包装<br />
              按小件单位来摆放来售卖<br />
              云后台自动减库存
            </p>
          </div>
        </li>
        <li>
          <div class="detail">
            <p class="detail_title">分类管理</p>
            <p class="detail_desc">
              二级分类管理，规范商品逻辑<br />
              加快店员收银速度，细化商品<br />
              性质，利于数据分析
            </p>
          </div>
        </li>
        <li>
          <div class="detail">
            <p class="detail_title">批量导入</p>
            <p class="detail_desc">
              海量商品信息，依次导入模板，直接上传<br />
              更新。比人工操作快了许多
            </p>
          </div>
        </li>
        <li>
          <div class="detail">
            <p class="detail_title">预包装打印</p>
            <p class="detail_desc">
              生鲜商品提前分拣、称重、包装、打<br />
              码、贴标。收银员扫码就可直接收银
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
@import "~@/styles/var.less";
.project-container {
  width: 100%;
}
.trait {
  max-width: 1200px;
  margin: 50px auto;
  .contents {
    float: left;
    width: 500px;
  }
  img {
    width: 45%;
  }
  h2 {
    font-size: 36px;
    line-height: 80px;
    line-height: 80px;
    margin-bottom: 30px;
  }
  .section {
    text-align: left;
    h3 {
      color: rgb(31, 135, 232);
      height: 40px;
      line-height: 40px;
      margin-top: 20px;
    }
  }
}
/* 商品管理 */
.manage {
  margin: 0 auto;
  overflow: hidden;
  max-width: 1200px;
  h2 {
    line-height: 40px;
    height: 40px;
    margin: 40px 0 10px;
  }
  .desc {
    line-height: 40px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    li {
      margin-bottom: 30px;
      width: 30%;
      height: 260px;
      line-height: 24px;
      text-align: center;
      overflow: hidden;
      &:nth-of-type(1) {
        background: url("~@/assets/project_manage_1.png");
      }
      &:nth-of-type(2) {
        background: url("~@/assets/project_manage_2.png");
      }
      &:nth-of-type(3) {
        background: url("~@/assets/project_manage_3.png");
      }
      &:nth-of-type(4) {
        background: url("~@/assets/project_manage_4.png");
      }
      &:nth-of-type(5) {
        background: url("~@/assets/project_manage_5.png");
      }
      &:nth-of-type(6) {
        background: url("~@/assets/project_manage_6.png");
      }
      &:hover {
        .detail {
          transform: translateY(0px);
          .detail_title {
            transform: translateX(-50%) translateY(90px);
          }
        }
      }

      .detail {
        height: 260px;
        background: rgba(0, 0, 0, 0.3);
        color: #fff;
        position: relative;
        transform: translateY(203px);
        transition: 0.3s;

        p {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }
        .detail_title {
          font-size: 20px;
          transform: translateX(-50%) translateY(20px);
          transition: 0.3s;
        }
        .detail_desc {
          width: 100%;
          top: 50%;
        }
      }
    }
  }
}
</style>

