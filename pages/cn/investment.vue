<template>
<div class="investment-wrap">
  <div class="investment-list">
    <img class="investment-banner" src="../../assets/images/investment/investment-img-1@3x.jpg" alt="这是 FLOW 福禄 邀请你加盟 2019 年超火爆的创业项目" />
    <img src="../../assets/images/investment/investment-img-2@3x.jpg" alt="潜力巨大的市场" />
    <img src="../../assets/images/investment/investment-img-3@3x.jpg" alt="北京羽衣科技有限公司" />
    <img src="../../assets/images/investment/investment-img-4@3x.jpg" alt="相比于其他产品，FLOW 福禄 极具竞争力" />
    <img src="../../assets/images/investment/investment-img-5@3x.jpg" alt="新一代换弹电子烟，新一代一次性电子烟" />
    <img src="../../assets/images/investment/investment-img-6@3x.jpg" alt="你背后是强大的伙伴支持" />
    <img src="../../assets/images/investment/investment-img-7@3x.jpg" alt="各地区经销商仍有限量的席位空缺等您加入" />
    <img src="../../assets/images/investment/investment-img-8@3x.jpg" alt="我们的目标成为行业第一，趁竞争还不大，来一起当寡头抢先福禄领先一路" />
  </div>
  <div class="fix-button">
    <a href="https://www.wjx.cn/jq/44348869.aspx" target="_blank">
      <img src="../../assets/images/investment/fix-button@3x.jpg">
    </a>
  </div>
</div>
</template>

<script>
import Bus from '../../assets/bus';

export default {
  layout: 'common',
  data () {
    return {
    }
  },
  head () {
    return {
      title: '专卖店加盟 - FLOW 福禄'
    }
  },
  mounted () {
    Bus.$emit('showTips', true);
    Bus.$emit('fixBottom', true);
  },
  methods: {
  },
  destroyed () {
    Bus.$emit('fixBottom', false);
  }
}
</script>

<style lang="scss" scoped>
.investment-wrap .investment-list {
  font-size: 0;
  img {
    width: 100%;
  }
}

.investment-wrap .investment-banner {
  padding-top: 5rem;
  margin-top: -1px;
}

.investment-wrap .fix-button img {
    position: fixed;
    width: 100%;
    max-width: 540px;
    bottom: 0;
}
</style>
