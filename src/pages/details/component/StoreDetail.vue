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
  <view class="store-detail">
    <image src="../../../static/svg/detail.svg" />
    <view class="detail-imgs">
      <text>店铺详情</text>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.store-detail{
  image{
    margin-left: 32rpx;
    margin-bottom: 24rpx;
    width: 104rpx;
    height: 32rpx;
  }
}
.detail-imgs{
  min-height: calc(env(safe-area-inset-bottom) + 88rpx + 108rpx + 24rpx);
}
</style>
