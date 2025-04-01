<script setup lang="ts">
import type { SelectionType } from '@/types/common'

const props = withDefaults(defineProps<SelectionType>(), {})
const value = ref<string>('')
const value1 = ref<string>('')
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
  <view class="inputwarp">
    <view class="label">
      {{ props.label }}
    </view>
    <view class="inputcontent">
      <view class="inputbox">
        <wd-input v-model="value" no-border type="text" placeholder-class="placeholderClass" placeholder="请输入" />
        <view class="sublabel">
          开始价格
        </view>
      </view>
      <text class="iconfont icon-rotate" />
      <view class="inputbox">
        <wd-input v-model="value1" no-border type="text" placeholder-class="placeholderClass" placeholder="请输入" />
        <view class="sublabel">
          结束价格
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.inputwarp {
  margin-bottom: 20px;
  .label{
    font-family: PingFangSC, PingFang SC;
    font-weight: 500;
    font-size: 14px;
    color: #111111;
    line-height: 14px;
    font-style: normal;
    margin-bottom: 16px;
  }
  .inputcontent{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .inputbox{
      width: 142px;
      height: 60px;
      background: #FFFFFF;
      border-radius: 16px;
      border: 1px solid #EEEEEE;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 20px;
      .sublabel{
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 10px;
        color: #DADADA;
        line-height: 10px;
        font-style: normal;
      }
      .wd-input::after{
        display: none;
      }
      :deep(.placeholderClass){
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 14px;
        color: #BABABA;
        line-height: 14px;
        font-style: normal;
      }
    }
    text{
      font-size: 10px;
      margin: 0 14px;
    }
  }
}
</style>
