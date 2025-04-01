<script setup lang="ts">
import type { Product } from '@/types/common'

const props = withDefaults(defineProps<Product>(), {})
console.log('ProductCard', props.productList)
</script>

<template>
  <view class="product-warp">
    <view v-for="item in props.productList" :key="item.id" class="product-card">
      <view class="product-info">
        <img src="../static/banner.png" style="width: 100%; height: 166px">
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
  padding-top: 10px;
  gap: 10px; // 增加子元素之间的间隔
  .product-card{
    width: calc(50% - 5px);
    border-radius: 8px;
    overflow: hidden;
    background-color: #FFD6E4;
  }
  .product-info{
    border-radius: 8px;
    overflow: hidden;
    background-color: #fff;
    padding-bottom: 10px;
  }
  .product-content{
    padding: 0 10px;
  }
  .rate{
    width: 61px;
    height: 20px;
    background: #FF0057;
    border-radius: 2px 8px 2px 8px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: baseline;
    .fuhao{
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 10px;
      color: rgba(255,255,255,0.85);
      line-height: 10px;
      font-style: normal;
    }
    .size10{
      font-size: 10px;
    }
    .size14{
      font-size: 14px;
    }
    text:nth-child(1){
      margin-right: 3px;
    }
  }
  .rate1{
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 8px;
    color: #999999;
    line-height: 8px;
    text-align: left;
    font-style: normal;
    margin-top: 4px;
    display: flex;
    justify-content: space-between;
  }
  .yjlabel{
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 10px;
    color: #FF0057;
    line-height: 10px;
    font-style: normal;
  }
  .yongj{
    font-family: DINAlternate, DINAlternate;
    font-weight: bold;
    color: #FF0057;
    line-height: 18px;
    font-style: normal;
    margin-top: 6px;
    display: flex;
    align-items: baseline;
    .integer{
      font-size: 18px;
    }
    .decimal{
      font-size: 14px;
    }
  }
  .jieshao{
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 12px;
    color: #333333;
    line-height: 16px;
    text-align: left;
    font-style: normal;
    white-space: nowrap;
    overflow: hidden;
    letter-spacing: 0.2px;
    margin: 2px 0 8px 0;
  }

  .daoshou{
    font-family: DINAlternate, DINAlternate;
    font-weight: bold;
    color: #000000;
    line-height: 16px;
    font-style: normal;
    margin-top: 6px;
    display: flex;
    align-items: baseline;
    .integer{
      font-size: 16px;
    }
    .decimal{
      font-size: 12px;
    }
  }
  .daoshoulabel{
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 10px;
    color: #999999;
    line-height: 10px;
    font-style: normal;
    margin-top: 2px;
  }
  .tuiguang{
    display: flex;
    align-items: baseline;
    text:nth-child(1){
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 10px;
      color: #666666;
      line-height: 10px;
      font-style: normal;
      margin-right: 4px;
    }
    text:nth-child(2){
      font-family: DINAlternate, DINAlternate;
      font-weight: bold;
      font-size: 16px;
      color: #FF0000;
      line-height: 16px;
      font-style: normal;
    }
    text:nth-child(3){
      font-family: DINAlternate, DINAlternate;
      font-weight: bold;
      font-size: 12px;
      color: #FF0000;
      line-height: 12px;
      font-style: normal;
    }
  }
  .yugu{
    font-family: PingFangSC, PingFang SC;
    font-weight: 400;
    font-size: 8px;
    line-height: 8px;
    text-align: center;
    font-style: normal;
    margin-top: 6px;
    text:nth-child(1){
      color: #999999;
      margin-right: 4px;
    }
    text:nth-child(2){
      color: #FF0000;
    }
  }
  .product-foot{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 32px;
    padding: 0 11px;
    view:nth-child(1){
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 14px;
      color: #650022;
      line-height: 14px;
      font-style: normal;
    }
    view:nth-child(2){
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 10px;
      color: rgba(101,0,34,0.65);
      line-height: 10px;
      font-style: normal;
    }
  }
}
</style>
