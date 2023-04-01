import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'cee'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '48c'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '6da'),
    exact: true
  },
  {
    path: '/blog/tags/bot',
    component: ComponentCreator('/blog/tags/bot', '5ca'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '541'),
    exact: true
  },
  {
    path: '/privacy',
    component: ComponentCreator('/privacy', 'a00'),
    exact: true
  },
  {
    path: '/privacy-cookie',
    component: ComponentCreator('/privacy-cookie', '272'),
    exact: true
  },
  {
    path: '/term',
    component: ComponentCreator('/term', 'a9c'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '27b'),
    routes: [
      {
        path: '/docs/donate',
        component: ComponentCreator('/docs/donate', '28c'),
        exact: true
      },
      {
        path: '/docs/faq',
        component: ComponentCreator('/docs/faq', '5c7'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/faq/official-domain-names',
        component: ComponentCreator('/docs/faq/official-domain-names', '348'),
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
        path: '/docs/feedback',
        component: ComponentCreator('/docs/feedback', '4ea'),
        exact: true
      },
      {
        path: '/docs/introduction',
        component: ComponentCreator('/docs/introduction', '5ec'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/introduction/setting-up',
        component: ComponentCreator('/docs/introduction/setting-up', 'c79'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/permissions',
        component: ComponentCreator('/docs/permissions', '1f3'),
        exact: true
      },
      {
        path: '/docs/quick-start',
        component: ComponentCreator('/docs/quick-start', 'ad9'),
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
    component: ComponentCreator('/', 'be2'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
