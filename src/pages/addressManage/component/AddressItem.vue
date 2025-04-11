<script setup lang="ts">
const selectItem = ref(null)
function onClick(item: any) {
  selectItem.value = item
}
</script>

<template>
  <view v-for="item in 10" :key="item" class="address-item" :class="{ active: selectItem === item }" @click="onClick(item)">
    <text v-if="selectItem === item" class="iconfont icon-select" />
    <view class="flex items-center justify-between">
      <view class="flex items-end gap-2">
        <view class="name">
          阮歆越
        </view>
        <view class="phone">
          137 5598 4604
        </view>
      </view>
      <view class="btn">
        <wd-icon name="delete" size="28rpx" />
        <wd-icon name="edit-1" size="28rpx" />
      </view>
    </view>
    <view class="address">
      江西省 南昌市 经开区 紫荆路886号水投樾府D12 - 1703
    </view>
    <view class="user-box">
      <image src="../../../static/banner.png" />
      <view>抖音第一拖姐</view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.address-item{
  position: relative;
  background: #FFFFFF;
  border-radius: 16rpx;
  border: 2rpx solid transparent;
  padding: 30rpx 32rpx;
  margin-bottom: 20rpx;
  .iconfont{
    position: absolute;
    top: -2rpx;
    right: -2rpx;
    color: #FF0057;
  }
  .name{
    font-family: PingFangSC, PingFang SC;
    font-weight: 500;
    font-size: 32rpx;
    color: #111111;
    line-height: 32rpx;
    font-style: normal;
  }
  .phone{
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 24rpx;
    color: #444444;
    line-height: 24rpx;
    font-style: normal;
  }
  .btn{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20rpx;
    color: #111111;
  }
  .address{
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 24rpx;
    color: #666666;
    font-style: normal;
    margin-top: 28rpx;
  }
  .user-box{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12rpx;
    width: 220rpx;
    height: 48rpx;
    border-radius: 8rpx;
    border: 1rpx solid #EEEEEE;
    margin-top: 28rpx;
    image{
      width: 32rpx;
      height: 32rpx;
      border-radius: 16rpx;
    }
    view{
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 24rpx;
      color: #999999;
      line-height: 24rpx;
      text-align: left;
      font-style: normal;
    }
  }
}
.active{
    border: 2rpx solid #FF0057;
  }
</style>
