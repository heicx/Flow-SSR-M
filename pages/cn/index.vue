<template>
<div class="home-wrap">
  <div class="home-list">
    <img class="home-banner" src="../../assets/images/home/home-img-2@3x.jpg" alt="FLOW 福禄，一吸入魂，大口福禄" />
    
    <div class="mini-flow">
      <img src="../../assets/images/home/home-img-3@3x.jpg" alt="FLOW 福禄小彩蛋，新一代一次性电子烟" />
      <div class="item-button">
        <router-link to="/cn/mini-flow" tag="div">进一步了解</router-link>
        <!-- <div @click="buy('mini-flow')"></div> -->
      </div>
    </div>
    <div class="flow-s">
      <img src="../../assets/images/home/home-img-4@3x.jpg" alt="FLOW 福禄 换弹电子烟 S，超长续航，一体化金属机身，多种好味道，好抽防水" />
      <div class="item-button">
        <router-link to="/cn/flow-s" tag="div">进一步了解</router-link>
        <!-- <div @click="buy('flow-s')"></div> -->
      </div>
    </div>
    <div class="flow">
      <img src="../../assets/images/home/home-img-5@3x.jpg" alt="FLOW 福禄 换弹电子烟" />
      <div class="item-button">
        <router-link to="/cn/flow" tag="div">进一步了解</router-link>
        <!-- <div @click="buy('flow')"></div> -->
      </div>
    </div>
    <div class="flow-pod">
      <img src="../../assets/images/home/home-img-6@3x.jpg" alt="FLOW 福禄 多口味烟弹" />
      <div class="item-button">
        <router-link to="/cn/flow-pod" tag="div">进一步了解</router-link>
        <!-- <div @click="buy('flow-pod')"></div> -->
      </div>
    </div>
    <img src="../../assets/images/home/home-img-7@3x.jpg" alt="提神、无烟味、呵护身边人健康" />
    <img src="../../assets/images/home/home-img-8@3x.jpg" alt="无焦油、无留味、呵护家人健康" />
    <img src="../../assets/images/home/home-img-9@3x.jpg" alt="提神、无火、无烟灰" />
    <img src="../../assets/images/home/home-img-10@3x.jpg" alt="放松、无火、防水" />
    <img src="../../assets/images/home/home-img-11@3x.jpg" alt="提神、无火、无残留异味" />
    <img src="../../assets/images/home/home-img-12@3x.png" alt="未成年人购买提醒" />
  </div>
</div>
</template>

<script>
import Bus from '../../assets/bus';

export default {
  layout: 'common',
  data () {
    return {
      shopLink: {
        'mini-flow': {
          jd: 'https://item.m.jd.com/product/50859298422.html?sceneval=2',
          tmall: 'https://detail.m.tmall.com/item.htm?id=596627570708&spm=a2141.7631565.banner_21899561574.1',
          youzan: 'https://shop42452657.youzan.com/v2/goods/3epdb5p28amix'
        },
        'flow-s': {
          jd: 'https://item.m.jd.com/product/100008068016.html?sceneval=2',
          tmall: 'https://detail.m.tmall.com/item.htm?id=602283944832&spm=a2141.7631565.banner_21899561574.1',
          youzan: 'https://shop42452657.youzan.com/v2/showcase/goods?alias=2ompse0rdtg7d&banner_id=f.79556578~image_ad.4~1~sVpWi6OU&index=0&reft=1568863732444&spm=f.79556578'
        },
        'flow': {
          jd: 'https://item.m.jd.com/product/46941161551.html?sceneval=2',
          tmall: 'https://detail.m.tmall.com/item.htm?id=595809481459&spm=a2141.7631565.banner_21899561574.0',
          youzan: 'https://shop42452657.youzan.com/v2/goods/361p67jx1rjih'
        },
        'flow-pod': {
          jd: 'https://item.m.jd.com/product/46945441308.html?sceneval=2',
          tmall: 'https://detail.m.tmall.com/item.htm?id=598023226078&spm=a2141.7631565.banner_21899561574.2',
          youzan: 'https://shop42452657.youzan.com/v2/goods/3nmwjsj5apwrt'
        },
      }
    }
  },
  head () {
    return {
      title: 'FLOW 福禄 电子雾化烟 - FLOW 福禄'
    }
  },
  created () {
    Bus.$emit('showTips', true);
  },
  methods: {
    buy (key) {
      Bus.$emit('openModal', true, this.shopLink[key]);
    }
  },
}
</script>

<style lang="scss" scoped>
.home-wrap .home-list {
  font-size: 0;
  .home-banner {
    margin-top: 5rem;
  }
  img {
    width: 100%;
  }
  .mini-flow, .flow-s, .flow, .flow-pod {
    position: relative;
  }
  .item-button {
      position: absolute;
      bottom: 8%;
      width: 9rem;
      height: 2.8rem;
      background: #5f69ef;
      transform: translateX(-50%);
      left: 50%;
      border-radius: 12px;
      div {
        font-size: 18px;
        color: #fff;
        font-weight: bold;
        line-height: 2.8rem;
        text-align: center;
        width: 100%;
        height: 100%;
      }
    }
}
</style>
