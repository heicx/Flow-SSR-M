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
    <ul class="footer">
      <li>
        <h3>
          商务合作邮箱：
          <a href="mailto:bd@flowclub.com">bd@flowclub.com</a>
        </h3>
        <h3>
          客服电话：
          <a href="tel:400-086-3666">400-086-3666</a>
        </h3>
      </li>
      <li>
        <h3>北京羽衣科技有限公司</h3>
        <h3>地址：北京市朝阳区阜通大街 1 号院 6 号楼</h3>
      </li>
      <li>
        <h3>Copyright © 2019, Beijing Yuyi Technology Co., Ltd.</h3>
        <h3>All Rights Reserved.</h3>
        <h3>京 ICP 备 19005651 号 - 1</h3>
        <h3>京公网安备 11010502037227 号</h3>
      </li>
    </ul>
    <img src="../../assets/images/home/home-img-12@3x.png" />
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
  img {
    width: 100%;
    &:last-child {
      margin-top: -1px;
    }
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

.footer {
  background: #1a1a1a;
  padding: 2.5rem 0;
  li {
    margin-bottom: 1.25rem;
    text-align: center;
    h3, a {
      color: #fff;
    }
    h3 {
      font-size: .6rem;
      line-height: 1.6;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}
.home-wrap .home-list .home-banner {
  padding-top: 5rem;
}
</style>
