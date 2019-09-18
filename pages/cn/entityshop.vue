<template>
<div class="entityshop-wrap">
  <div class="entityshop-list">
    <img class="entityshop-banner" src="../../assets/images/entityshop/entityshop-img-1@3x.jpg" alt="FLOW 福禄 全国专卖店加盟计划" />
    <img src="../../assets/images/entityshop/entityshop-img-2@3x.jpg" alt="品牌赋能，产品授权，运营支持" />
    <img src="../../assets/images/entityshop/entityshop-img-3@3x.jpg" alt="低成本，高收益，快回本，易开店，稳经营" />
    <img src="../../assets/images/entityshop/entityshop-img-4@3x.jpg" alt="加盟流程简单，最快 15 天高效开店" />
    <img src="../../assets/images/entityshop/entityshop-img-5@3x.jpg" alt="前所未有的开店政策" />
    <img src="../../assets/images/entityshop/entityshop-img-6@3x.jpg" alt="持续不断的经验支持" />
    <img src="../../assets/images/entityshop/entityshop-img-7@3x.jpg" alt="我们正在寻找的就是对电子烟行业充满信心的你" />
  </div>
  <div class="fix-button">
    <a href="https://www.wjx.cn/jq/41550946.aspx" target="_blank">
      <img src="../../assets/images/entityshop/fix-button@3x.jpg">
    </a>
  </div>
</div>
</template>

<script>
import Bus from '../../assets/bus';

export default {
  layout: 'common',
  data() {
    return {
    }
  },
  head () {
    return {
      title: '专卖店加盟 - FLOW 福禄'
    }
  },
  mounted () {
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
.entityshop-wrap .entityshop-list {
  font-size: 0;
  img {
    width: 100%;
  }
}

.entityshop-wrap .entityshop-banner {
  padding-top: 5rem;
  margin-top: -1px;
}

.entityshop-wrap .fix-button img {
    position: fixed;
    width: 100%;
    max-width: 540px;
    bottom: 0;
}
</style>
