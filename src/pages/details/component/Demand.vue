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
  <view class="detail-demand">
    <view class="demand-title">
      领样要求
    </view>
    <view class="demand1">
      <view>达人等级</view>
      <view>≥ LV 3</view>
    </view>
    <view class="demand2">
      <view>近30天橱销量</view>
      <view>≥ 5000</view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.detail-demand{
  padding: 32rpx 24rpx;
  background: #fff;
  border-radius: 16rpx;
  margin-top: 24rpx;
  .demand-title{
    font-family: PingFangSC, PingFang SC;
    font-weight: 500;
    font-size: 28rpx;
    color: #000000;
    line-height: 28rpx;
    font-style: normal;
    margin-bottom: 42rpx;
  }
  .demand1{
    display: flex;
    justify-content: space-between;
    margin-bottom: 32rpx;
    view:nth-child(1){
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 28rpx;
      color: #999999;
      line-height: 28rpx;
      font-style: normal;
      width: 300rpx;
    }
    view:nth-child(2){
      flex: 1;
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 28rpx;
      color: #111111;
      line-height: 28rpx;
      font-style: normal;
    }
  }
  .demand2{
    display: flex;
    justify-content: space-between;
    view:nth-child(1){
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 24rpx;
      color: #999999;
      line-height: 28rpx;
      font-style: normal;
      width: 300rpx;
    }
    view:nth-child(2){
      flex: 1;
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 28rpx;
      color: #111111;
      line-height: 28rpx;
      font-style: normal;
    }
  }
}
</style>
