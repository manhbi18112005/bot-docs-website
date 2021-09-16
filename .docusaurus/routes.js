
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','d7d'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','d12'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','c09'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','99a'),
  exact: true,
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola','35b'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','d19'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','5fc'),
  exact: true,
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook','372'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','f9e'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','13a'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','c5b'),
  exact: true,
},
{
  path: '/donate',
  component: ComponentCreator('/donate','fa8'),
  exact: true,
},
{
  path: '/privacy',
  component: ComponentCreator('/privacy','023'),
  exact: true,
},
{
  path: '/privacy-cookie',
  component: ComponentCreator('/privacy-cookie','f58'),
  exact: true,
},
{
  path: '/signup',
  component: ComponentCreator('/signup','378'),
  exact: true,
},
{
  path: '/term',
  component: ComponentCreator('/term','e8d'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','d8c'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','ef7'),
  exact: true,
},
{
  path: '/docs/comparison',
  component: ComponentCreator('/docs/comparison','337'),
  exact: true,
},
{
  path: '/docs/covid/k-codes',
  component: ComponentCreator('/docs/covid/k-codes','e47'),
  exact: true,
},
{
  path: '/docs/covid/sessional',
  component: ComponentCreator('/docs/covid/sessional','9e6'),
  exact: true,
},
{
  path: '/docs/covid/vaccine',
  component: ComponentCreator('/docs/covid/vaccine','649'),
  exact: true,
},
{
  path: '/docs/faq/delete-claim',
  component: ComponentCreator('/docs/faq/delete-claim','fa4'),
  exact: true,
},
{
  path: '/docs/faq/fractional',
  component: ComponentCreator('/docs/faq/fractional','8d4'),
  exact: true,
},
{
  path: '/docs/faq/payment',
  component: ComponentCreator('/docs/faq/payment','35a'),
  exact: true,
},
{
  path: '/docs/faq/rmb',
  component: ComponentCreator('/docs/faq/rmb','bad'),
  exact: true,
},
{
  path: '/docs/faq/sli',
  component: ComponentCreator('/docs/faq/sli','c92'),
  exact: true,
},
{
  path: '/docs/features/adding-referring-physician',
  component: ComponentCreator('/docs/features/adding-referring-physician','e8c'),
  exact: true,
},
{
  path: '/docs/features/favourites',
  component: ComponentCreator('/docs/features/favourites','453'),
  exact: true,
},
{
  path: '/docs/features/hcv',
  component: ComponentCreator('/docs/features/hcv','171'),
  exact: true,
},
{
  path: '/docs/features/quick-copy',
  component: ComponentCreator('/docs/features/quick-copy','491'),
  exact: true,
},
{
  path: '/docs/features/resubmit-claims',
  component: ComponentCreator('/docs/features/resubmit-claims','153'),
  exact: true,
},
{
  path: '/docs/getting-started/designation',
  component: ComponentCreator('/docs/getting-started/designation','6fd'),
  exact: true,
},
{
  path: '/docs/getting-started/moh_group',
  component: ComponentCreator('/docs/getting-started/moh_group','298'),
  exact: true,
},
{
  path: '/docs/mdx',
  component: ComponentCreator('/docs/mdx','155'),
  exact: true,
},
{
  path: '/docs/pricing/full-service',
  component: ComponentCreator('/docs/pricing/full-service','b04'),
  exact: true,
},
{
  path: '/docs/pricing/overview',
  component: ComponentCreator('/docs/pricing/overview','ae8'),
  exact: true,
},
{
  path: '/docs/pricing/pay-as-you-go',
  component: ComponentCreator('/docs/pricing/pay-as-you-go','0f5'),
  exact: true,
},
{
  path: '/docs/pricing/self-service',
  component: ComponentCreator('/docs/pricing/self-service','bbc'),
  exact: true,
},
{
  path: '/docs/style_guide',
  component: ComponentCreator('/docs/style_guide','ddb'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
