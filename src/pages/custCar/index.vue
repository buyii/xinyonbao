<script setup lang="ts">
import ChatInput from './component/ChatInput.vue'
import MessageList from './component/MessageList.vue'
import { useLayoutStore } from '@/stores'

const themeVars = reactive({
  colorBg: '#F8F8F8',
})

const { layoutStore } = useLayoutStore()

function handleClickLeft() {
  uni.navigateBack()
}

const statusBarHeight = computed(() => {
  return layoutStore.statusBarHeight
})

const messages = ref<{ id: number, content: string, sent: boolean }[]>([])

function handleSendMessage(message: string) {
  messages.value.push({
    id: Date.now(),
    content: message,
    sent: true,
  })
  console.log('发送消息:', message)
}
</script>

<template>
  <wd-config-provider :theme-vars="themeVars" custom-style="min-height: 100vh">
    <wd-navbar title="团购客服" safe-area-inset-top left-arrow fixed :bordered="false" @click-left="handleClickLeft" />
    <view class="chat-container" :style="{ paddingTop: `${(statusBarHeight || 0) + 44}px` }">
      <MessageList :messages="messages" />
      <ChatInput @send-message="handleSendMessage" />
    </view>
  </wd-config-provider>
</template>

<style lang="scss" scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f8f8f8;
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
