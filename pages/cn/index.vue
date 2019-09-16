<template>
<div class="home-wrap">
  <div class="home-list">
    <img class="home-banner" src="../../assets/images/home/home-img-2@3x.jpg" alt="FLOW 福禄，一吸入魂，大口福禄" />
    
    <div class="mini-flow">
      <img src="../../assets/images/home/home-img-3@3x.jpg" alt="FLOW 福禄小彩蛋，新一代一次性电子烟" />
      <div class="item-button">
        <router-link to="/cn/mini-flow"></router-link>
        <a href=""></a>
      </div>
    </div>
    <div class="flow">
      <img src="../../assets/images/home/home-img-4@3x.jpg" alt="FLOW 福禄 换弹电子烟" />
      <div class="item-button">
        <router-link to="/cn/flow"></router-link>
        <a href=""></a>
      </div>
    </div>
    <div class="flow-pod">
      <img src="../../assets/images/home/home-img-5@3x.jpg" alt="FLOW 福禄 多口味烟弹" />
      <div class="item-button">
        <router-link to="/cn/flow-pod"></router-link>
        <a href=""></a>
      </div>
    </div>
    <img src="../../assets/images/home/home-img-6@3x.jpg" alt="提神、无烟味、呵护身边人健康" />
    <img src="../../assets/images/home/home-img-7@3x.jpg" alt="无焦油、无留味、呵护家人健康" />
    <img src="../../assets/images/home/home-img-8@3x.jpg" alt="提神、无火、无烟灰" />
    <img src="../../assets/images/home/home-img-9@3x.jpg" alt="放松、无火、防水" />
    <img src="../../assets/images/home/home-img-10@3x.jpg" alt="提神、无火、无残留异味" />
    <img src="../../assets/images/home/home-img-11@3x.png" alt="未成年人购买提醒" />
  </div>
</div>
</template>

<script>
export default {
  layout: 'common',
  data() {
    return {
    }
  },
  head () {
    return {
      title: 'FLOW 福禄 电子雾化烟 - FLOW 福禄'
    }
  },
  mounted() {
  },
  methods: {
  },
  components: {
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
  .mini-flow, .flow, .flow-pod {
    position: relative;
  }
  .item-button {
      position: absolute;
      bottom: 10.5%;
      width: 90%;
      height: 2.1rem;
      left: 50%;
      transform: translate(-50%);
      a {
        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        height: 2.1rem;
        float: left;
        width: 47%;
        &:last-child {
          float: right;
        }
      }
    }
}
</style>
