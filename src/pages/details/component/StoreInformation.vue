<script setup lang="ts">
import viteimg from '@/static/banner.png'

const show = ref(false)
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
  <view class="store-title">
    商品信息
  </view>
  <view class="storewarp">
    <view class="name-box">
      <view>
        <wd-img width="74rpx" height="74rpx" round :src="viteimg" />
      </view>
      <view class="store-information">
        <view class="store-name">
          <view>MacBook旗舰店</view>
          <text class="iconfont icon-into" />
        </view>
        <view class="score">
          <view class="score-item">
            <text class="score-label">
              销量
            </text>
            <text class="score-num">
              99+
            </text>
          </view>
          <view class="score-item">
            <text class="score-label">
              商品
            </text>
            <text class="score-num">
              95分
            </text>
          </view>
          <view class="score-item">
            <text class="score-label">
              服务
            </text>
            <text class="score-num">
              85分
            </text>
          </view>
          <view class="score-item">
            <text class="score-label">
              物流
            </text>
            <text class="score-num">
              100分
            </text>
          </view>
        </view>
      </view>
    </view>
    <view class="cell-box" :class="{ 'cell-box-show': show }">
      <wd-cell title="M2  512G  32G" center custom-value-class="cell-right" custom-title-class="cell-left" value="¥ 39.9" />
      <wd-cell title="M2  1024G  64G" center custom-value-class="cell-right" custom-title-class="cell-left" value="¥ 49.9" />
      <wd-cell title="发货快递" center custom-value-class="cell-right" custom-title-class="cell-left" value="顺丰速运" />
      <wd-cell title="发货信息" center custom-value-class="cell-right" custom-title-class="cell-left" value="24小时内发货" />
      <wd-cell title="不发货地区" center custom-value-class="cell-right" custom-title-class="cell-left" value="新疆、西藏" />
      <wd-cell title="商品信息列表" center custom-value-class="cell-right" custom-title-class="cell-left" value="信息内容" />
      <wd-cell title="商品信息列表" center custom-value-class="cell-right" custom-title-class="cell-left" value="信息内容" />
      <wd-cell title="商品信息列表" center custom-value-class="cell-right" custom-title-class="cell-left" value="信息内容" />
      <wd-cell title="商品信息列表" center custom-value-class="cell-right" custom-title-class="cell-left" value="信息内容" />
      <wd-cell title="商品信息列表" center custom-value-class="cell-right" custom-title-class="cell-left" value="信息内容" />
      <wd-cell title="商品信息列表" center custom-value-class="cell-right" custom-title-class="cell-left" value="信息内容" />
      <view v-if="show" class="action" @click="show = false">
        收起 <wd-icon name="arrow-up" size="24rpx" />
      </view>
      <view v-else class="action" @click="show = true">
        展开 <wd-icon name="arrow-down" size="24rpx" />
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.store-title{
  font-family: PingFangSC, PingFang SC;
  font-weight: 500;
  font-size: 28rpx;
  color: #000000;
  line-height: 28rpx;
  font-style: normal;
  margin: 32rpx 0 24rpx 0;
}
.storewarp {
  background-color: #fff;
  border-radius: 16rpx;
  padding: 0 24rpx;
  .name-box{
    display: flex;
    align-items: center;
    height: 144rpx;
    .store-information{
      flex: 1;
      padding-left: 24rpx;
    }
    .store-name{
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      view{
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 28rpx;
        color: #111111;
        line-height: 28rpx;
        text-align: left;
        font-style: normal;
      }
      text{
        font-size: 20rpx;
        color: #BABABA;
      }
    }
    .score{
      display: flex;
      font-size: 20rpx;
      margin-top: 18rpx;
      .score-item{
        flex: 1;
        text-align: left;
        .score-label{
          color: #999999;
        }
        .score-num{
          color: #444444;
          margin-left: 6rpx;
        }
      }
    }
  }
  .cell-box{
    height: 400rpx;
    overflow: hidden;
    position: relative;
    padding-bottom: 64rpx;
    :deep(.wd-cell__wrapper){
      padding: 0;
      height: 80rpx;
    }
    :deep(.cell-left){
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 28rpx;
      color: #999999;
      line-height: 28rpx;
      font-style: normal;
    }
    :deep(.cell-right){
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 28rpx;
      color: #333333;
      line-height: 28rpx;
      font-style: normal;
    }
    .action{
      position: absolute;
      text-align: center;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 64rpx;
      line-height: 64rpx;
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 24rpx;
      color: #999999;
      font-style: normal;
      background-color: #fff;
    }
  }
  .cell-box-show{
    height: auto;
  }
}
</style>
