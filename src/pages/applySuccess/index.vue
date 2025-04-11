<script setup lang="ts">
import ItemCard from './component/ItemCard.vue'

const themeVars = reactive({
  navbarBackground: 'transparent',
  colorBg: '#F8F8F8',
})

const tabs = ['全部', '待审核', '待发货', '待收货', '已完成']
const tabValue = ref<string>('综合')
function handleClickLeft() {
  uni.navigateBack()
}
</script>

<template>
  <wd-config-provider :theme-vars="themeVars" custom-style="min-height: 100vh">
    <wd-navbar title="申样成功" safe-area-inset-top left-arrow fixed :bordered="false" @click-left="handleClickLeft" />
    <view class="apply-warp">
      <view class="tip-box">
        <view class="tip-img">
          <image src="../../static/svg/yishenqing.svg" mode="scaleToFill" />
        </view>
        <view class="tip-btn">
          <wd-button>返回首页</wd-button>
          <wd-button>继续申样</wd-button>
        </view>
      </view>
      <view class="content-box">
        <image class="jilu" src="../../static/svg/jilu.svg" />
        <LineTabs v-model="tabValue" :tabs="tabs" />
        <ItemCard />
      </view>
    </view>
  </wd-config-provider>
</template>

<style scoped lang="scss">
.apply-warp{
  .tip-box{
    height: 626rpx;
    background: linear-gradient( 180deg, rgba(255,36,87,0.05) 0%, #FFFFFF 100%);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    .tip-img{
      display: flex;
      align-items: center;
      justify-content: center;
      image{
        width: 244rpx;
        height: 230rpx;
      }
    }
    .tip-btn{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 32rpx;
      margin-bottom: 60rpx;
      margin-top: 32rpx;
      :deep(){
        .wd-button:nth-child(1){
          width: 264rpx;
          height: 80rpx;
          background: #fef1f1;
          border-radius: 200rpx 30rpx 30rpx 200rpx;
          font-family: PingFangSC, PingFang SC;
          font-weight: 500;
          font-size: 32rpx;
          color: #999999;
          line-height: 80rpx;
          text-align: left;
          font-style: normal;
        }
        .wd-button:nth-child(2){
          width: 264rpx;
          height: 80rpx;
          background: #FF0057;
          border-radius: 30rpx 200rpx 200rpx 30rpx;
          font-family: PingFangSC, PingFang SC;
          font-weight: 500;
          font-size: 32rpx;
          color: #FFFFFF;
          line-height: 80rpx;
          text-align: left;
          font-style: normal;
        }
      }
    }
  }
  .content-box{
    padding: 40rpx 32rpx;
    .jilu{
      width: 140rpx;
      height: 32rpx;
    }
  }
}
</style>

<route lang="json">
{
  "layout": "default",
  "name": "applySuccess",
  "style": {
    "navigationBarTitleText": "申样成功"
  }
}
</route>
