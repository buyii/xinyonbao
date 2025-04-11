<script setup lang="ts">
import Commodity from './component/Commodity.vue'
import { useLayoutStore } from '@/stores'

const { layoutStore } = useLayoutStore()
const value = ref<string>('')
const showText = ref<boolean>(false)

const themeVars = reactive({
  navbarBackground: 'transparent',
  colorBg: '#F8F8F8',
})
function handleClickLeft() {
  uni.navigateBack()
}
function onShowTextarea() {
  showText.value = !showText.value
}
function onTextBlur(val: any) {
  if (val.value === '') {
    showText.value = false
  }
}
function toAddress() {
  uni.navigateTo({
    url: `/pages/addressManage/index`,
  })
}
function toExperts() {
  uni.navigateTo({
    url: `/pages/searchExperts/index`,
  })
}
function onConfirm() {

}
const statusBarHeight = computed(() => {
  return layoutStore.statusBarHeight
})
</script>

<template>
  <view class="topbg" />
  <wd-config-provider :theme-vars="themeVars" custom-style="min-height: 100vh">
    <wd-navbar title="" safe-area-inset-top left-arrow fixed :bordered="false" @click-left="handleClickLeft" />
    <view class="collect-warp" :style="{ paddingTop: `${(statusBarHeight || 0) + 49}px` }">
      <view class="top-warp">
        <view class="top-left">
          <image src="../../static/svg/mfly.svg" />
          <view>选择您的地址以及样品达人</view>
        </view>
        <view class="top-right">
          <image src="../../static/svg/bubble.svg" />
        </view>
      </view>
      <view class="add-box" @click="toAddress">
        <view><wd-icon name="add1" size="30rpx" /></view>
        <view class="add-text">
          新增地址
        </view>
      </view>
      <Commodity />
      <view class="guige">
        <view>规格</view>
        <view>512G</view>
      </view>
      <view class="card-label">
        选择领样达人
      </view>
      <view class="add-box add-box2" @click="toExperts">
        <view><wd-icon name="add1" size="30rpx" /></view>
        <view class="add-text">
          添加达人
        </view>
      </view>
      <view class="card-label">
        申样留言
      </view>
      <view class="leave-word">
        <view v-if="!showText" class="word-view" @click="onShowTextarea">
          <view><wd-icon name="edit-1" size="24rpx" /></view>
          <view class="word-text">
            点击空白区域输入可选填
          </view>
        </view>
        <wd-textarea
          v-if="showText"
          v-model="value"
          :auto-height="true"
          :auto-focus="true"
          :show-confirm-bar="false"
          confirm-type="done"
          placeholder="请输入" @blur="onTextBlur"
        />
      </view>
    </view>
    <FootButton label="确认" fixed @confirm="onConfirm" />
  </wd-config-provider>
</template>

<style scoped lang="scss">
.topbg{
  position: fixed;
  height: 400rpx;
  width: 100%;
  background: linear-gradient( 180deg, rgba(255,36,87,0.05) 0%, rgba(248,248,248,0) 100%);
}
.collect-warp{
  position: relative;
  z-index: 2;
  padding: 0 32rpx;
  padding-bottom: calc(120rpx + env(safe-area-inset-bottom));
  .top-warp{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 32rpx;
    background-color: transparent;
    .top-left{
      image{
        width: 172rpx;
        height: 40rpx;
      }
      view{
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 24rpx;
        color: #666666;
        line-height: 24rpx;
        font-style: normal;
        margin-top: 20rpx;
      }
    }
    .top-right{
      image{
        width: 74rpx;
        height: 84rpx;
      }
    }
  }
  .card-label{
    font-family: PingFangSC, PingFang SC;
    font-weight: 500;
    font-size: 28rpx;
    color: #111111;
    font-style: normal;
    margin-top: 32rpx;
  }
  .add-box{
    height: 160rpx;
    background: #FFFFFF;
    border-radius: 16rpx;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 32rpx;
    .add-text{
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 24rpx;
      color: #666666;
      line-height: 24rpx;
      font-style: normal;
    }
  }
  .add-box2{
    margin-top: 24rpx;
  }
  .leave-word{
    background: #FFFFFF;
    border-radius: 16rpx;
    margin-top: 24rpx;
    .word-view{
      height: 128rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #DADADA;
      .word-text{
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 24rpx;
        color: #DADADA;
      }
    }
    :deep(){
      .wd-textarea{
        min-height: 128rpx;
        border-radius: 16rpx;
        padding: 10rpx !important;
      }
      .wd-textarea::after {
        display: none !important;
      }
    }
  }
  .guige{
    display: flex;
    align-items: center;
    padding: 0 24rpx;
    height: 80rpx;
    background-color: #FFFFFF;
    border-radius: 16rpx;
    margin-top: 24rpx;
    font-size: 28rpx;
    font-style: normal;
    view:nth-child(1){
      color: #999999;
      width: 160rpx;
    }
    view:nth-child(2){
      flex: 1;
      color: #111111;
    }
  }
}
.botbox{
  padding-bottom: calc(12rpx + env(safe-area-inset-bottom));
  padding-top: 8rpx;
  background-color: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  :deep(.wd-button){
    width: 90%;
    height: 88rpx !important;
    background: #FF0057 !important;
    border-radius: 8rpx 32rpx!important;
  }
}
</style>

<route lang="json">
{
  "layout": "default",
  "name": "collectInfo",
  "style": {
    "navigationBarTitleText": "领取信息填写"
  }
}
</route>
