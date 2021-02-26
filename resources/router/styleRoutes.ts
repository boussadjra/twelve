export default {
  path: '/styles',
  name: 'Styles',

  component: () => import('@/views/pages/components-demo/Index.vue'),
  children: [
    {

      path: 'typography',
      name: 'Text and typography',
      icon: 'text',
      component: () => import('@/views/pages/styles-demo/Typography.vue'),
    },




  ]
}
