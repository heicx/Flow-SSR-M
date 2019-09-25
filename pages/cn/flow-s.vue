<template>
<div class="flow-s-wrap">
  <div class="flow-s-list">
    <img class="flow-s-banner" src="../../assets/images/flow-s/flow-s-img-1@3x.jpg" alt="FLOW 福禄 换弹电子烟 S" />
    <img src="../../assets/images/flow-s/flow-s-img-2@3x.jpg" alt="工艺水准升级，带来更精美机身，从旗舰手机的工艺，提升至旗舰手机都没有的工艺" />
    <img src="../../assets/images/flow-s/flow-s-img-3@3x.jpg" alt="升级激光蚀刻 LOGO，全金属一体化机身" />
    <img src="../../assets/images/flow-s/flow-s-img-4@3x.jpg" alt="升级 350mAH 电池，续航能力提升 20%" />
    <img src="../../assets/images/flow-s/flow-s-img-5@3x.jpg" alt="漏油率降低 300%，烟雾量提升 30%" />
    <img src="../../assets/images/flow-s/flow-s-img-6@3x.jpg" alt="多种精心调配的烟弹口味，带来丰富的口腔体验" />
    <img src="../../assets/images/flow-s/flow-s-img-7@3x.jpg" alt="纳米涂层防水，泡澡都能放心使用" />
    <img src="../../assets/images/flow-s/flow-s-img-8@3x.jpg" alt="一支烟提醒功能，每 15 口震动一下" />
    <img src="../../assets/images/flow-s/flow-s-img-9@3x.jpg" alt="吸气即开，极速雾化，拿起就抽，每一口都满足" />
    <img src="../../assets/images/flow-s/flow-s-img-10@3x.jpg" alt="新一代的尼古丁盐烟油" />
    <img src="../../assets/images/flow-s/flow-s-img-11@3x.jpg" alt="FLOW 福禄 换弹电子烟套装 S" />
    <img src="../../assets/images/flow-s/flow-s-img-12@3x.jpg" alt="人气口味 白桃乌龙茶，成为套装自带口味烟弹" />
  </div>
  <div class="buy-btn" @click="buy()">立即购买</div>
</div>
</template>

<script>
import Bus from '../../assets/bus';

export default {
  layout: 'common',
  data () {
    return {
      shopLink: {
        jd: 'https://item.m.jd.com/product/100008068016.html?sceneval=2',
        tmall: 'https://detail.m.tmall.com/item.htm?id=602283944832&spm=a2141.7631565.banner_21899561574.1',
        youzan: 'https://shop42452657.youzan.com/v2/showcase/goods?alias=2ompse0rdtg7d&banner_id=f.79556578~image_ad.4~1~sVpWi6OU&index=0&reft=1568863732444&spm=f.79556578'
      }
    }
  },
  head () {
    return {
      title: 'FLOW 福禄 换弹电子烟 S - FLOW 福禄'
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
.flow-s-wrap .flow-s-list {
  font-size: 0;
  img {
    width: 100%;
  }
}

.flow-s-wrap .flow-s-list .flow-s-banner {
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
