// src/store/useCountStore.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

// const initState = { navbarTColor: ref('#000') }

export const useLayoutStore = defineStore(
  'layout',
  () => {
    const layoutStore = ref({
      navbarTColor: ref('#fff'),
      // 是否可以设置颜色
      canSetColor: ref(false),
    })

    const setLayoutStore = (val: any) => {
      layoutStore.value = {
        ...layoutStore.value,
        ...val,
      }
    }

    return {
      layoutStore,
      setLayoutStore,
    }
  },
  {
    persist: true,
  },
)
