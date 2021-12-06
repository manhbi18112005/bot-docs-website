const users = require('./showcase.json');

module.exports = {
  title: 'No Name Studio',
  tagline: 'No Name Studio VN',
  url: 'http://www.nonamestudio.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'No Name Studio VN',  
  projectName: 'docs',
  customFields: {
    users,
  },
  themeConfig: {   
    navbar: {
      title: 'No Name Studio',
      logo: {
        alt: 'No Name Studio Logo',
        src: 'img/favicon.png',
      },
      items: [
        //{to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/No-Name-Studio-VN',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guides',
          items: [
            {
              label: 'Introduction',
              to: '/docs/',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'Careers',
              href: 'mailto:myt@nonamestudip.xyz',
            },
            {
              label: 'Privacy Policy',
              to: '/privacy',
            },
            {
              label: 'Terms of use',
              to: '/term',
            },

          ],
        },
        {
          title: 'Contact us',
          items: [
            {
              label: 'Email',
              href: 'mailto:support.team@nonamestudio.xyz',
            },
            {
              label: 'Github',
              href: 'https://github.com/No-Name-Studio-VN',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/nonamestudiovn',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/nCQbSag',
            },
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} No Name Studio`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Removes the Home Page
          routeBasePath: '/docs',

        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
            changefreq: 'weekly',
            priority: 0.5,
            trailingSlash: false,
        },
      },
    ],
  ],
  plugins: [
    '@docusaurus/plugin-ideal-image',
    [
      require.resolve('docusaurus-gtm-plugin'),
      {
        id: 'GTM-T2SJLRG', // GTM Container ID
      }
    ]
  ],
};
