<script setup lang="ts">
import { ref } from 'vue'
import { useChatStore } from '@/stores'

const chatStore = useChatStore()
const message = ref('')

function sendMessage() {
  if (message.value.trim()) {
    chatStore.sendMessage(message.value)
    message.value = ''
  }
}
</script>

<template>
  <view class="input-box">
    <view class="chat-input">
      <wd-input v-model="message" :maxlength="20" placeholder="输入消息..." />
      <button @click="sendMessage">
        发送
      </button>
    </view>
  </view>
</template>

<style scoped>
.chat-input {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f8f8f8;
}

.chat-input input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
}

.chat-input button {
  padding: 10px 15px;
  background-color: #007aff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
