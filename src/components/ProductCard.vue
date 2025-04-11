<script setup lang="ts">
import type { Product, ProductItem } from '@/types/common'

const props = withDefaults(defineProps<Product>(), {})

function toDetail(item: ProductItem) {
  uni.navigateTo({
    url: `/pages/details/index?id=${item.id}`,
  })
}
</script>

<template>
  <view class="product-warp">
    <view v-for="item in props.productList" :key="item.id" class="product-card" @click="toDetail(item)">
      <view class="product-info">
        <img src="../static/banner.png" style="width: 100%; height: 332rpx">
        <view class="product-content">
          <view class="flex justify-between">
            <view>
              <view class="rate">
                <text class="size10">
                  高佣
                </text>
                <text class="size14">
                  30
                </text>
                <text class="size10 fuhao">
                  %
                </text>
              </view>
              <view class="rate1">
                <text>公开佣金</text>
                <text>25%</text>
              </view>
            </view>
            <view>
              <view class="yjlabel">
                预估赚
              </view>
              <view class="yongj">
                <!-- <text class="integer">{{ Math.floor(item.value) }}</text>
                <text class="decimal">.{{ (item.value % 1).toFixed(1).substring(2) }}</text> -->
                <text class="integer">
                  13
                </text>
                <text class="decimal">
                  .3
                </text>
              </view>
            </view>
          </view>
          <view class="jieshao">
            产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍产品介绍
          </view>
          <view class="flex-align-center justify-between">
            <view>
              <view class="daoshou">
                <!-- <text class="integer">{{ Math.floor(item.value) }}</text>
                <text class="decimal">.{{ (item.value % 1).toFixed(1).substring(2) }}</text> -->
                <text class="integer">
                  39
                </text>
                <text class="decimal">
                  .9
                </text>
              </view>
              <view class="daoshoulabel">
                到手价
              </view>
            </view>
            <view>
              <view class="tuiguang">
                <text>推广补贴</text>
                <text>
                  3
                </text>
                <text>
                  %
                </text>
              </view>
              <view class="yugu">
                <text>预估金额</text>
                <text>1.33元</text>
              </view>
            </view>
          </view>
        </view>
      </view>
      <view class="product-foot">
        <view>免费领</view>
        <view>总橱销≥5000可领</view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.product-warp {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: transparent;
  padding-top: 20rpx;
  padding-bottom: 16rpx;
  gap: 10px; // 增加子元素之间的间隔
  .product-card{
    width: calc(50% - 5px);
    border-radius: 16rpx;
    overflow: hidden;
    background-color: #FFD6E4;
  }
  .product-info{
    border-radius: 16rpx;
    overflow: hidden;
    background-color: #fff;
    padding-bottom: 20rpx;
  }
  .product-content{
    padding: 0 20rpx;
  }
  .rate{
    width: 122rpx;
    height: 40rpx;
    background: #FF0057;
    border-radius: 4rpx 16rpx 4rpx 16rpx;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: baseline;
    .fuhao{
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 20rpx;
      color: rgba(255,255,255,0.85);
      line-height: 20rpx;
      font-style: normal;
    }
    .size10{
      font-size: 20rpx;
    }
    .size14{
      font-size: 28rpx;
    }
    text:nth-child(1){
      margin-right: 6rpx;
    }
  }
  .rate1{
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 16rpx;
    color: #999999;
    line-height: 16rpx;
    text-align: left;
    font-style: normal;
    margin-top: 8rpx;
    display: flex;
    justify-content: space-between;
  }
  .yjlabel{
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 20rpx;
    color: #FF0057;
    line-height: 20rpx;
    font-style: normal;
  }
  .yongj{
    font-family: DINAlternate, DINAlternate;
    font-weight: bold;
    color: #FF0057;
    line-height: 36rpx;
    font-style: normal;
    margin-top: 12rpx;
    display: flex;
    align-items: baseline;
    .integer{
      font-size: 36rpx;
    }
    .decimal{
      font-size: 28rpx;
    }
  }
  .jieshao{
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 24rpx;
    color: #333333;
    line-height: 32rpx;
    text-align: left;
    font-style: normal;
    white-space: nowrap;
    overflow: hidden;
    letter-spacing: 0.2px;
    margin: 4rpx 0 16rpx 0;
  }

  .daoshou{
    font-family: DINAlternate, DINAlternate;
    font-weight: bold;
    color: #000000;
    line-height: 32rpx;
    font-style: normal;
    margin-top: 12rpx;
    display: flex;
    align-items: baseline;
    .integer{
      font-size: 32rpx;
    }
    .decimal{
      font-size: 24rpx;
    }
  }
  .daoshoulabel{
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 20rpx;
    color: #999999;
    line-height: 20rpx;
    font-style: normal;
    margin-top: 4rpx;
  }
  .tuiguang{
    display: flex;
    align-items: baseline;
    text:nth-child(1){
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 20rpx;
      color: #666666;
      line-height: 20rpx;
      font-style: normal;
      margin-right: 8rpx;
    }
    text:nth-child(2){
      font-family: DINAlternate, DINAlternate;
      font-weight: bold;
      font-size: 32rpx;
      color: #FF0000;
      line-height: 32rpx;
      font-style: normal;
    }
    text:nth-child(3){
      font-family: DINAlternate, DINAlternate;
      font-weight: bold;
      font-size: 24rpx;
      color: #FF0000;
      line-height: 24rpx;
      font-style: normal;
    }
  }
  .yugu{
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 16rpx;
    line-height: 16rpx;
    text-align: center;
    font-style: normal;
    margin-top: 12rpx;
    text:nth-child(1){
      color: #999999;
      margin-right: 8rpx;
    }
    text:nth-child(2){
      color: #FF0000;
    }
  }
  .product-foot{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64rpx;
    padding: 0 22rpx;
    view:nth-child(1){
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 28rpx;
      color: #650022;
      line-height: 28rpx;
      font-style: normal;
    }
    view:nth-child(2){
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 20rpx;
      color: rgba(101,0,34,0.65);
      line-height: 20rpx;
      font-style: normal;
    }
  }
}
</style>
