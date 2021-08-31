<template>
  <i class="iconfont" :class="getIconType(type)"></i>
</template>

<script>
const map = {
  site: "icon-weizhi",
  email: "icon-youxiang",
  compute: "icon-jisuan",
  exper: "icon-yongcanqu", //体验
  queue: "icon-bhjpaidui", //排队
  pay: "icon-zhifu",
  chart: "icon-keshihuatubiao-", //可视化图表
  arrowLeft: "icon-biaoqing",
  arrowRight: "icon-dibudaohanglan-",
  call: "icon-dianhua01",
  member: "icon-qun", //成员
  copy:"icon-copyrightbanquan",
  error:'icon-icon_gantanhao'
};

export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  methods: {
    getIconType(icon) {
      return map[icon];
    },
  },
};
</script>

<style lang="less" scoped>
@import "//at.alicdn.com/t/font_2681195_ctm1oas90oq.css";
.iconfont {
  font-size: inherit;
  color: inherit;
}
</style>