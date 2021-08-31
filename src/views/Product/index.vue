<template>
  <div class="product-container">
    <Banner :banners="banners"/>
    <div class="section">
      <img src="@/assets/product_section_2.gif" alt="" width="100%">
    </div>
    <div class="section">
      <img src="@/assets/product_pay.gif" alt="" width="100%">
    </div>
    <div class="section">
      <img src="@/assets/product_section_3.png" alt="" width="100%">
    </div>
    <div class="section">
      <img src="@/assets/product_view.png" alt="" width="100%">
    </div>
    <div class="section">
      <img src="@/assets/product_section_5.gif" alt="" width="100%">
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner"
export default {
  data(){
    return{
       banners: [
        {
          img: "banners/product_banner.png",
        },
      ],
    }
  },
    components:{
      Banner,
    }
}
</script>

<style lang="less" scoped>
.section{
  font-size: 0px;
}
</style>