/// <reference types="@uni-helper/vite-plugin-uni-pages/client" />
import { pages, subPackages } from 'virtual:uni-pages'

import { useLayoutStore } from '@/stores'

function generateRoutes() {
  console.log('pages', pages)
  const routes = pages.map((page) => {
    const newPath = `/${page.path}`
    return { ...page, path: newPath }
  })
  if (subPackages && subPackages.length > 0) {
    subPackages.forEach((subPackage) => {
      const subRoutes = subPackage.pages.map((page: any) => {
        const newPath = `/${subPackage.root}/${page.path}`
        return { ...page, path: newPath }
      })
      routes.push(...subRoutes)
    })
  }
  return routes
}

// 现需要设置标题颜色的路由
const navBarList: (string | null | undefined)[] = [
  'home',
]

const router = createRouter({
  routes: generateRoutes(),
})
router.beforeEach((to, from, next) => {
  const layoutStore = useLayoutStore()
  if (navBarList.includes(to.name)) {
    layoutStore.setLayoutStore({ navbarTColor: '#fff', canSetColor: true })
  }
  else {
    layoutStore.setLayoutStore({ navbarTColor: '#000', canSetColor: false })
  }
  next()
})
router.afterEach((to, from) => {
  const layoutStore = useLayoutStore()
  console.log(from)
  if (navBarList.includes(to.name)) {
    layoutStore.setLayoutStore({ navbarTColor: '#fff', canSetColor: true })
  }
  else {
    layoutStore.setLayoutStore({ navbarTColor: '#000', canSetColor: false })
  }
})

export default router
