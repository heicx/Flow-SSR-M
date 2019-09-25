<template>
<div class="activity-wrap">
  <ul class="activity-header">
    <router-link
      v-for="(item, key) of headerItems"
      :key="key"
      :class="[item.key, {'active': item.key === headerActionItem}]"
      :to="item.path"
      tag="li"
    >
      {{item.name}}
    </router-link>
  </ul>
  <div class="activity-detail">
    <div class="activity-banner" v-if="activityItem.headImageUrl">
      <img :src="activityItem.headImageUrl" />
    </div>
    <div class="activity-content">
      <h3 class="activity-title" :class="{'active': activityItem.pushTop}" v-if="activityItem.name">{{activityItem.name}}</h3>
      <div class="activity-info">
        <h5 class="date" v-if="activityItem.dateInfo">{{activityItem.dateInfo}}</h5>
        <h5 class="time" v-if="activityItem.timeInfo">{{activityItem.timeInfo}}</h5>
        <h5 class="address" v-if="activityItem.address">{{activityItem.address}}</h5>
      </div>
      <h5
        class="activity-desc"
        v-if="activityItem.description"
      >
        {{activityItem.description}}
      </h5>
      <ul class="activity-imgs">
        <li
          v-for="(imgUrl, index) of activityItem.mobileImageUrls"
          :key="index"
        >
          <img :src="imgUrl" alt="">
        </li>
      </ul>
    </div>
  </div>
  <div class="activity-empty" v-if="!activityItem.id">
    暂无数据
  </div>
</div>
</template>

<script>
import Bus from 'assets/bus'
import Request from '@/core/request'

const handlerActivityList = (list) => {
  return list.map(item => {
    if (item.dateInfo) {
      item.dateInfo = item.dateInfo.replace('-', ' ~ ');
    }

    if (item.timeInfo) {
      item.timeInfo = item.timeInfo.replace('-', ' ~ ');
    }

    return item;
  })
}

const actionItem = 'activity-recent'

export default {
  layout: 'common',
  data() {
    return {
      headerActionItem: 'activity-recent',
      headerItems: [
        {
          key: 'activity-recent',
          name: '近期活动',
          path: '/cn/activity/recent'
        },
        {
          key: 'activity-review',
          name: '往期回顾',
          path: '/cn/activity/review'
        }
      ]
    }
  },
  asyncData() {
    return Request.get(actionItem).then(oRes => {
      return {
        activityList: handlerActivityList(oRes)
      }
    }).catch(e => {
      return {
        activityList: []
      }
    })
  },
  computed: {
    activityItem () {
      const actId = this.$route.params.id;

      if (this.activityList.length > 0 && actId) {
        const item = this.activityList.find(ele => {
          return ele.id == actId;
        });

        return item || {};
      } else {
        return {}
      }
    }
  },
  created() {
    Bus.$emit('showTips', false);
  },
  head() {
    return {
      title: `${this.activityItem.name || '活动详情'} - FLOW 福禄`
    }
  },
  destroyed() {
  },
}
</script>

<style src='assets/style/scss/common.scss' lang='scss'></style>
<style lang="scss" scoped>
.activity-wrap {
  background: #1a1a1a;
}

.activity-header {
  color: #767676;
  font-size: 0.65rem;
  height: 2.25rem;
  line-height: 2.25rem;
  background-color: #1a1a1a;
  position: fixed;
  top: 2.5rem;
  width: 100%;
  max-width: 540px;
  z-index: 20;
  li {
    float: left;
    margin-right: 1.1rem;
    &:first-child {
      margin-left: .6rem;
    }
    &.active {
      color: #fff;
      font-weight: bold;
    }
  }
}
.activity-wrap .activity-detail {
  margin: 0 0.6rem 0;
  padding-top: 5.35rem;
  min-height: 30rem;
  color: #fff;
  img {
    width: 100%;
  }
}

.activity-content {
  margin: 1rem 0.63rem 0;
  padding-bottom: 1.15rem;
  .activity-title {
    position: relative;
    font-size: 0.8rem;
    margin-bottom: 1rem;
    line-height: 1;
    &.active::after {
      position: absolute;
      content: '';
      width: 1.66rem;
      height: 1rem;
      top: -0.1rem;
      right: 0;
      background-repeat: no-repeat;
      background-position: 0 0;
      background-size: cover;
      background-image: url(~assets/images/common/pushtop@3x.png);
    }
  }
  .activity-info {
    line-height: 1;
    h5 {
      position: relative;
      padding-left: 1.13rem;
      margin-bottom: 0.4rem;
      font-size: 0.65rem;
    }
    .date:before {
      position: absolute;
      content: '';
      width: 0.65rem;
      height: 0.55rem;
      top: 0.06rem;
      left: 0;
      background-repeat: no-repeat;
      background-position: 0 0;
      background-size: cover;
      background-image: url(~assets/images/common/activity-icons@3x.png);
    }
    .time:before {
      position: absolute;
      content: '';
      width: 0.63rem;
      height: 0.63rem;
      left: 0;
      top: -0.05rem;
      background-repeat: no-repeat;
      background-position: 0 -0.82rem;
      background-size: cover;
      background-image: url(~assets/images/common/activity-icons@3x.png);
    }
    .address:before {
      position: absolute;
      content: '';
      width: 0.55rem;
      height: 0.68rem;
      top: 0.02rem;
      left: 0;
      background-repeat: no-repeat;
      background-position: 0 -1.63rem;
      background-size: cover;
      background-image: url(~assets/images/common/activity-icons@3x.png);
    }
  }

  .activity-desc {
    position: relative;
    margin-top: 1.15rem;
    padding-left: 1.13rem;
    font-size: 0.65rem;
    line-height: 1.4;
    color: #767676;
    &:before {
      position: absolute;
      content: '';
      width: 0.58rem;
      height: 0.58rem;
      top: 0.12rem;
      left: 0;
      background-repeat: no-repeat;
      background-position: 0 -2.55rem;
      background-size: cover;
      background-image: url(~assets/images/common/activity-icons@3x.png);
    }
  }

  .activity-imgs {
    width: 100%;
    margin-top: 1.15rem;
    li {
      font-size: 0;
      margin-top: -.05rem;
    }
  }
}

.activity-empty {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  color: #fff;
}
</style>
