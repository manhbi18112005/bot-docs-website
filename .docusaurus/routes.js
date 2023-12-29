import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '62d'),
    exact: true
  },
  {
    path: '/blog/2022/09/25/guild-related',
    component: ComponentCreator('/blog/2022/09/25/guild-related', '2b3'),
    exact: true
  },
  {
    path: '/blog/2022/09/26/syntax-related',
    component: ComponentCreator('/blog/2022/09/26/syntax-related', 'bc6'),
    exact: true
  },
  {
    path: '/blog/2023/05/04/newsneakpeak',
    component: ComponentCreator('/blog/2023/05/04/newsneakpeak', '365'),
    exact: true
  },
  {
    path: '/blog/2023/07/17/7.0.0update',
    component: ComponentCreator('/blog/2023/07/17/7.0.0update', 'd9b'),
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
    path: '/blog/tags/changelog',
    component: ComponentCreator('/blog/tags/changelog', '0de'),
    exact: true
  },
  {
    path: '/blog/tags/dashboard',
    component: ComponentCreator('/blog/tags/dashboard', '164'),
    exact: true
  },
  {
    path: '/blog/tags/guild',
    component: ComponentCreator('/blog/tags/guild', '0f3'),
    exact: true
  },
  {
    path: '/blog/tags/syntax',
    component: ComponentCreator('/blog/tags/syntax', '809'),
    exact: true
  },
  {
    path: '/blog/tags/update',
    component: ComponentCreator('/blog/tags/update', 'cba'),
    exact: true
  },
  {
    path: '/blog/tags/website',
    component: ComponentCreator('/blog/tags/website', '041'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '43a'),
    exact: true
  },
  {
    path: '/discord',
    component: ComponentCreator('/discord', '3b8'),
    exact: true
  },
  {
    path: '/feedback',
    component: ComponentCreator('/feedback', '246'),
    exact: true
  },
  {
    path: '/invite',
    component: ComponentCreator('/invite', '4bd'),
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
    path: '/support',
    component: ComponentCreator('/support', 'c2b'),
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
    component: ComponentCreator('/community', '5c3'),
    routes: [
      {
        path: '/community',
        component: ComponentCreator('/community', '4fa'),
        routes: [
          {
            path: '/community',
            component: ComponentCreator('/community', '241'),
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
              },
              {
                path: '/community/faq/suggestions-and-feedback',
                component: ComponentCreator('/community/faq/suggestions-and-feedback', '6e6'),
                exact: true,
                sidebar: "community"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '6c1'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'e41'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'cc8'),
            routes: [
              {
                path: '/docs',
                component: ComponentCreator('/docs', '640'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/changelog',
                component: ComponentCreator('/docs/changelog', '573'),
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
          }
        ]
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
