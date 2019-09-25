<template>
  <div class="footer-wrap">
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
      <li class="integrity">
        <a href="https://credit.cecc-cx.com/credit/verifyseal.php?sn=2008070300100000031&ct=df&pa=294096" target="_blank">
          <img src="../assets/images/footer/integrity@3x.png" alt="诚信认证">
        </a>
      </li>
    </ul>
    <div class="footer-logo">
      <img :class="{'bottom': hasBottom}" src="../assets/images/footer/footer-img-12@3x.png" />
    </div>
  </div>
</template>

<script>
import Bus from '../assets/bus';

export default {
  data() {
    return {
      hasBottom: false
    }
  },
  created () {
    Bus.$on('fixBottom', status => {
      this.hasBottom = status;
    });
  },
  mounted() {},
  methods: {},
  components: {}
}
</script>

<style lang="scss" scoped>
.footer {
  margin-top: -.05rem;
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
    &.integrity img {
      width: 4rem;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}
.footer-wrap .footer-logo {
  img {
    width: 100%;
    &.bottom {
      padding-bottom: 2.2rem;
    }
    &:last-child {
      margin-top: -1px;
    }
  }
}
</style>
