<template>
  <div class="banner-container" ref="container">
    <ul
      class="banner-list"
      :style="{
        left,
      }"
    >
      <li v-for="(item, i) in banners" :key="i">
        <img :src="item.img" alt="" />
      </li>
    </ul>
    <div
      class="arrow-left arrow"
      v-show="index != 0"
      @click="index--"
      v-if="banners.length !== 1"
    >
      <Icon :type="'arrowLeft'" />
    </div>
    <div
      class="arrow-right arrow"
      v-show="index !== banners.length - 1"
      @click="index++"
      v-if="banners.length !== 1"
    >
      <Icon :type="'arrowRight'" />
    </div>
    <div class="indicator" v-if="banners.length !== 1">
      <span
        v-for="(item, i) in banners"
        :key="i"
        :class="{ active: i === index }"
        @click="index = i"
      ></span>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  props: {
    banners: {},
  },
  data() {
    return {
      containerWidth: 0,
      index: 0, //banner 的索引值
    };
  },
  computed: {
    /* transform: translateX(-35px); */
    left() {
      return `${-this.index * this.containerWidth}px`;
    },
  },
  mounted() {
    this.containerWidth = this.$refs.container.clientWidth;
    console.log(this.$refs.container.clientWidth);
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.banner-container {
  overflow: hidden;
  width: 100%;
  position: relative;
  height: 708px;

  .banner-list {
    position: relative;
    display: flex;
    transition: 0.3s;
    width: 100%;
    height: 100%;
    li {
      flex: 0 0 auto;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        // object-fit: cover;
      }
    }
  }
  .arrow {
    font-size: 100px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: @primary;
    &.arrow-right {
      right: 0;
    }
  }

  .indicator {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    span {
      display: inline-block;
      width: 20px;
      height: 20px;
      background: #fff;
      border-radius: 50%;
      margin: 0 10px;
      cursor: pointer;
      &.active {
        background: @warn;
      }
    }
  }
}
@media(max-width:992px){
    .banner-container{
      height: 380px !important;
    }
}
</style>