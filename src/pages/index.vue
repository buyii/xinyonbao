<script setup lang="ts">
import { useLayoutStore } from '@/stores'

const { layoutStore } = useLayoutStore()
const statusBarHeight = computed(() => {
  return layoutStore.statusBarHeight
})
function handleClickLeft() {
  uni.navigateBack()
}
</script>

<template>
  <wd-navbar title="店铺详情" safe-area-inset-top left-arrow fixed :bordered="false" @click-left="handleClickLeft" />
  <view :style="{ paddingTop: `${(statusBarHeight || 0) + 44}px` }">
    店铺详情
  </view>
</template>

<route lang="json">
{
  "layout": "default",
  "name": "index",
  "style": {
    "navigationBarTitleText": "index"
  }
}
</route>
