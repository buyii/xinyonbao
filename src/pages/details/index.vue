<script setup lang="ts">
// import F2chart from './component/F2chart.vue'
import DetailName from './component/DetailName.vue'
import Process from './component/Process.vue'
import Demand from './component/Demand.vue'
import StoreInformation from './component/StoreInformation.vue'
import StoreDetail from './component/StoreDetail.vue'
import DetailFoot from './component/DetailFoot.vue'

const pageScrollTop = ref(0)
const themeVars = reactive({
  navbarBackground: 'transparent',
  navbarColor: '#ffffff',
  colorBg: '#F8F8F8',
})

function handleClickLeft() {
  uni.navigateBack()
}

// const chartRef = ref<ComponentPublicInstance<{ getServerData: () => void }> | null>(null)

onMounted(() => {
  // chartRef.value.getServerData()
})

onPageScroll((e) => {
  pageScrollTop.value = e.scrollTop
})
</script>

<template>
  <wd-config-provider :theme-vars="themeVars">
    <wd-navbar title="" safe-area-inset-top left-arrow fixed :bordered="false" @click-left="handleClickLeft" />
    <view class="detail-top">
      <image src="../../static/banner.png" style="width: 750rpx;height: 750rpx;" />
      <view class="detail-time">
        <text class="iconfont icon-clock" />
        <view>
          剩余
          <text class="text-time">
            359
          </text>
          天
          <text class="text-time">
            23 : 59 : 59
          </text>
          结束
        </view>
      </view>
    </view>
    <view class="detail-amount">
      <view class="amount">
        <text>￥</text>
        <text>39.9</text>
      </view>
      <view class="amount-sub">
        <view>到手价</view>
        <view>公开佣金 15%</view>
      </view>
      <view class="detail-commission">
        <view class="commission-item">
          <view class="commission-label">
            达人高佣
          </view>
          <view class="commission-shuju">
            <view class="commission-ratio">
              19<text>%</text>
            </view>
            <view class="commission-number">
              每单预估 <text>7.58</text> 元
            </view>
          </view>
        </view>
        <view class="commission-item">
          <view class="commission-label">
            推广补贴
          </view>
          <view class="commission-shuju">
            <view class="commission-ratio">
              6<text>%</text>
            </view>
            <view class="commission-number">
              每单预估 <text>2.40</text> 元
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="detail-content">
      <!-- 商品信息 -->
      <DetailName />

      <!-- 领样要求 -->
      <Demand />

      <!-- 领样流程 -->
      <Process />

      <!-- <F2chart ref="chartRef" /> -->

      <!-- 商品信息 -->
      <StoreInformation />
    </view>
    <!-- 详情页 -->
    <StoreDetail />
    <!-- 操作按钮 -->
    <DetailFoot :page-scroll-top="pageScrollTop" />
  </wd-config-provider>
</template>

<style scoped lang="scss">
.detail-top{
  position: relative;
  width: 100%;
  height: 750rpx;
  .image{
    width: 750rpx;
    height: 750rpx;
  }
  .detail-time{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 24rpx;
    margin: 0 auto;
    width: 686rpx;
    height: 80rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255,255,255,0.65);
    box-shadow: inset 0rpx 2rpx 0rpx 0rpx rgba(255,255,255,0.25);
    border-radius: 32rpx;
    backdrop-filter: blur(10px);
    color: #666666;
    .iconfont{
      margin-right: 32rpx;
      color: #000000;
    }
    .text-time{
      color: #000000;
    }
  }
}
.detail-amount{
  padding: 32rpx;
  background-color: #fff;
  .amount{
    display: flex;
    align-items: start;
    text:nth-child(1){
      font-family: DINAlternate, DINAlternate;
      font-weight: bold;
      font-size: 28rpx;
      color: #000000;
      line-height: 28rpx;
      font-style: normal;
      margin-right: 6rpx;
    }
    text:nth-child(2){
      font-family: DINAlternate, DINAlternate;
      font-weight: bold;
      font-size: 56rpx;
      color: #000000;
      line-height: 56rpx;
      font-style: normal;
    }
  }
  .amount-sub{
    display: flex;
    align-items: center;
    padding-left: 28rpx;
    margin-top: 10rpx;
    view:nth-child(1){
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 24rpx;
      color: #999999;
      line-height: 24rpx;
      font-style: normal;
    }
    view:nth-child(2){
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 20rpx;
      color: #666666;
      line-height: 20rpx;
      font-style: normal;
      margin-left: 38rpx;
    }
  }
  .detail-commission{
    display: flex;
    gap: 22rpx;
    justify-content: space-between;
    margin-top: 32rpx;
    .commission-item{
      background: #FAFAFA;
      border-radius: 16rpx;
      border: 1rpx solid #F4F4F4;
      padding: 24rpx 32rpx;
      width: 332rpx;
      .commission-label{
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 24rpx;
        color: #666666;
        line-height: 24rpx;
        font-style: normal;
        margin-bottom: 16rpx;
      }
      .commission-shuju{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .commission-ratio{
          font-family: DINAlternate, DINAlternate;
          font-weight: bold;
          font-size: 40rpx;
          color: #FF0057;
          line-height: 40rpx;
          font-style: normal;
          text{
            font-size: 32rpx;
          }
        }
        .commission-number{
          font-family: PingFangSC, PingFang SC;
          font-weight: 400;
          font-size: 24rpx;
          color: #999999;
          line-height: 24rpx;
          font-style: normal;
          text{
            font-size: 20rpx;
          }
        }
      }
    }
  }
}
.detail-content{
  padding: 20rpx 32rpx 32rpx 32rpx;
}
</style>

<route lang="json">
{
  "layout": "default",
  "name": "details",
  "style": {
    "navigationBarTitleText": "详情"
  }
}
</route>
