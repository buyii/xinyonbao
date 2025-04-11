<script setup lang="ts">
import { useChatStore } from '@/stores'

const chatStore = useChatStore()

const messages = chatStore.useChatData.messages
console.log(chatStore.useChatData.messages, 'chatStore')
</script>

<template>
  <view class="message-list">
    <view v-for="message in messages" :key="message.id" class="message-item">
      <view v-if="message.sender === 'bot'" class="message-user">
        <image src="../../../static/banner.png" />
      </view>
      <view class="message-content" :class="{ 'message-sent': message.sender === 'user', 'message-received': message.sender === 'bot' }">
        <text>{{ message.text }}</text>
      </view>
      <view v-if="message.sender === 'user'" class="message-user">
        <image src="../../../static/banner.png" />
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.message-list {
  padding: 32rpx;
}
.message-item{
  display: flex;
  gap: 10rpx;
  margin-bottom: 40rpx;
}
.message-user{
  image{
    width: 96rpx;
    height: 96rpx;
    border-radius: 50%;
  }
}
.message-content {
  flex: 1;

  padding: 24rpx 34rpx;
  border-radius: 32rpx 8rpx 32rpx 8rpx;
}
.message-sent {
  background-color: #dcf8c6; // Light green for sent messages
  align-self: flex-end;
}

.message-received {
  background-color: #f1f0f0; // Light gray for received messages
}
</style>
