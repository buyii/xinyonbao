<script setup lang="ts">
interface Props {
  label: string // 按钮文字
  fixed?: boolean // 是否固定在底部
}

const props = withDefaults(defineProps<Props>(), {
  fixed: false,
})
const emit = defineEmits(['confirm'])
function onConfirm() {
  emit('confirm')
  console.log('onConfirm')
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
  <view class="botbox" :class="{ 'is-fixed': props.fixed }">
    <wd-button block @click="onConfirm">
      {{ props.label }}
    </wd-button>
  </view>
</template>

<style scoped lang="scss">
.botbox{
  padding-bottom: calc(12rpx + env(safe-area-inset-bottom));
  background-color: #fff;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 6rpx;
  :deep(.wd-button){
    width: 90%;
    height: 88rpx !important;
    background: #FF0057 !important;
    border-radius: 8rpx 32rpx 8rpx 32rpx !important;
  }
}
.is-fixed{
  position: fixed !important;
}
</style>
