import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '833'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '571'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '299'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '2d7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '295'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '2db'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'cf1'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'd12'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '54b'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '4d2'),
    exact: true
  },
  {
    path: '/blog/tags/bot',
    component: ComponentCreator('/blog/tags/bot', '882'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '43a'),
    exact: true
  },
  {
    path: '/feedback',
    component: ComponentCreator('/feedback', '246'),
    exact: true
  },
  {
    path: '/privacy',
    component: ComponentCreator('/privacy', '777'),
    exact: true
  },
  {
    path: '/privacy-cookie',
    component: ComponentCreator('/privacy-cookie', 'dd5'),
    exact: true
  },
  {
    path: '/term',
    component: ComponentCreator('/term', 'fea'),
    exact: true
  },
  {
    path: '/versions',
    component: ComponentCreator('/versions', 'c93'),
    exact: true
  },
  {
    path: '/community',
    component: ComponentCreator('/community', '3d2'),
    routes: [
      {
        path: '/community',
        component: ComponentCreator('/community', '022'),
        exact: true,
        sidebar: "community"
      },
      {
        path: '/community/faq',
        component: ComponentCreator('/community/faq', '3a5'),
        exact: true,
        sidebar: "community"
      },
      {
        path: '/community/faq/dashboard-logout',
        component: ComponentCreator('/community/faq/dashboard-logout', '47e'),
        exact: true,
        sidebar: "community"
      },
      {
        path: '/community/faq/nonamebot-is-offline',
        component: ComponentCreator('/community/faq/nonamebot-is-offline', 'b03'),
        exact: true,
        sidebar: "community"
      },
      {
        path: '/community/faq/official-domain-names',
        component: ComponentCreator('/community/faq/official-domain-names', '1c2'),
        exact: true,
        sidebar: "community"
      }
    ]
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'd2d'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '640'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/donate',
        component: ComponentCreator('/docs/donate', 'e38'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/features',
        component: ComponentCreator('/docs/features', '3ee'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/features/game-commands',
        component: ComponentCreator('/docs/features/game-commands', '1c3'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/features/images-generating-commands',
        component: ComponentCreator('/docs/features/images-generating-commands', '73b'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/features/music-commands',
        component: ComponentCreator('/docs/features/music-commands', '7f8'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/features/music-commands/support-platforms',
        component: ComponentCreator('/docs/features/music-commands/support-platforms', '637'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/features/other-commands',
        component: ComponentCreator('/docs/features/other-commands', 'e64'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/features/utility-commands',
        component: ComponentCreator('/docs/features/utility-commands', 'b41'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/getting-started',
        component: ComponentCreator('/docs/getting-started', '9d0'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/others',
        component: ComponentCreator('/docs/others', '4af'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/others/frequent-searches',
        component: ComponentCreator('/docs/others/frequent-searches', '262'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/others/permissions',
        component: ComponentCreator('/docs/others/permissions', '2d9'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/support',
        component: ComponentCreator('/docs/support', '4de'),
        exact: true
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '969'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
