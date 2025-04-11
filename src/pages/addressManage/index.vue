<script setup lang="ts">
import AddressItem from './component/AddressItem.vue'

import { useLayoutStore } from '@/stores'

const { layoutStore } = useLayoutStore()

function handleClickLeft() {
  uni.navigateBack()
}
function onConfirm() {

}

const statusBarHeight = computed(() => {
  return layoutStore.statusBarHeight
})
</script>

<template>
  <wd-navbar title="地址管理" safe-area-inset-top left-arrow fixed :bordered="false" @click-left="handleClickLeft" />
  <view class="address-list" :style="{ paddingTop: `${(statusBarHeight || 0) + 49}px` }">
    <AddressItem />
  </view>
  <FootButton label="确认" fixed @confirm="onConfirm" />
</template>

<style lang="scss" scoped>
.address-list{
  padding: 0 32rpx calc(94rpx + env(safe-area-inset-bottom)) 32rpx;
}
</style>

<route lang="json">
{
  "layout": "default",
  "name": "address",
  "style": {
    "navigationBarTitleText": "address"
  }
}
</route>
