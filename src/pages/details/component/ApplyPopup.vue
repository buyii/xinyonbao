<script setup lang="ts">
import type { Item } from '@/types/common'

// const props = withDefaults(defineProps<TabsProps>(), {})

// const emit = defineEmits(['changeTab'])

// const model = defineModel({ default: 1 })

const show = ref<boolean>(false)

const selectionTabList = ref<Item[]>([
  {
    id: 1,
    name: '256G',
  },
  {
    id: 2,
    name: '512G',
  },
  {
    id: 3,
    name: '1024G',
  },
])

function open() {
  show.value = true
  console.log('open')
}

function close() {
  show.value = false
}

function onConfirm() {
  uni.navigateTo({
    url: `/pages/collectInfo/index`,
  })
  show.value = false
}

// 暴露方法
defineExpose({
  open,
  close,
})
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
  <view>
    <wd-popup
      v-model="show"
      position="bottom"
      custom-style="border-radius: 32rpx 32rpx 0px 0px;overflow: hidden;" :z-index="999"
    >
      <view class="title">
        <view>申请规格</view>
        <text class="iconfont icon-close" @click="close" />
      </view>
      <view class="popup-warp">
        <view class="store-box">
          <image src="../../../static/banner.png" />
          <view class="store-right">
            <view class="store-title">
              MacBook Pro 2025 M2喜欢的赶紧入手吧，晚点就没货了
            </view>
            <view class="store-price">
              <view class="store-price-left">
                <text>￥</text>
                <text>39.9</text>
              </view>
              <view class="store-price-right">
                <text>库存 • </text>
                <text>9999</text>
              </view>
            </view>
          </view>
        </view>
        <view>
          <SelectionTabs label="规格" :is-single="true" :tab-list="selectionTabList" />
        </view>
      </view>
      <FootButton label="确认" @confirm="onConfirm" />
    </wd-popup>
  </view>
</template>

<style lang="scss" scoped>
.title{
  display: flex;
  z-index: 99;
  background-color: #fff;
  align-items: center;
  justify-content: space-between;
  height: 116rpx;
  font-family: PingFangSC, PingFang SC;
  font-weight: 500;
  font-size: 36rpx;
  color: #000000;
  text-align: left;
  font-style: normal;
  padding: 0 48rpx;
  text{
    font-size: 28rpx;
  }
}
.popup-warp{
  padding: 0 48rpx;
  // height: calc(100% - 108px - env(safe-area-inset-bottom));
  // overflow-y: auto;
  padding-bottom: calc(100rpx + env(safe-area-inset-bottom));
  .store-box{
    display: flex;
    gap: 26rpx;
    margin-bottom: 48rpx;
    image{
      width: 152rpx;
      height: 152rpx;
      border-radius: 32rpx;
    }
    .store-right{
      flex: 1;
      .store-title{
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 32rpx;
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
          text:nth-child(1){
            font-family: DINAlternate, DINAlternate;
            font-weight: bold;
            font-size: 28rpx;
            color: #000000;
            line-height: 28rpx;
            font-style: normal;
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
        .store-price-right{
          display: flex;
          align-items: center;
          text:nth-child(1){
            font-family: PingFangSC, PingFang SC;
            font-weight: 400;
            font-size: 20rpx;
            color: #999999;
            font-style: normal;
          }
          text:nth-child(2){
            font-family: PingFangSC, PingFang SC;
            font-weight: 400;
            font-size: 28rpx;
            color: #444444;
            font-style: normal;
            margin-left: 6rpx;
          }
        }
      }
    }
  }
}
</style>
