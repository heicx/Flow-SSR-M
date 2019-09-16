<template>
<div class="mini-flow-wrap">
  <div class="mini-flow-list">
    <img class="mini-flow-banner" src="../../assets/images/mini-flow/mini-flow-img-1@3x.jpg" alt="FLOW 福禄 小彩蛋，新一代一次性电子烟" />
    <img src="../../assets/images/mini-flow/mini-flow-img-2@3x.jpg" alt="小巧便携，用完即抛" />
    <img src="../../assets/images/mini-flow/mini-flow-img-3@3x.jpg" alt="旗舰手机级工艺水准，糖果般的外观质感" />
    <img src="../../assets/images/mini-flow/mini-flow-img-4@3x.jpg" alt="采用市面上罕见的双料注塑工艺" />
    <img src="../../assets/images/mini-flow/mini-flow-img-5@3x.jpg" alt="由透明的食品级 ABS 塑料盒炫色 PC 精心调和而成" />
    <img src="../../assets/images/mini-flow/mini-flow-img-6@3x.jpg" alt="国际设计金奖团队操刀，符合人体工学的流线型设计" />
    <img src="../../assets/images/mini-flow/mini-flow-img-7@3x.jpg" alt="独立储油仓，耐腐蚀，耐高温" />
    <img src="../../assets/images/mini-flow/mini-flow-img-8@3x.jpg" alt="8 种口味，8 重享受" />
    <img src="../../assets/images/mini-flow/mini-flow-img-9@3x.jpg" alt="香芋冰淇淋，斩铁剑超凉薄荷" />
    <img src="../../assets/images/mini-flow/mini-flow-img-10@3x.jpg" alt="绿豆沙，大西瓜" />
    <img src="../../assets/images/mini-flow/mini-flow-img-11@3x.jpg" alt="烘焙烟草，清凉薄荷" />
    <img src="../../assets/images/mini-flow/mini-flow-img-12@3x.jpg" alt="冰镇可乐，全新包装，一撕即开，全新口味，所见即所得" />
  </div>
  <div class="buy-btn" @click="buy()">立即购买</div>
</div>
</template>

<script>
import Bus from '../../assets/bus';

export default {
  layout: 'common',
  data() {
    return {
      shopLink: {
        jd: 'https://item.m.jd.com/product/50859298422.html?sceneval=2',
        tmall: 'https://detail.m.tmall.com/item.htm?id=596627570708&spm=a2141.7631565.banner_21899561574.1',
        youzan: 'https://shop42452657.youzan.com/v2/goods/3epdb5p28amix'
      }
    }
  },
  head () {
    return {
      title: '减害安全 - FLOW 福禄'
    }
  },
  created () {
  },
  mounted () {
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
.mini-flow-wrap .mini-flow-list {
  font-size: 0;
  img {
    width: 100%;
  }
}

.mini-flow-wrap .mini-flow-list .mini-flow-banner {
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
