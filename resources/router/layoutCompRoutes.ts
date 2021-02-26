export default {
  path: '/layouts',
  name: 'Layouts',

  component: () => import('@/views/pages/components-demo/Index.vue'),
  children: [
    {

      path: 'w-aspect-ratio',
      name: 'Aspect Ratio',
      component: () => import('@/views/pages/layouts-demo/AspectRatios.vue'),
    },
    {

      path: 'w-container',
      name: 'Container',
      component: () => import('@/views/pages/layouts-demo/Containers.vue'),
    },
    {

      path: 'flex',
      name: 'Flex',
      component: () => import('@/views/pages/layouts-demo/Flex.vue'),
    },
    {

      path: 'grid',
      name: 'Grid',
      component: () => import('@/views/pages/layouts-demo/Grid.vue'),
    },



  ]
}
