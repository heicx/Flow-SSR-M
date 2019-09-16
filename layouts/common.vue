<template>
  <div id="app" class="app-wrap" :class="{'cover': isVisible}">
    <app-header></app-header>
    <shop-modal v-if="isVisible" :shopLink="shopLink"></shop-modal>
    <nuxt />
	</div>
</template>

<script>
import appHeader from '../components/header.vue';
import shopModal from '../components/shopModal.vue';
import Bus from '../assets/bus';

export default {
  data() {
    return {
      shopLink: {},
      isVisible: false
    }
  },
  computed: {
  },
  created() {
    Bus.$on('openModal', (status, links) => {
      links && (this.shopLink = links);
      this.isVisible = status;
    })
  },
  methods: {
  },
  components: {
    appHeader,
    shopModal
  },
}
</script>

<style src='../assets/style/scss/common.scss' lang='scss'></style>
<style lang='scss' scoped>
.app-wrap {
  width: 100%;
  margin: 0 auto;
  max-width: 540px;
  &.cover:after {
    position: fixed;
    content: '';
    height: 100%;
    width: 100%;
    top: 0;
    z-index: 40;
    background-color: #000;
    opacity: .65;
  }
}
</style>
