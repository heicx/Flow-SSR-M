<template>
<div class="flow-pod-wrap">
  <div class="flow-pod-list">
    <img class="flow-pod-banner" src="../../assets/images/flow-pod/flow-pod-img-1@3x.jpg" alt="FLOW 福禄 多口味烟弹" />
    <img src="../../assets/images/flow-pod/flow-pod-img-2@3x.jpg" alt="从前，你永远不知道下一口电子烟会不会抽出一嘴油，于是，我们再烟弹中加入了四重防漏结构设计" />
    <img src="../../assets/images/flow-pod/flow-pod-img-3@3x.jpg" alt="白桃乌龙茶" />
    <img src="../../assets/images/flow-pod/flow-pod-img-4@3x.jpg" alt="香芋冰淇淋" />
    <img src="../../assets/images/flow-pod/flow-pod-img-5@3x.jpg" alt="斩铁剑" />
    <img src="../../assets/images/flow-pod/flow-pod-img-6@3x.jpg" alt="烘焙烟草" />
    <img src="../../assets/images/flow-pod/flow-pod-img-7@3x.jpg" alt="清凉薄荷" />
    <img src="../../assets/images/flow-pod/flow-pod-img-8@3x.jpg" alt="拼盘水果" />
    <img src="../../assets/images/flow-pod/flow-pod-img-9@3x.jpg" alt="绿豆沙" />
    <img src="../../assets/images/flow-pod/flow-pod-img-10@3x.jpg" alt="抹茶" />
    <img src="../../assets/images/flow-pod/flow-pod-img-11@3x.jpg" alt="助眠洋甘菊" />
    <img src="../../assets/images/flow-pod/flow-pod-img-12@3x.jpg" alt="坚果烟草" />
    <img src="../../assets/images/flow-pod/flow-pod-img-13@3x.jpg" alt="FLOW 福禄 安全性说明" />
    <img src="../../assets/images/flow-pod/flow-pod-img-14@3x.jpg" alt="未成年人禁用提醒" />
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
        jd: 'https://item.m.jd.com/product/46945441308.html?sceneval=2',
        tmall: 'https://detail.m.tmall.com/item.htm?id=598023226078&spm=a2141.7631565.banner_21899561574.2',
        youzan: 'https://shop42452657.youzan.com/v2/goods/3nmwjsj5apwrt'
      }
    }
  },
  head () {
    return {
      title: 'FLOW 福禄 多口味烟弹 - FLOW 福禄'
    }
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
.flow-pod-wrap .flow-pod-list {
  font-size: 0;
  img {
    width: 100%;
  }
}

.flow-pod-wrap .flow-pod-list .flow-pod-banner {
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
