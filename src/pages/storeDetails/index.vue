<script setup lang="ts">
import type { ProductItem } from '@/types/common'
import { useLayoutStore } from '@/stores'

const { layoutStore } = useLayoutStore()
const statusBarHeight = computed(() => {
  return layoutStore.statusBarHeight
})

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

const themeVars = reactive({
  colorBg: '#F8F8F8',
  navbarBackground: 'transparent',
  navbarColor: '#ffffff',
})
function handleClickLeft() {
  uni.navigateBack()
}
</script>

<template>
  <wd-config-provider :theme-vars="themeVars" custom-style="height: 100vh;overflow: hidden;">
    <wd-navbar title="店铺详情" safe-area-inset-top left-arrow fixed :bordered="false" @click-left="handleClickLeft" />
    <view class="store-info">
      <view class="store-name" :style="{ paddingTop: `${(statusBarHeight || 0) + 44}px` }">
        <image src="../../static/banner.png" />
        <view class="name-text">
          <view class="text">
            Apple watch 华强北
          </view>
          <view class="sales">
            <text>店铺销量</text>
            <text>5w - 50w</text>
          </view>
        </view>
      </view>
      <view class="store-score">
        <view class="score-item">
          <view>店铺销量</view>
          <view>96.00</view>
        </view>
        <view class="score-item">
          <view>商品体验</view>
          <view>89.00</view>
        </view>
        <view class="score-item">
          <view>物流体验</view>
          <view>69.00</view>
        </view>
      </view>
    </view>
    <view class="product-title">
      店铺商品
    </view>
    <scroll-view class="scroll-Y" :scroll-y="true">
      <view class="product-list">
        <ProductCard :product-list="productList" />
      </view>
    </scroll-view>
  </wd-config-provider>
</template>

<style scoped lang="scss">
.store-info{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: rgba(180,0,61,0.5);
  backdrop-filter: blur(12px);
  .store-name{
    display: flex;
    gap: 32rpx;
    align-items: center;
    margin-bottom: 48rpx;
    width: 686rpx;
    padding-left: 32rpx;
    padding-right: 32rpx;
    image{
      width: 128rpx;
      height: 128rpx;
      border-radius: 64rpx;
      border: 4rpx solid rgba(255,255,255,0.85);
    }
    .name-text{
      .text{
        font-family: PingFangSC, PingFang SC;
        font-weight: 500;
        font-size: 36rpx;
        color: #FFFFFF;
        line-height: 36rpx;
        font-style: normal;
      }
      .sales{
        display: flex;
        gap: 8rpx;
        margin-top: 22rpx;
        align-items: center;
        text:nth-child(1){
          font-family: PingFangSC, PingFang SC;
          font-weight: 400;
          font-size: 24rpx;
          color: rgba(255,255,255,0.65);
          line-height: 20rpx;
          font-style: normal;
        }
        text:nth-child(2){
          font-family: PingFangSC, PingFang SC;
          font-weight: 500;
          font-size: 24rpx;
          color: rgba(255,255,255,0.85);
          line-height: 24rpx;
          font-style: normal;
        }
      }
    }
  }
  .store-score{
    width: 686rpx;
    display: flex;
    padding: 40rpx 0rpx;
    background: #FFFFFF;
    box-shadow: 0rpx 0rpx 112rpx 0rpx rgba(187,133,151,0.1);
    border-radius: 32rpx;
    margin-bottom: -32rpx;
    .score-item{
      flex:1;
      text-align: center;
      view:nth-child(1){
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 24rpx;
        color: #666666;
        line-height: 24rpx;
        font-style: normal;
        margin-bottom: 16rpx;
      }
      view:nth-child(2){
        font-family: PingFangSC, PingFang SC;
        font-weight: 600;
        font-size: 32rpx;
        color: #000000;
        line-height: 32rpx;
        font-style: normal;
      }
    }
  }
}
.product-title{
  padding: 54rpx 32rpx 4rpx 32rpx;
}
.scroll-Y{
  transition: all 0.3s ease; /* 添加平滑过渡效果 */
  position: absolute;
  top: 586rpx;
  bottom: env(safe-area-inset-bottom);
}
.product-list{
  padding: 0rpx 32rpx;
}
</style>

<route lang="json">
{
  "name": "storeDetails",
  "style": {
    "navigationBarTitleText": "storeDetails"
  }
}
</route>
