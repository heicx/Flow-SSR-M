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
  <ul class="activity-list">
    <li v-for="(item, index) of activityList" :key="index">
      <div class="activity-banner">
        <img :src="item.headImageUrl" />
      </div>
      <div class="activity-content">
        <h3 class="activity-title" :class="{'active': item.pushTop}" v-if="item.name">{{item.name}}</h3>
        <div class="activity-info">
          <h5 class="date" v-if="item.dateInfo">{{item.dateInfo}}</h5>
          <h5 class="time" v-if="item.timeInfo">{{item.timeInfo}}</h5>
          <h5 class="address" v-if="item.address">{{item.address}}</h5>
        </div>
        <h5 class="activity-desc">
          {{item.description}}
        </h5>
      </div>
      <router-link class="btn-detail" :to="`/cn/activity/recent/${item.id}`" tag="div">查看详情</router-link>
    </li>
  </ul>
  <div class="activity-empty" v-if="!activityList.length">
    即将开始
  </div>
</div>
</template>

<script>
import Bus from '@/assets/bus'
import Request from '@/core/request'

const handlerActivityList = (list) => {
  return list.map(item => {
    if (item.dateInfo) {
      item.dateInfo = item.dateInfo.replace('-', '~');
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
  created() {
    Bus.$emit('showTips', false);
  },
  head() {
    return {
      title: '近期活动 - FLOW 福禄'
    }
  },
  destroyed() {
    // Bus.$emit('showTips', true);
  },
}
</script>

<style src='assets/style/scss/common.scss' lang='scss'></style>
<style lang="scss" scoped>
.activity-wrap {
  width: 100%;
  margin: 0 auto;
  max-width: 540px;
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

.activity-wrap .activity-list {
  margin: 0 0.6rem 0.6rem;
  padding-top: 5.35rem;
  min-height: 30rem;
  li {
    background: #1a1a1a;
    border-radius: 20px;
    margin-bottom: 0.6rem;
    color: #fff;
    .btn-detail {
      font-size: 0.8rem;
      color: #fff;
      text-align: center;
      background-color: #5e65f0;
      height: 2.25rem;
      line-height: 2.25rem;
      border-radius: 0 0 18px 18px;
    }
  }
  img {
    width: 100%;
    border-radius: 18px 18px 0 0;
  }
}

.activity-content {
  margin: 1rem 0.63rem;
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
}

.activity-empty {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
}
</style>
