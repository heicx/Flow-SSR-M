<template>
  <div class="shop-modal-wrap">
    <div class="close-btn" @click="closeModel()"></div>
    <div
      class="shop-modal-item"
      v-for="(item, index) in list"
      :key="index"
      :class="{
          'jd': item.type === 'jd',
          'tmall': item.type === 'tmall',
          'youzan': item.type === 'youzan',
        }"
      @click="navigateTo(item.type)"
    >
      {{item.name}}
    </div>
  </div>
</template>

<script>
import Bus from '../assets/bus';

export default {
  data() {
    return {
      list: [
        {
          type: 'jd',
          name: '京东旗舰店',
        },
        {
          type: 'tmall',
          name: '天猫旗舰店'
        },
        {
          type: 'youzan',
          name: '有赞商城'
        }
      ]
    }
  },
  props: {
    shopLink: Object
  },
  computed: {},
  methods: {
    closeModel () {
      Bus.$emit('openModal', false);
    },
    navigateTo (type) {
      window.open(this.shopLink[type], '_blank');
    }
  }
}
</script>

<style lang="scss" scoped>
.shop-modal-wrap {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 85%;
  border-radius: 10px;
  background: #fff;
  z-index: 45;
  .shop-modal-item {
    position: relative;
    height: 3rem;
    line-height: 3rem;
    font-size: .75rem;
    padding-left: 2.1rem;
    border-bottom: 1px solid #e0e0e0;
    text-align: center;
    &:last-child {
      border-bottom: none;
    }
    &.jd:before {
      position: absolute;
      content: '';
      top: 50%;
      transform: translateY(-50%);
      margin-left: -2.1rem;
      width: 1.33rem;
      height: 1.33rem;
      background-image: url(~assets/images/common/jd-icon@3x.png);
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
    &.tmall:before {
      position: absolute;
      content: '';
      top: 50%;
      transform: translateY(-50%);
      margin-left: -2.1rem;
      width: 1.33rem;
      height: 1.33rem;
      background-image: url(~assets/images/common/tmall-icon@3x.png);
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
    &.youzan:before {
      position: absolute;
      content: '';
      top: 50%;
      transform: translateY(-50%);
      margin-left: -2.4rem;
      width: 1.33rem;
      height: 1.33rem;
      background-image: url(~assets/images/common/youzan-icon@3x.png);
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
  }
  .close-btn {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    bottom: -3.15rem;
    width: 1.82rem;
    height: 1.82rem;
    background-image: url(~assets/images/common/modal-close-btn@3x.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: 20;
  }
}
</style>

