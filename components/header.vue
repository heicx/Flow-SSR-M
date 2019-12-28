<template>
	<div class="header-topbar-wrap">
		<header class="topbar">
      <router-link class="logo" to="/cn" tag="span"></router-link>
      <i 
        class="menu-btn"
        @click="changeMenu()"
      >
      </i>
      <!-- <div class="buy-btn" @click="openShopModal()">商城</div> -->
		</header>
    <ul
      class="menu-list"
      :class="{'active': showMenu}"
    >
      <li
        v-for="(item, index) in list"
        :key="index"
        :class='{"curr-on": item.alias.path.indexOf($route.name) > -1 }'
      >
        <div
          class="item-name"
          v-if="!item.alias.subItems"
          @click="changeMenu(item.alias.subItems, item.link)"
        >
          {{item.name}}
        </div>
        <div v-else>
          <div
            class="item-name sub-items"
            :class="{'active': item.alias.path.indexOf(subItemPath) > -1}"
            @click="changeSubMenu(item.alias.subItems)"
          >
            {{item.name}}
          </div>
          <ul
            class="sub-item-list"
            :class="{'active': item.alias.path.indexOf(subItemPath) > -1}"
          >
            <li
              v-for="(subItem, index) in item.alias.subItems"
              :key="index"
              class="sub-item-name"
              :class='
                  {
                    "curr-on": subItem.path === $route.name,
                    "mini-flow": subItem.path === "cn-mini-flow",
                    "flow": ["cn-flow", "cn-flow-s"].indexOf(subItem.path) > -1,
                    "flow-pod": subItem.path === "cn-flow-pod",
                  }
                '
              @click="changeMenu(false, subItem.link)"
            >
              {{subItem.name}}
            </li>

            <li 
              v-if="item.eName === 'entityshop'" @click="openLink('https://www.wjx.cn/jq/53047966.aspx')"
              class="sub-item-name"
            >
              贩卖机申请
            </li>
          </ul>
        </div>
      </li>
    </ul>
    <!-- <div class="tips" v-if="showTips"></div> -->
    <slot name='header-tips'></slot>
	</div>
</template>

<script>
import Bus from '../assets/bus';

export default {
	data() {
		return {
      showTips: {
        type: Boolean,
        default: false
      },
      subItemPath: '',
      showMenu: false,
			list: [
				{
					name: '首页',
					alias: {
            path: 'cn',
          },
					link: '/cn'
				},
				{
					name: '产品',
					alias: {
            path: ['cn-mini-flow', 'cn-flow-s', 'cn-flow', 'cn-flow-pod'],
            subItems: [
              {
                name: '小彩蛋（一次性电子烟）',
                link: '/cn/mini-flow',
                path: 'cn-mini-flow',
              },
              {
                name: '换弹电子烟 S',
                link: '/cn/flow-s',
                path: 'cn-flow-s',
              },
              {
                name: '换弹电子烟',
                link: '/cn/flow',
                path: 'cn-flow',
              },
              {
                name: '多口味烟弹',
                link: '/cn/flow-pod',
                path: 'cn-flow-pod',
              },
            ],
          },
        },
        // {
				// 	name: '线下活动',
				// 	alias: {
        //     path: 'cn-activity',
        //   },
        //   link: '/cn/activity/recent'
				// },
        {
					name: '招商加盟',
          eName: 'entityshop',
					alias: {
            path: ['cn-investment', 'cn-entityshop'],
            subItems: [
              {
                name: '经销商合作',
                link: '/cn/investment',
                path: 'cn-investment',
              },
              {
                name: '专卖店加盟',
                link: '/cn/entityshop',
                path: 'cn-entityshop',
              },
            ],
          },
        },
        {
					name: '减害安全',
					alias: {
            path: 'cn-effect',
          },
          link: '/cn/effect'
				},
      ],
      shopLink: {
        jd: 'https://shop.m.jd.com/?shopId=962476',
        tmall: 'https://flow.m.tmall.com/?spm=a220m.6910245.0.0.919c5383gNEzVt&user_id=2201417466758',
        youzan: 'https://shop42452657.youzan.com/wscshop/showcase/homepage?kdt_id=42260489'
      }
		}
  },
  created () {
  },
  methods: {
    openLink: function (link) {
      window.open(link, '_blank');
      this.showMenu = !this.showMenu;
    },
    changeSubMenu: function(items) {
      const path = items[0].path;
      
      if (path !== this.subItemPath) {
        this.subItemPath = items[0].path;
      } else {
        this.subItemPath = '';
      }
    },
    changeMenu: function(items, link) {
      this.subItemPath = '';

      if (!items) {
        this.showMenu = !this.showMenu;
      }

      if (link !== '') {
        this.$router.push({ path: link });
      }
    },
    openShopModal () {
      Bus.$emit('openModal', true, this.shopLink);
    },
  }
}
</script>

<style lang="scss" scoped>
.header-topbar-wrap {
  position: fixed;
  width: 100%;
  max-width: 540px;
  z-index: 30;
}

.tips {
  position: relative;
  width: 100%;
  height: 2.5rem;
  background-image: url(~assets/images/header/tips@3x.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: 20;
}

.topbar {
  position: relative;
  width: 100%;
  height: 2.5rem;
  background: #1a1a1a;
  z-index: 30;
  .logo {
    position: absolute;
    content: '';
    width: 5.2rem;
    height: .8rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: url(~assets/images/header/header-logo@3x.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  .menu-btn {
    position: absolute;
    content: '';
    width: 1.1rem;
    height: .85rem;
    top: 50%;
    left: .6rem;
    transform: translate(0, -50%);
    background-image: url(~assets/images/header/header-menu-icon@3x.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  .buy-btn {
    position: absolute;
    content: '';
    width: 2.65rem;
    height: 1.5rem;
    line-height: 1.5rem;
    font-size: .7rem;
    text-align: center;
    border-radius: 4px;
    top: 50%;
    right: .6rem;
    transform: translateY(-50%);
    background-color: #5e65f0;
    color: #fff;
  }
}

.menu-list {
  position: absolute;
  width: 100%;
  transition: all .35s ease-in-out;
  transform: translate3d(0, -380px, 0);
  text-align: center;
  background: #1a1a1a;
  color: #fff;
  font-size: .6rem;
  z-index: 25;
  &.active {
    transform: translate3d(0, 0, 0);
  }
  >li {
    margin-left: .67rem;
    text-align: left;
    &:last-child .item-name {
      border-bottom: none;
    }
    &.curr-on .item-name {
      font-weight: bold;
    }
  }
  .item-name, .sub-item-name {
    position: relative;
    color: #fff;
    height: 2.3rem;
    line-height: 2.3rem;
    border-bottom: 1px solid #464646;
    &.mini-flow, &.flow-s, &.flow, &.flow-pod {
      padding-left: 1.5rem;
    }
    &.mini-flow:before {
      position: absolute;
      content: '';
      left: .75rem;
      top: 50%;
      transform: translateY(-50%);
      width: 0.25rem;
      height: 0.77rem;
      background: url(~assets/images/header/mini-flow-icon@3x.png) center no-repeat;
      background-size: contain;
    }
    &.flow:before {
      position: absolute;
      content: '';
      left: .75rem;
      top: 50%;
      transform: translateY(-50%);
      width: 0.17rem;
      height: 0.92rem;
      background: url(~assets/images/header/flow-icon@3x.png) center no-repeat;
      background-size: contain;
    }
    &.flow-pod:before {
      position: absolute;
      content: '';
      left: .75rem;
      top: 50%;
      transform: translateY(-50%);
      width: 0.3rem;
      height: 0.78rem;
      background: url(~assets/images/header/flow-pod-icon@3x.png) center no-repeat;
      background-size: contain;
    }
  }

  .item-name {
    &.sub-items:after {
      position: absolute;
      content: '';
      width: .24rem;
      height: .24rem;
      top: 50%;
      transform: translate(0, -50%) rotate(0deg);
      margin-left: .25rem;
      background: url(~assets/images/header/arrow@3x.png) center no-repeat;
      background-size: 100%;
    }
    &.sub-items.active {
      &:after {
        transform: translate(0, -50%) rotate(90deg);
      }
    }
  }

  .sub-item-list {
    height: 0px;
    opacity: 0;
    border-bottom: 1px solid #464646;
    >li {
      width: 100%;
      &:last-child {
        border-bottom: none;
      }
      &.curr-on {
        font-weight: bold;
      }
    }
    &.active {
      height: 100%;
      opacity: 1;
    }
  }
}
</style>
