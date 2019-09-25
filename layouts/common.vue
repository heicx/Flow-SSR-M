<template>
  <div id="app" class="app-wrap" :class="{'cover': isVisible}">
    <app-header>
      <template v-slot:header-tips v-if="showTips">
        <div class="tips"></div>
      </template>
    </app-header>
    <shop-modal v-if="isVisible" :shopLink="shopLink"></shop-modal>
    <nuxt />
    <app-footer></app-footer>
	</div>
</template>

<script>
import appHeader from '../components/header.vue';
import appFooter from '../components/footer.vue';
import shopModal from '../components/shopModal.vue';
import Bus from '../assets/bus';

export default {
  data() {
    return {
      showTips: false,
      shopLink: {},
      isVisible: false
    }
  },
  computed: {
  },
  created() {
    Bus.$on('showTips', status => {
      this.showTips = status;
    });

    Bus.$on('openModal', (status, links) => {
      links && (this.shopLink = links);
      this.isVisible = status;
    })
  },
  methods: {
  },
  components: {
    appHeader,
    appFooter,
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
