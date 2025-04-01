<script setup lang="ts">
import type { Item, TabsProps } from '@/types/common'

// const props = withDefaults(defineProps<TabsProps>(), {})

// const emit = defineEmits(['changeTab'])

// const model = defineModel({ default: 1 })

const show = ref<boolean>(false)

const selectionTabList = ref<Item[]>([
  {
    id: 1,
    name: '综合',
  },
  {
    id: 2,
    name: '销量',
  },
  {
    id: 3,
    name: '价格',
  },
  {
    id: 4,
    name: '价格',
  },
  {
    id: 5,
    name: '价格',
  },
  {
    id: 6,
    name: '价格',
  },
  {
    id: 7,
    name: '价格',
  },
])

function open() {
  show.value = true
  console.log('open')
}

function close() {
  show.value = false
}

// 暴露方法
defineExpose({
  open,
  close,
})
</script>

<template>
  <view>
    <wd-popup
      v-model="show"
      position="bottom"
      custom-style="height: 300px;border-radius: 16px 16px 0px 0px;overflow: hidden;" :z-index="999"
    >
      <view class="title">
        <view>综合筛选</view>
        <text class="iconfont icon-close" @click="close" />
      </view>
      <view class="popup-warp">
        <view>
          <SelectionInput label="价格" />
          <SelectionInput label="佣金率" />
          <SelectionInput label="橱销要求" />
          <SelectionTabs label="总销量" :tab-list="selectionTabList" />
          <SelectionTabs label="商品评分" :tab-list="selectionTabList" />
        </view>
      </view>
    </wd-popup>
  </view>
</template>

<style lang="scss" scoped>
.popup-warp{
  padding: 0 24px;
  position: relative;
  padding-top: 58px;
  height: calc(100% - 58px);
  overflow-y: auto;
}
.title{
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  display: flex;
  z-index: 99;
  background-color: #fff;
  align-items: center;
  justify-content: space-between;
  height: 58px;
  font-family: PingFangSC, PingFang SC;
  font-weight: 500;
  font-size: 18px;
  color: #000000;
  text-align: left;
  font-style: normal;
  padding: 0 24px;
  text{
    font-size: 14px;
  }
}
</style>
