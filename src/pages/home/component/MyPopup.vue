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

function onConfirm() {
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
      custom-style="height: 666px;border-radius: 16px 16px 0px 0px;overflow: hidden;" :z-index="999"
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
      <view class="botbox">
        <wd-button block @click="onConfirm">
          确认
        </wd-button>
      </view>
    </wd-popup>
  </view>
</template>

<style lang="scss" scoped>
.popup-warp{
  padding: 0 24px;
  position: relative;
  padding-top: 58px;
  height: calc(100% - 108px - env(safe-area-inset-bottom));
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
.botbox{
  padding-bottom: calc(6px + env(safe-area-inset-bottom));
  background-color: #fff;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  :deep(.wd-button){
    width: 90%;
    height: 44px !important;
    background: #FF0057 !important;
    border-radius: 4px 16px 4px 16px !important;
  }
}
</style>
