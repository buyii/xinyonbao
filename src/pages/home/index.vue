<script setup lang="ts">
import type { ComponentPublicInstance } from 'vue'
import MyPopup from './component/MyPopup.vue'
import type { Item, ProductItem } from '@/types/common'
import { useLayoutStore } from '@/stores'

const layoutStore = useLayoutStore()

const itemList: Item[] = [
  {
    id: 1,
    name: '价格',
    icon: 'icon-sort',
  },
  {
    id: 2,
    name: '佣金率',
    icon: 'icon-sort',
  },
  {
    id: 3,
    name: '佣金额',
    icon: 'icon-sort',
  },
  {
    id: 4,
    name: '总销量',
    icon: 'icon-sort',
  },
]

const itemList1: Item[] = [
  {
    id: 1,
    name: '全部',
    icon: 'icon-sort',
  },
  {
    id: 2,
    name: '食品饮料',
    icon: 'icon-sort',
  },
  {
    id: 3,
    name: '日用家居',
    icon: 'icon-sort',
  },
  {
    id: 4,
    name: '家庭清洁',
    icon: 'icon-sort',
  },
  {
    id: 5,
    name: '美妆护肤',
    icon: 'icon-sort',
  },
]

const productList: ProductItem[] = [
  {
    id: 1,
    introduce: '价格',
    frontCover: 'icon-sort',
    price: 0,
    kickback: 1,
    kickbackRate: 2,
    kickbackRate1: 2,
    subsidyRate: 2,
    subsidy: 3,
  },
  {
    id: 2,
    introduce: '价格',
    frontCover: 'icon-sort',
    price: 0,
    kickback: 1,
    kickbackRate: 2,
    kickbackRate1: 2,
    subsidyRate: 2,
    subsidy: 3,
  },
  {
    id: 3,
    introduce: '价格',
    frontCover: 'icon-sort',
    price: 0,
    kickback: 1,
    kickbackRate: 2,
    kickbackRate1: 2,
    subsidyRate: 2,
    subsidy: 3,
  },
  {
    id: 4,
    introduce: '价格',
    frontCover: 'icon-sort',
    price: 0,
    kickback: 1,
    kickbackRate: 2,
    kickbackRate1: 2,
    subsidyRate: 2,
    subsidy: 3,
  },
  {
    id: 5,
    introduce: '价格',
    frontCover: 'icon-sort',
    price: 0,
    kickback: 1,
    kickbackRate: 2,
    kickbackRate1: 2,
    subsidyRate: 2,
    subsidy: 3,
  },
  {
    id: 6,
    introduce: '价格',
    frontCover: 'icon-sort',
    price: 0,
    kickback: 1,
    kickbackRate: 2,
    kickbackRate1: 2,
    subsidyRate: 2,
    subsidy: 3,
  },
  {
    id: 7,
    introduce: '价格',
    frontCover: 'icon-sort',
    price: 0,
    kickback: 1,
    kickbackRate: 2,
    kickbackRate1: 2,
    subsidyRate: 2,
    subsidy: 3,
  },
]

const modelValue = ref(1)

const translateY = ref(0) // 图片的初始高度
const bgheight = ref(405) // 背景的初始高度
const startY = ref(0) // 手指触摸的起始位置
const deltaY = ref(0) // 手指滑动的距离
const isFolded = ref(false) // 图片是否收起
const isDragging = ref(false) // 是否正在滑动

const popupRef = ref<ComponentPublicInstance<{ open: () => void }> | null>(null)

function showPopup() {
  popupRef.value?.open()
}

function closePopup() {
}

// 触摸开始
function onTouchStart(event: TouchEvent) {
  deltaY.value = 0
  startY.value = event.touches[0].clientY // 记录触摸起始位置
  isDragging.value = true
}

// 触摸移动
function onTouchMove(event: TouchEvent) {
  if (!isDragging.value)
    return
  deltaY.value = event.touches[0].clientY - startY.value // 计算滑动距离
  if (isFolded.value) {
    // 如果图片已经收起，则不允许向上滑动
    if (deltaY.value < 0)
      return
  }
  else {
    // 如果图片没有收起，则不允许向下滑动
    if (deltaY.value > 0)
      return
  }
  if (deltaY.value > 0) {
    // 动态调整图片位移，最小为 -320px
    translateY.value = Math.max(-405, Math.min(0, -deltaY.value))
    bgheight.value = 210 + Math.min(195, Math.max(0, deltaY.value))
  }
  else {
    // 动态调整图片位移，最小为 -320px
    translateY.value = Math.max(-405, Math.min(0, deltaY.value))
    bgheight.value = 405 - Math.min(195, Math.max(0, -deltaY.value))
  }
}

// 触摸结束
function onTouchEnd() {
  isDragging.value = false
  if (isFolded.value) {
    // 如果滑动距离超过 50px，则恢复图片高度
    if (Math.abs(deltaY.value) > 50 && deltaY.value > 0) {
      translateY.value = 0 // 展开图片
      bgheight.value = 405
      isFolded.value = false
    }
    else {
      translateY.value = -405 // 收起图片
      bgheight.value = 210
      isFolded.value = true
    }
  }
  else {
    // 如果滑动距离超过 50px， 则收起图片
    if (Math.abs(deltaY.value) > 50 && deltaY.value < 0) {
      translateY.value = -405 // 收起图片
      bgheight.value = 210
      isFolded.value = true
    }
    else {
      translateY.value = 0 // 展开图片
      bgheight.value = 405
      isFolded.value = false
    }
  }
}

function changeTab(value: number) {
  console.log(value, 'value')
}

const themeVarscom = computed(() => {
  if (isFolded.value) {
    return {
      navbarColor: '#000',
      navbarBackground: 'transparent',
    }
  }
  else {
    return {
      navbarColor: '#fff',
      navbarBackground: 'transparent',
    }
  }
})
const statusBarHeight = computed(() => {
  const systemInfo = uni.getSystemInfoSync()
  return systemInfo.statusBarHeight
})

onPageScroll((e) => {
  const scrollTop = e.scrollTop
  if (scrollTop > 185) {
    layoutStore.setLayoutStore({ navbarTColor: '#000000' })
  }
  else {
    layoutStore.setLayoutStore({ navbarTColor: '#ffffff' })
  }
})
</script>

<template>
  <wd-config-provider :theme-vars="themeVarscom">
    <view
      class="banner-worp"
      :style="{ height: `${bgheight}px`, transition: 'all 0.3s ease' }"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
    >
      <wd-navbar title="选品广场" safe-area-inset-top :placeholder="false" fixed :bordered="false" />
      <view class="search-box" :style="{ top: `${(statusBarHeight || 0) + 49}px` }">
        <wd-search hide-cancel custom-input-class="inputClass" placeholder-class="placeholderClass" placeholder="请搜索" />
      </view>
      <img class="img-banner" src="../../static/banner.png" alt="" :style="{ top: `${translateY}px`, transition: 'all 0.3s ease' }">
      <view class="content-warp" :class="isFolded ? 'content-sticky' : ''">
        <view class="stibg">
          <view v-if="isFolded">
            <Tabs v-model="modelValue" :item-list="itemList1" @change-tab="changeTab" />
          </view>
          <view v-else class="zbpximg">
            <img src="../../static/svg/zhpx.svg" style="width: 70px; height: 16px;">
          </view>
          <CardTabs :item-list="itemList">
            <span class="tabiconright iconfont icon-filter" @click="showPopup" />
          </CardTabs>
        </view>
      </view>
    </view>
    <scroll-view :style="{ top: `${bgheight}px` }" class="scroll-Y" :scroll-y="true">
      <view class="card-warp">
        <ProductCard :product-list="productList" />
      </view>
    </scroll-view>
    <MyPopup ref="popupRef" @close="closePopup" />
  </wd-config-provider>
</template>

<style lang="scss" scoped>
.banner-worp {
  position: relative;
  min-height: 210px;
  background: linear-gradient( 180deg, rgba(255,36,87,0.1) 0%, rgba(248,248,248,0) 100%);
  .img-banner{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 0;
  }
  image {
    width: 100%;
    height: 320px;
    transition: all 0.3s ease; /* 添加平滑过渡效果 */
  }
}
.search-box{
  position: fixed;
  left: 0;
  right: 0;
  padding: 0 20px;
  z-index: 5;
  :deep(.wd-search){
    background: transparent;
    padding: 0px !important;
    .inputClass{
      background: rgba(255,255,255,0);
    }
    .wd-search__block{
      height: 40px;
      border-radius: 20px;
      background: rgba(255,255,255,0.85);
      .wd-search__field,.wd-search__cover{
        background: transparent;
      }
    }
    .wd-icon-search{
      position: absolute;
      left: 10px;
      color: #000000;
      font-weight: 400;
      font-size: 14px;
    }
    .placeholderClass{
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 14px;
      color: #999999;
      line-height: 14px;
      font-style: normal;
    }
  }
}
.content-sticky{
  position: fixed;
  top: 131px;
  width: 100vw;
}
.content-warp{
  padding-top: 13px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  .stibg{
    padding-left: 13px;
    padding-right: 13px;
  }
  .zbpximg{
    padding-bottom: 12px;
  }
  .tabiconright{
    color: #FF0057;
    font-size: 18px;
  }
}
.card-warp{
  padding-left: 13px;
  padding-right: 13px;
}
.scroll-Y{
  transition: all 0.3s ease; /* 添加平滑过渡效果 */
  position: absolute;
  bottom: calc(60px + env(safe-area-inset-bottom));
}
</style>

<route type="home" lang="json">
{
  "layout": "tabbar",
  "name": "home",
  "style": {
    "navigationBarTitleText": "选品广场"
  }
}
</route>
