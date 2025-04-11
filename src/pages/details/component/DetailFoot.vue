<script setup lang="ts">
import ApplyPopup from './ApplyPopup.vue'
import NotQualifyPopup from './NotQualifyPopup.vue'

const props = defineProps({
  pageScrollTop: {
    type: Number,
    default: 0,
  },
})

const isSelection = ref(false)

const applyPopupRef = ref<ComponentPublicInstance<{ open: () => void }> | null>(null)
const notQualifyPopupRef = ref<ComponentPublicInstance<{ open: (num: number) => void }> | null>(null)

function showPopup() {
  // applyPopupRef.value?.open() // 可以领样时的弹窗

  notQualifyPopupRef.value?.open(0) // 不能领样时的弹窗
}

function onSelection() {
  isSelection.value = !isSelection.value
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
  <view class="detail-foot">
    <view class="foot1" :class="{ foot1scoll: props.pageScrollTop > 100 }">
      <view class="foot1-item" :class="{ 'foot1-item-active': isSelection }" @click="onSelection">
        <text v-if="isSelection" class="iconfont icon-selectedCar_1" />
        <text v-else class="iconfont icon-selectedCar_0" />
        <view>选品车</view>
      </view>
      <view class="foot1-item">
        <text class="iconfont icon-customerService" />
        <view>客服</view>
      </view>
      <view class="foot1-item">
        <text class="iconfont icon-topUp" />
        <view>置顶</view>
      </view>
    </view>
    <view class="foot2">
      <wd-button>复制链接</wd-button>
      <wd-button>添加橱窗</wd-button>
      <wd-button @click="showPopup">
        免费领样
      </wd-button>
    </view>
  </view>
  <ApplyPopup ref="applyPopupRef" />
  <NotQualifyPopup ref="notQualifyPopupRef" />
</template>

<style lang="scss" scoped>
.detail-foot{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  .foot1{
    width: 464rpx;
    height: 108rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    background: rgba(255,255,255,0.85);
    box-shadow: 0rpx 16rpx 64rpx 0rpx rgba(90,0,31,0.2);
    border-radius: 32rpx;
    backdrop-filter: blur(10px);
    .foot1-item{
      flex: 1;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #444444;
      text{
        font-size: 32rpx;
        margin-bottom: 12rpx;
      }
      view{
        font-family: PingFangSC, PingFang SC;
        font-weight: 500;
        font-size: 24rpx;
        line-height: 24rpx;
        font-style: normal;
      }
    }
    .foot1-item-active{
      color: #FF0057;
    }
  }
  .foot1scoll{
    background: rgba(255,255,255,0.65);
    box-shadow: 0rpx 16rpx 64rpx 0rpx rgba(90,0,31,0.2);
  }
  .foot2{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 24rpx;
    padding: 0 32rpx;
    gap: 16rpx;
    padding-bottom: env(safe-area-inset-bottom);
    view{
      font-family: PingFangSC, PingFang SC;
      font-weight: 500;
      font-size: 28rpx;
      color: #FFFFFF;
      height: 88rpx;
      line-height: 88rpx;
      text-align: center;
      font-style: normal;
      border-radius: 32rpx;
    }
    :deep() {
      .wd-button {
        flex: 1;
        font-family: PingFangSC, PingFang SC;
        font-weight: 500;
        font-size: 28rpx;
        color: #FFFFFF;
        height: 88rpx;
        line-height: 88rpx;
        text-align: center;
        font-style: normal;
        border-radius: 32rpx;
        min-width: auto !important;
        padding: 0px;
      }
      .wd-button.is-medium{
        .wd-button__content{
          min-width: auto !important;
        }
      }
      .wd-button:nth-child(1){
        background-color: #4B00FC;
      }
      .wd-button:nth-child(2){
        background-color: #7600FF;
      }
      .wd-button:nth-child(3){
        background-color: #FF0057;
      }
    }
  }
}
</style>
