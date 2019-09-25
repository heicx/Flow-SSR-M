<template>
  <div class="loading-wrap" v-if="showLoading">
    <img src="../assets/images/common/loading.png" />
  </div>
</template>

<script>
import Bus from '../assets/bus'

export default {
  data() {
    return {}
  },
  props: {
    showLoading: {
      type: Boolean,
      default: false
    }
  },
  computed: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.loading-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background: #000;
  opacity: 0.65;
  z-index: 60;
  img {
    position: absolute;
    width: 2.5rem;
    height: 2.5rem;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>

