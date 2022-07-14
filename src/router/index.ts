import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { createRouterGuards } from './router-guards'

import type { App } from 'vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/index.vue'),
  },
]

const router = createRouter({ history: createWebHistory(), routes })

export function resetRouter() {
  // 更新路由表
}

export async function setupRouter(app: App) {
  // 创建路由守卫
  createRouterGuards(router)

  app.use(router)

  // 路由准备就绪后挂载APP实例
  await router.isReady()
}

export default router
