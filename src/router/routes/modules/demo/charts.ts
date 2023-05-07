import type { AppRouteModule } from '@/router/types'

import { getParentLayout, LAYOUT } from '@/router/constant'

const charts: AppRouteModule = {
  path: '/charts',
  name: 'Charts',
  component: LAYOUT,
  redirect: '/charts/echarts/map',
  meta: {
    orderNo: 500,
    icon: 'ion:bar-chart-outline'
  },
  children: [
    {
      path: 'baiduMap',
      name: 'BaiduMap',
      meta: {},
      component: () => import('@/views/demo/charts/map/Baidu.vue')
    },
    {
      path: 'aMap',
      name: 'AMap',
      meta: {},
      component: () => import('@/views/demo/charts/map/Gaode.vue')
    },
    {
      path: 'googleMap',
      name: 'GoogleMap',
      meta: {},
      component: () => import('@/views/demo/charts/map/Google.vue')
    },

    {
      path: 'echarts',
      name: 'Echarts',
      component: getParentLayout('Echarts'),
      meta: {},
      redirect: '/charts/echarts/map',
      children: [
        {
          path: 'map',
          name: 'Map',
          component: () => import('@/views/demo/charts/Map.vue'),
          meta: {}
        },
        {
          path: 'line',
          name: 'Line',
          component: () => import('@/views/demo/charts/Line.vue'),
          meta: {}
        },
        {
          path: 'pie',
          name: 'Pie',
          component: () => import('@/views/demo/charts/Pie.vue'),
          meta: {}
        }
      ]
    }
  ]
}

export default charts
