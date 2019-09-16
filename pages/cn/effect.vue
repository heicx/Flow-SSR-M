<template>
<div class="effect-wrap">
  <div class="effect-list">
    <img class="effect-banner" src="../../assets/images/effect/effect-img-1@3x.png" alt="简而言之，经过合理的估测表明电子烟对健康的危害比传统香烟低 95%。在戒烟服务机构的帮助下，能够帮助大多数吸烟者完全戒烟。" />
    <img src="../../assets/images/effect/effect-img-2@3x.png" alt="简单、安全的烟油成分" />
    <img src="../../assets/images/effect/effect-img-3@3x.jpg" alt="低温雾化代替高温燃烧，大量减少烟气中的有害物质" />
    <img src="../../assets/images/effect/effect-img-4@3x.jpg" alt="呼出烟雾快速蒸发，消灭有害二手烟" />
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
      title: '减害安全 - FLOW 福禄'
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
.effect-wrap .effect-list {
  font-size: 0;
  img {
    width: 100%;
  }
}

.effect-wrap .effect-list .effect-banner {
  padding-top: 5rem;
  margin-top: -1px;
}
</style>
