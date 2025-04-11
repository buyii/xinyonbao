<script setup lang="ts">
import Step0 from './Step0.vue'
import Step1 from './Step1.vue'
import Step2 from './Step2.vue'
import Step3 from './Step3.vue'

const show = ref<boolean>(false)
const step = ref<number>(0)
function open(num: number) {
  step.value = num
  show.value = true
}

function close() {
  show.value = false
}

function onSure() {
  show.value = false
}

function onNext() {
  step.value += 1
}

function onPrev() {
  step.value -= 1
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
  <wd-overlay :show="show" :z-index="99999" custom-style="background: rgba(43,3,17,0.45);backdrop-filter: blur(10px)">
    <view class="wrapper">
      <Step0 v-if="step === 0" @on-next="onNext" @on-close="close" />
      <Step1 v-if="step === 1" @on-next="onNext" />
      <Step2 v-if="step === 2" @on-next="onNext" @on-prev="onPrev" />
      <Step3 v-if="step === 3" @on-sure="onSure" />
    </view>
  </wd-overlay>
</template>

<style lang="scss" scoped>
.wrapper{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
