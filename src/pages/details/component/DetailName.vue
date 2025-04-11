<script setup lang="ts">
import NotQualifyPopup from './NotQualifyPopup.vue'

const notQualifyPopupRef = ref<ComponentPublicInstance<{ open: (num: number) => void }> | null>(null)

function openPopup() {
  notQualifyPopupRef.value?.open(1)
}
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
  <view class="detail-name">
    <view class="detail-sales">
      <view>总销量 <text>· 65w</text></view>
      <view>样品库存 <text>≤ 99</text></view>
    </view>
    <view class="detail-title">
      MacBool Pro 2025没智商就别进来去买你的爱国机没人拦着你们反正我做好产品，买就谢谢你
    </view>
    <view class="detail-inventory">
      <view>
        <text class="iconfont icon-share" />
        <text>分享海报</text>
      </view>
      <view @click="openPopup">
        <text class="iconfont icon-cost" />
        <text>成本购样</text>
      </view>
    </view>
  </view>
  <NotQualifyPopup ref="notQualifyPopupRef" />
</template>

<style lang="scss" scoped>
.detail-name{
  background-color: #fff;
  padding: 32rpx 24rpx;
  border-radius: 16rpx;
  .detail-sales{
    display: flex;
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 24rpx;
    color: #999999;
    line-height: 24rpx;
    font-style: normal;
    gap: 32rpx;
    text{
      color: #444444;
    }
  }
  .detail-title{
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 28rpx;
    color: #111111;
    line-height: 40rpx;
    text-align: left;
    font-style: normal;
    margin-top: 16rpx;
    /* 从下往上的模糊效果 */
    -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.6));
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.6));
    -webkit-mask-size: 100% 100%;
    mask-size: 100% 100%;
  }
  .detail-inventory{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 22rpx;
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 24rpx;
    font-style: normal;
    margin-top: 16rpx;
    view{
      height: 64rpx;
      flex: 1;
      display: flex;
      align-items: center;
      gap: 12rpx;
      justify-content: center;
      border-radius: 16rpx;
      border: 1rpx solid #E8E8E8;
    }
    view text:nth-child(1){
      color: #000000;
    }
    view text:nth-child(2){
      color: #999999;
    }
  }
}
</style>
