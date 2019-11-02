<template>
<div class="flow-wrap">
  <div class="flow-list">
    <img class="flow-banner" src="../../assets/images/flow/flow-img-1@3x.jpg" alt="FLOW 福禄 换弹电子烟，每一口，都自在" />
    <img src="../../assets/images/flow/flow-img-2@3x.jpg" alt="无焦油的新型雾化烟，智能提醒，好抽防水" />
    <img src="../../assets/images/flow/flow-img-3@3x.jpg" alt="旗舰智能手机级工艺水准" />
    <img src="../../assets/images/flow/flow-img-4@3x.jpg" alt="一支烟提醒功能，每 15 口震动一下" />
    <img src="../../assets/images/flow/flow-img-5@3x.jpg" alt="新一代的尼古丁盐烟油，你要的感觉都在" />
    <img src="../../assets/images/flow/flow-img-6@3x.jpg" alt="吸气即开，快速雾化，拿起就抽，没口很满足" />
    <img src="../../assets/images/flow/flow-img-7@3x.jpg" alt="动力澎湃，口感绵柔" />
    <img src="../../assets/images/flow/flow-img-8@3x.jpg" alt="从前，你永远不知道下一口电子烟会不会抽出一嘴油，于是，我们再烟弹中加入了四重防漏结构设计" />
    <img src="../../assets/images/flow/flow-img-9@3x.jpg" alt="充满一次电，畅快一整天" />
    <img src="../../assets/images/flow/flow-img-10@3x.jpg" alt="每种口味，一举三得" />
    <img src="../../assets/images/flow/flow-img-11@3x.jpg" alt="自带三种口味烟弹" />
    <img src="../../assets/images/flow/flow-img-12@3x.jpg" alt="烘焙烟草，清凉薄荷，拼盘水果" />
    <img src="../../assets/images/flow/flow-img-13@3x.jpg" alt="FLOW 福禄 换弹雾化烟套装" />
    <img src="../../assets/images/flow/flow-img-14@3x.jpg" alt="FLOW 福禄 安全性说明" />
    <img src="../../assets/images/flow/flow-img-15@3x.jpg" alt="未成年人禁用提醒" />
  </div>
  <!-- <div class="buy-btn" @click="buy()">立即购买</div> -->
</div>
</template>

<script>
import Bus from '../../assets/bus';

export default {
  layout: 'common',
  data () {
    return {
      shopLink: {
        jd: 'https://item.m.jd.com/product/46941161551.html?sceneval=2',
        tmall: 'https://detail.m.tmall.com/item.htm?id=595809481459&spm=a2141.7631565.banner_21899561574.0',
        youzan: 'https://shop42452657.youzan.com/v2/goods/361p67jx1rjih'
      }
    }
  },
  head () {
    return {
      title: 'FLOW 福禄 换弹电子烟 - FLOW 福禄'
    }
  },
  mounted () {
    Bus.$emit('showTips', true);
    Bus.$emit('fixBottom', true);
  },
  methods: {
    buy () {
      Bus.$emit('openModal', true, this.shopLink);
    }
  },
  destroyed () {
    Bus.$emit('fixBottom', false);
  }
}
</script>

<style lang="scss" scoped>
.flow-wrap .flow-list {
  font-size: 0;
  img {
    width: 100%;
  }
}

.flow-wrap .flow-list .flow-banner {
  padding-top: 5rem;
  margin-top: -1px;
}
.buy-btn {
  position: fixed;
  z-index: 20;
  width: 100%;
  bottom: 0;
  height: 2.5rem;
  line-height: 2.5rem;
  background-color: #5e69f0;
  color: #fff;
  font-size: .8rem;
  text-align: center;
}
</style>
