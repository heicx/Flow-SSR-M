<template>
<div class="official-wrap">
  <div class="official-list">
    <img src="../../assets/images/official/official-img-1@3x.png"  />
  </div>
</div>
</template>

<script>
import Bus from '../../assets/bus';

export default {
  layout: 'common',
  head () {
    return {
      title: '线下购买说明 - FLOW 福禄'
    }
  },
  mounted() {
    Bus.$emit('showTips', true);
  },
}
</script>

<style lang="scss" scoped>
.official-wrap .official-list {
  font-size: 0;
  img {
    width: 100%;
    padding-top: 5rem;
    margin-top: -1px;
  }
}
</style>
