<script setup lang="ts">
interface Props {
  tabs: string[]
  defaultValue?: string
}

const props = withDefaults(defineProps<Props>(), {

})

const value = defineModel<string>()
function handleChange() {

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
  <view class="tab-box">
    <wd-tabs v-model="value" auto-line-width @change="handleChange">
      <block v-for="item in props.tabs" :key="item">
        <wd-tab :title="`${item}`" :name="item" />
      </block>
    </wd-tabs>
  </view>
</template>

<style lang="scss" scoped>
.tab-box{
  :deep(){
    .wd-tabs{
      background: transparent;
      &.nav-container{
        align-items: center;
      }
    }
    .wd-tabs__nav{
      height: 96rpx;
      background-color: transparent;
    }
    .wd-tabs__nav-item{
      height: 96rpx;
      font-family: PingFangSC, PingFang SC;
      font-weight: 400;
      font-size: 28rpx;
      color: #444444;
      font-style: normal;
      &.is-active{
        font-family: PingFangSC, PingFang SC;
        font-weight: 500;
        font-size: 32rpx;
        color: #FF0057;
        font-style: normal;
      }
    }
    .wd-tabs__line{
      background: #FF0057;
      height: 16rpx;
      opacity: 0.15;
      border-radius: 200rpx;
    }
  }
}
</style>
