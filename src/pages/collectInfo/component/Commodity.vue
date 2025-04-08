<script setup lang="ts">

</script>

<script lang="ts">
export default {
  options: {
    addGlobalClass: true,
    virtualHost: true,
    styleIsolation: 'shared',
  },
}
</script>

<template>
  <view class="store-card">
    <view class="store-box">
      <image src="../../../static/banner.png" />
      <view class="store-right">
        <view class="store-title">
          MacBook Pro 2025 M2喜欢的赶紧入手吧，晚点就没货了
        </view>
        <view class="store-price">
          <view class="store-price-left">
            <text>到手价</text>
            <text>39.9元</text>
          </view>
          <view class="store-price-center">
            <text>高佣</text>
            <text>26</text>
            <text>%</text>
          </view>
          <view class="store-price-right">
            <text>推广补贴</text>
            <text>6</text>
            <text>%</text>
          </view>
        </view>
      </view>
    </view>
    <view class="store-foot">
      <view class="foot-item">
        <view>总橱销 ≥</view>
        <view>
          <text>1w</text>
          <text>可领</text>
        </view>
      </view>
      <view class="foot-item">
        <view>样品库存≥</view>
        <view>100</view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.store-card{
  background-color: #fff;
  border-radius: 16rpx;
  margin-top: 24rpx;
  padding: 28rpx 24rpx 32rpx 24rpx;
}
.store-box{
  display: flex;
  gap: 22rpx;
  image{
    width: 128rpx;
    height: 128rpx;
    border-radius: 32rpx;
  }
  .store-right{
    flex: 1;
    .store-title{
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 28rpx;
      color: #111111;
      line-height: 44rpx;
      font-style: normal;
    }
    .store-price{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 12rpx;
      .store-price-left{
        display: flex;
        align-items: center;
        gap: 2rpx;
        text:nth-child(1){
          font-family: PingFangSC, PingFang SC;
          font-weight: 400;
          font-size: 24rpx;
          color: #666666;
          font-style: normal;
        }
        text:nth-child(2){
          font-family: DINAlternate, DINAlternate;
          font-weight: bold;
          font-size: 32rpx;
          color: #000000;
          font-style: normal;
        }
        text:nth-child(3){
          font-family: PingFangSC, PingFang SC;
          font-weight: 400;
          font-size: 24rpx;
          color: #111111;
          font-style: normal;
        }
      }
      .store-price-center,.store-price-right{
        display: flex;
        align-items: center;
        gap: 2rpx;
        text:nth-child(1){
          font-family: PingFangSC, PingFang SC;
          font-weight: 400;
          font-size: 24rpx;
          color: #666666;
          font-style: normal;
        }
        text:nth-child(2){
          font-family: DINAlternate, DINAlternate;
          font-weight: bold;
          font-size: 32rpx;
          color: #FF0057;
          font-style: normal;
        }
        text:nth-child(3){
          font-family: DINAlternate, DINAlternate;
          font-weight: bold;
          font-size: 24rpx;
          color: #FF0057;
          font-style: normal;
        }
      }
    }
  }
}
.store-foot{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32rpx;
  gap: 32rpx;
  .foot-item{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6rpx;
    flex: 1;
    border: 1rpx solid #EEEEEE;
    height: 64rpx;
    border-radius: 16rpx;
    view:nth-child(1){
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 24rpx;
      color: #999999;
      font-style: normal;
    }
    view:nth-child(2){
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 24rpx;
      color: #111111;
      font-style: normal;
      display: flex;
      align-items: center;
      gap: 6rpx;
      text:nth-child(2){
        color: #444444;
      }
    }
  }
}
</style>
