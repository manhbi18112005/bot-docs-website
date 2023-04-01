// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { externalLinkProcessor } = require('./tools/utils/externalLink');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'No Name Studio',
  tagline: 'No Name Studio VN',
  url: 'http://www.nonamestudio.xyz',
  
  favicon: 'img/favicon.png',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/bot-docs-website',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'manhbi18112005',  
  projectName: 'bot-docs-website',
  trailingSlash: false,
  onBrokenLinks:
  /** @type {import('@docusaurus/types').ReportingSeverity} */ ('throw'),
  onBrokenMarkdownLinks:
  /** @type {import('@docusaurus/types').ReportingSeverity} */ ('throw'),
  customFields: {
      markdownOptions: {
          html: true,
      },
      gaGtag: true,
      repoUrl: 'https://github.com/manhbi18112005',
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: /** @type {import('@docusaurus/types').PresetConfig[]} */ ([
    [
        '@docusaurus/preset-classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
            docs: {
                showLastUpdateAuthor: true,
                showLastUpdateTime: true,
                //path: '../docs',
                sidebarPath: './sidebars.js',
                rehypePlugins: [externalLinkProcessor],
                disableVersioning: true,
            },
            blog: {
              blogTitle: 'No Name Bot Blog',
              blogDescription: 'Get the latest news about No Name Bot',
              postsPerPage: 15,
              blogSidebarTitle: 'All posts',
              blogSidebarCount: 'ALL',
              showReadingTime: true, // When set to false, the "x min read" won't be shown
              readingTime: ({content, frontMatter, defaultReadingTime}) => defaultReadingTime({content, options: {wordsPerMinute: 300}}),
              feedOptions: {
                type: 'all',
                copyright: `Copyright © ${new Date().getFullYear()} No Name Studio.`,
                createFeedItems: async (params) => {
                  const {blogPosts, defaultCreateFeedItems, ...rest} = params;
                  return defaultCreateFeedItems({
                    // keep only the 10 most recent blog posts in the feed
                    blogPosts: blogPosts.filter((item, index) => index < 10),
                    ...rest,
                  });
                },
              },
            },
            theme: {
                customCss: require.resolve('./src/css/custom.css'),
            },
        }),
      ],
  ]),
  plugins: [
    [
        '@docusaurus/plugin-client-redirects',
        {
            redirects: [
                {
                    from: '/docs',
                    to: '/docs/quick-start',
                },
                {
                    from: '/docs/guides/getting-started',
                    to: '/docs/introduction',
                },
            ],
            createRedirects(existingPath) {
                if (!existingPath.endsWith('/')) {
                    return `${existingPath}/`;
                }

                return undefined; // Return a falsy value: no redirect created
            },
        },
    ],
    [
        'docusaurus-gtm-plugin',
        {
            id: 'GTM-TXF92FT',
        },
    ],
  ],
  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ ({
  docs: {
      versionPersistence: 'localStorage',
      sidebar: {
          hideable: true,
      },
    },
    navbar: {
        hideOnScroll: true,
        title: 'No Name Studio',
        logo: {
          alt: 'No Name Studio Logo',
          src: 'img/logo/title.png',
          srcDark: 'img/logo/title.png',
        },
        items: [
            {
                type: 'doc',
                docId: 'quick-start/quick-start',
                label: 'Docs',
                position: 'left',
            },
            {
                type: 'doc',
                docId: 'introduction/introduction',
                label: 'Features',
                position: 'left',
            },
            {to: 'blog', label: 'News', position: 'left'}, // or position: 'right'
            {
                type: 'docsVersionDropdown',
                position: 'left',
                dropdownItemsAfter: [
                    {
                        href: 'https://en.bot.nonamestudio.xyz',
                        label: 'EN',
                    },
                    {
                        href: 'https://vn.bot.nonamestudio.xyz',
                        label: 'VI',
                    },
                ],
            },
            {
                href: 'https://github.com/manhbi18112005/New-Website',
                label: 'GitHub',
                title: 'View on GitHub',
                position: 'right',
                className: 'icon',
            },
            {
                href: 'https://discord.com/invite/nCQbSag',
                label: 'Discord',
                title: 'Chat on Discord',
                position: 'right',
                className: 'icon',
            },
            {
                href: 'https://bot.nonamestudio.xyz/dashboard',
                label: 'Dashboard',
                title: 'No Name Bot Main App',
                position: 'right',
                className: 'icon',
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
    colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
    },
    prism: {
        defaultLanguage: 'typescript',
        theme: require('prism-react-renderer/themes/github'),
        darkTheme: require('prism-react-renderer/themes/dracula'),
        additionalLanguages: ['docker', 'log'],
    },
  }),
};

module.exports = config;
